"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { StudyInCountryData, defaultStudyInCountryTemplate } from "@/types/study-in-country";

interface StudyInCountryPageMetadata {
  slug: string;
  country: string;
  lastUpdated: string;
  isActive: boolean;
}

export function StudyInCountryAdmin() {
  const [pages, setPages] = useState<StudyInCountryPageMetadata[]>([]);
  const [selectedPage, setSelectedPage] = useState<StudyInCountryData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      const response = await fetch("/api/admin/study-in-country");
      if (response.ok) {
        const data = await response.json();
        setPages(data);
      }
    } catch (error) {
      console.error("Error loading pages:", error);
    }
  };

  const loadPageData = async (slug: string) => {
    try {
      const response = await fetch(`/api/admin/study-in-country?slug=${slug}`);
      if (response.ok) {
        const data = await response.json();
        setSelectedPage(data);
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error("Error loading page data:", error);
    }
  };

  const savePage = async (data: StudyInCountryData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/study-in-country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await loadPages();
        setIsDialogOpen(false);
        setSelectedPage(null);
      } else {
        console.error("Error saving page");
      }
    } catch (error) {
      console.error("Error saving page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deletePage = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this page?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/study-in-country?slug=${slug}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadPages();
      } else {
        console.error("Error deleting page");
      }
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  const createNewPage = () => {
    const newPage: StudyInCountryData = {
      ...defaultStudyInCountryTemplate,
      slug: "",
      country: "",
    };
    setSelectedPage(newPage);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Study in Country Pages</h1>
        <Button onClick={createNewPage}>
          <Plus className="mr-2 h-4 w-4" />
          Create New Page
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Existing Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Slug</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.slug}>
                  <TableCell className="font-mono">{page.slug}</TableCell>
                  <TableCell>{page.country}</TableCell>
                  <TableCell>
                    <Badge variant={page.isActive ? "default" : "secondary"}>
                      {page.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(page.lastUpdated).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => loadPageData(page.slug)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deletePage(page.slug)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedPage?.slug ? "Edit Page" : "Create New Page"}
            </DialogTitle>
          </DialogHeader>
          
          {selectedPage && (
            <StudyInCountryPageForm
              data={selectedPage}
              onSave={savePage}
              onCancel={() => setIsDialogOpen(false)}
              isLoading={isLoading}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface StudyInCountryPageFormProps {
  data: StudyInCountryData;
  onSave: (data: StudyInCountryData) => void;
  onCancel: () => void;
  isLoading: boolean;
}

function StudyInCountryPageForm({ 
  data, 
  onSave, 
  onCancel, 
  isLoading 
}: StudyInCountryPageFormProps) {
  const [formData, setFormData] = useState<StudyInCountryData>(data);
  const [activeTab, setActiveTab] = useState("basic");

  const updateField = (path: string[], value: any) => {
    setFormData(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      return updated;
    });
  };

  const updateArrayField = (path: string[], index: number, field: string, value: any) => {
    setFormData(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;
      
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      
      if (current[index]) {
        current[index][field] = value;
      }
      
      return updated;
    });
  };

  const addArrayItem = (path: string[], item: any) => {
    setFormData(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;
      
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      
      current.push(item);
      return updated;
    });
  };

  const removeArrayItem = (path: string[], index: number) => {
    setFormData(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;
      
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      
      current.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const tabs = [
    { id: "basic", label: "Basic Info", icon: "📝" },
    { id: "hero", label: "Hero Section", icon: "🎯" },
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "whyioes", label: "Why IOES", icon: "⭐" },
    { id: "requirements", label: "Requirements", icon: "📋" },
    { id: "costs", label: "Costs", icon: "💰" },
    { id: "consultant", label: "Consultant", icon: "🏆" },
    { id: "testimonials", label: "Testimonials", icon: "💬" },
    { id: "faqs", label: "FAQs", icon: "❓" },
    { id: "seo", label: "SEO", icon: "🔍" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Basic Information Tab */}
        {activeTab === "basic" && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => updateField(["slug"], e.target.value)}
                    placeholder="study-in-usa-seo"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Will be used in URL: /study-in/{formData.slug}
                  </p>
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => updateField(["country"], e.target.value)}
                    placeholder="USA"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => updateField(["isActive"], checked)}
                />
                <Label htmlFor="isActive">Page Active (Published)</Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Hero Section Tab */}
        {activeTab === "hero" && (
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Title *</Label>
                <Input
                  id="heroTitle"
                  value={formData.hero.title}
                  onChange={(e) => updateField(["hero", "title"], e.target.value)}
                  placeholder="Study in USA - Your Gateway to World-Class Education"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="heroSubtitle">Subtitle</Label>
                <Input
                  id="heroSubtitle"
                  value={formData.hero.subtitle}
                  onChange={(e) => updateField(["hero", "subtitle"], e.target.value)}
                  placeholder="Unlock Limitless Opportunities"
                />
              </div>
              
              <div>
                <Label htmlFor="heroDescription">Description</Label>
                <Textarea
                  id="heroDescription"
                  value={formData.hero.description}
                  onChange={(e) => updateField(["hero", "description"], e.target.value)}
                  rows={3}
                  placeholder="Brief compelling description for the hero section"
                />
              </div>
              
              <div>
                <Label htmlFor="heroImage">Hero Image URL</Label>
                <Input
                  id="heroImage"
                  value={formData.hero.image}
                  onChange={(e) => updateField(["hero", "image"], e.target.value)}
                  placeholder="/placeholder.svg?height=400&width=600"
                />
              </div>

              <div>
                <Label htmlFor="heroCta">CTA Button Text</Label>
                <Input
                  id="heroCta"
                  value={formData.hero.ctaText}
                  onChange={(e) => updateField(["hero", "ctaText"], e.target.value)}
                  placeholder="Get Free Counselling"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <Card>
            <CardHeader>
              <CardTitle>Overview Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="overviewTitle">Title *</Label>
                <Input
                  id="overviewTitle"
                  value={formData.overview.title}
                  onChange={(e) => updateField(["overview", "title"], e.target.value)}
                  placeholder="Why Study in the USA?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="overviewDescription">Description</Label>
                <Textarea
                  id="overviewDescription"
                  value={formData.overview.description}
                  onChange={(e) => updateField(["overview", "description"], e.target.value)}
                  rows={4}
                  placeholder="Detailed description about studying in this country"
                />
              </div>
              
              <div>
                <Label htmlFor="overviewImage">Overview Image URL</Label>
                <Input
                  id="overviewImage"
                  value={formData.overview.image}
                  onChange={(e) => updateField(["overview", "image"], e.target.value)}
                  placeholder="/placeholder.svg?height=400&width=500"
                />
              </div>

              <div>
                <Label>Highlights (Key Points)</Label>
                {formData.overview.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Input
                      value={highlight}
                      onChange={(e) => {
                        const newHighlights = [...formData.overview.highlights];
                        newHighlights[index] = e.target.value;
                        updateField(["overview", "highlights"], newHighlights);
                      }}
                      placeholder="Key highlight about the country"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(["overview", "highlights"], index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["overview", "highlights"], "")}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Highlight
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Why IOES Tab */}
        {activeTab === "whyioes" && (
          <Card>
            <CardHeader>
              <CardTitle>Why IOES Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="whyIoesTitle">Title *</Label>
                <Input
                  id="whyIoesTitle"
                  value={formData.whyIoes.title}
                  onChange={(e) => updateField(["whyIoes", "title"], e.target.value)}
                  placeholder="Why Choose IOES for Your USA Study Journey?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="whyIoesDescription">Description</Label>
                <Textarea
                  id="whyIoesDescription"
                  value={formData.whyIoes.description}
                  onChange={(e) => updateField(["whyIoes", "description"], e.target.value)}
                  rows={3}
                  placeholder="Brief description about IOES advantages"
                />
              </div>

              <div>
                <Label>Reasons (4 key reasons)</Label>
                {formData.whyIoes.reasons.map((reason, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Reason {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["whyIoes", "reasons"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <Input
                        value={reason.title}
                        onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "title", e.target.value)}
                        placeholder="Reason title"
                      />
                      <Textarea
                        value={reason.description}
                        onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "description", e.target.value)}
                        placeholder="Reason description"
                        rows={2}
                      />
                      <Input
                        value={reason.icon}
                        onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "icon", e.target.value)}
                        placeholder="Icon name (e.g., university, visa, scholarship)"
                      />
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["whyIoes", "reasons"], { title: "", description: "", icon: "university" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Reason
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <Label htmlFor="whyIoesCtaText">CTA Button Text</Label>
                  <Input
                    id="whyIoesCtaText"
                    value={formData.whyIoes.ctaText}
                    onChange={(e) => updateField(["whyIoes", "ctaText"], e.target.value)}
                    placeholder="Start Your Journey"
                  />
                </div>
                <div>
                  <Label htmlFor="whyIoesCtaDescription">CTA Description</Label>
                  <Input
                    id="whyIoesCtaDescription"
                    value={formData.whyIoes.ctaDescription}
                    onChange={(e) => updateField(["whyIoes", "ctaDescription"], e.target.value)}
                    placeholder="Book a free consultation with our experts"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* SEO Tab */}
        {activeTab === "seo" && (
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seoTitle">Page Title *</Label>
                <Input
                  id="seoTitle"
                  value={formData.seo.title}
                  onChange={(e) => updateField(["seo", "title"], e.target.value)}
                  placeholder="Study in USA | Top Universities & Scholarships | IOES"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.seo.title.length}/60 characters (recommended)
                </p>
              </div>
              
              <div>
                <Label htmlFor="seoDescription">Meta Description *</Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seo.description}
                  onChange={(e) => updateField(["seo", "description"], e.target.value)}
                  rows={3}
                  placeholder="Study in USA with IOES - Get admission to top US universities..."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.seo.description.length}/160 characters (recommended)
                </p>
              </div>
              
              <div>
                <Label htmlFor="seoKeywords">Keywords (comma-separated)</Label>
                <Textarea
                  id="seoKeywords"
                  value={formData.seo.keywords.join(", ")}
                  onChange={(e) => updateField(["seo", "keywords"], e.target.value.split(", ").filter(k => k.trim()))}
                  rows={2}
                  placeholder="study in usa, usa universities, study abroad usa, f1 visa"
                />
              </div>

              <div>
                <Label htmlFor="seoCanonical">Canonical URL</Label>
                <Input
                  id="seoCanonical"
                  value={formData.seo.canonical || ""}
                  onChange={(e) => updateField(["seo", "canonical"], e.target.value)}
                  placeholder="/study-in/usa"
                />
              </div>

              <div>
                <Label htmlFor="seoOgTitle">Open Graph Title</Label>
                <Input
                  id="seoOgTitle"
                  value={formData.seo.ogTitle || ""}
                  onChange={(e) => updateField(["seo", "ogTitle"], e.target.value)}
                  placeholder="Study in USA - World-Class Education & Scholarships | IOES"
                />
              </div>

              <div>
                <Label htmlFor="seoOgDescription">Open Graph Description</Label>
                <Textarea
                  id="seoOgDescription"
                  value={formData.seo.ogDescription || ""}
                  onChange={(e) => updateField(["seo", "ogDescription"], e.target.value)}
                  rows={2}
                  placeholder="Achieve your American dream with IOES. Expert guidance for US university admissions..."
                />
              </div>

              <div>
                <Label htmlFor="seoOgImage">Open Graph Image URL</Label>
                <Input
                  id="seoOgImage"
                  value={formData.seo.ogImage || ""}
                  onChange={(e) => updateField(["seo", "ogImage"], e.target.value)}
                  placeholder="/study-in/usa-og-image.jpg"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add more tabs for Requirements, Costs, Consultant, Testimonials, FAQs as needed */}
        {activeTab === "requirements" && (
          <Card>
            <CardHeader>
              <CardTitle>Application Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="reqTitle">Section Title</Label>
                <Input
                  id="reqTitle"
                  value={formData.applicationRequirements.title}
                  onChange={(e) => updateField(["applicationRequirements", "title"], e.target.value)}
                  placeholder="Application Requirements for US Universities"
                />
              </div>
              
              <div>
                <Label htmlFor="reqDescription">Section Description</Label>
                <Textarea
                  id="reqDescription"
                  value={formData.applicationRequirements.description}
                  onChange={(e) => updateField(["applicationRequirements", "description"], e.target.value)}
                  rows={3}
                  placeholder="Brief description about application requirements"
                />
              </div>

              {/* Undergraduate Requirements */}
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-4">Undergraduate Requirements</h4>
                <div className="space-y-4">
                  <div>
                    <Label>Requirements List</Label>
                    {formData.applicationRequirements.undergraduate.requirements.map((req, index) => (
                      <div key={index} className="flex gap-2 mt-2">
                        <Textarea
                          value={req}
                          onChange={(e) => {
                            const newReqs = [...formData.applicationRequirements.undergraduate.requirements];
                            newReqs[index] = e.target.value;
                            updateField(["applicationRequirements", "undergraduate", "requirements"], newReqs);
                          }}
                          placeholder="Requirement description"
                          rows={1}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["applicationRequirements", "undergraduate", "requirements"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addArrayItem(["applicationRequirements", "undergraduate", "requirements"], "")}
                      className="mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Requirement
                    </Button>
                  </div>

                  <div>
                    <Label>Documents List</Label>
                    {formData.applicationRequirements.undergraduate.documents.map((doc, index) => (
                      <div key={index} className="flex gap-2 mt-2">
                        <Input
                          value={doc}
                          onChange={(e) => {
                            const newDocs = [...formData.applicationRequirements.undergraduate.documents];
                            newDocs[index] = e.target.value;
                            updateField(["applicationRequirements", "undergraduate", "documents"], newDocs);
                          }}
                          placeholder="Required document"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["applicationRequirements", "undergraduate", "documents"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addArrayItem(["applicationRequirements", "undergraduate", "documents"], "")}
                      className="mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Document
                    </Button>
                  </div>
                </div>
              </div>

              {/* Postgraduate Requirements */}
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-4">Postgraduate Requirements</h4>
                <div className="space-y-4">
                  <div>
                    <Label>Requirements List</Label>
                    {formData.applicationRequirements.postgraduate.requirements.map((req, index) => (
                      <div key={index} className="flex gap-2 mt-2">
                        <Textarea
                          value={req}
                          onChange={(e) => {
                            const newReqs = [...formData.applicationRequirements.postgraduate.requirements];
                            newReqs[index] = e.target.value;
                            updateField(["applicationRequirements", "postgraduate", "requirements"], newReqs);
                          }}
                          placeholder="Requirement description"
                          rows={1}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["applicationRequirements", "postgraduate", "requirements"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addArrayItem(["applicationRequirements", "postgraduate", "requirements"], "")}
                      className="mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Requirement
                    </Button>
                  </div>

                  <div>
                    <Label>Documents List</Label>
                    {formData.applicationRequirements.postgraduate.documents.map((doc, index) => (
                      <div key={index} className="flex gap-2 mt-2">
                        <Input
                          value={doc}
                          onChange={(e) => {
                            const newDocs = [...formData.applicationRequirements.postgraduate.documents];
                            newDocs[index] = e.target.value;
                            updateField(["applicationRequirements", "postgraduate", "documents"], newDocs);
                          }}
                          placeholder="Required document"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["applicationRequirements", "postgraduate", "documents"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addArrayItem(["applicationRequirements", "postgraduate", "documents"], "")}
                      className="mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Document
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Costs Tab */}
        {activeTab === "costs" && (
          <Card>
            <CardHeader>
              <CardTitle>Cost of Studying</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="costTitle">Section Title</Label>
                <Input
                  id="costTitle"
                  value={formData.costOfStudying.title}
                  onChange={(e) => updateField(["costOfStudying", "title"], e.target.value)}
                  placeholder="Cost of Studying in the USA"
                />
              </div>
              
              <div>
                <Label htmlFor="costDescription">Section Description</Label>
                <Textarea
                  id="costDescription"
                  value={formData.costOfStudying.description}
                  onChange={(e) => updateField(["costOfStudying", "description"], e.target.value)}
                  rows={3}
                  placeholder="Brief description about costs"
                />
              </div>

              {/* Course Costs */}
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-4">Course Costs</h4>
                <div>
                  <Label htmlFor="courseCostTitle">Course Costs Title</Label>
                  <Input
                    id="courseCostTitle"
                    value={formData.costOfStudying.courseCosts.title}
                    onChange={(e) => updateField(["costOfStudying", "courseCosts", "title"], e.target.value)}
                    placeholder="Annual Tuition Fees by Program Type"
                    className="mb-4"
                  />
                </div>
                
                <Label>Cost Data</Label>
                {formData.costOfStudying.courseCosts.data.map((cost, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium">Cost Item {index + 1}</h5>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["costOfStudying", "courseCosts", "data"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={cost.level}
                          onChange={(e) => updateArrayField(["costOfStudying", "courseCosts", "data"], index, "level", e.target.value)}
                          placeholder="Program Level (e.g., Undergraduate)"
                        />
                        <Input
                          value={cost.field}
                          onChange={(e) => updateArrayField(["costOfStudying", "courseCosts", "data"], index, "field", e.target.value)}
                          placeholder="Field (e.g., Engineering)"
                        />
                        <Input
                          value={cost.averageFee}
                          onChange={(e) => updateArrayField(["costOfStudying", "courseCosts", "data"], index, "averageFee", e.target.value)}
                          placeholder="Fee Range (e.g., $30,000 - $50,000)"
                        />
                        <Input
                          value={cost.currency}
                          onChange={(e) => updateArrayField(["costOfStudying", "courseCosts", "data"], index, "currency", e.target.value)}
                          placeholder="Currency (e.g., USD)"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costOfStudying", "courseCosts", "data"], { level: "", field: "", averageFee: "", currency: "USD" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Cost Item
                </Button>
              </div>

              {/* Living Expenses */}
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-4">Living Expenses</h4>
                <div>
                  <Label htmlFor="livingExpenseTitle">Living Expenses Title</Label>
                  <Input
                    id="livingExpenseTitle"
                    value={formData.costOfStudying.livingExpenses.title}
                    onChange={(e) => updateField(["costOfStudying", "livingExpenses", "title"], e.target.value)}
                    placeholder="Monthly Living Expenses"
                    className="mb-4"
                  />
                </div>
                
                <Label>Expense Data</Label>
                {formData.costOfStudying.livingExpenses.data.map((expense, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium">Expense Item {index + 1}</h5>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["costOfStudying", "livingExpenses", "data"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={expense.category}
                          onChange={(e) => updateArrayField(["costOfStudying", "livingExpenses", "data"], index, "category", e.target.value)}
                          placeholder="Category (e.g., Accommodation)"
                        />
                        <Input
                          value={expense.cost}
                          onChange={(e) => updateArrayField(["costOfStudying", "livingExpenses", "data"], index, "cost", e.target.value)}
                          placeholder="Cost Range (e.g., $800 - $1,500)"
                        />
                        <Input
                          value={expense.currency}
                          onChange={(e) => updateArrayField(["costOfStudying", "livingExpenses", "data"], index, "currency", e.target.value)}
                          placeholder="Currency (e.g., USD)"
                        />
                        <Input
                          value={expense.period}
                          onChange={(e) => updateArrayField(["costOfStudying", "livingExpenses", "data"], index, "period", e.target.value)}
                          placeholder="Period (e.g., per month)"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costOfStudying", "livingExpenses", "data"], { category: "", cost: "", currency: "USD", period: "per month" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Expense Item
                </Button>
              </div>

              {/* Additional Info */}
              <div>
                <Label>Additional Cost Information</Label>
                {formData.costOfStudying.additionalInfo.map((info, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Textarea
                      value={info}
                      onChange={(e) => {
                        const newInfo = [...formData.costOfStudying.additionalInfo];
                        newInfo[index] = e.target.value;
                        updateField(["costOfStudying", "additionalInfo"], newInfo);
                      }}
                      placeholder="Additional cost information"
                      rows={1}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(["costOfStudying", "additionalInfo"], index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costOfStudying", "additionalInfo"], "")}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Info
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Consultant Reasons Tab */}
        {activeTab === "consultant" && (
          <Card>
            <CardHeader>
              <CardTitle>6 Reasons IOES is #1 Consultant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="consultantTitle">Section Title</Label>
                <Input
                  id="consultantTitle"
                  value={formData.consultantReasons.title}
                  onChange={(e) => updateField(["consultantReasons", "title"], e.target.value)}
                  placeholder="6 Reasons Why IOES is the #1 Study in USA Consultant"
                />
              </div>
              
              <div>
                <Label htmlFor="consultantSubtitle">Section Subtitle</Label>
                <Input
                  id="consultantSubtitle"
                  value={formData.consultantReasons.subtitle}
                  onChange={(e) => updateField(["consultantReasons", "subtitle"], e.target.value)}
                  placeholder="Your success is our mission - here's why thousands choose IOES"
                />
              </div>

              <div>
                <Label>6 Consultant Reasons</Label>
                {formData.consultantReasons.reasons.map((reason, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Reason {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["consultantReasons", "reasons"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={reason.number}
                          onChange={(e) => updateArrayField(["consultantReasons", "reasons"], index, "number", e.target.value)}
                          placeholder="Number (e.g., 01)"
                        />
                        <Input
                          value={reason.icon}
                          onChange={(e) => updateArrayField(["consultantReasons", "reasons"], index, "icon", e.target.value)}
                          placeholder="Icon name (e.g., partnership)"
                        />
                      </div>
                      <Input
                        value={reason.title}
                        onChange={(e) => updateArrayField(["consultantReasons", "reasons"], index, "title", e.target.value)}
                        placeholder="Reason title"
                      />
                      <Textarea
                        value={reason.description}
                        onChange={(e) => updateArrayField(["consultantReasons", "reasons"], index, "description", e.target.value)}
                        placeholder="Reason description"
                        rows={3}
                      />
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["consultantReasons", "reasons"], { number: "0" + (formData.consultantReasons.reasons.length + 1), title: "", description: "", icon: "partnership" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Reason
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Testimonials Tab */}
        {activeTab === "testimonials" && (
          <Card>
            <CardHeader>
              <CardTitle>Student Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="testimonialTitle">Section Title</Label>
                  <Input
                    id="testimonialTitle"
                    value={formData.testimonials.title}
                    onChange={(e) => updateField(["testimonials", "title"], e.target.value)}
                    placeholder="Success Stories from USA"
                  />
                </div>
                <div>
                  <Label htmlFor="testimonialSubtitle">Section Subtitle</Label>
                  <Input
                    id="testimonialSubtitle"
                    value={formData.testimonials.subtitle}
                    onChange={(e) => updateField(["testimonials", "subtitle"], e.target.value)}
                    placeholder="Hear from students who achieved their dreams"
                  />
                </div>
              </div>

              <div>
                <Label>Student Testimonials</Label>
                {formData.testimonials.testimonials.map((testimonial, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Testimonial {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["testimonials", "testimonials"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={testimonial.id}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "id", e.target.value)}
                          placeholder="Unique ID (e.g., usa-testimonial-1)"
                        />
                        <Input
                          value={testimonial.name}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "name", e.target.value)}
                          placeholder="Student Name"
                        />
                        <Input
                          value={testimonial.university}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "university", e.target.value)}
                          placeholder="University Name"
                        />
                        <Input
                          value={testimonial.course}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "course", e.target.value)}
                          placeholder="Course/Program"
                        />
                        <Input
                          value={testimonial.image}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "image", e.target.value)}
                          placeholder="Image URL"
                        />
                        <Input
                          type="number"
                          min="1"
                          max="5"
                          value={testimonial.rating}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "rating", parseInt(e.target.value))}
                          placeholder="Rating (1-5)"
                        />
                      </div>
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "text", e.target.value)}
                        placeholder="Testimonial text"
                        rows={3}
                      />
                      <Input
                        value={testimonial.video || ""}
                        onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "video", e.target.value)}
                        placeholder="Video URL (optional)"
                      />
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["testimonials", "testimonials"], { 
                    id: `${formData.country.toLowerCase()}-testimonial-${formData.testimonials.testimonials.length + 1}`, 
                    name: "", 
                    university: "", 
                    course: "", 
                    image: "/placeholder-user.jpg", 
                    text: "", 
                    rating: 5,
                    video: "" 
                  })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Testimonial
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* FAQs Tab */}
        {activeTab === "faqs" && (
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="faqTitle">Section Title</Label>
                <Input
                  id="faqTitle"
                  value={formData.faqs.title}
                  onChange={(e) => updateField(["faqs", "title"], e.target.value)}
                  placeholder="Frequently Asked Questions - Study in USA"
                />
              </div>

              <div>
                <Label>FAQ Questions</Label>
                {formData.faqs.questions.map((faq, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">FAQ {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["faqs", "questions"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <Label>Question</Label>
                        <Input
                          value={faq.question}
                          onChange={(e) => updateArrayField(["faqs", "questions"], index, "question", e.target.value)}
                          placeholder="Frequently asked question"
                        />
                      </div>
                      <div>
                        <Label>Answer</Label>
                        <Textarea
                          value={faq.answer}
                          onChange={(e) => updateArrayField(["faqs", "questions"], index, "answer", e.target.value)}
                          placeholder="Detailed answer to the question"
                          rows={4}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["faqs", "questions"], { question: "", answer: "" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-6 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save Page"}
        </Button>
      </div>
    </form>
  );
}
