"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Eye, RefreshCw } from "lucide-react";
import Link from "next/link";
import type { College } from "@/types/college";

// Import the existing AddCollegeForm component - we'll reuse it for editing
import { AddCollegeForm } from "./add-college-form";

interface EditCollegeViewProps {
  college: College;
}

export function EditCollegeView({ college }: EditCollegeViewProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Track if form has unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges]);

  const handleSaveSuccess = () => {
    setHasChanges(false);
    toast({
      title: "Success",
      description: "College information updated successfully.",
    });

    // Redirect back to manage colleges after a short delay
    setTimeout(() => {
      router.push("/admin/manage-colleges");
    }, 1500);
  };

  const handleFormChange = () => {
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="/admin/manage-colleges">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Colleges
                </Button>
              </Link>

              <div>
                <CardTitle className="text-lg">
                  Editing: {college.name}
                </CardTitle>
                <CardDescription className="mt-1">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {hasChanges && (
                <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  Unsaved changes
                </div>
              )}

              <Link href={`/colleges/${college.slug}`} target="_blank">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* College Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              {college.logo ? (
                <img
                  src={college.logo}
                  alt={`${college.name} logo`}
                  className="w-12 h-12 rounded-lg object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {college.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">{college.name}</p>
                <p className="text-sm text-gray-500">
                  {college.city}, {college.country?.toUpperCase()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {college.programs?.length || 0}
              </p>
              <p className="text-sm text-gray-600">Programs Offered</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {college.established || "N/A"}
              </p>
              <p className="text-sm text-gray-600">Established</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Form */}
      <Card>
        <CardHeader>
          <CardTitle>College Information</CardTitle>
          <CardDescription>
            Update all college details including basic information, programs,
            requirements, rankings, contact details, and SEO metadata.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddCollegeForm
            initialData={college}
            isEditing={true}
            onSaveSuccess={handleSaveSuccess}
            onChange={handleFormChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}
