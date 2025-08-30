import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";
import type { College } from "@/types/college";

// Environment variables (server-side only)
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const COLLEGE_CONTAINER_NAME = "college-data";

// Initialize Azure Blob Service Client
let blobServiceClient: BlobServiceClient | null = null;

function getBlobServiceClient(): BlobServiceClient {
  if (!blobServiceClient) {
    if (AZURE_STORAGE_CONNECTION_STRING) {
      blobServiceClient = BlobServiceClient.fromConnectionString(
        AZURE_STORAGE_CONNECTION_STRING
      );
    } else if (AZURE_STORAGE_ACCOUNT_NAME && AZURE_STORAGE_ACCOUNT_KEY) {
      const credential = new StorageSharedKeyCredential(
        AZURE_STORAGE_ACCOUNT_NAME,
        AZURE_STORAGE_ACCOUNT_KEY
      );
      blobServiceClient = new BlobServiceClient(
        `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
        credential
      );
    } else {
      throw new Error("Azure Storage credentials not configured");
    }
  }
  return blobServiceClient;
}

// College-specific Azure operations
export class CollegeAzureService {
  private containerName = COLLEGE_CONTAINER_NAME;

  // Ensure container exists
  private async ensureContainer() {
    try {
      const serviceClient = getBlobServiceClient();
      const containerClient = serviceClient.getContainerClient(
        this.containerName
      );

      // Create container if it doesn't exist
      await containerClient.createIfNotExists({
        access: "blob", // Public read access for college data
      });

      return containerClient;
    } catch (error) {
      console.error("Error ensuring container exists:", error);
      throw new Error("Failed to initialize college data container");
    }
  }

  // Upload college data
  async uploadCollege(college: College): Promise<string> {
    try {
      const containerClient = await this.ensureContainer();
      const blobName = `${college.slug}.json`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const data = JSON.stringify(college, null, 2);

      await blockBlobClient.upload(data, data.length, {
        blobHTTPHeaders: {
          blobContentType: "application/json",
          blobCacheControl: "public, max-age=3600", // Cache for 1 hour
        },
        metadata: {
          contentType: "college-data",
          lastUpdated: new Date().toISOString(),
          version: "1.0",
        },
      });

      console.log(`College data uploaded: ${blobName}`);
      return blobName;
    } catch (error) {
      console.error("Error uploading college data:", error);
      throw new Error(`Failed to upload college data for ${college.slug}`);
    }
  }

  // Upload college index (list of all colleges)
  async uploadCollegeIndex(colleges: College[]): Promise<string> {
    try {
      const containerClient = await this.ensureContainer();
      const blobName = "index.json";
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      // Create simplified index with essential info
      const collegeIndex = colleges.map((college) => ({
        slug: college.slug,
        name: college.name,
        city: college.city,
        state: college.state,
        country: college.country,
        type: college.type,
        established: college.established,
        logo: college.logo,
        overview: college.overview
          ? college.overview.substring(0, 200) + "..."
          : "",
        programs: college.programs?.length || 0,
      }));

      const data = JSON.stringify(collegeIndex, null, 2);

      await blockBlobClient.upload(data, data.length, {
        blobHTTPHeaders: {
          blobContentType: "application/json",
          blobCacheControl: "public, max-age=1800", // Cache for 30 minutes
        },
        metadata: {
          contentType: "college-index",
          lastUpdated: new Date().toISOString(),
          totalColleges: colleges.length.toString(),
        },
      });

      console.log(`College index uploaded with ${colleges.length} colleges`);
      return blobName;
    } catch (error) {
      console.error("Error uploading college index:", error);
      throw new Error("Failed to upload college index");
    }
  }

  // Fetch college data
  async getCollege(slug: string): Promise<College | null> {
    try {
      const containerClient = await this.ensureContainer();
      const blobName = `${slug}.json`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const downloadResponse = await blockBlobClient.download();

      if (!downloadResponse.readableStreamBody) {
        return null;
      }

      const data = await this.streamToString(
        downloadResponse.readableStreamBody
      );
      return JSON.parse(data) as College;
    } catch (error) {
      console.error(`Error fetching college data for ${slug}:`, error);
      return null;
    }
  }

  // Fetch all colleges index
  async getCollegeIndex(): Promise<any[]> {
    try {
      const containerClient = await this.ensureContainer();
      const blobName = "index.json";
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const downloadResponse = await blockBlobClient.download();

      if (!downloadResponse.readableStreamBody) {
        return [];
      }

      const data = await this.streamToString(
        downloadResponse.readableStreamBody
      );
      return JSON.parse(data);
    } catch (error) {
      console.error("Error fetching college index:", error);
      return [];
    }
  }

  // List all college blobs
  async listColleges(): Promise<string[]> {
    try {
      const containerClient = await this.ensureContainer();
      const collegeBlobs: string[] = [];

      for await (const blob of containerClient.listBlobsFlat()) {
        if (blob.name.endsWith(".json") && blob.name !== "index.json") {
          collegeBlobs.push(blob.name.replace(".json", ""));
        }
      }

      return collegeBlobs;
    } catch (error) {
      console.error("Error listing colleges:", error);
      return [];
    }
  }

  // Get all colleges with their full data
  async getAllColleges(): Promise<College[]> {
    try {
      const slugs = await this.listColleges();
      const colleges: College[] = [];

      for (const slug of slugs) {
        const college = await this.getCollege(slug);
        if (college) {
          colleges.push(college);
        }
      }

      return colleges;
    } catch (error) {
      console.error("Error getting all colleges:", error);
      return [];
    }
  }

  // Delete college data
  async deleteCollege(slug: string): Promise<boolean> {
    try {
      const containerClient = await this.ensureContainer();
      const blobName = `${slug}.json`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      await blockBlobClient.delete();
      console.log(`College data deleted: ${blobName}`);
      return true;
    } catch (error) {
      console.error(`Error deleting college data for ${slug}:`, error);
      return false;
    }
  }

  // Get public URL for college data
  getPublicUrl(slug: string): string {
    return `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${this.containerName}/${slug}.json`;
  }

  // Get public URL for college index
  getIndexPublicUrl(): string {
    return `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${this.containerName}/index.json`;
  }

  // Helper: Convert stream to string
  private async streamToString(
    readableStream: NodeJS.ReadableStream
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      readableStream.on("data", (data) => {
        chunks.push(data instanceof Buffer ? data : Buffer.from(data));
      });
      readableStream.on("end", () => {
        resolve(Buffer.concat(chunks).toString());
      });
      readableStream.on("error", reject);
    });
  }
}

// Export singleton instance
export const collegeAzureService = new CollegeAzureService();

// Utility functions for client-side usage
export async function fetchCollegeFromAzure(
  slug: string
): Promise<College | null> {
  const publicUrl = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${COLLEGE_CONTAINER_NAME}/${slug}.json`;

  try {
    const response = await fetch(publicUrl, {
      cache: "force-cache", // Cache college data
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching college ${slug} from Azure:`, error);
    return null;
  }
}

export async function fetchCollegeIndexFromAzure(): Promise<any[]> {
  const publicUrl = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${COLLEGE_CONTAINER_NAME}/index.json`;

  try {
    const response = await fetch(publicUrl, {
      cache: "force-cache",
      next: { revalidate: 1800 }, // Revalidate every 30 minutes
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching college index from Azure:", error);
    return [];
  }
}
