"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "./footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "./counselling-form-popup";

export interface CountrySpecificPageProps {
  country: string;
  slug: string;
  flag: string;
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

  pageType,
  content,
}: CountrySpecificPageProps) {
  const pageTypeLabels = {
    culture: "Culture & Lifestyle",
    cost: "Cost of Living",
    programs: "Study Programs",
    careers: "Career Options",
    scholarships: "Scholarships",
  };

  const pageTypeDescriptions = {
    culture: `Discover the rich cultural experiences and lifestyle you'll enjoy while studying in ${country}.`,
    cost: `Understand the cost of living and budgeting considerations for students in ${country}.`,
    programs: `Explore the diverse academic programs and educational opportunities available in ${country}.`,
    careers: `Learn about career prospects and post-study work opportunities for international students in ${country}.`,
  };
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src={`/${pageType}/${slug}-${pageType}.webp`}
              alt={`${pageTypeLabels[pageType]} in ${country}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 to-indigo-900/70" /> */}
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
              <span className="text-normal font-medium">{country}</span>
            </div>
            <h1 className="text-5xl font-light italic font-nibpro tracking-tighter text-white sm:text-7xl font-light">
              {pageTypeLabels[pageType]}
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              {pageTypeDescriptions[pageType]}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                className="border-white bg-transparent text-white hover:text-white hover:bg-transparent hover:opacity-80 transitions-all duration-300"
              >
                <Link href={`/destinations/${slug}/${pageType}#more-aspects`}>
                  Explore Other Aspects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  {pageTypeLabels[pageType]}
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  {content.title}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-16">
              {content.sections.map((section, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-8 md:gap-16 md:items-stretch md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {section.image && (
                    <div className="w-full md:w-2/5 flex justify-center items-center">
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
                      section.image ? "w-full md:w-3/5" : "w-full"
                    }`}
                  >
                    <h3 className="text-2xl font-medium italic font-nibpro">
                      {section.title}
                    </h3>
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
        <section className="w-full py-12 md:py-24 bg-white" id="more-aspects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Explore More
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  More About {country}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Discover other aspects of student life and opportunities in{" "}
                  {country}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {["programs", "culture", "cost", "scholarships", "careers"]
                .filter((type) => type !== pageType)
                .map((type, index) => (
                  <Link
                    key={index}
                    href={
                      type != "scholarships"
                        ? `/destinations/${slug}/${type}`
                        : `/scholarships/${slug}`
                    }
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={`/${type}/${slug}-${type}.webp`}
                      alt={`${country} ${
                        pageTypeLabels[type as keyof typeof pageTypeLabels]
                      }`}
                      width={300}
                      height={200}
                      className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h3 className="text-xl font-medium">
                        {pageTypeLabels[type as keyof typeof pageTypeLabels]}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-rose-600 hover:text-white hover:bg-rose-800 transitions-all duration-300"
              >
                <Link href={`/study-abroad#destinations`}>
                  Explore Other Destinations
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-12 md:py-24 bg-rose-800 text-white"
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-4">
                <h2 className="mb-2 text-4xl font-normal tracking-tighter text-white sm:text-5xl sm:mb-4">
                  Ready to Study in{" "}
                  <span className="font-light italic font-nibpro">
                    {country}?
                  </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  Take the first step towards your international education
                  journey with IOES.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-[#ED4746] text-white hover:bg-[#ED4746]/90 transition-all duration-300"
                  onClick={openPopup}
                >
                  Book a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-transparent transition-all duration-300"
                >
                  Download {country} Guide
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
