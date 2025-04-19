import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export interface CountrySpecificPageProps {
  country: string;
  slug: string;
  flag: string;
  heroImage: string;
  pageType: "culture" | "cost" | "programs" | "careers";
  content: {
    title: string;
    description: string;
    sections: {
      title: string;
      content: React.ReactNode;
      image?: string;
    }[];
  };
}

export function CountrySpecificPage({
  country,
  slug,
  flag,
  heroImage,
  pageType,
  content,
}: CountrySpecificPageProps) {
  const pageTypeLabels = {
    culture: "Culture & Lifestyle",
    cost: "Cost of Living",
    programs: "Study Programs",
    careers: "Career Options",
  };

  const pageTypeDescriptions = {
    culture: `Discover the rich cultural experiences and lifestyle you'll enjoy while studying in ${country}.`,
    cost: `Understand the cost of living and budgeting considerations for students in ${country}.`,
    programs: `Explore the diverse academic programs and educational opportunities available in ${country}.`,
    careers: `Learn about career prospects and post-study work opportunities for international students in ${country}.`,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src={heroImage || "/placeholder.svg?height=600&width=1200"}
              alt={`${pageTypeLabels[pageType]} in ${country}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={flag || "/placeholder.svg?height=30&width=50"}
                alt={`${country} flag`}
                width={30}
                height={20}
                className="rounded"
              />
              <span className="text-sm font-medium">{country}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {pageTypeLabels[pageType]}
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              {pageTypeDescriptions[pageType]}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-white/90"
              >
                Get Free Counseling
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Explore Other Aspects
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  {pageTypeLabels[pageType]}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {content.title}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-16">
              {content.sections.map((section, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-8 md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {section.image && (
                    <div className="md:w-2/5">
                      <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
                        <Image
                          src={
                            section.image ||
                            "/placeholder.svg?height=300&width=400"
                          }
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div
                    className={`flex flex-col justify-center space-y-4 ${
                      section.image ? "md:w-3/5" : "w-full"
                    }`}
                  >
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                    <div className="text-gray-500 space-y-4">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Explore More
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  More About Studying in {country}
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Discover other aspects of student life and opportunities in{" "}
                  {country}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {["culture", "cost", "programs", "careers"]
                .filter((type) => type !== pageType)
                .map((type, index) => (
                  <Link
                    key={index}
                    href={`/destinations/${slug}/${type}`}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={`${country} ${
                        pageTypeLabels[type as keyof typeof pageTypeLabels]
                      }`}
                      width={300}
                      height={200}
                      className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h3 className="text-xl font-bold">
                        {pageTypeLabels[type as keyof typeof pageTypeLabels]}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Study in {country}?
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
                >
                  Book a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  Download {country} Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-gray-50 py-12">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="IOES Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold tracking-tight">IOES</span>
            </Link>
            <p className="text-sm text-gray-500">
              Institute of Overseas Education Services (IOES) is a premier
              education consultancy helping students achieve their dreams of
              studying abroad.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                  </Button>
                )
              )}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:text-blue-800">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-blue-800">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-blue-800">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Study Destinations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/destinations/usa" className="hover:text-blue-800">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/destinations/uk" className="hover:text-blue-800">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/canada"
                  className="hover:text-blue-800"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/australia"
                  className="hover:text-blue-800"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/new-zealand"
                  className="hover:text-blue-800"
                >
                  New Zealand
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/germany"
                  className="hover:text-blue-800"
                >
                  Germany
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-800" />
                <span>123 Education Street, Delhi, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-800" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-blue-800" />
                <span>info@ioes.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-blue-800" />
                <span>Monday - Saturday: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} IOES. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
