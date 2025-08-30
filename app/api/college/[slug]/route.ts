import type { NextRequest } from "next/server";
import { fetchCollegeFromAzure } from "@/lib/azure-college";

// This route fetches college data from Azure Storage first, with local fallback
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    // Try Azure Storage first
    const azureData = await fetchCollegeFromAzure(slug);
    if (azureData) {
      return new Response(JSON.stringify(azureData), {
        headers: {
          "content-type": "application/json",
          "cache-control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
        },
      });
    }

    // Fallback to local files if Azure doesn't have the data
    const localResponse = await fetch(
      `${req.nextUrl.origin}/colleges/${slug}.json`,
      { cache: "no-store" }
    );

    if (localResponse.ok) {
      const data = await localResponse.json();
      return new Response(JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
          "cache-control": "public, max-age=300", // Shorter cache for fallback
        },
      });
    }

    // If neither Azure nor local file found
    return new Response(JSON.stringify({ error: "College not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(`Error fetching college ${slug}:`, error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch college data",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
