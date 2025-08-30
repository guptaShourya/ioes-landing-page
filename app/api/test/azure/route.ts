import { NextRequest, NextResponse } from "next/server";
import { collegeAzureService } from "@/lib/azure-college";

// Simple test endpoint to verify Azure Storage connection
export async function GET(request: NextRequest) {
  try {
    // Test connection by trying to list colleges
    const colleges = await collegeAzureService.listColleges();

    return NextResponse.json({
      success: true,
      message: "Azure Storage connection successful",
      collegeCount: colleges.length,
      colleges: colleges.slice(0, 5), // Show first 5 colleges
      timestamp: new Date().toISOString(),
      containerUrl: `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/college-data`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Azure Storage connection failed",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
