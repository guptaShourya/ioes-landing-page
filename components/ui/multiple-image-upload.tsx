"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  X,
  Image as ImageIcon,
  Loader2,
  Eye,
  Trash2,
  Plus,
} from "lucide-react";

interface MultipleImageUploadProps {
  label: string;
  currentImages: string[];
  onImagesChange: (imageUrls: string[]) => void;
  collegeSlug?: string;
  imageType?: "gallery";
  accept?: string;
  maxSizeMB?: number;
  maxImages?: number;
  description?: string;
}

export function MultipleImageUpload({
  label,
  currentImages,
  onImagesChange,
  collegeSlug,
  imageType = "gallery",
  accept = "image/*",
  maxSizeMB = 10,
  maxImages = 20,
  description,
}: MultipleImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (files: File[]) => {
    if (!files || files.length === 0) return;

    // Check if adding these files would exceed the limit
    if (currentImages.length + files.length > maxImages) {
      toast({
        title: "Too Many Images",
        description: `Maximum ${maxImages} images allowed. You can add ${
          maxImages - currentImages.length
        } more.`,
        variant: "destructive",
      });
      return;
    }

    // Validate each file
    const maxSize = maxSizeMB * 1024 * 1024;
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid File",
          description: `${file.name} is not an image file.`,
          variant: "destructive",
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: `${file.name} must be less than ${maxSizeMB}MB.`,
          variant: "destructive",
        });
        return;
      }
    }

    setUploading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));
      if (collegeSlug) formData.append("collegeSlug", collegeSlug);
      if (imageType) formData.append("imageType", imageType);

      const response = await fetch("/api/upload-multiple-images", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        const newImages = [...currentImages, ...result.imageUrls];
        onImagesChange(newImages);
        toast({
          title: "Success",
          description: `${files.length} image(s) uploaded successfully!`,
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description:
          error instanceof Error ? error.message : "Failed to upload images",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(Array.from(files));
    }
    // Reset the input so the same file can be selected again
    e.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    const newImages = currentImages.filter((_, i) => i !== index);
    onImagesChange(newImages);
    toast({
      title: "Success",
      description: "Image removed successfully!",
    });
  };

  const openPreview = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  const canAddMore = currentImages.length < maxImages;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          {label}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Current Images Grid */}
        {currentImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <img
                  src={imageUrl}
                  alt={`${label} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border"
                />

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => openPreview(imageUrl)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Image number */}
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Area */}
        {canAddMore && (
          <div
            className={`
              border-2 border-dashed rounded-lg p-6 text-center transition-colors
              ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25"
              }
              ${
                uploading
                  ? "opacity-50 pointer-events-none"
                  : "hover:border-primary hover:bg-primary/5"
              }
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Uploading...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <Plus className="h-12 w-12 text-muted-foreground" />

                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    Drop images here, or{" "}
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      browse
                    </button>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentImages.length}/{maxImages} images • Supports: JPG,
                    PNG, WebP, GIF (max {maxSizeMB}MB each)
                  </p>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Add Images
                </Button>
              </div>
            )}
          </div>
        )}

        {!canAddMore && (
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Maximum {maxImages} images reached. Remove some images to add
              more.
            </p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple
          onChange={handleFileSelect}
          className="hidden"
          aria-label={`Upload ${label}`}
          title={`Upload ${label}`}
        />
      </CardContent>
    </Card>
  );
}
