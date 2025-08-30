import type { NextRequest } from "next/server";
import { fetchCollegeIndexFromAzure } from "@/lib/azure-college";

// This route fetches the college index from Azure Storage first, with local fallback
export async function GET(req: NextRequest) {
  try {
    // Try Azure Storage first
    const azureIndex = await fetchCollegeIndexFromAzure();
    if (azureIndex && azureIndex.length > 0) {
      return new Response(JSON.stringify(azureIndex), {
        headers: {
          "content-type": "application/json",
          "cache-control": "public, max-age=1800, s-maxage=1800", // Cache for 30 minutes
        },
      });
    }

    // Fallback to local files if Azure doesn't have the data
    const localResponse = await fetch(
      `${req.nextUrl.origin}/colleges/index.json`,
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
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching college index:", error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
}
