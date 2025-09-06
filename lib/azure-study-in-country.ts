import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";
import { StudyInCountryData } from "@/types/study-in-country";

// Environment variables (server-side only)
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const AZURE_STUDY_IN_CONTAINER = process.env.AZURE_STUDY_IN_CONTAINER || "study-in-pages";

// Initialize Azure Blob Service Client
function getBlobServiceClient() {
  if (AZURE_STORAGE_CONNECTION_STRING) {
    return BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  } else if (AZURE_STORAGE_ACCOUNT_NAME && AZURE_STORAGE_ACCOUNT_KEY) {
    const credential = new StorageSharedKeyCredential(
      AZURE_STORAGE_ACCOUNT_NAME,
      AZURE_STORAGE_ACCOUNT_KEY
    );
    return new BlobServiceClient(
      `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
      credential
    );
  } else {
    throw new Error("Azure Storage credentials not found");
  }
}

/**
 * Ensure container exists
 */
async function ensureContainer() {
  const blobServiceClient = getBlobServiceClient();
  const containerClient = blobServiceClient.getContainerClient(AZURE_STUDY_IN_CONTAINER);
  
  // Create container if it doesn't exist
  await containerClient.createIfNotExists({
    access: "blob", // Public read access for study-in-country data
  });
  
  return containerClient;
}

/**
 * Fetch study-in-country data from Azure Storage
 * @param slug - The page slug identifier
 * @returns Study in country data or null if not found
 */
export async function getStudyInCountryData(slug: string): Promise<StudyInCountryData | null> {
  try {
    const containerClient = await ensureContainer();
    const blobClient = containerClient.getBlobClient(`${slug}.json`);

    // Check if blob exists
    const exists = await blobClient.exists();
    if (!exists) {
      return null;
    }

    // Download blob content
    const downloadResponse = await blobClient.download();
    const content = await streamToBuffer(downloadResponse.readableStreamBody!);
    const data = JSON.parse(content.toString()) as StudyInCountryData;

    return data;
  } catch (error) {
    console.error(`Error fetching study-in-country data for slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all available study-in-country page slugs
 * @returns Array of available slugs
 */
export async function getAllStudyInCountrySlugs(): Promise<string[]> {
  try {
    const containerClient = await ensureContainer();

    const slugs: string[] = [];
    
    // List all blobs in the container
    for await (const blob of containerClient.listBlobsFlat()) {
      if (blob.name.endsWith('.json')) {
        // Remove .json extension to get the slug
        const slug = blob.name.replace('.json', '');
        slugs.push(slug);
      }
    }

    return slugs;
  } catch (error) {
    console.error("Error fetching study-in-country slugs:", error);
    return [];
  }
}

/**
 * Upload/Update study-in-country data to Azure Storage
 * @param data - Study in country data
 * @returns Success status
 */
export async function uploadStudyInCountryData(data: StudyInCountryData): Promise<boolean> {
  try {
    const containerClient = await ensureContainer();

    const blobClient = containerClient.getBlockBlobClient(`${data.slug}.json`);
    
    // Upload data with metadata
    const content = JSON.stringify(data, null, 2);
    await blobClient.upload(content, content.length, {
      metadata: {
        country: data.country || '',
        lastUpdated: new Date().toISOString(),
        isActive: 'true',
      },
    });

    return true;
  } catch (error) {
    console.error(`Error uploading study-in-country data for ${data.slug}:`, error);
    return false;
  }
}

/**
 * Delete study-in-country data from Azure Storage
 * @param slug - The page slug identifier
 * @returns Success status
 */
export async function deleteStudyInCountryData(slug: string): Promise<boolean> {
  try {
    const containerClient = await ensureContainer();
    const blobClient = containerClient.getBlobClient(`${slug}.json`);

    await blobClient.deleteIfExists();
    return true;
  } catch (error) {
    console.error(`Error deleting study-in-country data for ${slug}:`, error);
    return false;
  }
}

/**
 * List all study-in-country pages with basic metadata
 * @returns Array of page metadata
 */
export async function listStudyInCountryPages(): Promise<{
  slug: string;
  country: string;
  lastUpdated: string;
  isActive: boolean;
}[]> {
  try {
    const containerClient = await ensureContainer();

    const pages: {
      slug: string;
      country: string;
      lastUpdated: string;
      isActive: boolean;
    }[] = [];

    for await (const blob of containerClient.listBlobsFlat({
      includeMetadata: true,
    })) {
      if (blob.name.endsWith('.json')) {
        const slug = blob.name.replace('.json', '');
        const metadata = blob.metadata || {};
        
        pages.push({
          slug,
          country: metadata.country || 'Unknown',
          lastUpdated: metadata.lastUpdated || 'Unknown',
          isActive: metadata.isActive === 'true',
        });
      }
    }

    return pages;
  } catch (error) {
    console.error("Error listing study-in-country pages:", error);
    return [];
  }
}

// Helper function to convert stream to buffer
async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

// Export types for admin interface
export type StudyInCountryPageMetadata = {
  slug: string;
  country: string;
  lastUpdated: string;
  isActive: boolean;
};
