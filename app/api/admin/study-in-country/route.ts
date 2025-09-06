import { NextRequest, NextResponse } from "next/server";
import { 
  listStudyInCountryPages, 
  getStudyInCountryData,
  uploadStudyInCountryData,
  deleteStudyInCountryData,
  type StudyInCountryPageMetadata 
} from "@/lib/azure-study-in-country";
import { StudyInCountryData } from "@/types/study-in-country";

// GET /api/admin/study-in-country - List all pages
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      // Get specific page data
      const data = await getStudyInCountryData(slug);
      if (!data) {
        return NextResponse.json(
          { error: "Page not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(data);
    } else {
      // List all pages
      const pages = await listStudyInCountryPages();
      return NextResponse.json(pages);
    }
  } catch (error) {
    console.error("Error in study-in-country GET:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/admin/study-in-country - Create or update a page
export async function POST(request: NextRequest) {
  try {
    const data: StudyInCountryData = await request.json();

    // Validate required fields
    if (!data.slug || !data.country) {
      return NextResponse.json(
        { error: "Slug and country are required" },
        { status: 400 }
      );
    }

    // Update lastUpdated timestamp
    data.lastUpdated = new Date().toISOString();

    const success = await uploadStudyInCountryData(data);
    
    if (!success) {
      return NextResponse.json(
        { error: "Failed to save page data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: "Page saved successfully",
      slug: data.slug 
    });
  } catch (error) {
    console.error("Error in study-in-country POST:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/study-in-country - Delete a page
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    const success = await deleteStudyInCountryData(slug);
    
    if (!success) {
      return NextResponse.json(
        { error: "Failed to delete page" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: "Page deleted successfully",
      slug 
    });
  } catch (error) {
    console.error("Error in study-in-country DELETE:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
