"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  CreditCard,
  Award,
  ChevronRight,
  Clock,
  CheckCircle2,
  Heart,
  Home,
} from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CounselingFormPopup } from "./counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";

// Define the types for our data structure
export interface DestinationData {
  name: string;
  slug: string;
  overview: string;
  image: string;
  flag: string;
  reasons: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  studyAreas: {
    name: string;
    icon: React.ReactNode;
  }[];
  visa: {
    title: string;
    description: string;
    requirements: string[];
  };
  lifestyle: {
    title: string;
    description: string;
    image: string;
  };
  costOfLiving: {
    title: string;
    description: string;
    image: string;
  };
  scholarships: {
    title: string;
    description: string;
    image: string;
  };
  careers: {
    title: string;
    description: string;
    industries: {
      name: string;
      icon: React.ReactNode;
    }[];
  };
  universities?: {
    name: string;
    location: string;
    description: string;
    image: string;
  }[];
  admissionRequirements?: {
    undergraduate: string[];
    postgraduate: string[];
  };
  intakes?: {
    primary: string[];
    secondary: string[];
    applicationDeadlines: {
      undergraduate: string;
      postgraduate: string;
    };
  };
}

interface DestinationPageProps {
  data: DestinationData;
}

export function DestinationPage({ data }: DestinationPageProps) {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src={data.image || "/placeholder.svg"}
              alt={`${data.name} landscape`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative flex min-h-[400px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={data.flag || "/placeholder.svg"}
                alt={`${data.name} flag`}
                width={30}
                height={20}
                className="rounded"
              />
              <span className="text-sm font-medium">Study in</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {data.name}
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              {data.overview}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 hover:shadow-md"
                onClick={openPopup}
              >
                Get Free Counselling
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-blue-800 bg-white hover:bg-blue-900 hover:text-white"
              >
                <Link href={`/destinations/${data.slug}/programs`}>
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Top Three Reasons Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Why Study in {data.name}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Top Reasons to Choose {data.name}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Discover what makes {data.name} an exceptional destination for
                  your international education.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {data.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{reason.icon}</div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-center text-gray-500">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Areas Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Academic Excellence
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Popular Study Areas in {data.name}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  {data.name} offers world-class education across a wide range
                  of disciplines.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {data.studyAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-medium">{area.name}</h3>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href={`/destinations/${data.slug}/programs`}>
                <Button className="bg-blue-800 hover:bg-blue-900">
                  Explore Programs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Visa Assistance Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Visa Guidance
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {data.visa.title}
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    {data.visa.description}
                  </p>
                </div>
                <ul className="grid gap-2">
                  {data.visa.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-800" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-blue-800 hover:bg-blue-900">
                      Get Visa Assistance
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Visa Success Rate</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-800">
                          95%
                        </span>
                      </div>
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#1e40af"
                          strokeWidth="10"
                          strokeDasharray="283"
                          strokeDashoffset="14"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-gray-500">
                    Our expert counselors have helped thousands of students
                    secure their visas successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle, Cost, and Scholarships Grid */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Student Life
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Living in {data.name}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Everything you need to know about student life, expenses, and
                  financial support.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {/* Lifestyle and Culture */}
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{data.lifestyle.title}</h3>
                <p className="flex-1 text-gray-500">
                  {data.lifestyle.description}
                </p>
                <Image
                  src={data.lifestyle.image || "/placeholder.svg"}
                  alt={`Lifestyle in ${data.name}`}
                  width={300}
                  height={200}
                  className="my-4 rounded-lg object-cover"
                />
                <Button variant="outline" className="w-full">
                  <Link href={`/destinations/${data.slug}/culture`}>
                    Learn More About Lifestyle
                  </Link>
                </Button>
              </div>

              {/* Cost of Living */}
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{data.costOfLiving.title}</h3>
                <p className="flex-1 text-gray-500">
                  {data.costOfLiving.description}
                </p>
                <Image
                  src={data.costOfLiving.image || "/placeholder.svg"}
                  alt={`Cost of living in ${data.name}`}
                  width={300}
                  height={200}
                  className="my-4 rounded-lg object-cover"
                />
                <Button variant="outline" className="w-full">
                  <Link href={`/destinations/${data.slug}/cost`}>
                    Learn More About Cost of Living
                  </Link>
                </Button>
              </div>

              {/* Scholarships */}
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{data.scholarships.title}</h3>
                <p className="flex-1 text-gray-500">
                  {data.scholarships.description}
                </p>
                <Image
                  src={data.scholarships.image || "/placeholder.svg"}
                  alt={`Scholarships for studying in ${data.name}`}
                  width={300}
                  height={200}
                  className="my-4 rounded-lg object-cover"
                />
                <Button variant="outline" className="w-full">
                  <Link href={`/scholarships/${data.slug}`}>
                    Learn More About Scholarships
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        {data.universities && data.universities.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Academic Excellence
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Top Universities in {data.name}
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                    Discover the leading institutions that offer world-class
                    education and research opportunities.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {data.universities.map((university, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-4 justify-between rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={university.image || "/placeholder.svg"}
                        alt={university.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{university.name}</h3>
                        <p className="text-sm text-gray-500">
                          {university.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500">{university.description}</p>
                    <Button variant="outline" className="mt-auto">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Career Options Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Career Prospects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {data.careers.title}
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    {data.careers.description}
                  </p>
                </div>
                <div className="pt-4">
                  <Link href={`/destinations/${data.slug}/careers`}>
                    <Button className="bg-blue-800 hover:bg-blue-900">
                      Explore Career Options
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {data.careers.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      {industry.icon}
                    </div>
                    <h3 className="font-medium">{industry.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Admission Requirements Section */}
        {data.admissionRequirements && (
          <section className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Admission Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Admission Requirements
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                    Learn about the requirements for studying in {data.name} at
                    undergraduate and postgraduate levels.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
                {/* Undergraduate Requirements */}
                <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">
                    Undergraduate Requirements
                  </h3>
                  <ul className="space-y-2">
                    {data.admissionRequirements.undergraduate.map(
                      (requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-800 mt-0.5" />
                          <span>{requirement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Postgraduate Requirements */}
                <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">
                    Postgraduate Requirements
                  </h3>
                  <ul className="space-y-2">
                    {data.admissionRequirements.postgraduate.map(
                      (requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-800 mt-0.5" />
                          <span>{requirement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Intakes and Deadlines Section */}
        {data.intakes && (
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Application Timeline
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Intakes & Application Deadlines
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                    Plan your application timeline for studying in {data.name}.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-12">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Main Intake Periods
                      </h3>
                      <ul className="space-y-2">
                        {data.intakes.primary.map((intake, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-800" />
                            <span>{intake}</span>
                          </li>
                        ))}
                        {data.intakes.secondary.length > 0 && (
                          <>
                            <li className="font-medium mt-4">
                              Secondary Intakes:
                            </li>
                            {data.intakes.secondary.map((intake, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Clock className="h-5 w-5 text-blue-800" />
                                <span>{intake}</span>
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Application Deadlines
                      </h3>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h4 className="font-medium">
                            Undergraduate Programs
                          </h4>
                          <p className="text-gray-600 mt-2">
                            {data.intakes.applicationDeadlines.undergraduate}
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h4 className="font-medium">Postgraduate Programs</h4>
                          <p className="text-gray-600 mt-2">
                            {data.intakes.applicationDeadlines.postgraduate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Country-Specific Partners Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Partners
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Partners in {data.name}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  We have established partnerships with leading organizations in{" "}
                  {data.name} to provide comprehensive support for your
                  education journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Link
                href="/services/loan"
                className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <CreditCard className="h-12 w-12 text-blue-800" />
                <h3 className="text-xl font-bold">Loan Partners</h3>
                <p className="text-center text-gray-500">
                  Access to education loans with competitive interest rates
                  through our financial partners in {data.name}.
                </p>
                <Button variant="link" className="mt-auto text-blue-800">
                  View Loan Partners <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/services/health-insurance"
                className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <Heart className="h-12 w-12 text-blue-800" />
                <h3 className="text-xl font-bold">Health Insurance</h3>
                <p className="text-center text-gray-500">
                  Comprehensive health insurance plans through our trusted
                  insurance partners in {data.name}.
                </p>
                <Button variant="link" className="mt-auto text-blue-800">
                  View Insurance Partners{" "}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/services/accommodation"
                className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <Home className="h-12 w-12 text-blue-800" />
                <h3 className="text-xl font-bold">Accommodation</h3>
                <p className="text-center text-gray-500">
                  Find suitable and affordable accommodation options through our
                  housing partners in {data.name}.
                </p>
                <Button variant="link" className="mt-auto text-blue-800">
                  View Accommodation Partners{" "}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Study in {data.name}?
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed">
                  Take the first step towards your international education
                  journey with IOES.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-white/90"
                  onClick={openPopup}
                >
                  Book a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-blue-800 hover:bg-white hover:text-blue-800"
                >
                  Download Country Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />

      <Footer />
    </div>
  );
}
