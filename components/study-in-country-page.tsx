"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  GraduationCap,
  Award,
  DollarSign,
  FileText,
  Users,
  Star,
  Phone,
  MessageCircle,
  ArrowRight,
  Globe,
  Building,
  BookOpen,
  Target,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";
import { StudyInCountryData } from "@/types/study-in-country";

interface StudyInCountryPageProps {
  data: StudyInCountryData;
}

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    university: Building,
    visa: FileText,
    scholarship: Award,
    support: Users,
    partnership: Globe,
    "visa-success": CheckCircle2,
    "scholarship-max": DollarSign,
    matching: Target,
    application: BookOpen,
    "post-arrival": Heart,
  };
  
  return iconMap[iconName] || Building;
};

export function StudyInCountryPage({ data }: StudyInCountryPageProps) {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="text-white">
                <h1 className="mb-4 text-4xl font-bold lg:text-6xl">
                  {data.hero.title}
                </h1>
                <p className="mb-2 text-xl text-blue-100">
                  {data.hero.subtitle}
                </p>
                <p className="mb-8 text-lg text-blue-50">
                  {data.hero.description}
                </p>
                <Button
                  onClick={openPopup}
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  {data.hero.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={data.hero.image}
                  alt={`Study in ${data.country}`}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">{data.overview.title}</h2>
                <p className="mb-8 text-lg text-gray-600">
                  {data.overview.description}
                </p>
                <div className="space-y-4">
                  {data.overview.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src={data.overview.image}
                  alt={`${data.country} Education Overview`}
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why IOES Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{data.whyIoes.title}</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {data.whyIoes.description}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {data.whyIoes.reasons.map((reason, index) => {
                const IconComponent = getIconComponent(reason.icon);
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Button
                onClick={openPopup}
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                {data.whyIoes.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-2 text-sm text-gray-600">
                {data.whyIoes.ctaDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Application Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {data.applicationRequirements.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {data.applicationRequirements.description}
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Undergraduate Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    {data.applicationRequirements.undergraduate.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-semibold">Academic Requirements</h4>
                    <ul className="space-y-2">
                      {data.applicationRequirements.undergraduate.requirements.map(
                        (req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold">Required Documents</h4>
                    <ul className="space-y-2">
                      {data.applicationRequirements.undergraduate.documents.map(
                        (doc, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FileText className="mt-1 h-4 w-4 text-orange-500" />
                            <span className="text-sm text-gray-700">{doc}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Postgraduate Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    {data.applicationRequirements.postgraduate.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-semibold">Academic Requirements</h4>
                    <ul className="space-y-2">
                      {data.applicationRequirements.postgraduate.requirements.map(
                        (req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold">Required Documents</h4>
                    <ul className="space-y-2">
                      {data.applicationRequirements.postgraduate.documents.map(
                        (doc, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FileText className="mt-1 h-4 w-4 text-orange-500" />
                            <span className="text-sm text-gray-700">{doc}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cost of Studying */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {data.costsAndFinancing.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {data.costsAndFinancing.description}
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Tuition Fees */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Tuition Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">Undergraduate Programs</h4>
                      <p className="text-sm text-gray-600 mb-2">Range: {data.costsAndFinancing.tuitionFees.undergraduate.range}</p>
                      <p className="text-sm text-gray-600 mb-2">Popular: {data.costsAndFinancing.tuitionFees.undergraduate.popular}</p>
                      <ul className="text-sm space-y-1">
                        {data.costsAndFinancing.tuitionFees.undergraduate.programs.map((program, index) => (
                          <li key={index} className="flex justify-between text-gray-700">
                            <span>• {program.name}</span>
                            <span className="font-medium">{program.cost}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Postgraduate Programs</h4>
                      <p className="text-sm text-gray-600 mb-2">Range: {data.costsAndFinancing.tuitionFees.postgraduate.range}</p>
                      <p className="text-sm text-gray-600 mb-2">Popular: {data.costsAndFinancing.tuitionFees.postgraduate.popular}</p>
                      <ul className="text-sm space-y-1">
                        {data.costsAndFinancing.tuitionFees.postgraduate.programs.map((program, index) => (
                          <li key={index} className="flex justify-between text-gray-700">
                            <span>• {program.name}</span>
                            <span className="font-medium">{program.cost}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Living Costs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-orange-600" />
                    Living Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <p className="font-semibold mb-2">Monthly Budget: {data.costsAndFinancing.livingCosts.monthly}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cost Breakdown</h4>
                      <ul className="space-y-2">
                        {data.costsAndFinancing.livingCosts.breakdown.map((item, index) => (
                          <li key={index} className="flex items-center justify-between text-sm">
                            <span>{item.category}</span>
                            <Badge variant="outline" className="text-sm">
                              {item.cost}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Scholarships & Work Opportunities */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-yellow-600" />
                    Available Scholarships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.costsAndFinancing.scholarships.map((scholarship, index) => (
                      <li key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="font-semibold text-gray-800">{scholarship.name}</div>
                        <div className="text-sm text-blue-600 font-medium">{scholarship.value}</div>
                        <div className="text-sm text-gray-600">{scholarship.eligibility}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Work Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">During Studies</p>
                      <p className="text-sm text-gray-600">{data.costsAndFinancing.workOpportunities.studentVisa}</p>
                    </div>
                    <div>
                      <p className="font-medium">Minimum Wage</p>
                      <p className="text-sm text-gray-600">{data.costsAndFinancing.workOpportunities.hourlyRate}</p>
                    </div>
                    <div>
                      <p className="font-medium">Vacation Work</p>
                      <p className="text-sm text-gray-600">{data.costsAndFinancing.workOpportunities.vacationWork}</p>
                    </div>
                    <div>
                      <p className="font-medium">Post-Study Work</p>
                      <p className="text-sm text-gray-600">{data.costsAndFinancing.workOpportunities.postStudyWork}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose IOES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {data.whyIoes.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {data.whyIoes.description}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.whyIoes.reasons.map((reason, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="absolute -top-4 left-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-4">
                      <span className="text-2xl">{reason.icon}</span>
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                {data.whyIoes.ctaText}
              </Button>
              <p className="mt-4 text-gray-600">{data.whyIoes.ctaDescription}</p>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {data.testimonials.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {data.testimonials.subtitle}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.testimonials.testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.course}
                        </p>
                        <p className="text-sm font-medium text-blue-600">
                          {testimonial.university}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{data.faqs.title}</h2>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="w-full">
                {data.faqs.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Start Your {data.country} Journey?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Get expert guidance from our experienced counselors
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                onClick={openPopup}
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get Free Counselling
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +91-8800-306-306
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}
