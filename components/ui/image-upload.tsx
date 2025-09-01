"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  X,
  Image as ImageIcon,
  Loader2,
  Eye,
  Trash2,
} from "lucide-react";

interface ImageUploadProps {
  label: string;
  currentImageUrl?: string;
  onImageUpload: (imageUrl: string) => void;
  onImageRemove?: () => void;
  collegeSlug?: string;
  imageType?: "logo" | "banner" | "gallery" | "og-image";
  accept?: string;
  maxSizeMB?: number;
  required?: boolean;
  description?: string;
}

export function ImageUpload({
  label,
  currentImageUrl,
  onImageUpload,
  onImageRemove,
  collegeSlug,
  imageType,
  accept = "image/*",
  maxSizeMB = 10,
  required = false,
  description,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid File",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size
    const maxSize = maxSizeMB * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File Too Large",
        description: `File size must be less than ${maxSizeMB}MB.`,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      if (collegeSlug) formData.append("collegeSlug", collegeSlug);
      if (imageType) formData.append("imageType", imageType);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onImageUpload(result.imageUrl);
        toast({
          title: "Success",
          description: "Image uploaded successfully!",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description:
          error instanceof Error ? error.message : "Failed to upload image",
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
      handleFileUpload(files[0]);
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
      handleFileUpload(files[0]);
    }
  };

  const handleRemoveImage = async () => {
    if (!currentImageUrl || !onImageRemove) return;

    try {
      // Optionally delete from Azure (uncomment if you want to delete from storage)
      // await fetch(`/api/upload-image?imageUrl=${encodeURIComponent(currentImageUrl)}`, {
      //   method: "DELETE",
      // });

      onImageRemove();
      toast({
        title: "Success",
        description: "Image removed successfully!",
      });
    } catch (error) {
      console.error("Remove error:", error);
      toast({
        title: "Error",
        description: "Failed to remove image",
        variant: "destructive",
      });
    }
  };

  const openPreview = () => {
    if (currentImageUrl) {
      window.open(currentImageUrl, "_blank");
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {currentImageUrl ? (
        // Show current image with actions
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src={currentImageUrl}
                  alt={label}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  Current {label.toLowerCase()}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {currentImageUrl}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={openPreview}
                >
                  <Eye className="h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  {uploading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4" />
                  )}
                </Button>

                {onImageRemove && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleRemoveImage}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        // Show upload area
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
              <ImageIcon className="h-12 w-12 text-muted-foreground" />

              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Drop your image here, or{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    browse
                  </button>
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports: JPG, PNG, WebP, GIF (max {maxSizeMB}MB)
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </Button>
            </div>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
        aria-label={`Upload ${label}`}
        title={`Upload ${label}`}
      />
    </div>
  );
}
