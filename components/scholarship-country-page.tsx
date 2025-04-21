"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import {
  ChevronRight,
  Clock,
  FileText,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";
import { Footer } from "./footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "./counselling-form-popup";

export interface ScholarshipType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Scholarship {
  name: string;
  provider: string;
  amount: string;
  description: string;
  eligibility: string[];
  deadline: string;
  website: string;
}

export interface EligibilityCriteria {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ApplicationStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CountryScholarshipData {
  country: string;
  slug: string;
  flag: string;
  overview: string;
  scholarshipTypes: ScholarshipType[];
  governmentScholarships: Scholarship[];
  nonGovernmentScholarships: Scholarship[];
  universityScholarships: Scholarship[];
  eligibilityCriteria: EligibilityCriteria[];
  applicationProcess: ApplicationStep[];
}

interface ScholarshipCountryPageProps {
  data: CountryScholarshipData;
}

export function ScholarshipCountryPage({ data }: ScholarshipCountryPageProps) {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src={
                `/scholarships/${data.slug}-scholarships.webp` ||
                "/placeholder.svg?height=600&width=1200"
              }
              alt={`Scholarships in ${data.country}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={data.flag || "/placeholder.svg?height=30&width=50"}
                alt={`${data.country} flag`}
                width={30}
                height={20}
                className="rounded"
              />
              <span className="text-sm font-medium">Scholarships in</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {data.country}
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              Discover the best scholarship opportunities for Indian students in{" "}
              {data.country}. From government funding to university grants, find
              financial support for your education journey.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-white/90"
                onClick={openPopup}
              >
                Find {data.country} Scholarships
              </Button>
              <Button
                size="lg"
                className="border-white text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white"
              >
                <Link href="/contact">Get Application Support</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Overview
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Scholarship Landscape in {data.country}
                  </h2>
                  <div className="text-gray-500 md:text-xl/relaxed space-y-4">
                    <p>{data.overview}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    className="bg-blue-800 hover:bg-blue-900"
                    onClick={openPopup}
                  >
                    Explore All {data.country} Scholarships
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/indian-student.webp"
                  width={500}
                  height={400}
                  alt={`Students in ${data.country}`}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Scholarship Categories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Types of Scholarships in {data.country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  {data.country} offers various types of scholarships for
                  international students. Understanding these categories can
                  help you target the right opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {data.scholarshipTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{type.icon}</div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-center text-gray-500">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Government Funding
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Top Government Scholarships in {data.country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  These prestigious government-funded scholarships offer
                  significant financial support for Indian students pursuing
                  education in {data.country}.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-8">
              {data.governmentScholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2 md:w-2/3">
                      <h3 className="text-xl font-bold">{scholarship.name}</h3>
                      <p className="text-gray-500">{scholarship.description}</p>
                      <div className="pt-4 space-y-2">
                        <h4 className="font-semibold">Eligibility:</h4>
                        <ul className="list-disc pl-5 text-gray-500 space-y-1">
                          {scholarship.eligibility.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/3 space-y-4">
                      <div className="rounded-lg bg-blue-50 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Provider:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.provider}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Amount:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.amount}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Deadline:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.deadline}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-blue-800 hover:bg-blue-900"
                        asChild
                      >
                        <Link
                          href={scholarship.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Official Website
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Government Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Private Funding
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Non-Government Scholarships in {data.country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  These scholarships are offered by private organizations,
                  foundations, and corporations to support Indian students
                  studying in {data.country}.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-8">
              {data.nonGovernmentScholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2 md:w-2/3">
                      <h3 className="text-xl font-bold">{scholarship.name}</h3>
                      <p className="text-gray-500">{scholarship.description}</p>
                      <div className="pt-4 space-y-2">
                        <h4 className="font-semibold">Eligibility:</h4>
                        <ul className="list-disc pl-5 text-gray-500 space-y-1">
                          {scholarship.eligibility.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/3 space-y-4">
                      <div className="rounded-lg bg-blue-50 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Provider:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.provider}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Amount:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.amount}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Deadline:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.deadline}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-blue-800 hover:bg-blue-900"
                        asChild
                      >
                        <Link
                          href={scholarship.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Official Website
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  University Funding
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Top University Scholarships in {data.country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Many universities in {data.country} offer scholarships
                  specifically for international students. Here are some of the
                  most prestigious university-specific scholarships available.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-8">
              {data.universityScholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2 md:w-2/3">
                      <h3 className="text-xl font-bold">{scholarship.name}</h3>
                      <p className="text-gray-500">{scholarship.description}</p>
                      <div className="pt-4 space-y-2">
                        <h4 className="font-semibold">Eligibility:</h4>
                        <ul className="list-disc pl-5 text-gray-500 space-y-1">
                          {scholarship.eligibility.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/3 space-y-4">
                      <div className="rounded-lg bg-blue-50 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Provider:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.provider}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Amount:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.amount}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            Deadline:
                          </span>
                          <span className="font-medium text-align:right">
                            {scholarship.deadline}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-blue-800 hover:bg-blue-900"
                        asChild
                      >
                        <Link
                          href={scholarship.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Official Website
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Qualification Requirements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Eligibility Criteria for {data.country} Scholarships
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  While specific requirements vary by scholarship, these are the
                  common eligibility criteria that most scholarships in{" "}
                  {data.country} consider for Indian applicants.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {data.eligibilityCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    {criteria.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{criteria.title}</h3>
                    <p className="mt-2 text-gray-500">{criteria.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Application Guide
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  How to Apply for Scholarships in {data.country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Follow this step-by-step process to maximize your chances of
                  securing scholarships for your education in {data.country}.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 md:left-1/2" />
                <div className="space-y-12">
                  {data.applicationProcess.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col gap-6 md:flex-row ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white md:mx-auto">
                        {step.icon}
                      </div>
                      <div
                        className={`flex flex-col justify-center space-y-2 rounded-lg border bg-white p-6 shadow-sm md:w-5/12 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IOES Support Section */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                    Our Support
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    How IOES Helps You Win {data.country} Scholarships
                  </h2>
                  <p className="text-white/80 md:text-xl/relaxed">
                    Our expert counselors provide comprehensive support
                    throughout your scholarship application journey,
                    significantly increasing your chances of success.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <Search className="h-4 w-4" />
                    </div>
                    <span>
                      Personalized {data.country} scholarship matching based on
                      your profile and aspirations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span>
                      Guidance on crafting compelling personal statements and
                      essays
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <Users className="h-4 w-4" />
                    </div>
                    <span>
                      Interview preparation with mock sessions and feedback for{" "}
                      {data.country} scholarship interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>
                      Application timeline management to ensure you never miss a
                      deadline
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <span>
                      Strategic advice from counselors who understand what{" "}
                      {data.country} scholarship committees look for
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/scholarship-ioes-help.webp"
                  width={500}
                  height={400}
                  alt="IOES scholarship counseling session"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Fund Your {data.country} Education?
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Take the first step towards securing financial support for
                  your education in {data.country}. Our expert counselors are
                  ready to guide you through the scholarship application
                  process.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-white/90"
                  onClick={openPopup}
                >
                  Book a Scholarship Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white"
                >
                  Download {data.country} Scholarship Guide
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
