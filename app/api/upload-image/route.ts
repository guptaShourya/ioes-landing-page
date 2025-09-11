import { NextRequest, NextResponse } from "next/server";
import { imageUploadService } from "@/lib/azure-image-upload";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const collegeSlug = formData.get("collegeSlug") as string;
    const imageType = formData.get("imageType") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error:
            "Invalid file type. Only JPEG, PNG, WebP, and GIF files are allowed.",
        },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Upload to Azure
    const imageUrl = await imageUploadService.uploadImage(
      file,
      collegeSlug || undefined,
      (imageType as any) || undefined
    );

    return NextResponse.json({
      success: true,
      imageUrl,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error("Image upload error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to upload image";
    if (error instanceof Error) {
      if (error.message.includes("Azure Storage credentials not configured")) {
        errorMessage = "Azure Storage is not properly configured. Please check environment variables.";
      } else if (error.message.includes("network") || error.message.includes("connection")) {
        errorMessage = "Network error while uploading to Azure Storage.";
      } else if (error.message.includes("authentication") || error.message.includes("unauthorized")) {
        errorMessage = "Authentication failed. Please check Azure Storage credentials.";
      } else {
        errorMessage = `Upload failed: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get("imageUrl");

    if (!imageUrl) {
      return NextResponse.json(
        { error: "No image URL provided" },
        { status: 400 }
      );
    }

    await imageUploadService.deleteImage(imageUrl);

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Image deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
