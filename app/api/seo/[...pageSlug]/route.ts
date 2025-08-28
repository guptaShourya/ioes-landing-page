import { NextRequest, NextResponse } from "next/server";
import { saveSEODataToAzure, deleteSEODataFromAzure } from "@/lib/azure-seo";

// Authentication middleware
function authenticateRequest(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.substring(7);
  const expectedKey = process.env.SEO_ADMIN_KEY;

  return token === expectedKey;
}

// Save SEO data for a specific page
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ pageSlug: string[] }> }
) {
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { pageSlug: pageSlugArray } = await params;
    const pageSlug = pageSlugArray.join('/'); // Join array segments with '/'
    const seoData = await request.json();

    // Validate required fields
    if (!seoData.title || !seoData.description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    // Ensure pageSlug matches
    seoData.pageSlug = pageSlug;

    // Add metadata
    seoData.lastUpdated = new Date().toISOString();
    seoData.updatedBy = "admin-panel";

    // Save to Azure
    await saveSEODataToAzure(pageSlug, seoData);

    return NextResponse.json({
      message: "SEO data saved successfully",
      data: seoData,
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (error) {
    console.error("Error saving SEO data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Delete SEO data for a specific page
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ pageSlug: string[] }> }
) {
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { pageSlug: pageSlugArray } = await params;
    const pageSlug = pageSlugArray.join('/'); // Join array segments with '/'

    // Delete from Azure
    await deleteSEODataFromAzure(pageSlug);

    return NextResponse.json({
      message: "SEO data deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting SEO data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
