"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUpload } from "@/components/ui/image-upload";
import { MultipleImageUpload } from "@/components/ui/multiple-image-upload";
import {
  Plus,
  Minus,
  Save,
  Upload,
  MapPin,
  School,
  Globe,
  Award,
  FileText,
  Users,
  DollarSign,
  Calendar,
  BookOpen,
  Trash2,
  AlertCircle,
  Star,
  HelpCircle,
  Building,
} from "lucide-react";
import type {
  College,
  Program,
  EnglishRequirement,
  EnglishRequirements,
  Scholarship,
  RankingItem,
} from "@/types/college";

// SEO Data interface
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

// Combined College + SEO interface
interface CollegeWithSEO extends College {
  seoData: SEOData;
}

interface AddCollegeFormProps {
  initialData?: College;
  isEditing?: boolean;
  onSaveSuccess?: () => void;
  onChange?: () => void;
}

export function AddCollegeForm({
  initialData,
  isEditing = false,
  onSaveSuccess,
  onChange,
}: AddCollegeFormProps = {}) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  // Form state
  const [formData, setFormData] = useState<CollegeWithSEO>(() => {
    const defaultStats = {
      rating: 4.5,
      reviewCount: "1,000+",
      studentCount: "10,000+",
      programCount: "100+",
      establishedDisplay: "",
      worldRanking: "",
    };

    const defaultPlacement = {
      placementRate: "",
      averagePackage: "",
      highestPackage: "",
      placementDescription: "",
      averageDescription: "",
      highestDescription: "",
      topRecruiters: [],
      industryDistribution: [],
    };

    if (initialData) {
      return {
        ...initialData,
        statistics: {
          ...defaultStats,
          ...(initialData.statistics || {}),
        },
        placement: {
          ...defaultPlacement,
          ...(initialData.placement || {}),
        },
        seoData: {
          title: "",
          description: "",
          keywords: [],
          ogTitle: "",
          ogDescription: "",
          ogImage: "",
          canonicalUrl: "",
        },
      };
    }

    return {
      slug: "",
      name: "",
      logo: "",
      bannerImage: "",
      website: "",
      city: "",
      state: "",
      country: "",
      established: new Date().getFullYear(),
      type: "",
      rankings: [],
      overview: "",
      highlights: [],
      subjects: [],
      programs: [],
      englishRequirements: {
        undergraduate: [],
        postgraduate: [],
      },
      admissions: {
        applicationFee: "",
        steps: [],
      },
      scholarships: [],
      gallery: [],
      contact: {
        address: "",
        phone: "",
        email: "",
        mapUrl: "",
      },
      statistics: {
        rating: 4.5,
        reviewCount: "1,000+",
        studentCount: "10,000+",
        programCount: "100+",
        establishedDisplay: "",
        worldRanking: "",
      },
      whyChoose: [
        {
          icon: "Award",
          title: "World-Class Rankings",
          description:
            "Consistently ranked among the top universities globally.",
        },
        {
          icon: "Users",
          title: "Distinguished Faculty",
          description: "Learn from industry leaders and renowned researchers.",
        },
        {
          icon: "BookOpen",
          title: "Innovative Programs",
          description:
            "Access cutting-edge curriculum designed for future challenges.",
        },
      ],
      importantDates: {
        applicationOpen: "",
        applicationDeadline: "",
        semesterStart: "",
      },
      placement: {
        placementRate: "",
        averagePackage: "",
        highestPackage: "",
        placementDescription: "",
        averageDescription: "",
        highestDescription: "",
        topRecruiters: [],
        industryDistribution: [],
      },
      similarColleges: [],
      faqs: [
        {
          question: "What are the admission requirements?",
          answer: "Please check our detailed admission requirements section.",
        },
      ],
      seoData: {
        title: "",
        description: "",
        keywords: [],
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        canonicalUrl: "",
      },
    };
  });

  // Load existing SEO data when editing
  React.useEffect(() => {
    if (isEditing && initialData) {
      const loadSEOData = async () => {
        try {
          const response = await fetch(
            `/api/admin/seo?pageSlug=colleges/${initialData.slug}`,
            {
              headers: {
                Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            if (data.seoData) {
              setFormData((prev) => ({
                ...prev,
                seoData: {
                  ...prev.seoData,
                  ...data.seoData,
                },
              }));
            }
          }
        } catch (error) {
          console.error("Error loading SEO data:", error);
        }
      };

      loadSEOData();
    }
  }, [isEditing, initialData]);

  // Generate slug from college name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  // Update form data
  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    onChange?.();
  };

  // Update nested form data
  const updateNestedFormData = (section: string, field: string, value: any) => {
    setFormData((prev) => {
      const sectionData = prev[section as keyof CollegeWithSEO];
      if (typeof sectionData === "object" && sectionData !== null) {
        return {
          ...prev,
          [section]: {
            ...sectionData,
            [field]: value,
          },
        };
      }
      return prev;
    });
    onChange?.();
  };

  // Handle college name change and auto-generate slug
  const handleNameChange = (name: string) => {
    updateFormData("name", name);
    if (name) {
      const slug = generateSlug(name);
      updateFormData("slug", slug);

      // Auto-generate SEO title if not set
      if (!formData.seoData.title) {
        updateNestedFormData(
          "seoData",
          "title",
          `${name} - College Information | IOES`
        );
      }
    }
  };

  // Add item to array fields
  const addArrayItem = (field: string, item: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field as keyof CollegeWithSEO] as any[]), item],
    }));
  };

  // Remove item from array fields
  const removeArrayItem = (field: string, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof CollegeWithSEO] as any[]).filter(
        (_, i) => i !== index
      ),
    }));
  };

  // Update array item
  const updateArrayItem = (field: string, index: number, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof CollegeWithSEO] as any[]).map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  // Validation
  const validateForm = (): boolean => {
    const errors: string[] = [];

    // Basic information validation
    if (!formData.name.trim()) errors.push("College name is required");
    if (!formData.slug.trim()) errors.push("Slug is required");
    if (!formData.city.trim()) errors.push("City is required");
    if (!formData.country.trim()) errors.push("Country is required");
    if (!formData.overview?.trim()) errors.push("Overview is required");

    // SEO validation
    if (!formData.seoData.title.trim()) errors.push("SEO title is required");
    if (!formData.seoData.description.trim())
      errors.push("SEO description is required");
    if (formData.seoData.description.length > 160) {
      errors.push("SEO description must be 160 characters or less");
    }

    // Programs validation
    if (!formData.programs || formData.programs.length === 0) {
      errors.push("At least one program is required");
    }

    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors.join(", "),
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  // Submit form
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Prepare college data (excluding SEO data for college API)
      const { seoData, ...collegeData } = formData;

      // Upload college data
      const collegeResponse = await fetch("/api/admin/colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
        },
        body: JSON.stringify({
          action: isEditing ? "upload_college" : "upload_college",
          data: collegeData,
        }),
      });

      if (!collegeResponse.ok) {
        throw new Error("Failed to upload college data");
      }

      // Upload SEO data
      const seoResponse = await fetch("/api/admin/seo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
        },
        body: JSON.stringify({
          pageSlug: `colleges/${collegeData.slug}`,
          seoData,
        }),
      });

      if (!seoResponse.ok) {
        throw new Error("Failed to upload SEO data");
      }

      toast({
        title: "Success!",
        description: isEditing
          ? "College information updated successfully."
          : "College data and SEO metadata uploaded successfully.",
      });

      // Call success callback if provided, otherwise redirect
      if (onSaveSuccess) {
        onSaveSuccess();
      } else {
        router.push(`/colleges/${collegeData.slug}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to submit form",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-9 gap-1">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        {/* Basic Information Tab */}
        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">College Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g., Harvard University"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => updateFormData("slug", e.target.value)}
                    placeholder="e.g., harvard-university"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    placeholder="e.g., Cambridge"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => updateFormData("state", e.target.value)}
                    placeholder="e.g., Massachusetts"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => updateFormData("country", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="ireland">Ireland</SelectItem>
                      <SelectItem value="new-zealand">New Zealand</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="established">Established Year</Label>
                  <Input
                    id="established"
                    type="number"
                    value={formData.established}
                    onChange={(e) =>
                      updateFormData("established", parseInt(e.target.value))
                    }
                    placeholder="e.g., 1636"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Institution Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => updateFormData("type", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public University</SelectItem>
                      <SelectItem value="private">
                        Private University
                      </SelectItem>
                      <SelectItem value="community">
                        Community College
                      </SelectItem>
                      <SelectItem value="technical">
                        Technical Institute
                      </SelectItem>
                      <SelectItem value="liberal-arts">
                        Liberal Arts College
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData("website", e.target.value)}
                    placeholder="https://www.harvard.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageUpload
                  label="College Logo"
                  currentImageUrl={formData.logo}
                  onImageUpload={(imageUrl) => updateFormData("logo", imageUrl)}
                  onImageRemove={() => updateFormData("logo", "")}
                  collegeSlug={formData.slug}
                  imageType="logo"
                  description="Upload the college's official logo"
                />

                <ImageUpload
                  label="Banner Image"
                  currentImageUrl={formData.bannerImage}
                  onImageUpload={(imageUrl) =>
                    updateFormData("bannerImage", imageUrl)
                  }
                  onImageRemove={() => updateFormData("bannerImage", "")}
                  collegeSlug={formData.slug}
                  imageType="banner"
                  description="Upload a high-quality banner image for the college"
                />
              </div>

              <div>
                <Label htmlFor="overview">College Overview *</Label>
                <Textarea
                  id="overview"
                  value={formData.overview}
                  onChange={(e) => updateFormData("overview", e.target.value)}
                  placeholder="Provide a comprehensive overview of the college..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Highlights */}
              <div>
                <Label>Key Highlights</Label>
                <div className="space-y-2">
                  {(formData.highlights || []).map((highlight, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={highlight}
                        onChange={(e) =>
                          updateArrayItem("highlights", index, e.target.value)
                        }
                        placeholder="Enter a key highlight"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem("highlights", index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addArrayItem("highlights", "")}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Highlight
                  </Button>
                </div>
              </div>

              {/* Subjects */}
              <div>
                <Label>Popular Subjects</Label>
                <div className="space-y-2">
                  {(formData.subjects || []).map((subject, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={subject}
                        onChange={(e) =>
                          updateArrayItem("subjects", index, e.target.value)
                        }
                        placeholder="e.g., Computer Science"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem("subjects", index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addArrayItem("subjects", "")}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Subject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Statistics Tab */}
        <TabsContent value="statistics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                College Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.statistics?.rating || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "rating",
                        parseFloat(e.target.value)
                      )
                    }
                    placeholder="4.8"
                  />
                </div>
                <div>
                  <Label htmlFor="reviewCount">Review Count</Label>
                  <Input
                    id="reviewCount"
                    value={formData.statistics?.reviewCount || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "reviewCount",
                        e.target.value
                      )
                    }
                    placeholder="2,500+"
                  />
                </div>
                <div>
                  <Label htmlFor="studentCount">Student Count</Label>
                  <Input
                    id="studentCount"
                    value={formData.statistics?.studentCount || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "studentCount",
                        e.target.value
                      )
                    }
                    placeholder="50,000+"
                  />
                </div>
                <div>
                  <Label htmlFor="programCount">Program Count</Label>
                  <Input
                    id="programCount"
                    value={formData.statistics?.programCount || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "programCount",
                        e.target.value
                      )
                    }
                    placeholder="200+"
                  />
                </div>
                <div>
                  <Label htmlFor="establishedDisplay">
                    Established Display
                  </Label>
                  <Input
                    id="establishedDisplay"
                    value={formData.statistics?.establishedDisplay || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "establishedDisplay",
                        e.target.value
                      )
                    }
                    placeholder="1827"
                  />
                </div>
                <div>
                  <Label htmlFor="worldRanking">World Ranking</Label>
                  <Input
                    id="worldRanking"
                    value={formData.statistics?.worldRanking || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "statistics",
                        "worldRanking",
                        e.target.value
                      )
                    }
                    placeholder="QS #21"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Programs Tab */}
        <TabsContent value="programs" className="space-y-6">
          <ProgramsSection
            programs={formData.programs || []}
            onProgramsChange={(programs) =>
              updateFormData("programs", programs)
            }
          />
        </TabsContent>

        {/* Placement Tab */}
        <TabsContent value="placement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Placement & Career Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Placement Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="placementRate">Placement Rate</Label>
                  <Input
                    id="placementRate"
                    value={formData.placement?.placementRate || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "placementRate",
                        e.target.value
                      )
                    }
                    placeholder="97%"
                  />
                </div>
                <div>
                  <Label htmlFor="averagePackage">Average Package</Label>
                  <Input
                    id="averagePackage"
                    value={formData.placement?.averagePackage || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "averagePackage",
                        e.target.value
                      )
                    }
                    placeholder="$85K"
                  />
                </div>
                <div>
                  <Label htmlFor="highestPackage">Highest Package</Label>
                  <Input
                    id="highestPackage"
                    value={formData.placement?.highestPackage || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "highestPackage",
                        e.target.value
                      )
                    }
                    placeholder="$180K"
                  />
                </div>
              </div>

              {/* Placement Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="placementDescription">
                    Placement Description
                  </Label>
                  <Input
                    id="placementDescription"
                    value={formData.placement?.placementDescription || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "placementDescription",
                        e.target.value
                      )
                    }
                    placeholder="Graduates placed within 6 months"
                  />
                </div>
                <div>
                  <Label htmlFor="averageDescription">
                    Average Description
                  </Label>
                  <Input
                    id="averageDescription"
                    value={formData.placement?.averageDescription || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "averageDescription",
                        e.target.value
                      )
                    }
                    placeholder="Annual starting salary"
                  />
                </div>
                <div>
                  <Label htmlFor="highestDescription">
                    Highest Description
                  </Label>
                  <Input
                    id="highestDescription"
                    value={formData.placement?.highestDescription || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "placement",
                        "highestDescription",
                        e.target.value
                      )
                    }
                    placeholder="Record placement achieved"
                  />
                </div>
              </div>

              {/* Top Recruiters */}
              <div>
                <Label>Top Recruiters</Label>
                <div className="space-y-2">
                  {(formData.placement?.topRecruiters || []).map(
                    (recruiter, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={recruiter}
                          onChange={(e) => {
                            const newRecruiters = [
                              ...(formData.placement?.topRecruiters || []),
                            ];
                            newRecruiters[index] = e.target.value;
                            updateNestedFormData(
                              "placement",
                              "topRecruiters",
                              newRecruiters
                            );
                          }}
                          placeholder="Company name"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            const newRecruiters = [
                              ...(formData.placement?.topRecruiters || []),
                            ];
                            newRecruiters.splice(index, 1);
                            updateNestedFormData(
                              "placement",
                              "topRecruiters",
                              newRecruiters
                            );
                          }}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const newRecruiters = [
                        ...(formData.placement?.topRecruiters || []),
                        "",
                      ];
                      updateNestedFormData(
                        "placement",
                        "topRecruiters",
                        newRecruiters
                      );
                    }}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Recruiter
                  </Button>
                </div>
              </div>

              {/* Industry Distribution */}
              <div>
                <Label>Industry Distribution</Label>
                <div className="space-y-2">
                  {(formData.placement?.industryDistribution || []).map(
                    (industry, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={industry.sector}
                          onChange={(e) => {
                            const newDistribution = [
                              ...(formData.placement?.industryDistribution ||
                                []),
                            ];
                            newDistribution[index] = {
                              ...newDistribution[index],
                              sector: e.target.value,
                            };
                            updateNestedFormData(
                              "placement",
                              "industryDistribution",
                              newDistribution
                            );
                          }}
                          placeholder="Industry sector"
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={industry.percentage}
                          onChange={(e) => {
                            const newDistribution = [
                              ...(formData.placement?.industryDistribution ||
                                []),
                            ];
                            newDistribution[index] = {
                              ...newDistribution[index],
                              percentage: parseInt(e.target.value),
                            };
                            updateNestedFormData(
                              "placement",
                              "industryDistribution",
                              newDistribution
                            );
                          }}
                          placeholder="Percentage"
                          className="w-24"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            const newDistribution = [
                              ...(formData.placement?.industryDistribution ||
                                []),
                            ];
                            newDistribution.splice(index, 1);
                            updateNestedFormData(
                              "placement",
                              "industryDistribution",
                              newDistribution
                            );
                          }}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const newDistribution = [
                        ...(formData.placement?.industryDistribution || []),
                        { sector: "", percentage: 0 },
                      ];
                      updateNestedFormData(
                        "placement",
                        "industryDistribution",
                        newDistribution
                      );
                    }}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Industry
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Requirements Tab */}
        <TabsContent value="requirements" className="space-y-6">
          <RequirementsSection
            englishRequirements={formData.englishRequirements || { undergraduate: [], postgraduate: [] }}
            admissions={
              formData.admissions || { applicationFee: "", steps: [] }
            }
            scholarships={formData.scholarships || []}
            onEnglishRequirementsChange={(requirements) =>
              updateFormData("englishRequirements", requirements)
            }
            onAdmissionsChange={(admissions) =>
              updateFormData("admissions", admissions)
            }
            onScholarshipsChange={(scholarships) =>
              updateFormData("scholarships", scholarships)
            }
          />
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <RankingsSection
            rankings={formData.rankings || []}
            onRankingsChange={(rankings) =>
              updateFormData("rankings", rankings)
            }
          />
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features" className="space-y-6">
          {/* Why Choose Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Why Choose This College
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(formData.whyChoose || []).map((item, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="flex gap-2">
                    <Input
                      value={item.title}
                      onChange={(e) => {
                        const newWhyChoose = [...(formData.whyChoose || [])];
                        newWhyChoose[index] = {
                          ...newWhyChoose[index],
                          title: e.target.value,
                        };
                        updateFormData("whyChoose", newWhyChoose);
                      }}
                      placeholder="Feature title"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const newWhyChoose = [...(formData.whyChoose || [])];
                        newWhyChoose.splice(index, 1);
                        updateFormData("whyChoose", newWhyChoose);
                      }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={item.description}
                    onChange={(e) => {
                      const newWhyChoose = [...(formData.whyChoose || [])];
                      newWhyChoose[index] = {
                        ...newWhyChoose[index],
                        description: e.target.value,
                      };
                      updateFormData("whyChoose", newWhyChoose);
                    }}
                    placeholder="Feature description"
                    rows={3}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const newWhyChoose = [
                    ...(formData.whyChoose || []),
                    { title: "", description: "" },
                  ];
                  updateFormData("whyChoose", newWhyChoose);
                }}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="applicationOpen">Application Opens</Label>
                  <Input
                    id="applicationOpen"
                    value={formData.importantDates?.applicationOpen || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "importantDates",
                        "applicationOpen",
                        e.target.value
                      )
                    }
                    placeholder="January 15, 2025"
                  />
                </div>
                <div>
                  <Label htmlFor="applicationDeadline">
                    Application Deadline
                  </Label>
                  <Input
                    id="applicationDeadline"
                    value={formData.importantDates?.applicationDeadline || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "importantDates",
                        "applicationDeadline",
                        e.target.value
                      )
                    }
                    placeholder="June 30, 2025"
                  />
                </div>
                <div>
                  <Label htmlFor="semesterStart">Semester Starts</Label>
                  <Input
                    id="semesterStart"
                    value={formData.importantDates?.semesterStart || ""}
                    onChange={(e) =>
                      updateNestedFormData(
                        "importantDates",
                        "semesterStart",
                        e.target.value
                      )
                    }
                    placeholder="September 1, 2025"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(formData.faqs || []).map((faq, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="flex gap-2">
                    <Input
                      value={faq.question}
                      onChange={(e) => {
                        const newFaqs = [...(formData.faqs || [])];
                        newFaqs[index] = {
                          ...newFaqs[index],
                          question: e.target.value,
                        };
                        updateFormData("faqs", newFaqs);
                      }}
                      placeholder="Question"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const newFaqs = [...(formData.faqs || [])];
                        newFaqs.splice(index, 1);
                        updateFormData("faqs", newFaqs);
                      }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={faq.answer}
                    onChange={(e) => {
                      const newFaqs = [...(formData.faqs || [])];
                      newFaqs[index] = {
                        ...newFaqs[index],
                        answer: e.target.value,
                      };
                      updateFormData("faqs", newFaqs);
                    }}
                    placeholder="Answer"
                    rows={3}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const newFaqs = [
                    ...(formData.faqs || []),
                    { question: "", answer: "" },
                  ];
                  updateFormData("faqs", newFaqs);
                }}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
            </CardContent>
          </Card>

          {/* Similar Colleges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Similar Colleges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(formData.similarColleges || []).map((college, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input
                      value={college.name}
                      onChange={(e) => {
                        const newSimilar = [
                          ...(formData.similarColleges || []),
                        ];
                        newSimilar[index] = {
                          ...newSimilar[index],
                          name: e.target.value,
                        };
                        updateFormData("similarColleges", newSimilar);
                      }}
                      placeholder="College name"
                    />
                    <Input
                      value={college.location}
                      onChange={(e) => {
                        const newSimilar = [
                          ...(formData.similarColleges || []),
                        ];
                        newSimilar[index] = {
                          ...newSimilar[index],
                          location: e.target.value,
                        };
                        updateFormData("similarColleges", newSimilar);
                      }}
                      placeholder="Location"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Input
                      type="number"
                      step="0.1"
                      value={college.rating}
                      onChange={(e) => {
                        const newSimilar = [
                          ...(formData.similarColleges || []),
                        ];
                        newSimilar[index] = {
                          ...newSimilar[index],
                          rating: parseFloat(e.target.value),
                        };
                        updateFormData("similarColleges", newSimilar);
                      }}
                      placeholder="Rating"
                    />
                    <Input
                      value={college.fees}
                      onChange={(e) => {
                        const newSimilar = [
                          ...(formData.similarColleges || []),
                        ];
                        newSimilar[index] = {
                          ...newSimilar[index],
                          fees: e.target.value,
                        };
                        updateFormData("similarColleges", newSimilar);
                      }}
                      placeholder="Fees"
                    />
                    <Input
                      value={college.link}
                      onChange={(e) => {
                        const newSimilar = [
                          ...(formData.similarColleges || []),
                        ];
                        newSimilar[index] = {
                          ...newSimilar[index],
                          link: e.target.value,
                        };
                        updateFormData("similarColleges", newSimilar);
                      }}
                      placeholder="Link/slug"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newSimilar = [...(formData.similarColleges || [])];
                      newSimilar.splice(index, 1);
                      updateFormData("similarColleges", newSimilar);
                    }}
                    className="w-full"
                  >
                    <Minus className="h-4 w-4 mr-2" />
                    Remove College
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const newSimilar = [
                    ...(formData.similarColleges || []),
                    {
                      name: "",
                      location: "",
                      rating: 0,
                      fees: "",
                      link: "",
                      highlights: [],
                    },
                  ];
                  updateFormData("similarColleges", newSimilar);
                }}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Similar College
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <ContactSection
            contact={
              formData.contact || {
                address: "",
                phone: "",
                email: "",
                mapUrl: "",
              }
            }
            gallery={formData.gallery || []}
            collegeSlug={formData.slug}
            onContactChange={(contact) => updateFormData("contact", contact)}
            onGalleryChange={(gallery) => updateFormData("gallery", gallery)}
          />
        </TabsContent>

        {/* SEO Tab */}
        <TabsContent value="seo" className="space-y-6">
          <SEOSection
            seoData={formData.seoData}
            collegeName={formData.name}
            collegeSlug={formData.slug}
            onSEODataChange={(seoData) => updateFormData("seoData", seoData)}
          />
        </TabsContent>
      </Tabs>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 pt-6 border-t">
        <Button
          variant="outline"
          onClick={() =>
            isEditing
              ? router.push("/admin/manage-colleges")
              : router.push("/admin")
          }
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="min-w-[120px]"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              {isEditing ? "Updating..." : "Saving..."}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {isEditing ? "Update College" : "Save College"}
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

// Programs Section Component
function ProgramsSection({
  programs,
  onProgramsChange,
}: {
  programs: Program[];
  onProgramsChange: (programs: Program[]) => void;
}) {
  const addProgram = () => {
    const newProgram: Program = {
      name: "",
      degree: "",
      level: "",
      subject: "",
      duration: "",
      fee: "",
      nextIntake: "",
      intakes: [],
    };
    onProgramsChange([...programs, newProgram]);
  };

  const updateProgram = (index: number, field: string, value: any) => {
    const updatedPrograms = programs.map((program, i) =>
      i === index ? { ...program, [field]: value } : program
    );
    onProgramsChange(updatedPrograms);
  };

  const removeProgram = (index: number) => {
    onProgramsChange(programs.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Academic Programs *
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Program {index + 1}</h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeProgram(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Program Name *</Label>
                  <Input
                    value={program.name}
                    onChange={(e) =>
                      updateProgram(index, "name", e.target.value)
                    }
                    placeholder="e.g., Master of Science in Computer Science"
                    required
                  />
                </div>
                <div>
                  <Label>Degree Type *</Label>
                  <Select
                    value={program.degree}
                    onValueChange={(value) =>
                      updateProgram(index, "degree", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="certificate">Certificate</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="bachelor">Bachelor's</SelectItem>
                      <SelectItem value="master">Master's</SelectItem>
                      <SelectItem value="doctoral">Doctoral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Level *</Label>
                  <Select
                    value={program.level}
                    onValueChange={(value) =>
                      updateProgram(index, "level", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">
                        Undergraduate
                      </SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      <SelectItem value="doctoral">Doctoral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Duration *</Label>
                  <Input
                    value={program.duration}
                    onChange={(e) =>
                      updateProgram(index, "duration", e.target.value)
                    }
                    placeholder="e.g., 2 years"
                    required
                  />
                </div>
                <div>
                  <Label>Annual Fee *</Label>
                  <Input
                    value={program.fee}
                    onChange={(e) =>
                      updateProgram(index, "fee", e.target.value)
                    }
                    placeholder="e.g., $45,000"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Subject Area *</Label>
                  <Input
                    value={program.subject}
                    onChange={(e) =>
                      updateProgram(index, "subject", e.target.value)
                    }
                    placeholder="e.g., Computer Science"
                    required
                  />
                </div>
                <div>
                  <Label>Next Intake</Label>
                  <Input
                    value={program.nextIntake}
                    onChange={(e) =>
                      updateProgram(index, "nextIntake", e.target.value)
                    }
                    placeholder="e.g., September 2025"
                  />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addProgram}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Program
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Requirements Section Component
function RequirementsSection({
  englishRequirements,
  admissions,
  scholarships,
  onEnglishRequirementsChange,
  onAdmissionsChange,
  onScholarshipsChange,
}: {
  englishRequirements: EnglishRequirements;
  admissions: any;
  scholarships: Scholarship[];
  onEnglishRequirementsChange: (requirements: EnglishRequirements) => void;
  onAdmissionsChange: (admissions: any) => void;
  onScholarshipsChange: (scholarships: Scholarship[]) => void;
}) {
  const addEnglishRequirement = (level: 'undergraduate' | 'postgraduate') => {
    const newRequirement: EnglishRequirement = {
      test: "",
      min: 0,
      max: 0,
      bandBreakdown: "",
    };
    
    const updated = { ...englishRequirements };
    if (!updated[level]) {
      updated[level] = [];
    }
    updated[level] = [...(updated[level] || []), newRequirement];
    onEnglishRequirementsChange(updated);
  };

  const removeEnglishRequirement = (level: 'undergraduate' | 'postgraduate', index: number) => {
    const updated = { ...englishRequirements };
    if (updated[level]) {
      updated[level] = updated[level]!.filter((_, i) => i !== index);
    }
    onEnglishRequirementsChange(updated);
  };

  const updateEnglishRequirement = (level: 'undergraduate' | 'postgraduate', index: number, field: keyof EnglishRequirement, value: any) => {
    const updated = { ...englishRequirements };
    if (updated[level] && updated[level]![index]) {
      updated[level]![index] = {
        ...updated[level]![index],
        [field]: value,
      };
      onEnglishRequirementsChange(updated);
    }
  };

  const addScholarship = () => {
    const newScholarship: Scholarship = {
      name: "",
      amount: "",
      eligibility: "",
      link: "",
    };
    onScholarshipsChange([...scholarships, newScholarship]);
  };

  const renderEnglishRequirements = (level: 'undergraduate' | 'postgraduate', title: string) => {
    const requirements = englishRequirements[level] || [];
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-lg">{title}</h4>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addEnglishRequirement(level)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add {title} Requirement
          </Button>
        </div>
        
        {requirements.map((req, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <h5 className="font-medium">{title} Requirement {index + 1}</h5>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeEnglishRequirement(level, index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label>Test Type</Label>
                <Select
                  value={req.test}
                  onValueChange={(value) => updateEnglishRequirement(level, index, 'test', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IELTS">IELTS</SelectItem>
                    <SelectItem value="TOEFL">TOEFL</SelectItem>
                    <SelectItem value="PTE">PTE</SelectItem>
                    <SelectItem value="Duolingo">Duolingo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Minimum Score</Label>
                <Input
                  type="number"
                  step="0.5"
                  value={req.min || ''}
                  onChange={(e) => updateEnglishRequirement(level, index, 'min', parseFloat(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label>Maximum Score</Label>
                <Input
                  type="number"
                  step="0.5"
                  value={req.max || ''}
                  onChange={(e) => updateEnglishRequirement(level, index, 'max', parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="md:col-span-1">
                <Label>Band Breakdown</Label>
                <Input
                  value={req.bandBreakdown || ''}
                  onChange={(e) => updateEnglishRequirement(level, index, 'bandBreakdown', e.target.value)}
                  placeholder="e.g., 6.0 in each band"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* English Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>English Language Requirements</CardTitle>
          <p className="text-sm text-gray-600">
            Add English language requirements for undergraduate and postgraduate programs separately.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {renderEnglishRequirements('undergraduate', 'Undergraduate Programs')}
            <Separator />
            {renderEnglishRequirements('postgraduate', 'Postgraduate Programs')}
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium">Note:</p>
                  <p>A disclaimer will be automatically added: "Please note some courses require higher scores, refer to specific course requirements"</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admissions */}
      <Card>
        <CardHeader>
          <CardTitle>Admissions Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Application Fee</Label>
            <Input
              value={admissions.applicationFee}
              onChange={(e) =>
                onAdmissionsChange({
                  ...admissions,
                  applicationFee: e.target.value,
                })
              }
              placeholder="e.g., $100"
            />
          </div>

          {/* Admission Steps */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Admission Process Steps
            </Label>
            {(admissions.steps || []).map(
              (
                step: { title: string; description?: string },
                index: number
              ) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <Input
                      value={step.title}
                      onChange={(e) => {
                        const updatedSteps = [...(admissions.steps || [])];
                        updatedSteps[index] = {
                          ...updatedSteps[index],
                          title: e.target.value,
                        };
                        onAdmissionsChange({
                          ...admissions,
                          steps: updatedSteps,
                        });
                      }}
                      placeholder="Step title (e.g., Online Application)"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const updatedSteps = [...(admissions.steps || [])];
                        updatedSteps.splice(index, 1);
                        onAdmissionsChange({
                          ...admissions,
                          steps: updatedSteps,
                        });
                      }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={step.description || ""}
                    onChange={(e) => {
                      const updatedSteps = [...(admissions.steps || [])];
                      updatedSteps[index] = {
                        ...updatedSteps[index],
                        description: e.target.value,
                      };
                      onAdmissionsChange({
                        ...admissions,
                        steps: updatedSteps,
                      });
                    }}
                    placeholder="Step description (optional)"
                    rows={2}
                  />
                </div>
              )
            )}
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const newStep = { title: "", description: "" };
                onAdmissionsChange({
                  ...admissions,
                  steps: [...(admissions.steps || []), newStep],
                });
              }}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Admission Step
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scholarships */}
      <Card>
        <CardHeader>
          <CardTitle>Scholarships</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Scholarship {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      onScholarshipsChange(
                        scholarships.filter((_, i) => i !== index)
                      )
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Scholarship Name</Label>
                    <Input
                      value={scholarship.name}
                      onChange={(e) => {
                        const updated = [...scholarships];
                        updated[index] = {
                          ...updated[index],
                          name: e.target.value,
                        };
                        onScholarshipsChange(updated);
                      }}
                      placeholder="e.g., Merit Scholarship"
                    />
                  </div>
                  <div>
                    <Label>Amount</Label>
                    <Input
                      value={scholarship.amount}
                      onChange={(e) => {
                        const updated = [...scholarships];
                        updated[index] = {
                          ...updated[index],
                          amount: e.target.value,
                        };
                        onScholarshipsChange(updated);
                      }}
                      placeholder="e.g., $10,000"
                    />
                  </div>
                </div>

                <div>
                  <Label>Eligibility</Label>
                  <Textarea
                    value={scholarship.eligibility}
                    onChange={(e) => {
                      const updated = [...scholarships];
                      updated[index] = {
                        ...updated[index],
                        eligibility: e.target.value,
                      };
                      onScholarshipsChange(updated);
                    }}
                    placeholder="Describe eligibility criteria..."
                  />
                </div>

                <div>
                  <Label>Application Link</Label>
                  <Input
                    type="url"
                    value={scholarship.link}
                    onChange={(e) => {
                      const updated = [...scholarships];
                      updated[index] = {
                        ...updated[index],
                        link: e.target.value,
                      };
                      onScholarshipsChange(updated);
                    }}
                    placeholder="https://scholarship-application-link.com"
                  />
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addScholarship}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Scholarship
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Rankings Section Component
function RankingsSection({
  rankings,
  onRankingsChange,
}: {
  rankings: RankingItem[];
  onRankingsChange: (rankings: RankingItem[]) => void;
}) {
  const addRanking = () => {
    const newRanking: RankingItem = {
      rank: "",
      value: "",
      year: new Date().getFullYear(),
    };
    onRankingsChange([...rankings, newRanking]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Rankings & Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rankings.map((ranking, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Ranking {index + 1}</h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    onRankingsChange(rankings.filter((_, i) => i !== index))
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Ranking Authority</Label>
                  <Input
                    value={ranking.rank}
                    onChange={(e) => {
                      const updated = [...rankings];
                      updated[index] = {
                        ...updated[index],
                        rank: e.target.value,
                      };
                      onRankingsChange(updated);
                    }}
                    placeholder="e.g., QS World Rankings"
                  />
                </div>
                <div>
                  <Label>Rank/Position</Label>
                  <Input
                    value={ranking.value}
                    onChange={(e) => {
                      const updated = [...rankings];
                      updated[index] = {
                        ...updated[index],
                        value: e.target.value,
                      };
                      onRankingsChange(updated);
                    }}
                    placeholder="e.g., #5"
                  />
                </div>
                <div>
                  <Label>Year</Label>
                  <Input
                    type="number"
                    value={ranking.year}
                    onChange={(e) => {
                      const updated = [...rankings];
                      updated[index] = {
                        ...updated[index],
                        year: parseInt(e.target.value),
                      };
                      onRankingsChange(updated);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addRanking}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Ranking
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Contact Section Component
function ContactSection({
  contact,
  gallery,
  collegeSlug,
  onContactChange,
  onGalleryChange,
}: {
  contact: any;
  gallery: string[];
  collegeSlug?: string;
  onContactChange: (contact: any) => void;
  onGalleryChange: (gallery: string[]) => void;
}) {
  const addGalleryImage = () => {
    onGalleryChange([...gallery, ""]);
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Address</Label>
            <Textarea
              value={contact.address}
              onChange={(e) =>
                onContactChange({
                  ...contact,
                  address: e.target.value,
                })
              }
              placeholder="Enter full address..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Phone</Label>
              <Input
                value={contact.phone}
                onChange={(e) =>
                  onContactChange({
                    ...contact,
                    phone: e.target.value,
                  })
                }
                placeholder="+1-555-123-4567"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={contact.email}
                onChange={(e) =>
                  onContactChange({
                    ...contact,
                    email: e.target.value,
                  })
                }
                placeholder="admissions@college.edu"
              />
            </div>
          </div>

          <div>
            <Label>Google Maps URL</Label>
            <Input
              type="url"
              value={contact.mapUrl}
              onChange={(e) =>
                onContactChange({
                  ...contact,
                  mapUrl: e.target.value,
                })
              }
              placeholder="https://maps.google.com/..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Gallery */}
      <MultipleImageUpload
        label="Gallery Images"
        currentImages={gallery}
        onImagesChange={onGalleryChange}
        collegeSlug={collegeSlug}
        imageType="gallery"
        maxImages={20}
        description="Upload multiple images to showcase the college campus, facilities, and student life"
      />
    </div>
  );
}

// SEO Section Component
function SEOSection({
  seoData,
  collegeName,
  collegeSlug,
  onSEODataChange,
}: {
  seoData: SEOData;
  collegeName: string;
  collegeSlug?: string;
  onSEODataChange: (seoData: SEOData) => void;
}) {
  const updateSEOData = (field: string, value: any) => {
    onSEODataChange({
      ...seoData,
      [field]: value,
    });
  };

  const addKeyword = (keyword: string) => {
    if (keyword && !seoData.keywords.includes(keyword)) {
      updateSEOData("keywords", [...seoData.keywords, keyword]);
    }
  };

  const removeKeyword = (index: number) => {
    updateSEOData(
      "keywords",
      seoData.keywords.filter((_, i) => i !== index)
    );
  };

  const [keywordInput, setKeywordInput] = useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          SEO Metadata
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="seoTitle">SEO Title *</Label>
          <Input
            id="seoTitle"
            value={seoData.title}
            onChange={(e) => updateSEOData("title", e.target.value)}
            placeholder={`${collegeName} - College Information | IOES`}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            {seoData.title.length}/60 characters (recommended)
          </p>
        </div>

        <div>
          <Label htmlFor="seoDescription">SEO Description *</Label>
          <Textarea
            id="seoDescription"
            value={seoData.description}
            onChange={(e) => updateSEOData("description", e.target.value)}
            placeholder="Comprehensive information about college programs, admissions, and more..."
            className="min-h-[100px]"
            maxLength={160}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            {seoData.description.length}/160 characters (recommended)
          </p>
        </div>

        <div>
          <Label>SEO Keywords</Label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="Enter a keyword"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addKeyword(keywordInput.trim());
                    setKeywordInput("");
                  }
                }}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  addKeyword(keywordInput.trim());
                  setKeywordInput("");
                }}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {seoData.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="gap-1">
                  {keyword}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 hover:bg-transparent"
                    onClick={() => removeKeyword(index)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="ogTitle">Open Graph Title</Label>
            <Input
              id="ogTitle"
              value={seoData.ogTitle}
              onChange={(e) => updateSEOData("ogTitle", e.target.value)}
              placeholder="Leave empty to use SEO title"
            />
          </div>
        </div>

        <ImageUpload
          label="Open Graph Image"
          currentImageUrl={seoData.ogImage}
          onImageUpload={(imageUrl) => updateSEOData("ogImage", imageUrl)}
          onImageRemove={() => updateSEOData("ogImage", "")}
          collegeSlug={collegeSlug}
          imageType="og-image"
          description="Upload an image for social media sharing (recommended: 1200x630px)"
        />

        <div>
          <Label htmlFor="ogDescription">Open Graph Description</Label>
          <Textarea
            id="ogDescription"
            value={seoData.ogDescription}
            onChange={(e) => updateSEOData("ogDescription", e.target.value)}
            placeholder="Leave empty to use SEO description"
          />
        </div>

        <div>
          <Label htmlFor="canonicalUrl">Canonical URL</Label>
          <Input
            id="canonicalUrl"
            type="url"
            value={seoData.canonicalUrl}
            onChange={(e) => updateSEOData("canonicalUrl", e.target.value)}
            placeholder="https://ioes.com/colleges/college-slug"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">SEO Tips</h4>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Keep title under 60 characters</li>
                <li>• Keep description between 150-160 characters</li>
                <li>• Include target keywords naturally</li>
                <li>• Make titles and descriptions compelling for users</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
