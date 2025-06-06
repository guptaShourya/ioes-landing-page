"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import {
  Users,
  GraduationCap,
  DollarSign,
  CreditCard,
  Stamp,
  Heart,
  Home,
  ChevronRight,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import reviews from "../../data/reviews.json";
const services = [
  {
    name: "Counselling",
    slug: "counselling",
    icon: <Users className="h-12 w-12" />,
    description:
      "Personalized guidance from experienced counselors to help you make informed decisions about your education abroad.",
  },
  {
    name: "University Selection",
    slug: "university-selection",
    icon: <GraduationCap className="h-12 w-12" />,
    description:
      "Expert assistance in selecting universities that align with your academic goals, preferences, and budget.",
  },
  {
    name: "Financial Guidance",
    slug: "financial-guidance",
    icon: <DollarSign className="h-12 w-12" />,
    description:
      "Comprehensive advice on budgeting, financial planning, and identifying funding opportunities for your studies.",
  },
  {
    name: "Loan Assistance",
    slug: "loan",
    icon: <CreditCard className="h-12 w-12" />,
    description:
      "Support in securing education loans through our partner financial institutions with competitive interest rates.",
  },
  {
    name: "Visa Service",
    slug: "visa",
    icon: <Stamp className="h-12 w-12" />,
    description:
      "End-to-end visa application support with high success rates, including documentation and interview preparation.",
  },
  {
    name: "Health Insurance",
    slug: "health-insurance",
    icon: <Heart className="h-12 w-12" />,
    description:
      "Access to comprehensive health insurance plans through our global and country-specific insurance partners.",
  },
  {
    name: "Accommodation",
    slug: "accommodation",
    icon: <Home className="h-12 w-12" />,
    description:
      "Assistance in finding suitable and affordable accommodation options through our housing partners worldwide.",
  },
];

export default function ServicesPage() {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/our-services-hero-cover.webp"
              alt="IOES Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative space-y-6 flex min-h-[400px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <div className="space-y-2">
              <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Comprehensive Support
              </div>
              <h1 className="text-5xl font-normal font-satoshi tracking-tighter text-white sm:text-7xl font-normal">
                Our Services
              </h1>
            </div>
            <p className="max-w-[600px] text-white md:text-xl font-light">
              From application to arrival, we provide end-to-end support to make
              your international education journey smooth and successful.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-900"
                onClick={openPopup}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Free of Cost
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                    Comprehensive Student Support
                  </h2>
                </div>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  We are committed to providing high-quality services to
                  students at no cost, ensuring that your focus remains on your
                  education.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex flex-col justify-between items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-center text-gray-500">
                    {service.description}
                  </p>
                  <Button variant="link" className="mt-auto text-blue-800">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                      Why Choose IOES
                    </div>
                    <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                      Student-Centered Approach
                    </h2>
                  </div>
                  <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                    At IOES, we prioritize your comfort, success, and well-being
                    throughout your educational journey. Our comprehensive
                    services are designed to address every aspect of your study
                    abroad experience, ensuring you can focus on your academic
                    goals with peace of mind.
                  </p>
                </div>
                <ul className="grid gap-4">
                  {[
                    "Free counseling and application assistance",
                    "Partnerships with 500+ universities worldwide",
                    "95% visa success rate",
                    "Dedicated support team available 7 days a week",
                    "Post-arrival assistance and regular check-ins",
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/student-recieving-guidance.webp"
                  width={500}
                  height={400}
                  alt="Students receiving guidance"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Success Stories
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  What Our Students Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Hear from students who have benefited from our comprehensive
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {reviews["service-index"].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <p className="text-gray-500 italic">
                      "{testimonial.review}"
                    </p>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-blue-500 font-nibpro">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-12 md:py-24 text-white"
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
                  Ready to Start{" "}
                  <span className="font-nibpro italic font-light">
                    Your Journey?
                  </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  Contact us today for a free consultation and take the first
                  step towards your international education.
                </p>
              </div>
              <div className="flex flex-col gap-6 min-[400px]:flex-row">
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
                  <Link href="/study-abroad">Explore Study Destinations</Link>
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
