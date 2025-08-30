"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Plus,
  Filter,
  Download,
  Upload,
  RefreshCw,
  School,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import type { College } from "@/types/college";

interface CollegeListItem extends College {
  lastUpdated?: string;
  seoStatus?: "optimized" | "needs-attention" | "missing";
}

export function ManageCollegesView() {
  const { toast } = useToast();
  const [colleges, setColleges] = useState<CollegeListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [collegeToDelete, setCollegeToDelete] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Load colleges on component mount
  useEffect(() => {
    loadColleges();
  }, []);

  // Load all colleges from Azure
  const loadColleges = async () => {
    try {
      setLoading(true);

      // Get list of all colleges from admin API
      const response = await fetch("/api/admin/colleges?action=list_colleges", {
        headers: {
          Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch colleges");
      }

      const data = await response.json();
      const collegeList = data.colleges || [];

      // Get detailed data for each college with SEO status
      const detailedColleges: CollegeListItem[] = await Promise.all(
        collegeList.map(async (collegeData: any) => {
          try {
            let college: CollegeListItem = collegeData;

            // Get SEO status
            const seoResponse = await fetch(
              `/api/admin/seo?pageSlug=colleges/${collegeData.slug}`,
              {
                headers: {
                  Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
                },
              }
            );

            if (seoResponse.ok) {
              const seoData = await seoResponse.json();
              college.seoStatus = seoData.seoData ? "optimized" : "missing";
            } else {
              college.seoStatus = "missing";
            }

            college.lastUpdated = new Date().toISOString();
            return college;
          } catch (error) {
            console.error(`Error loading college ${collegeData.slug}:`, error);
            return {
              ...collegeData,
              seoStatus: "needs-attention" as const,
              lastUpdated: new Date().toISOString(),
            };
          }
        })
      );

      setColleges(detailedColleges);
    } catch (error) {
      console.error("Error loading colleges:", error);
      toast({
        title: "Error",
        description: "Failed to load colleges. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Refresh data
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadColleges();
    setRefreshing(false);
    toast({
      title: "Success",
      description: "College data refreshed successfully.",
    });
  };

  // Delete college
  const handleDelete = async (slug: string) => {
    try {
      // Delete college data
      const collegeResponse = await fetch(`/api/admin/colleges?slug=${slug}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
        },
      });

      // Delete SEO data
      const seoResponse = await fetch(
        `/api/admin/seo?pageSlug=colleges/${slug}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ioes-seo-admin-2025-secure-key`,
          },
        }
      );

      if (collegeResponse.ok) {
        setColleges((prev) => prev.filter((college) => college.slug !== slug));
        toast({
          title: "Success",
          description: "College deleted successfully.",
        });
      } else {
        throw new Error("Failed to delete college");
      }
    } catch (error) {
      console.error("Error deleting college:", error);
      toast({
        title: "Error",
        description: "Failed to delete college. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setCollegeToDelete(null);
    }
  };

  // Filter colleges based on search and country
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry =
      countryFilter === "all" || college.country === countryFilter;

    return matchesSearch && matchesCountry;
  });

  // Get unique countries for filter
  const countries = Array.from(
    new Set(colleges.map((college) => college.country))
  );

  // Get SEO status badge
  const getSEOStatusBadge = (status: string) => {
    switch (status) {
      case "optimized":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Optimized
          </Badge>
        );
      case "needs-attention":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Needs Attention
          </Badge>
        );
      case "missing":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Missing
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading colleges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            title="Filter by country"
            aria-label="Filter colleges by country"
          >
            <option value="all">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Link href="/admin/add-college">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add College
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Colleges</p>
                <p className="text-2xl font-bold text-blue-600">
                  {colleges.length}
                </p>
              </div>
              <School className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Countries</p>
                <p className="text-2xl font-bold text-green-600">
                  {countries.length}
                </p>
              </div>
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">SEO Optimized</p>
                <p className="text-2xl font-bold text-purple-600">
                  {colleges.filter((c) => c.seoStatus === "optimized").length}
                </p>
              </div>
              <ExternalLink className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Need Attention</p>
                <p className="text-2xl font-bold text-orange-600">
                  {colleges.filter((c) => c.seoStatus !== "optimized").length}
                </p>
              </div>
              <RefreshCw className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Colleges Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Colleges ({filteredColleges.length})</span>
            <Badge variant="outline">{filteredColleges.length} results</Badge>
          </CardTitle>
          <CardDescription>
            Manage your college database with comprehensive information and SEO
            optimization. Click the <strong>"Edit"</strong> button next to any
            college to modify its details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>College</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Programs</TableHead>
                  <TableHead>SEO Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right min-w-[140px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredColleges.map((college) => (
                  <TableRow key={college.slug}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        {college.logo ? (
                          <img
                            src={college.logo}
                            alt={`${college.name} logo`}
                            className="w-10 h-10 rounded-lg object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                            <School className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">
                            {college.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {college.type || "University"} • Est.{" "}
                            {college.established || "N/A"}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          {college.city}, {college.country?.toUpperCase()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {college.programs?.length || 0} programs
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {getSEOStatusBadge(college.seoStatus || "missing")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          {college.lastUpdated
                            ? formatDate(college.lastUpdated)
                            : "N/A"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Direct Edit Button */}
                        <Link href={`/admin/edit-college/${college.slug}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </Link>

                        {/* More Actions Dropdown */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/colleges/${college.slug}`}
                                target="_blank"
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Page
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setCollegeToDelete(college.slug);
                                setDeleteDialogOpen(true);
                              }}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <School className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No colleges found
              </h3>
              <p className="text-gray-500 mb-6">
                {searchTerm || countryFilter !== "all"
                  ? "No colleges match your current filters."
                  : "Get started by adding your first college."}
              </p>
              <Link href="/admin/add-college">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add College
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              college and remove all associated data including SEO metadata.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => collegeToDelete && handleDelete(collegeToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
