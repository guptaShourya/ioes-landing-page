"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import {
  GraduationCap,
  Globe,
  Building,
  Users,
  BookOpen,
  Briefcase,
  ChevronRight,
  DollarSign,
  Award,
  Lightbulb,
  Heart,
  PlaneTakeoff,
  Languages,
  Compass,
  Home,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import destinations from "../../data/destinations.json";
import FAQs from "../../data/faqs.json";
import reviews from "../../data/reviews.json";
import { motion } from "framer-motion";

const faqs = FAQs["study-abroad"];
const testimonials = reviews["study-abroad"];
const steps = [
  {
    title: "12-18 Months Before",
    description:
      "Research destinations, universities, and programs. Take standardized tests like IELTS, TOEFL, GRE, or GMAT. Schedule initial counseling with IOES.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "10-12 Months Before",
    description:
      "Shortlist universities and programs. Prepare application materials including personal statements, resumes, and recommendation letters.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "8-10 Months Before",
    description:
      "Submit university applications. Apply for scholarships and financial aid opportunities.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "6-8 Months Before",
    description:
      "Receive admission decisions. Compare offers and make your final decision. Pay deposit to secure your spot.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "4-6 Months Before",
    description:
      "Apply for student visa. Arrange for finances and education loans if needed. Book accommodation.",
    icon: <Building className="h-6 w-6" />,
  },
  {
    title: "1-3 Months Before",
    description:
      "Attend pre-departure orientation. Book flights. Prepare for life abroad with necessary shopping and arrangements.",
    icon: <PlaneTakeoff className="h-6 w-6" />,
  },
];

