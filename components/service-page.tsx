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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Our Services
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {data.name}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    {data.longDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-blue-800 hover:bg-blue-900"
                    onClick={openPopup}
                  >
                    Get Free Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/services">Explore Other Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-blue-800 w-full max-w-sm flex justify-center">
                  {data.icon}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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

        {/* Partners Section */}
        {data.globalPartners && data.globalPartners.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Our Partners
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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
                    <h3 className="text-xl font-bold">{partner.name}</h3>
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

        {/* Country-Specific Partners Section */}
        {/* {data.countryPartners.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Country-Specific Partners
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Partners by Destination
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                    We have established partnerships in various countries to
                    support your specific needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-12">
                <div className="space-y-12">
                  {data.countryPartners.map((countryPartner, index) => (
                    <div key={index} className="space-y-6">
                      <h3 className="text-2xl font-bold">
                        {countryPartner.country}
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {countryPartner.partners.map(
                          (partner, partnerIndex) => (
                            <div
                              key={partnerIndex}
                              className="flex flex-col space-y-2 rounded-lg border bg-white p-4 shadow-sm"
                            >
                              <Image
                                src={
                                  partner.logo ||
                                  "/placeholder.svg?height=60&width=120"
                                }
                                alt={partner.name}
                                width={120}
                                height={60}
                                className="h-15 object-contain"
                              />
                              <h4 className="font-bold">{partner.name}</h4>
                              <p className="text-sm text-gray-500">
                                {partner.description}
                              </p>
                              <Button
                                variant="link"
                                size="sm"
                                asChild
                                className="mt-auto"
                              >
                                <Link
                                  href={partner.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Visit Website
                                </Link>
                              </Button>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )} */}

        {/* FAQs Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  FAQs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
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
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p className="mt-2 text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed">
                  Contact us today for a free consultation and take the first
                  step towards your international education journey.
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
                  className="text-white bg-blue-800 hover:bg-white hover:text-blue-800"
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
