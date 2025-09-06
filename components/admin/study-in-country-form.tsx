"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { StudyInCountryData } from "@/types/study-in-country";
import { Plus, X, Upload, Image as ImageIcon } from "lucide-react";

interface StudyInCountryFormProps {
  initialData?: StudyInCountryData;
  onSubmit: (data: StudyInCountryData) => Promise<void>;
  isLoading: boolean;
}

export function StudyInCountryForm({ 
  initialData, 
  onSubmit, 
  isLoading 
}: StudyInCountryFormProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("basic");
  const [uploadingImages, setUploadingImages] = useState<Record<string, boolean>>({});

  // Helper function to ensure complete data structure
  const createCompleteFormData = (data?: StudyInCountryData): StudyInCountryData => {
    const defaultData = {
      slug: "",
      country: "",
      hero: {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        ctaText: "Start Your Journey",
      },
      overview: {
        title: "",
        description: "",
        image: "",
        highlights: [],
      },
      whyIoes: {
        title: "",
        description: "",
        reasons: [],
        ctaText: "Get Started Today",
        ctaDescription: "Book your free consultation",
      },
      applicationRequirements: {
        title: "",
        description: "",
        undergraduate: {
          title: "Undergraduate Requirements",
          requirements: [],
          documents: [],
        },
        postgraduate: {
          title: "Postgraduate Requirements",
          requirements: [],
          documents: [],
        },
      },
      costsAndFinancing: {
        title: "",
        description: "",
        courseCosts: {
          title: "",
          data: [],
        },
        livingExpenses: {
          title: "",
          data: [],
        },
        additionalInfo: [],
      },
      consultantReasons: {
        title: "",
        subtitle: "",
        reasons: [],
      },
      testimonials: {
        title: "",
        subtitle: "",
        testimonials: [],
      },
      faqs: {
        title: "",
        questions: [],
      },
      seo: {
        title: "",
        description: "",
        keywords: [],
      },
      lastUpdated: new Date().toISOString(),
      isActive: true,
    };

    if (!data) return defaultData;

    // Deep merge to ensure all nested structures exist
    return {
      ...defaultData,
      ...data,
      hero: { ...defaultData.hero, ...data.hero },
      overview: { ...defaultData.overview, ...data.overview },
      whyIoes: { ...defaultData.whyIoes, ...data.whyIoes },
      applicationRequirements: {
        ...defaultData.applicationRequirements,
        ...data.applicationRequirements,
        undergraduate: { ...defaultData.applicationRequirements.undergraduate, ...data.applicationRequirements?.undergraduate },
        postgraduate: { ...defaultData.applicationRequirements.postgraduate, ...data.applicationRequirements?.postgraduate },
      },
      costsAndFinancing: {
        ...defaultData.costsAndFinancing,
        ...data.costsAndFinancing,
        courseCosts: { ...defaultData.costsAndFinancing.courseCosts, ...data.costsAndFinancing?.courseCosts },
        livingExpenses: { ...defaultData.costsAndFinancing.livingExpenses, ...data.costsAndFinancing?.livingExpenses },
      },
      consultantReasons: { ...defaultData.consultantReasons, ...data.consultantReasons },
      testimonials: { ...defaultData.testimonials, ...data.testimonials },
      faqs: { ...defaultData.faqs, ...data.faqs },
      seo: { ...defaultData.seo, ...data.seo },
    };
  };

  // Initialize form data with complete structure
  const [formData, setFormData] = useState<StudyInCountryData>(() => 
    createCompleteFormData(initialData)
  );

  // Helper functions for form manipulation
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

  // Image upload function
  const uploadImage = async (file: File, imageType: string): Promise<string> => {
    setUploadingImages(prev => ({ ...prev, [imageType]: true }));
    
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      uploadFormData.append("collegeSlug", formData.slug || "study-in-country");
      uploadFormData.append("imageType", imageType);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: uploadFormData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      return result.imageUrl;
    } catch (error) {
      console.error("Image upload error:", error);
      toast({
        title: "Upload Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setUploadingImages(prev => ({ ...prev, [imageType]: false }));
    }
  };

  // Handle image upload for different fields
  const handleImageUpload = async (
    file: File, 
    imagePath: string[], 
    imageType: string
  ) => {
    try {
      const imageUrl = await uploadImage(file, imageType);
      updateField(imagePath, imageUrl);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      // Error handled in uploadImage function
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
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
        <nav className="-mb-px flex space-x-4 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm flex items-center ${
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
                    placeholder="United States"
                    required
                  />
                </div>
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
                <Label htmlFor="heroTitle">Hero Title *</Label>
                <Input
                  id="heroTitle"
                  value={formData.hero.title}
                  onChange={(e) => updateField(["hero", "title"], e.target.value)}
                  placeholder="Study in USA - Your Gateway to World-Class Education"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  value={formData.hero.subtitle}
                  onChange={(e) => updateField(["hero", "subtitle"], e.target.value)}
                  rows={3}
                  placeholder="Transform your career with globally recognized degrees from top US universities..."
                />
              </div>

              {/* Hero Image Upload */}
              <div>
                <Label>Hero Image</Label>
                <div className="space-y-2">
                  {formData.hero.image && (
                    <div className="relative inline-block">
                      <img 
                        src={formData.hero.image} 
                        alt="Hero image" 
                        className="h-32 w-48 object-cover rounded border"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="absolute top-1 right-1"
                        onClick={() => updateField(["hero", "image"], "")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, ["hero", "image"], "hero-image");
                        }
                      }}
                      className="flex-1"
                    />
                    {uploadingImages["hero-image"] && (
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        Uploading...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="ctaText">CTA Button Text</Label>
                <Input
                  id="ctaText"
                  value={formData.hero.ctaText}
                  onChange={(e) => updateField(["hero", "ctaText"], e.target.value)}
                  placeholder="Start Your Journey"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add remaining tabs here - this is just the structure */}
        {/* ... other tabs will be similar to the previous implementation but with image upload fields */}
        
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <Card>
            <CardHeader>
              <CardTitle>Overview Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="overviewTitle">Overview Title</Label>
                <Input
                  id="overviewTitle"
                  value={formData.overview.title}
                  onChange={(e) => updateField(["overview", "title"], e.target.value)}
                  placeholder="Why Choose USA for Your Studies?"
                />
              </div>
              
              <div>
                <Label htmlFor="overviewDescription">Overview Description</Label>
                <Textarea
                  id="overviewDescription"
                  value={formData.overview.description}
                  onChange={(e) => updateField(["overview", "description"], e.target.value)}
                  rows={4}
                  placeholder="Brief overview about studying in this country..."
                />
              </div>

              {/* Overview Image Upload */}
              <div>
                <Label>Overview Image</Label>
                <div className="space-y-2">
                  {formData.overview.image && (
                    <div className="relative inline-block">
                      <img 
                        src={formData.overview.image} 
                        alt="Overview image" 
                        className="h-32 w-48 object-cover rounded border"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="absolute top-1 right-1"
                        onClick={() => updateField(["overview", "image"], "")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, ["overview", "image"], "overview-image");
                        }
                      }}
                      className="flex-1"
                    />
                    {uploadingImages["overview-image"] && (
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        Uploading...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <Label>Key Highlights</Label>
                {formData.overview.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Input
                      value={highlight}
                      onChange={(e) => {
                        const newHighlights = [...formData.overview.highlights];
                        newHighlights[index] = e.target.value;
                        updateField(["overview", "highlights"], newHighlights);
                      }}
                      placeholder="Key highlight point"
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

        {/* SEO Tab */}
        {activeTab === "seo" && (
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seoTitle">Meta Title</Label>
                <Input
                  id="seoTitle"
                  value={formData.seo.title}
                  onChange={(e) => updateField(["seo", "title"], e.target.value)}
                  placeholder="Study in USA - Best Universities & Scholarships | IOES"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 50-60 characters
                </p>
              </div>
              
              <div>
                <Label htmlFor="seoDescription">Meta Description</Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seo.description}
                  onChange={(e) => updateField(["seo", "description"], e.target.value)}
                  rows={3}
                  placeholder="Discover top universities and scholarship opportunities in the USA. Get expert guidance from IOES consultants..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 150-160 characters
                </p>
              </div>

              <div>
                <Label>SEO Keywords</Label>
                {formData.seo.keywords.map((keyword, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Input
                      value={keyword}
                      onChange={(e) => {
                        const newKeywords = [...formData.seo.keywords];
                        newKeywords[index] = e.target.value;
                        updateField(["seo", "keywords"], newKeywords);
                      }}
                      placeholder="SEO keyword"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(["seo", "keywords"], index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["seo", "keywords"], "")}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Keyword
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Why IOES Tab */}
        {activeTab === "whyioes" && (
          <Card>
            <CardHeader>
              <CardTitle>Why Choose IOES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="whyIoesTitle">Section Title</Label>
                <Input
                  id="whyIoesTitle"
                  value={formData.whyIoes.title}
                  onChange={(e) => updateField(["whyIoes", "title"], e.target.value)}
                  placeholder="Why IOES for USA Studies?"
                />
              </div>
              
              <div>
                <Label htmlFor="whyIoesDescription">Section Description</Label>
                <Textarea
                  id="whyIoesDescription"
                  value={formData.whyIoes.description}
                  onChange={(e) => updateField(["whyIoes", "description"], e.target.value)}
                  rows={3}
                  placeholder="Brief description about why choose IOES..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="whyIoesCtaText">CTA Text</Label>
                  <Input
                    id="whyIoesCtaText"
                    value={formData.whyIoes.ctaText}
                    onChange={(e) => updateField(["whyIoes", "ctaText"], e.target.value)}
                    placeholder="Get Started Today"
                  />
                </div>
                <div>
                  <Label htmlFor="whyIoesCtaDescription">CTA Description</Label>
                  <Input
                    id="whyIoesCtaDescription"
                    value={formData.whyIoes.ctaDescription}
                    onChange={(e) => updateField(["whyIoes", "ctaDescription"], e.target.value)}
                    placeholder="Book your free consultation"
                  />
                </div>
              </div>

              {/* Reasons */}
              <div>
                <Label>Reasons to Choose IOES</Label>
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
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={reason.title}
                          onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "title", e.target.value)}
                          placeholder="Reason title"
                        />
                        <Input
                          value={reason.icon}
                          onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "icon", e.target.value)}
                          placeholder="Icon name (e.g., graduation-cap)"
                        />
                      </div>
                      <Textarea
                        value={reason.description}
                        onChange={(e) => updateArrayField(["whyIoes", "reasons"], index, "description", e.target.value)}
                        placeholder="Reason description"
                        rows={2}
                      />
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["whyIoes", "reasons"], { title: "", description: "", icon: "star" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Reason
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Requirements Tab */}
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
                    <Label htmlFor="undergradTitle">Section Title</Label>
                    <Input
                      id="undergradTitle"
                      value={formData.applicationRequirements.undergraduate.title}
                      onChange={(e) => updateField(["applicationRequirements", "undergraduate", "title"], e.target.value)}
                      placeholder="Undergraduate Requirements"
                    />
                  </div>

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
                    <Label htmlFor="postgradTitle">Section Title</Label>
                    <Input
                      id="postgradTitle"
                      value={formData.applicationRequirements.postgraduate.title}
                      onChange={(e) => updateField(["applicationRequirements", "postgraduate", "title"], e.target.value)}
                      placeholder="Postgraduate Requirements"
                    />
                  </div>

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
                  value={formData.costsAndFinancing.title}
                  onChange={(e) => updateField(["costsAndFinancing", "title"], e.target.value)}
                  placeholder="Cost of Studying in the USA"
                />
              </div>
              
              <div>
                <Label htmlFor="costDescription">Section Description</Label>
                <Textarea
                  id="costDescription"
                  value={formData.costsAndFinancing.description}
                  onChange={(e) => updateField(["costsAndFinancing", "description"], e.target.value)}
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
                    value={formData.costsAndFinancing.courseCosts.title}
                    onChange={(e) => updateField(["costsAndFinancing", "courseCosts", "title"], e.target.value)}
                    placeholder="Annual Tuition Fees by Program Type"
                    className="mb-4"
                  />
                </div>
                
                <Label>Cost Data</Label>
                {formData.costsAndFinancing.courseCosts.data.map((cost, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium">Cost Item {index + 1}</h5>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["costsAndFinancing", "courseCosts", "data"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={cost.level}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "courseCosts", "data"], index, "level", e.target.value)}
                          placeholder="Program Level (e.g., Undergraduate)"
                        />
                        <Input
                          value={cost.field}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "courseCosts", "data"], index, "field", e.target.value)}
                          placeholder="Field (e.g., Engineering)"
                        />
                        <Input
                          value={cost.averageFee}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "courseCosts", "data"], index, "averageFee", e.target.value)}
                          placeholder="Fee Range (e.g., $30,000 - $50,000)"
                        />
                        <Input
                          value={cost.currency}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "courseCosts", "data"], index, "currency", e.target.value)}
                          placeholder="Currency (e.g., USD)"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costsAndFinancing", "courseCosts", "data"], { level: "", field: "", averageFee: "", currency: "USD" })}
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
                    value={formData.costsAndFinancing.livingExpenses.title}
                    onChange={(e) => updateField(["costsAndFinancing", "livingExpenses", "title"], e.target.value)}
                    placeholder="Monthly Living Expenses"
                    className="mb-4"
                  />
                </div>
                
                <Label>Expense Data</Label>
                {formData.costsAndFinancing.livingExpenses.data.map((expense, index) => (
                  <Card key={index} className="mt-4">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium">Expense Item {index + 1}</h5>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem(["costsAndFinancing", "livingExpenses", "data"], index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          value={expense.category}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "livingExpenses", "data"], index, "category", e.target.value)}
                          placeholder="Category (e.g., Accommodation)"
                        />
                        <Input
                          value={expense.cost}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "livingExpenses", "data"], index, "cost", e.target.value)}
                          placeholder="Cost Range (e.g., $800 - $1,500)"
                        />
                        <Input
                          value={expense.currency}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "livingExpenses", "data"], index, "currency", e.target.value)}
                          placeholder="Currency (e.g., USD)"
                        />
                        <Input
                          value={expense.period}
                          onChange={(e) => updateArrayField(["costsAndFinancing", "livingExpenses", "data"], index, "period", e.target.value)}
                          placeholder="Period (e.g., per month)"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costsAndFinancing", "livingExpenses", "data"], { category: "", cost: "", currency: "USD", period: "per month" })}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Expense Item
                </Button>
              </div>

              {/* Additional Info */}
              <div>
                <Label>Additional Cost Information</Label>
                {formData.costsAndFinancing.additionalInfo.map((info, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Textarea
                      value={info}
                      onChange={(e) => {
                        const newInfo = [...formData.costsAndFinancing.additionalInfo];
                        newInfo[index] = e.target.value;
                        updateField(["costsAndFinancing", "additionalInfo"], newInfo);
                      }}
                      placeholder="Additional cost information"
                      rows={1}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(["costsAndFinancing", "additionalInfo"], index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addArrayItem(["costsAndFinancing", "additionalInfo"], "")}
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
                          type="number"
                          min="1"
                          max="5"
                          value={testimonial.rating}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "rating", parseInt(e.target.value))}
                          placeholder="Rating (1-5)"
                        />
                        <Input
                          value={testimonial.video || ""}
                          onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "video", e.target.value)}
                          placeholder="Video URL (optional)"
                        />
                      </div>
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => updateArrayField(["testimonials", "testimonials"], index, "text", e.target.value)}
                        placeholder="Testimonial text"
                        rows={3}
                      />
                      
                      {/* Testimonial Image Upload */}
                      <div>
                        <Label>Student Image</Label>
                        <div className="space-y-2">
                          {testimonial.image && (
                            <div className="relative inline-block">
                              <img 
                                src={testimonial.image} 
                                alt="Student photo" 
                                className="h-16 w-16 object-cover rounded-full border"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="absolute top-0 right-0"
                                onClick={() => updateArrayField(["testimonials", "testimonials"], index, "image", "")}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          <div className="flex gap-2">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  try {
                                    const imageUrl = await uploadImage(file, `testimonial-${index}`);
                                    updateArrayField(["testimonials", "testimonials"], index, "image", imageUrl);
                                    toast({
                                      title: "Success",
                                      description: "Image uploaded successfully",
                                    });
                                  } catch (error) {
                                    // Error handled in uploadImage function
                                  }
                                }
                              }}
                              className="flex-1"
                            />
                            {uploadingImages[`testimonial-${index}`] && (
                              <div className="flex items-center text-sm text-gray-500">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                                Uploading...
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
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

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <Button 
          type="submit" 
          disabled={isLoading}
          className="min-w-32"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Saving...
            </>
          ) : (
            initialData ? "Update Page" : "Create Page"
          )}
        </Button>
      </div>
    </form>
  );
}