export default function StudyAbroadPage() {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/study-abroad-cover.webp"
              alt="Students studying abroad"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <h1 className="text-5xl font-normal font-satoshi tracking-tighter text-white sm:text-7xl font-normal">
              Expand Your
              <span className="font-nibpro font-light italic"> Horizon </span>
              Through Global Education
            </h1>
            <p className="max-w-[600px] text-white md:text-xl font-light">
              Discover life-changing opportunities to study at world-class
              universities across the globe. Your international education
              journey begins with IOES.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="px-4 py-2 font-satoshi font-medium text-white rounded-md bg-[#ED4746] hover:opacity-80 hover:bg-[#ED4746] transition-opacity"
                onClick={openPopup}
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-satoshi font-light border-white text-white bg-transparent"
              >
                <Link href="/study-abroad#destinations">
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Study Abroad Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Global Opportunities
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Why Study
                  <span className="font-nibpro font-light italic">
                    {" "}
                    Abroad?
                  </span>
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  Studying abroad is more than just earning a degree – it's a
                  transformative experience that shapes your future in countless
                  ways.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <GraduationCap className="h-10 w-10" />,
                  title: "World-Class Education",
                  description:
                    "Access to prestigious universities and cutting-edge programs that provide globally recognized qualifications.",
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Global Exposure",
                  description:
                    "Immerse yourself in diverse cultures, perspectives, and ideas that broaden your worldview.",
                },
                {
                  icon: <Languages className="h-10 w-10" />,
                  title: "Language Skills",
                  description:
                    "Develop proficiency in foreign languages through immersion, enhancing your communication abilities.",
                },
                {
                  icon: <Briefcase className="h-10 w-10" />,
                  title: "Career Advancement",
                  description:
                    "Gain a competitive edge in the global job market with international experience and cross-cultural competence.",
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Global Network",
                  description:
                    "Build lifelong connections with peers, professors, and professionals from around the world.",
                },
                {
                  icon: <Compass className="h-10 w-10" />,
                  title: "Personal Growth",
                  description:
                    "Develop independence, adaptability, and resilience as you navigate life in a new country.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{benefit.icon}</div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-center text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Fees and Costing Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Financial Planning
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Understanding the Costs
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  Planning your finances is a crucial part of your study abroad
                  journey. Here's a general overview of costs across popular
                  destinations.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                  <div className="p-6 flex flex-col items-center text-center">
                    <DollarSign className="h-12 w-12 text-blue-800 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Tuition Fees</h3>
                    <p className="text-gray-500">
                      Varies significantly by country, university, and program.
                      Public universities often offer more affordable options
                      compared to private institutions.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col items-center text-center">
                    <Home className="h-12 w-12 text-blue-800 mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      Living Expenses
                    </h3>
                    <p className="text-gray-500">
                      Includes accommodation, food, transportation, utilities,
                      and personal expenses. Urban areas typically have higher
                      costs than rural locations.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col items-center text-center">
                    <Heart className="h-12 w-12 text-blue-800 mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      Additional Costs
                    </h3>
                    <p className="text-gray-500">
                      Consider health insurance, visa fees, travel costs, study
                      materials, and emergency funds when planning your budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="px-6 py-4 bg-blue-50">
                  <h3 className="text-xl font-bold">
                    Cost Comparison by Destination
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-6 py-3 text-left font-medium">
                          Country
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Average Tuition
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Living Costs
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {destinations["destinations"].map(
                        (destination, index) => (
                          <tr
                            key={index}
                            className={
                              index !== destinations["destinations"].length - 1
                                ? "border-b"
                                : ""
                            }
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <Image
                                  src={destination.flag || "/placeholder.svg"}
                                  alt={`${destination.country} flag`}
                                  width={24}
                                  height={16}
                                  className="rounded"
                                />
                                {destination.country}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {destination.averageTuition}
                            </td>
                            <td className="px-6 py-4">
                              {destination.livingCosts}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
                  * Costs are approximate and may vary based on specific
                  universities, cities, and programs.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How IOES Helps Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Our Approach
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                    How IOES Helps You
                    <span className="font-nibpro font-light italic">
                      {" "}
                      Succeed
                    </span>
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                    We provide end-to-end support throughout your study abroad
                    journey, from initial counseling to post-arrival assistance.
                    Our experienced team is committed to making your
                    international education experience smooth and successful.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Personalized Counseling</h3>
                      <p className="text-gray-500">
                        One-on-one sessions with expert counselors who
                        understand your academic background, career goals, and
                        preferences to provide tailored guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">University Selection</h3>
                      <p className="text-gray-500">
                        Strategic recommendations for universities and programs
                        that align with your academic profile, career
                        aspirations, and budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Application Assistance</h3>
                      <p className="text-gray-500">
                        Comprehensive support with application preparation,
                        including personal statements, resumes, and
                        recommendation letters.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Scholarship Guidance</h3>
                      <p className="text-gray-500">
                        Information and application support for various
                        scholarship opportunities to help finance your
                        education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <PlaneTakeoff className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Visa & Pre-Departure Support
                      </h3>
                      <p className="text-gray-500">
                        End-to-end visa application assistance and comprehensive
                        pre-departure orientation to prepare you for life
                        abroad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/ioes-counseling-session.webp"
                  alt="IOES counseling session"
                  width={600}
                  height={600}
                  className="rounded-xl object-cover max-h-[600px] w-full h-auto"
                />
                <div className="absolute bottom-16 -left-6 rounded-lg bg-white p-6 shadow-lg md:w-72">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Students Placed</p>
                      <p className="text-2xl font-bold">2,000+</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 rounded-lg bg-white p-6 shadow-lg md:w-72">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        University Partners
                      </p>
                      <p className="text-2xl font-bold">500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Study Abroad Timeline */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Your Journey
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Study Abroad Timeline
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  Understanding the timeline helps you plan your study abroad
                  journey effectively. Here's a general roadmap to guide you
                  through the process.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 md:left-1/2" />
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
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
                        <h3 className="text-xl font-medium font-nibpro">
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

        {/* Destinations Section */}
        <section
          className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white"
          id="destinations"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Explore Options
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  <span className="font-nibpro font-light italic">
                    {" "}
                    Popular{" "}
                  </span>
                  Study Destinations
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  Discover top study destinations with world-class universities
                  and diverse cultural experiences. Click on any destination to
                  learn more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {destinations["destinations"].map((destination, index) => (
                <Link
                  key={index}
                  href={`/destinations/${destination.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`/cover/${destination.slug}.webp`}
                    alt={destination.country}
                    width={300}
                    height={200}
                    className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Image
                        src={destination.flag || "/placeholder.svg"}
                        alt={`${destination.country} flag`}
                        width={20}
                        height={14}
                        className="rounded"
                      />
                      <h3 className="text-xl font-bold">
                        {destination.country}
                      </h3>
                    </div>
                    <p className="text-sm">{destination.universities}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-[#ED4746] hover:bg-[#ED4746] hover:opacity-70 text-white transition-opacity duration-300"
                onClick={openPopup}
              >
                Get Expert Guidance
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section
          id="testimonials"
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
          className="w-full py-12 md:py-24 lg:py-32 text-white"
          // className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-indigo-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm font-nibpro">
                  Success Stories
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Hear From Our Students
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real experiences from students who achieved their dreams with
                  IOES guidance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {reviews["study-abroad"].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-6 rounded-lg bg-white/10 p-6 h-full backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#FBDADA]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2 text-center flex-1 justify-between">
                    <p className="text-white/90 italic">
                      "{testimonial.review}"
                    </p>
                    <div className="flex flex-col items-center mt-auto">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-[#ED4746] font-nibpro font-medium">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="text-white bg-[#ED4746]">
                <Link href="/success-stories">View More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Common Questions
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Frequently Asked
                  <span className="font-nibpro font-light italic">
                    {" "}
                    Questions
                  </span>
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                  Find answers to common questions about studying abroad. If you
                  don't see your question here, feel free to contact us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-normal italic">{faq.question}</h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#ED4746] hover:bg-[#ED4746] hover:opacity-70 text-white transition-opacity duration-300">
                <Link href="/contact">Have More Questions?</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
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
                  Ready to Begin{" "}
                  <span className="font-nibpro italic font-light">
                    Your Journey?
                  </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  Take the first step towards your international education
                  adventure. Our expert counselors are ready to guide you every
                  step of the way.
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
                  <Link href="/study-abroad">Download Study Abroad Guide</Link>
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
