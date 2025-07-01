"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Globe,
  BookOpen,
  Award,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { buildCourseDetailUrl } from "@/lib/constants";

// API response interface
interface ApiCourse {
  id: string;
  courseName: string;
  courseLevel: string;
  subject: string;
  institutionName: string;
  country: string;
  description: string;
  nextIntake: {
    intakeMonth: string;
    intakeYear: number;
    fees: {
      amount: number;
      currency: string;
    };
    duration: {
      value: number;
      unit: string;
    };
  };
  intakes: Array<{
    campusName: string;
    startMonth: string;
    startYear: number;
    attendanceType: string;
    duration: string;
    fees: number;
    currency: string;
  }>;
  englishRequirements: Array<{
    testName: string;
    minScore: string;
    requirement: string | null;
  }> | null;
  careerProspects: string;
}

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CoursePage({ params }: CoursePageProps) {
  // Unwrap the params Promise
  const resolvedParams = use(params);

  const [course, setCourse] = useState<ApiCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, openPopup, closePopup } = usePopup();

  // Helper function to format subject names
  const formatSubject = (subject: string) => {
    return subject
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
  };

  // Helper function to format duration
  const formatDuration = (duration: { value: number; unit: string }) => {
    const unit = duration.unit.toLowerCase();
    if (unit === "month") {
      if (duration.value === 12) return "1 year";
      if (duration.value === 24) return "2 years";
      if (duration.value === 36) return "3 years";
      if (duration.value === 48) return "4 years";
      if (duration.value === 18) return "1.5 years";
      return `${duration.value} months`;
    }
    return `${duration.value} ${unit}${duration.value > 1 ? "s" : ""}`;
  };

  // Helper function to get country URL slug
  const getCountrySlug = (country: string) => {
    const countryMap: { [key: string]: string } = {
      "United Kingdom": "uk",
      UK: "uk",
      "United States": "usa",
      USA: "usa",
      Canada: "canada",
      Australia: "australia",
      "New Zealand": "new-zealand",
      Ireland: "ireland",
    };

    return countryMap[country] || country.toLowerCase().replace(/\s+/g, "-");
  };

  // Function to fetch course data from API using course ID
  // Note: We're using the course ID as the slug parameter for simplicity
  const fetchCourse = async (courseId: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(buildCourseDetailUrl(courseId), {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          notFound();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiCourse = await response.json();
      setCourse(data);
    } catch (err) {
      console.error("Error fetching course:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch course");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // The slug parameter contains the course ID
    fetchCourse(resolvedParams.slug);
  }, [resolvedParams.slug]);

  const formatFee = (fees: number, currency: string) => {
    return `${currency} ${fees.toLocaleString()}`;
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-rose-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Loading course details...
            </h3>
            <p className="text-gray-600">
              Please wait while we fetch the course information
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Error loading course
            </h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-rose-600 hover:bg-rose-700 text-white"
            >
              Try Again
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Course not found
  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 via-white to-indigo-50 py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-rose-100 text-rose-800 border-rose-200"
                >
                  {course.courseLevel}
                </Badge>
                <Badge variant="outline" className="border-gray-300">
                  {formatSubject(course.subject)}
                </Badge>
              </div>
              <h1 className="text-4xl font-normal tracking-tighter sm:text-5xl font-nibpro mb-4">
                {course.courseName}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="font-medium">{course.institutionName}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{course.country}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>
                    Next Intake: {course.nextIntake.intakeMonth}{" "}
                    {course.nextIntake.intakeYear}
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {course.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openPopup}
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intakes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-rose-600" />
                    Available Intakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.intakes.map((intake, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Campus</p>
                            <p className="font-medium">{intake.campusName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Start Date
                            </p>
                            <p className="font-medium">
                              {intake.startMonth} {intake.startYear}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Duration
                            </p>
                            <p className="font-medium">{intake.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Fees</p>
                            <p className="font-medium text-rose-600">
                              {formatFee(intake.fees, intake.currency)}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <Badge variant="outline" className="border-gray-300">
                            {intake.attendanceType}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* English Requirements */}
              {course.englishRequirements &&
                course.englishRequirements.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-rose-600" />
                        English Language Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.englishRequirements.map((req, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <h4 className="font-medium text-lg mb-2">
                              {req.testName}
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Minimum Score:
                                </span>
                                <span className="font-medium">
                                  {req.minScore}
                                </span>
                              </div>
                              {req.requirement && (
                                <div className="text-gray-600 text-sm">
                                  {req.requirement}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* Career Prospects */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-rose-600" />
                    Career Prospects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {course.careerProspects}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Course Level:</span>
                    <span className="font-medium">{course.courseLevel}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subject:</span>
                    <span className="font-medium">
                      {formatSubject(course.subject)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{course.country}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Intake:</span>
                    <span className="font-medium">
                      {course.nextIntake.intakeMonth}{" "}
                      {course.nextIntake.intakeYear}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">
                      {formatDuration(course.nextIntake.duration)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition Fee:</span>
                    <span className="font-medium text-rose-600">
                      {formatFee(
                        course.nextIntake.fees.amount,
                        course.nextIntake.fees.currency
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-rose-600 to-indigo-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-2">Ready to Apply?</h3>
                  <p className="text-white/90 mb-4">
                    Get expert guidance for your application
                  </p>
                  <Button
                    onClick={openPopup}
                    className="w-full bg-white text-rose-600 hover:bg-gray-100"
                  >
                    Get Free Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Country CTA */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-medium mb-2">
                    Learn More About {course.country}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover study opportunities, culture, and lifestyle
                  </p>
                  <Link
                    href={`/study-in-${getCountrySlug(course.country)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Explore {course.country}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
}
