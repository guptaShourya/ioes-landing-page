"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";
import {
  CheckCircle2,
  MapPin,
  School,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Star,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Users,
  Building,
  BookOpen,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import type { College } from "@/types/college";

interface CollegePageProps {
  data: College;
}

export default function CollegePage({ data }: CollegePageProps) {
  const { isOpen, openPopup, closePopup } = usePopup();

  // Handle case where data is null or undefined
  if (!data) {
    return (
      <div className="container px-4 md:px-6 py-20">
        <h1 className="text-2xl font-semibold">College data not available</h1>
        <p className="text-gray-600 mt-2">
          Please try again later or contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src={data.bannerImage || data.logo || "/placeholder.jpg"}
              alt={`${data.name} banner`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative flex min-h-[600px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-4">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100/90 px-3 py-1 text-sm text-rose-800">
                  Top University
                </div>
                <h1 className="text-4xl font-light italic font-nibpro tracking-tighter text-white sm:text-6xl lg:text-7xl">
                  {data.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-400" />
                    {data.city}
                    {data.state ? `, ${data.state}` : ""}, {data.country}
                  </span>
                  {data.established && (
                    <span className="inline-flex items-center gap-2">
                      <School className="h-4 w-4 text-blue-400" />
                      Estd. {data.established}
                    </span>
                  )}
                  {data.type && (
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      {data.type} Institute
                    </Badge>
                  )}
                </div>
              </div>
              <p className="max-w-[800px] mx-auto text-white/90 text-lg md:text-xl font-light">
                {data.overview ||
                  `Discover excellence in education at ${data.name}, one of the world's leading universities offering cutting-edge programs and research opportunities.`}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-lg">
                    {data.statistics?.rating || "4.8"}
                  </span>
                  <span className="text-white/70">
                    /5 ({data.statistics?.reviewCount || "2,500+"} Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-white/70">
                    {data.statistics?.studentCount || "50,000+"} Students
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-[#ED4746] text-white hover:bg-[#ED4746]/90 transition-all duration-300"
                  onClick={openPopup}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
                    About the Institution
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Overview
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {data.overview ||
                      `${data.name} stands as a beacon of academic excellence, renowned for its innovative research, world-class faculty, and commitment to developing future leaders across diverse fields of study.`}
                  </p>
                </div>

                {data.highlights && data.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Highlights</h3>
                    <ul className="space-y-3">
                      {data.highlights.slice(0, 6).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {data.statistics?.establishedDisplay ||
                        data.established ||
                        "1850"}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Established
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {data.statistics?.programCount ||
                        data.programs?.length ||
                        "200+"}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Programs
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {data.statistics?.studentCount || "50K+"}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Students
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {data.statistics?.worldRanking || "QS #15"}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      World Ranking
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-500" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {data.contact?.address && (
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {data.contact.address}
                        </span>
                      </div>
                    )}
                    {data.contact?.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-gray-700">
                          {data.contact.phone}
                        </span>
                      </div>
                    )}
                    {data.contact?.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">
                          {data.contact.email}
                        </span>
                      </div>
                    )}
                    {data.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-purple-500" />
                        <Link
                          href={data.website}
                          target="_blank"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Visit Official Website
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This College Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 font-medium">
                Excellence Redefined
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose {data.name}?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Discover what makes this institution stand out among the world's
                leading universities
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(
                data.whyChoose || [
                  {
                    icon: "Award",
                    title: "World-Class Rankings",
                    description:
                      "Consistently ranked among the top universities globally with excellence across multiple disciplines and research areas.",
                  },
                  {
                    icon: "Users",
                    title: "Distinguished Faculty",
                    description:
                      "Learn from Nobel laureates, industry leaders, and renowned researchers who are pioneers in their respective fields.",
                  },
                  {
                    icon: "BookOpen",
                    title: "Innovative Programs",
                    description:
                      "Access cutting-edge curriculum designed to meet industry demands and prepare you for future challenges.",
                  },
                  {
                    icon: "TrendingUp",
                    title: "Outstanding Placements",
                    description:
                      "97% placement rate with graduates securing positions at top companies worldwide with competitive packages.",
                  },
                  {
                    icon: "Globe",
                    title: "Global Network",
                    description:
                      "Join an extensive alumni network spanning 190+ countries, opening doors to international opportunities.",
                  },
                  {
                    icon: "Building",
                    title: "State-of-Art Facilities",
                    description:
                      "World-class infrastructure including modern labs, libraries, sports complexes, and research centers.",
                  },
                ]
              ).map((feature, index) => {
                const IconComponent =
                  feature.icon === "Award"
                    ? Award
                    : feature.icon === "Users"
                    ? Users
                    : feature.icon === "BookOpen"
                    ? BookOpen
                    : feature.icon === "TrendingUp"
                    ? TrendingUp
                    : feature.icon === "Globe"
                    ? Globe
                    : feature.icon === "Building"
                    ? Building
                    : Award;

                return (
                  <Card
                    key={index}
                    className="transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-100"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="rounded-lg bg-white p-3 w-fit transition-transform duration-300 shadow-sm">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="w-full py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center space-y-6 py-8 px-6 md:px-12 bg-gradient-to-r from-[#ED4746] to-[#d63384] rounded-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Begin Your Journey?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                Get personalized guidance from our education experts and take
                the first step towards your dream university.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#ED4746] hover:bg-gray-100 transition-all duration-300 px-8"
                  onClick={openPopup}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 transition-all duration-300 px-8 text-white"
                >
                  <Link href="/courses" target="_blank">
                    Explore All Courses
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Courses Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
                Academic Excellence
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Top Courses Offered
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Explore our most popular and highly-ranked programs designed to
                shape tomorrow's leaders
              </p>
            </div>

            {data.programs && data.programs.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.programs.slice(0, 6).map((program, index) => (
                  <Card
                    key={index}
                    className="transition-all duration-300 border-0 shadow-md overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100"
                  >
                    <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100 transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg mb-2">
                            {program.name}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {program.subject}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {program.degree}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          {program.duration}
                        </span>
                        <span className="font-semibold text-green-600">
                          {program.fee}
                        </span>
                      </div>
                      {program.nextIntake && (
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          Next Intake: {program.nextIntake}
                        </div>
                      )}
                      <Button
                        className="w-full bg-[#ED4746] hover:bg-[#ED4746]/90 transition-all duration-300"
                        onClick={openPopup}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Courses Information Coming Soon
                </h3>
                <p className="text-gray-500 mb-6">
                  We're updating our course catalog with detailed information.
                </p>
                <Button onClick={openPopup}>Get Course Details</Button>
              </div>
            )}

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/courses">
                  View All Courses
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Admissions Overview Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 font-medium">
                    Admission Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Admissions Overview
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your pathway to academic excellence starts here. We guide
                    you through every step of the admission process.
                  </p>
                </div>

                {data.admissions?.steps && data.admissions.steps.length > 0 ? (
                  <div className="space-y-4">
                    {data.admissions.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md border border-blue-200/50"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {step.title}
                          </h4>
                          {step.description && (
                            <p className="text-sm text-gray-600">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[
                      {
                        title: "Online Application",
                        description:
                          "Complete the online application form with your academic details and personal information.",
                      },
                      {
                        title: "Document Submission",
                        description:
                          "Submit required documents including transcripts, test scores, and recommendation letters.",
                      },
                      {
                        title: "English Proficiency",
                        description:
                          "Demonstrate English proficiency through IELTS, TOEFL, or equivalent tests.",
                      },
                      {
                        title: "Application Review",
                        description:
                          "Our admissions team carefully reviews your application and supporting documents.",
                      },
                      {
                        title: "Admission Decision",
                        description:
                          "Receive your admission decision and next steps for enrollment.",
                      },
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md border border-blue-200/50"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* English Requirements */}
                {data.englishRequirements && 
                  ((data.englishRequirements.undergraduate && data.englishRequirements.undergraduate.length > 0) || 
                   (data.englishRequirements.postgraduate && data.englishRequirements.postgraduate.length > 0)) && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          English Language Requirements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {/* Undergraduate Requirements */}
                          {data.englishRequirements.undergraduate && 
                            data.englishRequirements.undergraduate.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                                Undergraduate Programs
                              </h4>
                              <div className="space-y-3">
                                {data.englishRequirements.undergraduate.map((req, index) => (
                                  <div
                                    key={index}
                                    className="border rounded-lg p-4 bg-gray-50"
                                  >
                                    <div className="font-semibold text-gray-900 mb-1">
                                      {req.test}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {req.min !== undefined &&
                                        `Minimum Score: ${req.min}`}
                                      {req.bandBreakdown && ` • ${req.bandBreakdown}`}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Postgraduate Requirements */}
                          {data.englishRequirements.postgraduate && 
                            data.englishRequirements.postgraduate.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                                Postgraduate Programs
                              </h4>
                              <div className="space-y-3">
                                {data.englishRequirements.postgraduate.map((req, index) => (
                                  <div
                                    key={index}
                                    className="border rounded-lg p-4 bg-gray-50"
                                  >
                                    <div className="font-semibold text-gray-900 mb-1">
                                      {req.test}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {req.min !== undefined &&
                                        `Minimum Score: ${req.min}`}
                                      {req.bandBreakdown && ` • ${req.bandBreakdown}`}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Important Note */}
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-blue-800">
                                <span className="font-medium">*</span> Please note some courses require higher scores, refer to specific course requirements
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                {/* Important Dates */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      Important Dates 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">
                          Application Opens
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {data.importantDates?.applicationOpen ||
                            "January 15, 2025"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">
                          Application Deadline
                        </span>
                        <span className="text-sm font-bold text-orange-600">
                          {data.importantDates?.applicationDeadline ||
                            "June 30, 2025"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">
                          Semester Starts
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          {data.importantDates?.semesterStart ||
                            "September 1, 2025"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Fee */}
                {data.admissions?.applicationFee && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        Application Fee
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {data.admissions.applicationFee}
                      </div>
                      <p className="text-sm text-gray-600">
                        Non-refundable application processing fee
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Placement Overview Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 font-medium">
                Career Success
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Placement Overview
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Outstanding career outcomes that speak to the quality of
                education and industry connections
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-5xl font-bold text-green-600 mb-3">
                  {data.placement?.placementRate || "97%"}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Placement Rate
                </div>
                <div className="text-sm text-gray-600">
                  {data.placement?.placementDescription ||
                    "Graduates placed within 6 months"}
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-5xl font-bold text-blue-600 mb-3">
                  {data.placement?.averagePackage || "$85K"}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Average Package
                </div>
                <div className="text-sm text-gray-600">
                  {data.placement?.averageDescription ||
                    "Annual starting salary"}
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-5xl font-bold text-purple-600 mb-3">
                  {data.placement?.highestPackage || "$180K"}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Highest Package
                </div>
                <div className="text-sm text-gray-600">
                  {data.placement?.highestDescription ||
                    "Record placement achieved"}
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-500" />
                    Top Recruiting Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {(
                      data.placement?.topRecruiters || [
                        "Google",
                        "Microsoft",
                        "Amazon",
                        "Apple",
                        "Goldman Sachs",
                        "McKinsey",
                        "Deloitte",
                        "JP Morgan",
                      ]
                    ).map((company, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">{company}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Industry Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(
                      data.placement?.industryDistribution || [
                        { sector: "Technology", percentage: 35 },
                        { sector: "Finance & Banking", percentage: 25 },
                        { sector: "Consulting", percentage: 20 },
                        { sector: "Healthcare", percentage: 15 },
                        { sector: "Other Industries", percentage: 5 },
                      ]
                    ).map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.sector}</span>
                          <span className="text-gray-600">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300 ${
                              item.percentage >= 35
                                ? "w-[35%]"
                                : item.percentage >= 30
                                ? "w-[30%]"
                                : item.percentage >= 25
                                ? "w-[25%]"
                                : item.percentage >= 20
                                ? "w-[20%]"
                                : item.percentage >= 15
                                ? "w-[15%]"
                                : item.percentage >= 10
                                ? "w-[10%]"
                                : "w-[5%]"
                            }`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section 2 */}
        <section className="w-full py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center space-y-6 py-8 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Start Your Application Today
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                Don't wait - secure your spot at one of the world's leading
                universities. Our experts are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 px-8"
                  onClick={openPopup}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 transition-all duration-300 px-8 text-white"
                >
                  <Link href="/scholarships" target="_blank">
                    Explore Scholarships
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Colleges Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 font-medium">
                Explore More Options
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Similar Colleges
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Discover other world-class institutions that might be perfect
                for your academic journey
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(
                data.similarColleges || [
                  {
                    name: "Harvard University",
                    location: "Cambridge, USA",
                    ranking: "#1 Global",
                    logo: "/placeholder-logo.png",
                    highlights: [
                      "World's top university",
                      "Nobel laureate faculty",
                      "Prestigious alumni network",
                    ],
                  },
                  {
                    name: "Stanford University",
                    location: "California, USA",
                    ranking: "#2 Global",
                    logo: "/placeholder-logo.png",
                    highlights: [
                      "Innovation hub",
                      "Silicon Valley connections",
                      "Entrepreneurship focus",
                    ],
                  },
                  {
                    name: "MIT",
                    location: "Boston, USA",
                    ranking: "#3 Global",
                    logo: "/placeholder-logo.png",
                    highlights: [
                      "Technology leader",
                      "Research excellence",
                      "Industry partnerships",
                    ],
                  },
                ]
              ).map((college, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <School className="h-8 w-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-[#ED4746] transition-colors">
                      {college.name}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center justify-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        {college.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {college.ranking}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {college.highlights?.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-[#ED4746] rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[#ED4746] group-hover:text-white transition-all"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 font-medium">
                Common Questions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Get answers to the most common questions about {data.name}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {(
                data.faqs || [
                  {
                    question: `What are the admission requirements for ${data.name}?`,
                    answer:
                      "Admission requirements typically include completed application forms, academic transcripts, English proficiency test scores (IELTS/TOEFL), letters of recommendation, and a statement of purpose. Specific requirements may vary by program.",
                  },
                  {
                    question: "When is the application deadline?",
                    answer:
                      "Application deadlines vary by program and intake. Generally, applications for the fall semester are due by June 30th, while spring semester applications are due by November 30th. Early applications are encouraged.",
                  },
                  {
                    question: "What scholarships are available?",
                    answer:
                      "The university offers various merit-based and need-based scholarships for international students. These include academic excellence scholarships, diversity scholarships, and program-specific funding opportunities.",
                  },
                  {
                    question: "What is campus life like?",
                    answer:
                      "Campus life is vibrant and diverse, with numerous student organizations, cultural events, sports activities, and academic societies. The university provides comprehensive support services including accommodation, dining, healthcare, and career counseling.",
                  },
                  {
                    question: "What are the career prospects after graduation?",
                    answer:
                      "Graduates have excellent career prospects with a 97% placement rate. The university has strong industry connections and provides career services including internship opportunities, job placement assistance, and alumni networking events.",
                  },
                  {
                    question: "How can I get help with my application?",
                    answer:
                      "Our expert education consultants provide comprehensive application support including document preparation, essay writing assistance, interview coaching, and visa guidance. Contact us for personalized assistance.",
                  },
                ]
              ).map((faq, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#ED4746] transition-colors">
                          {faq.question.replace("{collegeName}", data.name)}
                        </h3>
                        <ChevronRight className="h-5 w-5 text-gray-500 group-open:rotate-90 transition-transform duration-200" />
                      </summary>
                      <div className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <Button size="lg" onClick={openPopup}>
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full p-6 md:p-12 lg:p-24 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container p-6 md:p-12 bg-gradient-to-r from-[#ED4746] to-[#d63384] rounded-2xl text-white">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-white/90 text-lg">
                    <Sparkles className="h-5 w-5" />
                    Your Academic Journey Starts Here
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Ready to Transform Your Future?
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Join thousands of successful students who achieved their
                    dreams with our expert guidance. Your journey to {data.name}{" "}
                    starts with a single conversation.
                  </p>
                </div>

                <ul className="grid gap-3">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Free Consultation & Application Guidance
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Expert Counselors with 100% Success Rate
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Personalized University & Course Matching
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">
                      Scholarship & Financial Aid Support
                    </span>
                  </li>
                </ul>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full lg:w-auto bg-white text-[#ED4746] hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-4"
                    onClick={openPopup}
                  >
                    Start Your Application Journey
                  </Button>
                  <div className="lg:hidden p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-sm text-white/80 text-center">
                      🎯 <strong>Limited Time:</strong> Get priority processing
                      for your {data.name} application
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center space-y-6">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/scholarship-ioes-help.webp"
                    width={500}
                    height={400}
                    alt="IOES counseling session"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>

                <div className="w-full space-y-4">
                  <div className="hidden lg:block p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-sm text-white/80 text-center">
                      🎯 <strong>Limited Time:</strong> Get priority processing
                      for your {data.name} application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}
