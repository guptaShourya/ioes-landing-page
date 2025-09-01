import { NextRequest, NextResponse } from "next/server";
import { collegeAzureService } from "@/lib/azure-college";
import type { College } from "@/types/college";

export async function POST(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get("authorization");
    const adminKey = process.env.SEO_ADMIN_KEY;

    if (!authHeader || !adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case "upload_college": {
        if (!data || !data.slug) {
          return NextResponse.json(
            { error: "Invalid college data" },
            { status: 400 }
          );
        }

        const college: College = data;
        const blobName = await collegeAzureService.uploadCollege(college);

        return NextResponse.json({
          success: true,
          message: "College uploaded successfully",
          blobName,
          publicUrl: collegeAzureService.getPublicUrl(college.slug),
        });
      }

      case "upload_index": {
        if (!Array.isArray(data)) {
          return NextResponse.json(
            { error: "Invalid colleges array" },
            { status: 400 }
          );
        }

        const colleges: College[] = data;
        const blobName = await collegeAzureService.uploadCollegeIndex(colleges);

        return NextResponse.json({
          success: true,
          message: `College index uploaded with ${colleges.length} colleges`,
          blobName,
          publicUrl: collegeAzureService.getIndexPublicUrl(),
        });
      }

      case "bulk_upload": {
        if (!Array.isArray(data)) {
          return NextResponse.json(
            { error: "Invalid colleges array" },
            { status: 400 }
          );
        }

        const colleges: College[] = data;
        const results = [];

        // Upload individual colleges
        for (const college of colleges) {
          try {
            const blobName = await collegeAzureService.uploadCollege(college);
            results.push({
              slug: college.slug,
              success: true,
              blobName,
              publicUrl: collegeAzureService.getPublicUrl(college.slug),
            });
          } catch (error) {
            results.push({
              slug: college.slug,
              success: false,
              error: error instanceof Error ? error.message : "Unknown error",
            });
          }
        }

        // Upload index
        try {
          const indexBlobName = await collegeAzureService.uploadCollegeIndex(
            colleges
          );
          results.push({
            slug: "index",
            success: true,
            blobName: indexBlobName,
            publicUrl: collegeAzureService.getIndexPublicUrl(),
          });
        } catch (error) {
          results.push({
            slug: "index",
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          });
        }

        return NextResponse.json({
          success: true,
          message: `Bulk upload completed`,
          results,
        });
      }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("College admin API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get("authorization");
    const adminKey = process.env.SEO_ADMIN_KEY;

    if (!authHeader || !adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");

    switch (action) {
      case "list_colleges": {
        const colleges = await collegeAzureService.getAllColleges();
        return NextResponse.json({
          success: true,
          colleges,
          count: colleges.length,
        });
      }

      case "get_college": {
        const slug = searchParams.get("slug");
        if (!slug) {
          return NextResponse.json(
            { error: "College slug is required" },
            { status: 400 }
          );
        }

        const college = await collegeAzureService.getCollege(slug);
        if (!college) {
          return NextResponse.json(
            { error: "College not found" },
            { status: 404 }
          );
        }

        return NextResponse.json({
          success: true,
          college,
        });
      }

      case "get_index": {
        const index = await collegeAzureService.getCollegeIndex();
        return NextResponse.json({
          success: true,
          index,
          count: index.length,
        });
      }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("College admin API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get("authorization");
    const adminKey = process.env.SEO_ADMIN_KEY;

    if (!authHeader || !adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "College slug is required" },
        { status: 400 }
      );
    }

    const deleted = await collegeAzureService.deleteCollege(slug);

    if (deleted) {
      return NextResponse.json({
        success: true,
        message: `College ${slug} deleted successfully`,
      });
    } else {
      return NextResponse.json(
        {
          error: `Failed to delete college ${slug}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("College admin API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
