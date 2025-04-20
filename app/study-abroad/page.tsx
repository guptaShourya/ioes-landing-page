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

const destinations = [
  {
    country: "United States",
    universities: "1,000+ Universities",
    slug: "usa",
    averageTuition: "$20,000 - $50,000 per year",
    livingCosts: "$10,000 - $25,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  },
  {
    country: "United Kingdom",
    universities: "150+ Universities",
    slug: "uk",
    averageTuition: "£10,000 - £38,000 per year",
    livingCosts: "£12,000 - £15,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  },
  {
    country: "Canada",
    universities: "100+ Universities",
    slug: "canada",
    averageTuition: "CAD 20,000 - CAD 30,000 per year",
    livingCosts: "CAD 10,000 - CAD 15,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
  },
  {
    country: "Australia",
    universities: "40+ Universities",
    slug: "australia",
    averageTuition: "AUD 20,000 - AUD 45,000 per year",
    livingCosts: "AUD 15,000 - AUD 25,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
  },
  {
    country: "New Zealand",
    universities: "8+ Universities",
    slug: "new-zealand",
    averageTuition: "NZD 22,000 - NZD 32,000 per year",
    livingCosts: "NZD 15,000 - NZD 20,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
  },
  {
    country: "Germany",
    universities: "400+ Universities",
    slug: "germany",
    averageTuition: "€0 - €3,000 per year (mostly free)",
    livingCosts: "€10,000 - €12,000 per year",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  },
];

const faqs = [
  {
    question: "What are the benefits of studying abroad?",
    answer:
      "Studying abroad offers numerous benefits including global exposure, quality education, diverse cultural experiences, improved language skills, enhanced career prospects, personal growth, and the opportunity to build an international network.",
  },
  {
    question: "How do I choose the right country for my studies?",
    answer:
      "Choosing the right country depends on several factors including your academic interests, budget, career goals, language preferences, and personal preferences. Our counselors can help you evaluate these factors and recommend destinations that best match your profile and aspirations.",
  },
  {
    question: "What are the general requirements for studying abroad?",
    answer:
      "General requirements typically include academic qualifications, language proficiency tests (like IELTS, TOEFL), standardized tests (like GRE, GMAT for specific programs), financial documentation, passport, and visa. Requirements vary by country and institution, and our counselors can provide detailed guidance based on your chosen destination.",
  },
  {
    question: "How much does it cost to study abroad?",
    answer:
      "The cost varies significantly depending on the country, city, university, and program. It includes tuition fees, living expenses, health insurance, travel costs, and miscellaneous expenses. Some countries like Germany offer free or low-cost education, while others like the US can be more expensive. We provide detailed cost breakdowns for each destination to help you plan your finances.",
  },
  {
    question: "Are there scholarships available for international students?",
    answer:
      "Yes, many universities, governments, and private organizations offer scholarships for international students. These can be merit-based, need-based, or country-specific. Our counselors can help you identify and apply for scholarships that match your profile and chosen destination.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application process typically takes 3-6 months from start to finish, including university selection, application preparation, admission decisions, visa processing, and pre-departure arrangements. It's advisable to start planning at least a year before your intended start date to ensure a smooth process.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Work regulations for international students vary by country. Most countries allow students to work part-time during the academic year and full-time during breaks, with specific hour limitations. Our counselors can provide detailed information about work rights in your chosen destination.",
  },
  {
    question: "What support does IOES provide after I receive my visa?",
    answer:
      "IOES provides comprehensive pre-departure orientation, assistance with accommodation arrangements, airport pickup coordination, local SIM card and bank account setup guidance, and continuous support throughout your stay abroad through our global partner network.",
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Expand Your Horizons Through Global Education
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              Discover life-changing opportunities to study at world-class
              universities across the globe. Your international education
              journey begins with IOES.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-indigo-900 hover:bg-white/90"
                onClick={openPopup}
              >
                Get Free Counseling
              </Button>
              <Button
                size="lg"
                className="border-white text-white bg-indigo-800 hover:bg-white hover:text-indigo-800"
              >
                <Link href="/study-abroad#destinations">
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Study Abroad Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Global Opportunities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Study Abroad?
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
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
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Financial Planning
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Understanding the Costs
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
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
                    <h3 className="text-xl font-bold mb-2">Tuition Fees</h3>
                    <p className="text-gray-500">
                      Varies significantly by country, university, and program.
                      Public universities often offer more affordable options
                      compared to private institutions.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col items-center text-center">
                    <Home className="h-12 w-12 text-blue-800 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Living Expenses</h3>
                    <p className="text-gray-500">
                      Includes accommodation, food, transportation, utilities,
                      and personal expenses. Urban areas typically have higher
                      costs than rural locations.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col items-center text-center">
                    <Heart className="h-12 w-12 text-blue-800 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Additional Costs</h3>
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
                      {destinations.map((destination, index) => (
                        <tr
                          key={index}
                          className={
                            index !== destinations.length - 1 ? "border-b" : ""
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
                      ))}
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
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Our Approach
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    How IOES Helps You Succeed
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
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
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-lg md:w-72">
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
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Your Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Study Abroad Timeline
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
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
                  {[
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
                  ].map((step, index) => (
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

        {/* Destinations Section */}
        <section className="w-full py-12 md:py-24 bg-white" id="destinations">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Explore Options
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Popular Study Destinations
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Discover top study destinations with world-class universities
                  and diverse cultural experiences. Click on any destination to
                  learn more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination, index) => (
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
                className="bg-blue-800 hover:bg-blue-900"
                onClick={openPopup}
              >
                Get Expert Guidance
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Hear From Our Students
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Real experiences from students who achieved their dreams of
                  studying abroad with IOES guidance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {[
                {
                  name: "Rahul Sharma",
                  university: "Harvard University, USA",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "IOES made my dream of studying at Harvard a reality. Their counselors guided me through every step of the application process, from selecting the right program to preparing for interviews.",
                },
                {
                  name: "Priya Patel",
                  university: "University of Toronto, Canada",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "The visa guidance from IOES was exceptional. They prepared me thoroughly for the interview, which helped me secure my student visa without any issues. Their pre-departure orientation was incredibly helpful.",
                },
                {
                  name: "Arjun Singh",
                  university: "University of Melbourne, Australia",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "From university selection to scholarship applications, IOES provided comprehensive support that made my journey to Australia smooth and successful. I'm grateful for their continuous guidance.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 p-6"
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <p className="text-white/90">"{testimonial.testimonial}"</p>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-white/70">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="border-white text-blue-800 hover:bg-white hover:text-blue-800"
              >
                <Link href="/success-stories">View More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Common Questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
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
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-blue-800 hover:bg-blue-900">
                <Link href="/contact">Have More Questions?</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Begin Your Journey?
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Take the first step towards your international education
                  adventure. Our expert counselors are ready to guide you every
                  step of the way.
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
                  className="border-white bg-blue-800 text-white hover:bg-white hover:text-blue-800"
                >
                  Download Study Abroad Guide
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
