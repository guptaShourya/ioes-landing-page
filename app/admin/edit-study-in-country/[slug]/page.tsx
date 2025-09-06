"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { StudyInCountryForm } from "@/components/admin/study-in-country-form";
import { StudyInCountryData } from "@/types/study-in-country";

interface EditStudyInCountryPageProps {
  params: Promise<{ slug: string }>;
}

export default function EditStudyInCountryPage({ params }: EditStudyInCountryPageProps) {
  const router = useRouter();
  const { toast } = useToast();
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [pageData, setPageData] = useState<StudyInCountryData | null>(null);

  useEffect(() => {
    loadPageData();
  }, [resolvedParams.slug]);

  // Transform stored data format to form format
  const transformStoredDataToFormData = (storedData: any): StudyInCountryData => {
    return {
      ...storedData,
      // Ensure costsAndFinancing has proper nested structure
      costsAndFinancing: {
        title: storedData.costsAndFinancing?.title || "",
        description: storedData.costsAndFinancing?.description || "",
        courseCosts: {
          title: storedData.costsAndFinancing?.courseCosts?.title || "",
          data: storedData.costsAndFinancing?.courseCosts?.data || []
        },
        livingExpenses: {
          title: storedData.costsAndFinancing?.livingExpenses?.title || "",
          data: storedData.costsAndFinancing?.livingExpenses?.data || []
        },
        additionalInfo: storedData.costsAndFinancing?.additionalInfo || []
      },
      // Ensure consultantReasons exists with proper structure
      consultantReasons: storedData.consultantReasons || {
        title: "6 Reasons Why IOES is the #1 Study Abroad Consultant",
        subtitle: "Your success is our mission - here's why thousands choose IOES",
        reasons: []
      }
    };
  };

  const loadPageData = async () => {
    setIsLoadingData(true);
    try {
      const response = await fetch(`/api/admin/study-in-country?slug=${resolvedParams.slug}`);
      if (response.ok) {
        const data = await response.json();
        const transformedData = transformStoredDataToFormData(data);
        setPageData(transformedData);
      } else {
        toast({
          title: "Error",
          description: "Page not found",
          variant: "destructive",
        });
        router.push("/admin/manage-study-in-country");
      }
    } catch (error) {
      console.error("Error loading page data:", error);
      toast({
        title: "Error",
        description: "Failed to load page data",
        variant: "destructive",
      });
      router.push("/admin/manage-study-in-country");
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleSubmit = async (data: StudyInCountryData) => {
    setIsLoading(true);
    try {
      // Update the lastUpdated timestamp
      const updatedData = {
        ...data,
        lastUpdated: new Date().toISOString(),
      };

      const response = await fetch('/api/admin/study-in-country', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update page');
      }
      
      toast({
        title: "Success",
        description: "Study-in-country page updated successfully!",
      });

      // Redirect to manage pages
      router.push("/admin/manage-study-in-country");
    } catch (error) {
      console.error("Error updating page:", error);
      toast({
        title: "Error",
        description: "Failed to update study-in-country page. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading page data...</p>
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-4">The requested page could not be found.</p>
          <Link href="/admin/manage-study-in-country">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Manage Pages
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            Edit Study-in-Country Page
          </h1>
          <p className="text-gray-600">
            Update the content for {pageData.country}
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Page Details</CardTitle>
          </CardHeader>
          <CardContent>
            <StudyInCountryForm
              initialData={pageData}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
