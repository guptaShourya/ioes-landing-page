import { NextRequest, NextResponse } from "next/server";
import { imageUploadService } from "@/lib/azure-image-upload";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const collegeSlug = formData.get("collegeSlug") as string;
    const imageType = formData.get("imageType") as string;

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    // Validate each file
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          {
            error: `Invalid file type for ${file.name}. Only JPEG, PNG, WebP, and GIF files are allowed.`,
          },
          { status: 400 }
        );
      }

      if (file.size > maxSize) {
        return NextResponse.json(
          { error: `File ${file.name} is too large. Maximum size is 10MB.` },
          { status: 400 }
        );
      }
    }

    // Upload all files to Azure
    const imageUrls = await imageUploadService.uploadMultipleImages(
      files,
      collegeSlug || undefined,
      (imageType as any) || "gallery"
    );

    return NextResponse.json({
      success: true,
      imageUrls,
      message: `${files.length} images uploaded successfully`,
    });
  } catch (error) {
    console.error("Multiple image upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
