"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Home, Plus, Edit, Trash2, Eye } from "lucide-react";
import { StudyInCountryData } from "@/types/study-in-country";

type StudyInCountryPageSummary = {
  slug: string;
  country: string;
  lastUpdated: string;
  isActive: boolean;
};

export default function ManageStudyInCountryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminKey, setAdminKey] = useState("");
  const [pages, setPages] = useState<StudyInCountryPageSummary[]>([]);
  const [loadingPages, setLoadingPages] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedKey = localStorage.getItem("seo-admin-key");
    if (savedKey) {
      validateKey(savedKey);
    } else {
      setIsLoading(false);
    }
  }, []);

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
        await loadPages();
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await validateKey(adminKey);
  };

  const loadPages = async () => {
    setLoadingPages(true);
    try {
      const response = await fetch('/api/admin/study-in-country');
      if (!response.ok) {
        throw new Error('Failed to fetch pages');
      }
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (error) {
      console.error("Error loading pages:", error);
      toast({
        title: "Error",
        description: "Failed to load study-in-country pages",
        variant: "destructive",
      });
    } finally {
      setLoadingPages(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete the page with slug "${slug}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/study-in-country?slug=${slug}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete page');
      }
      
      await loadPages();
      toast({
        title: "Success",
        description: "Page deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting page:", error);
      toast({
        title: "Error",
        description: "Failed to delete page",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Validating..." : "Access Admin"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Manage Study-in-Country Pages
              </h1>
              <p className="text-gray-600">
                Create and manage SEO-optimized study destination pages
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin">
                <Button variant="outline">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <Link href="/admin/add-study-in-country">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Page
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Pages List */}
        <Card>
          <CardHeader>
            <CardTitle>Study-in-Country Pages</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingPages ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading pages...</p>
              </div>
            ) : pages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No study-in-country pages found</p>
                <Link href="/admin/add-study-in-country">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Page
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Country</th>
                      <th className="text-left py-3 px-4">Slug</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Last Updated</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page) => (
                      <tr key={page.slug} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{page.country}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{page.slug}</td>
                        <td className="py-3 px-4 text-sm">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            page.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {page.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500">
                          {page.lastUpdated !== 'Unknown' ? new Date(page.lastUpdated).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Link href={`/study-in/${page.slug}`} target="_blank">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Link href={`/admin/edit-study-in-country/${page.slug}`}>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(page.slug)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
