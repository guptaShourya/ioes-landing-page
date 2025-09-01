import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

// Environment variables (server-side only)
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const IMAGES_CONTAINER_NAME = "college-images";

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

// Image upload service for college assets
export class ImageUploadService {
  private containerName = IMAGES_CONTAINER_NAME;

  // Ensure container exists
  private async ensureContainer() {
    try {
      const serviceClient = getBlobServiceClient();
      const containerClient = serviceClient.getContainerClient(
        this.containerName
      );

      // Create container if it doesn't exist (with public access for images)
      await containerClient.createIfNotExists({
        access: "blob", // Public read access for blobs
      });

      return containerClient;
    } catch (error) {
      console.error("Error ensuring container exists:", error);
      throw error;
    }
  }

  // Generate a unique filename
  private generateFileName(
    originalName: string,
    collegeSlug?: string,
    type?: string
  ): string {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = originalName.split(".").pop()?.toLowerCase() || "jpg";

    let prefix = "";
    if (collegeSlug) {
      prefix = `${collegeSlug}/`;
    }
    if (type) {
      prefix += `${type}-`;
    }

    return `${prefix}${timestamp}-${randomString}.${extension}`;
  }

  // Upload a single image
  async uploadImage(
    file: File,
    collegeSlug?: string,
    imageType?: "logo" | "banner" | "gallery" | "og-image"
  ): Promise<string> {
    try {
      const containerClient = await this.ensureContainer();

      // Generate unique filename
      const fileName = this.generateFileName(file.name, collegeSlug, imageType);

      // Get blob client
      const blobClient = containerClient.getBlockBlobClient(fileName);

      // Convert file to array buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      // Set content type based on file type
      const contentType = file.type || "image/jpeg";

      // Upload the file
      await blobClient.uploadData(buffer, {
        blobHTTPHeaders: {
          blobContentType: contentType,
          blobCacheControl: "public, max-age=31536000", // Cache for 1 year
        },
        metadata: {
          originalName: file.name,
          uploadedAt: new Date().toISOString(),
          collegeSlug: collegeSlug || "",
          imageType: imageType || "general",
        },
      });

      // Return the public URL
      return blobClient.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error(`Failed to upload image: ${error}`);
    }
  }

  // Upload multiple images (for gallery)
  async uploadMultipleImages(
    files: File[],
    collegeSlug?: string,
    imageType?: "gallery"
  ): Promise<string[]> {
    try {
      const uploadPromises = files.map((file) =>
        this.uploadImage(file, collegeSlug, imageType)
      );

      return await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Error uploading multiple images:", error);
      throw new Error(`Failed to upload images: ${error}`);
    }
  }

  // Delete an image
  async deleteImage(imageUrl: string): Promise<void> {
    try {
      const containerClient = await this.ensureContainer();

      // Extract blob name from URL
      const url = new URL(imageUrl);
      const blobName = url.pathname.split("/").slice(2).join("/"); // Remove container name from path

      const blobClient = containerClient.getBlobClient(blobName);
      await blobClient.deleteIfExists();
    } catch (error) {
      console.error("Error deleting image:", error);
      throw new Error(`Failed to delete image: ${error}`);
    }
  }

  // Get image metadata
  async getImageMetadata(
    imageUrl: string
  ): Promise<Record<string, string> | null> {
    try {
      const containerClient = await this.ensureContainer();

      // Extract blob name from URL
      const url = new URL(imageUrl);
      const blobName = url.pathname.split("/").slice(2).join("/");

      const blobClient = containerClient.getBlobClient(blobName);
      const properties = await blobClient.getProperties();

      return properties.metadata || null;
    } catch (error) {
      console.error("Error getting image metadata:", error);
      return null;
    }
  }

  // List images for a college
  async listCollegeImages(collegeSlug: string): Promise<string[]> {
    try {
      const containerClient = await this.ensureContainer();

      const images: string[] = [];
      const prefix = `${collegeSlug}/`;

      for await (const blob of containerClient.listBlobsFlat({ prefix })) {
        const blobClient = containerClient.getBlobClient(blob.name);
        images.push(blobClient.url);
      }

      return images;
    } catch (error) {
      console.error("Error listing college images:", error);
      return [];
    }
  }

  // Clean up orphaned images (images not referenced in any college data)
  async cleanupOrphanedImages(referencedUrls: string[]): Promise<number> {
    try {
      const containerClient = await this.ensureContainer();

      let deletedCount = 0;

      for await (const blob of containerClient.listBlobsFlat()) {
        const blobClient = containerClient.getBlobClient(blob.name);
        const blobUrl = blobClient.url;

        // If this URL is not referenced anywhere, delete it
        if (!referencedUrls.includes(blobUrl)) {
          await blobClient.deleteIfExists();
          deletedCount++;
        }
      }

      return deletedCount;
    } catch (error) {
      console.error("Error cleaning up orphaned images:", error);
      return 0;
    }
  }
}

// Export a singleton instance
export const imageUploadService = new ImageUploadService();
