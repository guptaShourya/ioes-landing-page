import { NextRequest, NextResponse } from "next/server";
import { collegeAzureService } from "@/lib/azure-college";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      // Get specific college
      const college = await collegeAzureService.getCollege(slug);

      if (!college) {
        return NextResponse.json(
          { error: "College not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ college });
    } else {
      // Get all colleges
      const colleges = await collegeAzureService.getAllColleges();
      return NextResponse.json({ colleges });
    }
  } catch (error) {
    console.error("Error in colleges API:", error);
    return NextResponse.json(
      { error: "Failed to fetch college data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const college = await request.json();
    const result = await collegeAzureService.uploadCollege(college);
    return NextResponse.json({ success: true, uploadUrl: result });
  } catch (error) {
    console.error("Error saving college:", error);
    return NextResponse.json(
      { error: "Failed to save college" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const college = await request.json();
    const result = await collegeAzureService.uploadCollege(college);
    return NextResponse.json({ success: true, uploadUrl: result });
  } catch (error) {
    console.error("Error updating college:", error);
    return NextResponse.json(
      { error: "Failed to update college" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "College slug is required" },
        { status: 400 }
      );
    }

    await collegeAzureService.deleteCollege(slug);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting college:", error);
    return NextResponse.json(
      { error: "Failed to delete college" },
      { status: 500 }
    );
  }
}
