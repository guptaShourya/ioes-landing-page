"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { EditCollegeView } from "@/components/admin/edit-college-view";
import Link from "next/link";
import { Home } from "lucide-react";
import { College } from "@/types/college";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EditCollegePage({ params }: PageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminKey, setAdminKey] = useState("");
  const [college, setCollege] = useState<College | null>(null);
  const [loadingCollege, setLoadingCollege] = useState(false);
  const { toast } = useToast();
  const { slug } = params;

  useEffect(() => {
    const savedKey = localStorage.getItem("seo-admin-key");
    if (savedKey) {
      validateKey(savedKey);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadCollege();
    }
  }, [isAuthenticated, slug]);

  const validateKey = async (key: string) => {
    try {
      const response = await fetch("/api/seo", {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem("seo-admin-key", key);
      } else {
        localStorage.removeItem("seo-admin-key");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error validating key:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCollege = async () => {
    setLoadingCollege(true);
    try {
      const adminKey = localStorage.getItem("seo-admin-key");
      if (!adminKey) {
        throw new Error("Admin key not found");
      }

      const response = await fetch(
        `/api/admin/colleges?action=get_college&slug=${slug}`,
        {
          headers: {
            Authorization: `Bearer ${adminKey}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          toast({
            title: "Error",
            description: "College not found",
            variant: "destructive",
          });
          return;
        }
        throw new Error("Failed to fetch college");
      }

      const data = await response.json();
      setCollege(data.college);
    } catch (error) {
      console.error("Error loading college:", error);
      toast({
        title: "Error",
        description: "Failed to load college data",
        variant: "destructive",
      });
    } finally {
      setLoadingCollege(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter an admin key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await validateKey(adminKey);

    if (!isAuthenticated) {
      toast({
        title: "Access Denied",
        description: "Invalid admin key",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                College Admin Access
              </CardTitle>
              <p className="text-center text-gray-600">
                Enter your admin key to edit college information
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter admin key"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full"
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Validating..." : "Access Admin Panel"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (loadingCollege) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            College Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The college you're looking for doesn't exist.
          </p>
          <Link href="/admin/manage-colleges">
            <Button>Back to Manage Colleges</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Edit College: {college.name}
              </h1>
              <p className="text-gray-600">
                Update college information, programs, requirements, and SEO
                metadata
              </p>
            </div>
            <Link href="/admin">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Admin Home
              </Button>
            </Link>
          </div>
        </div>

        <EditCollegeView college={college} />
      </div>
    </div>
  );
}
