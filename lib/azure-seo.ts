import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

// Environment variables (server-side only)
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const AZURE_STORAGE_CONTAINER_NAME =
  process.env.AZURE_STORAGE_CONTAINER_NAME || "seo-data";
const AZURE_PUBLIC_URL = process.env.NEXT_PUBLIC_AZURE_BLOB_URL;

// SEO Data Interface (extensible)
export interface SEOData {
  // Core required fields
  pageSlug: string;
  title: string;
  description: string;

  // Standard SEO fields
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;

  // Open Graph fields
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  ogVideo?: string;
  ogLocale?: string;
  ogSiteName?: string;

  // Twitter fields
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;

  // Advanced SEO fields
  themeColor?: string;
  alternateLanguages?: Record<string, string>;
  authors?: string[];
  publishedTime?: string;
  modifiedTime?: string;

  // Business-specific fields
  targetAudience?: string;
  contentFreshness?: string;
  priorityKeywords?: string[];
  contentTopics?: string[];

  // Extensible - any future fields
  [key: string]: any;

  // Metadata
  lastUpdated?: string;
  updatedBy?: string;
  version?: number;
}

// Cache for performance
class SEOCache {
  private cache = new Map<string, { data: SEOData; timestamp: number }>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: SEOData): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  get(key: string): SEOData | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }
}

const seoCache = new SEOCache();

