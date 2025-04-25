"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "./footer";
import { CounselingFormPopup } from "./counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";

export interface ServicePartner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

export interface CountrySpecificPartners {
  country: string;
  partners: ServicePartner[];
}

export interface ServiceData {
  name: string;
  slug: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  globalPartners: ServicePartner[];
  countryPartners: CountrySpecificPartners[];
}

interface ServicePageProps {
  data: ServiceData;
}

export default function ServicePage({ data }: ServicePageProps) {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[linear-gradient(61deg,_#132e31c7,_#132e318f_38%,_#132e3170_50%,_#132e3100_60%),_linear-gradient(180deg,_#0000_81%,_#132e31_94%),_linear-gradient(to_bottom,_#192b2d80,_#192b2d80)]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                      Our Services
                    </div>
                    <h1 className="text-5xl font-light italic font-nibpro tracking-tighter text-white sm:text-7xl font-light">
                      {data.name}
                    </h1>
                  </div>
                  <p className="max-w-[600px] text-white md:text-xl font-light">
                    {data.longDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                    className="border-white text-white bg-transparent transition-all duration-300"
                  >
                    <Link href="/services">Explore Other Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-white w-full max-w-sm flex justify-center hidden  md:flex">
                  {data.icon}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Benefits
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Why Choose Our {data.name} Service
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  We provide comprehensive support to ensure your academic
                  journey is smooth and successful.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Process
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  {data.process.title}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  We follow a structured approach to ensure you receive the best
                  possible support.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200" />
                <div className="space-y-12">
                  {data.process.steps.map((step, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white">
                        {index + 1}
                      </div>
                      <div className="flex flex-col justify-center space-y-2">
                        <h3 className="text-xl font-medium italic font-nibpro">
                          {step.title}
                        </h3>
                        <p className="text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        {data.globalPartners && data.globalPartners.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Our Partners
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                    Global Partners
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                    We collaborate with leading organizations worldwide to
                    provide you with the best services.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {data.globalPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-evenly items-center space-y-4 rounded-lg border p-6 shadow-sm"
                  >
                    <Image
                      src={
                        partner.logo || "/placeholder.svg?height=80&width=160"
                      }
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="h-20 object-contain"
                    />
                    <h3 className="text-xl font-medium">{partner.name}</h3>
                    <p className="text-center text-gray-500">
                      {partner.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  FAQs
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Frequently Asked
                  <span className="font-nibpro font-light italic">
                    {" "}
                    Questions
                  </span>
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Find answers to common questions about our {data.name}{" "}
                  service.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border p-6">
                    <h3 className="text-lg font-bold italic">{faq.question}</h3>
                    <p className="mt-2 text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-12 md:py-24 bg-blue-800 text-white"
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
                  Ready to Get
                  <span className="font-nibpro font-light italic">
                    {" "}
                    Started?
                  </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  Contact us today for a free consultation and take the first
                  step towards your international education journey.
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
                  <Link href="/services">Explore Other Services</Link>
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
