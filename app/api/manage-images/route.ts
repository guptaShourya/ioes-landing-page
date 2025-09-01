import { NextRequest, NextResponse } from "next/server";
import { imageUploadService } from "@/lib/azure-image-upload";
import { CollegeAzureService } from "@/lib/azure-college";

export async function POST(request: NextRequest) {
  try {
    // Get all college data to find referenced image URLs
    const collegeService = new CollegeAzureService();
    const colleges = await collegeService.getAllColleges();

    const referencedUrls: string[] = [];

    // Collect all image URLs from college data
    colleges.forEach((college) => {
      if (college.logo) referencedUrls.push(college.logo);
      if (college.bannerImage) referencedUrls.push(college.bannerImage);
      if (college.gallery) referencedUrls.push(...college.gallery);
    });

    // TODO: Also get SEO data and collect OG images
    // This would require implementing SEO data retrieval from Azure

    // Clean up orphaned images
    const deletedCount = await imageUploadService.cleanupOrphanedImages(
      referencedUrls
    );

    return NextResponse.json({
      success: true,
      message: `Cleaned up ${deletedCount} orphaned images`,
      deletedCount,
    });
  } catch (error) {
    console.error("Image cleanup error:", error);
    return NextResponse.json(
      { error: "Failed to cleanup images" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const collegeSlug = searchParams.get("collegeSlug");

    if (!collegeSlug) {
      return NextResponse.json(
        { error: "College slug is required" },
        { status: 400 }
      );
    }

    // List all images for a specific college
    const images = await imageUploadService.listCollegeImages(collegeSlug);

    return NextResponse.json({
      success: true,
      images,
      count: images.length,
    });
  } catch (error) {
    console.error("Image listing error:", error);
    return NextResponse.json(
      { error: "Failed to list images" },
      { status: 500 }
    );
  }
}
