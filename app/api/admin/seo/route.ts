import { NextRequest, NextResponse } from "next/server";
import { saveSEODataToAzure, deleteSEODataFromAzure } from "@/lib/azure-seo";

// Authentication helper
function authenticateRequest(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.substring(7);
  const expectedKey = process.env.SEO_ADMIN_KEY;

  return token === expectedKey;
}

// POST - Upload SEO data for a specific page
export async function POST(request: NextRequest) {
  // Check authentication
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { pageSlug, seoData } = body;

    // Validate required fields
    if (!pageSlug || !seoData) {
      return NextResponse.json(
        { error: "pageSlug and seoData are required" },
        { status: 400 }
      );
    }

    // Validate SEO data structure
    if (!seoData.title || !seoData.description) {
      return NextResponse.json(
        { error: "SEO title and description are required" },
        { status: 400 }
      );
    }

    // Validate description length
    if (seoData.description.length > 160) {
      return NextResponse.json(
        { error: "SEO description must be 160 characters or less" },
        { status: 400 }
      );
    }

    // Upload SEO data to Azure
    await saveSEODataToAzure(pageSlug, seoData);

    return NextResponse.json({
      success: true,
      message: "SEO data uploaded successfully",
      pageSlug,
    });
  } catch (error) {
    console.error("Error uploading SEO data:", error);
    return NextResponse.json(
      {
        error: "Failed to upload SEO data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET - Retrieve SEO data for a specific page (admin view)
export async function GET(request: NextRequest) {
  // Check authentication
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("pageSlug");

    if (!pageSlug) {
      return NextResponse.json(
        { error: "pageSlug parameter is required" },
        { status: 400 }
      );
    }

    // Get SEO data from Azure
    const { getSEODataWithFallbacks } = await import("@/lib/azure-seo");
    const seoData = await getSEODataWithFallbacks(pageSlug);

    return NextResponse.json({
      success: true,
      pageSlug,
      seoData,
    });
  } catch (error) {
    console.error("Error retrieving SEO data:", error);
    return NextResponse.json(
      {
        error: "Failed to retrieve SEO data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// DELETE - Remove SEO data for a specific page
export async function DELETE(request: NextRequest) {
  // Check authentication
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("pageSlug");

    if (!pageSlug) {
      return NextResponse.json(
        { error: "pageSlug parameter is required" },
        { status: 400 }
      );
    }

    // Delete SEO data from Azure
    await deleteSEODataFromAzure(pageSlug);

    return NextResponse.json({
      success: true,
      message: "SEO data deleted successfully",
      pageSlug,
    });
  } catch (error) {
    console.error("Error deleting SEO data:", error);
    return NextResponse.json(
      {
        error: "Failed to delete SEO data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
