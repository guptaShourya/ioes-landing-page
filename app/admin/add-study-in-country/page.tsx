"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { StudyInCountryForm } from "@/components/admin/study-in-country-form";
import { StudyInCountryData } from "@/types/study-in-country";
import { uploadStudyInCountryData } from "@/lib/azure-study-in-country";

export default function AddStudyInCountryPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: StudyInCountryData) => {
    setIsLoading(true);
    try {
      // Update the lastUpdated timestamp
      const updatedData = {
        ...data,
        lastUpdated: new Date().toISOString(),
        isActive: true,
      };

      await uploadStudyInCountryData(updatedData);
      
      toast({
        title: "Success",
        description: "Study-in-country page created successfully!",
      });

      // Redirect to manage pages
      router.push("/admin/manage-study-in-country");
    } catch (error) {
      console.error("Error creating page:", error);
      toast({
        title: "Error",
        description: "Failed to create study-in-country page. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/admin/manage-study-in-country">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Manage Pages
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Study-in-Country Page
          </h1>
          <p className="text-gray-600">
            Create a comprehensive SEO-optimized study destination page
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Page Details</CardTitle>
          </CardHeader>
          <CardContent>
            <StudyInCountryForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
