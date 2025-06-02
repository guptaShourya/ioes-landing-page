"use client";

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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { courses } from "@/data/courses";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);
  const { isOpen, openPopup, closePopup } = usePopup();

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter(
      (c) =>
        c.id !== course.id &&
        (c.subject === course.subject || c.country === course.country)
    )
    .slice(0, 3);

  const formatFee = (fees: number, currency: string) => {
    return `${currency} ${fees.toLocaleString()}`;
  };

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
                  {course.subject}
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
                  <span>
                    {course.city}, {course.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  <span>{course.degreeAwarded}</span>
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
              {/* Course Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
                    Course Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

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
                        key={intake.id}
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
                              Overall Score:
                            </span>
                            <span className="font-medium">
                              {req.overallScore}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Score Range:</span>
                            <span className="font-medium">
                              {req.minScore} - {req.maxScore || "Max"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Prospects */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-rose-600" />
                    Career Prospects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.careerProspects.map((career, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-rose-600 rounded-full mr-3" />
                        <span className="text-gray-700">{career}</span>
                      </div>
                    ))}
                  </div>
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
                    <span className="font-medium">{course.subject}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">
                      {course.city}, {course.country}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Intake:</span>
                    <span className="font-medium">{course.nextIntake}</span>
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
                  <Link href={`/destinations/${course.country.toLowerCase()}`}>
                    <Button variant="outline" className="w-full">
                      Explore {course.country}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Courses */}
          {relatedCourses.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-medium mb-8">Related Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <Card
                    key={relatedCourse.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">
                        {relatedCourse.courseName}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {relatedCourse.institutionName}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>
                            {relatedCourse.city}, {relatedCourse.country}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Next: {relatedCourse.nextIntake}</span>
                        </div>
                      </div>
                      <Link href={`/courses/${relatedCourse.slug}`}>
                        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
}