// Azure Blob Service Client (server-side only)
function getBlobServiceClient() {
  if (typeof window !== "undefined") {
    throw new Error("Azure blob operations should only be called server-side");
  }

  // Try connection string first
  if (AZURE_STORAGE_CONNECTION_STRING) {
    return BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
  }

  // Fallback to account name and key
  if (AZURE_STORAGE_ACCOUNT_NAME && AZURE_STORAGE_ACCOUNT_KEY) {
    return new BlobServiceClient(
      `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
      new StorageSharedKeyCredential(
        AZURE_STORAGE_ACCOUNT_NAME,
        AZURE_STORAGE_ACCOUNT_KEY
      )
    );
  }

  throw new Error("Azure storage credentials not configured properly");
}

/**
 * Get SEO data from Azure Blob Storage (public read)
 */
export async function getSEODataFromAzure(
  pageSlug: string
): Promise<SEOData | null> {
  // Check cache first
  const cached = seoCache.get(pageSlug);
  if (cached) {
    return cached;
  }

  try {
    // Use public URL for read access (faster, no auth needed)
    const response = await fetch(`${AZURE_PUBLIC_URL}/${pageSlug}.json`, {
      next: { revalidate: 300 }, // 5-minute cache
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`SEO file not found for page: ${pageSlug}`);
        return null;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const text = await response.text();
    const data = JSON.parse(text) as SEOData;

    // Validate required fields
    if (!data.title || !data.description) {
      throw new Error(
        `Invalid SEO data for ${pageSlug}: missing required fields`
      );
    }

    // Cache the result
    seoCache.set(pageSlug, data);

    return data;
  } catch (error) {
    console.error(`Error fetching SEO data for ${pageSlug}:`, error);
    return null;
  }
}

/**
 * Save SEO data to Azure Blob Storage (server-side only)
 */
export async function saveSEODataToAzure(
  pageSlug: string,
  seoData: SEOData
): Promise<void> {
  seoCache.invalidate(pageSlug);

  try {
    const blobServiceClient = getBlobServiceClient();
    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME
    );
    const blobClient = containerClient.getBlockBlobClient(`${pageSlug}.json`);

    const jsonData = JSON.stringify(seoData, null, 2);

    await blobClient.upload(jsonData, jsonData.length, {
      blobHTTPHeaders: {
        blobContentType: "application/json",
        blobCacheControl: "public, max-age=300",
      },
      metadata: {
        pageSlug,
        contentType: "seo-data",
        lastUpdated: new Date().toISOString(),
      },
    });

    console.log(`Successfully saved SEO data for ${pageSlug}`);
  } catch (error) {
    console.error(`Error saving SEO data for ${pageSlug}:`, error);

    // Fallback: save to local file system in development
    if (process.env.NODE_ENV === "development") {
      try {
        const fs = await import("fs/promises");
        const path = await import("path");

        const dataDir = path.join(process.cwd(), "data", "seo-fallback");
        await fs.mkdir(dataDir, { recursive: true });

        const filePath = path.join(dataDir, `${pageSlug}.json`);
        await fs.writeFile(filePath, JSON.stringify(seoData, null, 2), "utf8");

        console.log(`Fallback: Saved SEO data locally for ${pageSlug}`);
      } catch (fallbackError) {
        console.error("Fallback save failed:", fallbackError);
        throw error; // Re-throw original error
      }
    } else {
      throw error;
    }
  }
}

/**
 * Delete SEO data from Azure Blob Storage (server-side only)
 */
export async function deleteSEODataFromAzure(pageSlug: string): Promise<void> {
  seoCache.invalidate(pageSlug);

  try {
    const blobServiceClient = getBlobServiceClient();
    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME
    );
    const blobClient = containerClient.getBlockBlobClient(`${pageSlug}.json`);

    await blobClient.delete();
    console.log(`Successfully deleted SEO data for ${pageSlug}`);
  } catch (error) {
    console.error(`Error deleting SEO data for ${pageSlug}:`, error);

    // Fallback: delete from local file system in development
    if (process.env.NODE_ENV === "development") {
      try {
        const fs = await import("fs/promises");
        const path = await import("path");

        const filePath = path.join(
          process.cwd(),
          "data",
          "seo-fallback",
          `${pageSlug}.json`
        );
        await fs.unlink(filePath);

        console.log(`Fallback: Deleted SEO data locally for ${pageSlug}`);
      } catch (fallbackError) {
        console.warn(
          "Fallback delete failed (file may not exist):",
          fallbackError
        );
        // Don't throw error for delete operations
      }
    } else {
      throw error;
    }
  }
}

/**
 * List all SEO pages (server-side only)
 */
export async function listSEOPages(): Promise<string[]> {
  try {
    const blobServiceClient = getBlobServiceClient();
    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME
    );

    const pages: string[] = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      if (blob.name.endsWith(".json")) {
        const pageSlug = blob.name.replace(".json", "");
        pages.push(pageSlug);
      }
    }

    return pages.sort();
  } catch (error) {
    console.error("Error listing SEO pages:", error);
    return [];
  }
}

/**
 * Get SEO data with fallbacks for production use
 */
export async function getSEODataWithFallbacks(
  pageSlug: string
): Promise<SEOData> {
  try {
    // Try Azure first
    const azureData = await getSEODataFromAzure(pageSlug);
    if (azureData) {
      return azureData;
    }
  } catch (error) {
    console.warn(`Azure SEO fetch failed for ${pageSlug}, trying fallback`);
  }

  // Fallback to default SEO data
  return getDefaultSEOData(pageSlug);
}

/**
 * Default SEO data fallback
 */
function getDefaultSEOData(pageSlug: string): SEOData {
  const defaultData: SEOData = {
    pageSlug,
    title:
      "IOES - Study Abroad Consultants | Premier Overseas Education Services",
    description:
      "Expert guidance for your international education journey. Top-rated study abroad consultants in Delhi & Mumbai helping students achieve their dreams worldwide.",
    keywords: ["study abroad", "overseas education", "education consultants"],
    ogImage: "/og-default.jpg",
    lastUpdated: new Date().toISOString(),
    updatedBy: "system-default",
  };

  // Page-specific defaults based on slug patterns
  if (pageSlug.startsWith("study-in-")) {
    const countryPart = pageSlug.replace("study-in-", "");
    const [country, subpage] = countryPart.split("/");
    const countryName = country.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    
    if (subpage) {
      // Handle sub-pages like study-in-uk/programs
      const subpageMap: Record<string, { title: string; description: string; keywords: string[] }> = {
        programs: {
          title: `Top Study Programs in ${countryName} | Academic Courses & Degrees | IOES`,
          description: `Explore prestigious academic programs and university courses in ${countryName}. Find the best degrees, admission requirements, and career prospects for international students.`,
          keywords: [`study programs ${country}`, `university courses ${country}`, `degrees ${country}`, "academic programs", "international students", "university admission"]
        },
        culture: {
          title: `Life & Culture in ${countryName} | Student Experience Guide | IOES`,
          description: `Discover student life, culture, traditions, and lifestyle in ${countryName}. Complete guide for international students planning their study abroad journey.`,
          keywords: [`student life ${country}`, `culture ${country}`, `lifestyle ${country}`, "international students", "study abroad experience", "campus life"]
        },
        careers: {
          title: `Career Opportunities in ${countryName} | Jobs for International Graduates | IOES`,
          description: `Explore career prospects and job opportunities in ${countryName} for international graduates. Post-study work visas, top industries, and employment guidance.`,
          keywords: [`careers ${country}`, `jobs ${country}`, `post study work visa ${country}`, "international graduates", "employment opportunities", "work permit"]
        },
        cost: {
          title: `Cost of Living & Study in ${countryName} | Budget Guide for Students | IOES`,
          description: `Complete cost breakdown for studying and living in ${countryName}. Tuition fees, accommodation, food, and living expenses guide for international students.`,
          keywords: [`cost of living ${country}`, `study cost ${country}`, `tuition fees ${country}`, "student budget", "living expenses", "accommodation costs"]
        },
        scholarships: {
          title: `Scholarships in ${countryName} | Financial Aid for International Students | IOES`,
          description: `Find scholarships, grants, and financial aid opportunities for studying in ${countryName}. Government and university scholarships for international students.`,
          keywords: [`scholarships ${country}`, `financial aid ${country}`, `grants ${country}`, "international student funding", "study abroad scholarships", "education funding"]
        }
      };

      const subpageData = subpageMap[subpage];
      if (subpageData) {
        defaultData.title = subpageData.title;
        defaultData.description = subpageData.description;
        defaultData.keywords = subpageData.keywords;
      }
    } else {
      // Main country page
      defaultData.title = `Study in ${countryName} - Expert Guidance | IOES`;
      defaultData.description = `Discover quality education opportunities in ${countryName}. Expert guidance for admissions, visas, and career prospects.`;
      defaultData.keywords = [`study in ${country}`, `education ${country}`, `universities ${country}`, "study abroad", "international education", "overseas education"];
    }
  }

  return defaultData;
}
