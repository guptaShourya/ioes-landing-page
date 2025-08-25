"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SEOData } from "@/lib/azure-seo";
import {
  Eye,
  Save,
  Trash2,
  Plus,
  AlertCircle,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

interface SEOAdminPanelProps {
  isAuthenticated: boolean;
  onLogin: (key: string) => void;
}

export function SEOAdminPanel({
  isAuthenticated,
  onLogin,
}: SEOAdminPanelProps) {
  const [loginKey, setLoginKey] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<SEOData | null>(null);

  // Authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">SEO Admin Panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="adminKey">Admin Key</Label>
              <Input
                id="adminKey"
                type="password"
                value={loginKey}
                onChange={(e) => setLoginKey(e.target.value)}
                placeholder="Enter admin key"
              />
            </div>
            <Button onClick={() => onLogin(loginKey)} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Load pages on mount
  useEffect(() => {
    loadPages();
  }, []);

  // Load SEO data when page is selected
  useEffect(() => {
    if (selectedPage) {
      loadSEOData(selectedPage);
    }
  }, [selectedPage]);

  const loadPages = async () => {
    try {
      const response = await fetch("/api/seo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("seo-admin-key")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPages(data.pages || []);
      }
    } catch (error) {
      console.error("Error loading pages:", error);
    }
  };

  const loadSEOData = async (pageSlug: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/seo?pageSlug=${pageSlug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("seo-admin-key")}`,
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        },
        cache: 'reload'
      });

      if (response.ok) {
        const data = await response.json();
        setSeoData(data.seoData);
        setEditedData(data.seoData);
      } else {
        setSeoData(null);
        setEditedData(getDefaultSEOData(pageSlug));
      }
    } catch (error) {
      console.error("Error loading SEO data:", error);
      setEditedData(getDefaultSEOData(pageSlug));
    } finally {
      setIsLoading(false);
    }
  };

  const saveSEOData = async () => {
    if (!editedData || !selectedPage) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/seo/${selectedPage}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("seo-admin-key")}`,
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "SEO data saved successfully!" });
        // Reload fresh data from server after save
        await loadSEOData(selectedPage);
        setIsEditing(false);
        // Refresh pages list
        loadPages();
      } else {
        const error = await response.json();
        setMessage({ type: "error", text: error.error || "Failed to save" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const deleteSEOData = async () => {
    if (
      !selectedPage ||
      !confirm("Are you sure you want to delete this SEO data?")
    )
      return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/seo/${selectedPage}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("seo-admin-key")}`,
        },
      });

      if (response.ok) {
        setMessage({ type: "success", text: "SEO data deleted successfully!" });
        setSeoData(null);
        setEditedData(getDefaultSEOData(selectedPage));
        loadPages();
      } else {
        const error = await response.json();
        setMessage({ type: "error", text: error.error || "Failed to delete" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const refreshData = async () => {
    if (!selectedPage) return;
    
    setMessage({ type: "success", text: "Refreshing data..." });
    await loadSEOData(selectedPage);
    await loadPages();
    setMessage({ type: "success", text: "Data refreshed!" });
    setTimeout(() => setMessage(null), 2000);
  };

  const getDefaultSEOData = (pageSlug: string): SEOData => ({
    pageSlug,
    title: "",
    description: "",
    keywords: [],
    ogImage: "",
    canonical: "",
    noindex: false,
    nofollow: false,
  });

  const updateEditedData = (field: string, value: any) => {
    if (!editedData) return;

    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const addKeyword = () => {
    if (!editedData) return;
    const keywords = editedData.keywords || [];
    setEditedData({
      ...editedData,
      keywords: [...keywords, ""],
    });
  };

  const updateKeyword = (index: number, value: string) => {
    if (!editedData) return;
    const keywords = [...(editedData.keywords || [])];
    keywords[index] = value;
    setEditedData({
      ...editedData,
      keywords: keywords.filter((k) => k.trim() !== ""),
    });
  };

  const removeKeyword = (index: number) => {
    if (!editedData) return;
    const keywords = [...(editedData.keywords || [])];
    keywords.splice(index, 1);
    setEditedData({
      ...editedData,
      keywords,
    });
  };

  const openPreview = () => {
    if (selectedPage) {
      const url = selectedPage.startsWith("study-in-")
        ? `/destinations/${selectedPage.replace("study-in-", "")}`
        : `/${selectedPage}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            SEO Management Panel
          </h1>
          <p className="text-gray-600 mt-2">
            Manage SEO meta data for all pages
          </p>
        </div>

        {/* Step-by-step Guide */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              SEO Management Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <div className="font-semibold flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">1</span>
                  Select or Create Page
                </div>
                <ul className="text-xs space-y-1 ml-8">
                  <li>• Click existing page from list</li>
                  <li>• Or type new slug in input field</li>
                  <li>• Press Enter to create/edit</li>
                  <li>• Examples: "about", "contact"</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">2</span>
                  Fill SEO Details
                </div>
                <ul className="text-xs space-y-1 ml-8">
                  <li>• <strong>Title:</strong> 50-60 characters</li>
                  <li>• <strong>Description:</strong> 150-160 characters</li>
                  <li>• <strong>Keywords:</strong> 5-10 relevant terms</li>
                  <li>• <strong>OG Image:</strong> Social media preview</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">3</span>
                  Advanced Settings
                </div>
                <ul className="text-xs space-y-1 ml-8">
                  <li>• <strong>Canonical URL:</strong> Avoid duplicate content</li>
                  <li>• <strong>NoIndex:</strong> Hide from search engines</li>
                  <li>• <strong>NoFollow:</strong> Don't follow links</li>
                  <li>• <strong>Schema:</strong> Structured data markup</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">4</span>
                  Save & Preview
                </div>
                <ul className="text-xs space-y-1 ml-8">
                  <li>• Click "Save Changes" button</li>
                  <li>• Use "Preview" to see live page</li>
                  <li>• Data saves to Azure cloud storage</li>
                  <li>• Changes apply immediately</li>
                </ul>
              </div>
            </div>
            
            {/* Page Slug Examples */}
            <div className="mb-4 p-3 bg-blue-100 rounded border-l-4 border-blue-500">
              <div className="font-semibold text-blue-800 mb-2">� Page Slug Examples:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="font-medium mb-1">Basic Pages:</div>
                  <ul className="space-y-0.5 ml-2">
                    <li>• "home" - Homepage</li>
                    <li>• "about" - About page</li>
                    <li>• "contact" - Contact page</li>
                    <li>• "services" - Services page</li>
                    <li>• "scholarships" - Scholarships page</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Country Subpages:</div>
                  <ul className="space-y-0.5 ml-2">
                    <li>• "study-in-uk/culture" - UK culture page</li>
                    <li>• "study-in-canada/cost" - Canada cost page</li>
                    <li>• "study-in-usa/scholarships" - USA scholarships</li>
                    <li>• "study-in-australia/universities" - AU unis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="p-3 bg-blue-100 rounded border-l-4 border-blue-500">
              <div className="font-semibold text-blue-800 mb-1">💡 SEO Best Practices:</div>
              <div className="text-xs space-y-1">
                <p>• <strong>Title:</strong> Include target keywords early, make it compelling for clicks</p>
                <p>• <strong>Description:</strong> Summarize page content, include call-to-action, avoid duplication</p>
                <p>• <strong>Keywords:</strong> Use specific long-tail keywords, avoid keyword stuffing</p>
                <p>• <strong>URLs:</strong> For subpages, use format "parent-page/subpage" for better organization</p>
                <p>• <strong>Testing:</strong> Use Google's Rich Results Test to validate your changes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {message && (
          <Alert
            className={`mb-6 ${
              message.type === "success" ? "border-green-500" : "border-red-500"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertDescription
              className={
                message.type === "success" ? "text-green-700" : "text-red-700"
              }
            >
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Pages List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pages
                <Badge variant="secondary">{pages.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setSelectedPage(page)}
                    className={`w-full text-left p-2 rounded text-sm transition-colors ${
                      selectedPage === page
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <Input
                  placeholder="Create new page slug..."
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      const value = (e.target as HTMLInputElement).value.trim();
                      if (value) {
                        setSelectedPage(value);
                        (e.target as HTMLInputElement).value = "";
                      }
                    }
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Press Enter to create/edit page
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SEO Editor */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {selectedPage
                    ? `SEO Data - ${selectedPage}`
                    : "Select a page"}
                </CardTitle>
                {selectedPage && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={openPreview}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={refreshData}
                      disabled={isLoading}
                      title="Refresh data from server"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    {seoData && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={deleteSEOData}
                        disabled={isLoading}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    )}
                    <Button
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      variant={isEditing ? "secondary" : "default"}
                    >
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                    {isEditing && (
                      <Button
                        size="sm"
                        onClick={saveSEOData}
                        disabled={isLoading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>

            {selectedPage && editedData && (
              <CardContent>
                <Tabs defaultValue="basic">
                  <TabsList>
                    <TabsTrigger value="basic">Basic SEO</TabsTrigger>
                    <TabsTrigger value="social">Social Media</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={editedData.title || ""}
                        onChange={(e) =>
                          updateEditedData("title", e.target.value)
                        }
                        disabled={!isEditing}
                        maxLength={60}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {(editedData.title || "").length}/60 characters
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={editedData.description || ""}
                        onChange={(e) =>
                          updateEditedData("description", e.target.value)
                        }
                        disabled={!isEditing}
                        maxLength={160}
                        rows={3}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {(editedData.description || "").length}/160 characters
                      </p>
                    </div>

                    <div>
                      <Label>Keywords</Label>
                      <div className="space-y-2">
                        {(editedData.keywords || []).map((keyword, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={keyword}
                              onChange={(e) =>
                                updateKeyword(index, e.target.value)
                              }
                              disabled={!isEditing}
                              placeholder="Enter keyword"
                            />
                            {isEditing && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeKeyword(index)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                        {isEditing && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={addKeyword}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Keyword
                          </Button>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="social" className="space-y-4">
                    <div>
                      <Label htmlFor="ogTitle">Open Graph Title</Label>
                      <Input
                        id="ogTitle"
                        value={editedData.ogTitle || ""}
                        onChange={(e) =>
                          updateEditedData("ogTitle", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="Will use main title if empty"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ogDescription">
                        Open Graph Description
                      </Label>
                      <Textarea
                        id="ogDescription"
                        value={editedData.ogDescription || ""}
                        onChange={(e) =>
                          updateEditedData("ogDescription", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="Will use main description if empty"
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="ogImage">Open Graph Image URL</Label>
                      <Input
                        id="ogImage"
                        value={editedData.ogImage || ""}
                        onChange={(e) =>
                          updateEditedData("ogImage", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="twitterTitle">Twitter Title</Label>
                      <Input
                        id="twitterTitle"
                        value={editedData.twitterTitle || ""}
                        onChange={(e) =>
                          updateEditedData("twitterTitle", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="Will use main title if empty"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4">
                    <div>
                      <Label htmlFor="canonical">Canonical URL</Label>
                      <Input
                        id="canonical"
                        value={editedData.canonical || ""}
                        onChange={(e) =>
                          updateEditedData("canonical", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="https://ioes.com/page-url"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="noindex"
                        checked={editedData.noindex || false}
                        onCheckedChange={(checked) =>
                          updateEditedData("noindex", checked)
                        }
                        disabled={!isEditing}
                      />
                      <Label htmlFor="noindex">
                        No Index (prevent search engine indexing)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="nofollow"
                        checked={editedData.nofollow || false}
                        onCheckedChange={(checked) =>
                          updateEditedData("nofollow", checked)
                        }
                        disabled={!isEditing}
                      />
                      <Label htmlFor="nofollow">
                        No Follow (prevent link following)
                      </Label>
                    </div>

                    <div>
                      <Label htmlFor="themeColor">Theme Color</Label>
                      <Input
                        id="themeColor"
                        value={editedData.themeColor || ""}
                        onChange={(e) =>
                          updateEditedData("themeColor", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="#9f1239"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
