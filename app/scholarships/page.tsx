"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import {
  Award,
  BookOpen,
  Building,
  Clock,
  Compass,
  DollarSign,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Search,
  Users,
  Briefcase,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import destinationData from "../../data/destinations.json";

const scholarshipTypes = [
  {
    title: "Merit-Based Scholarships",
    icon: <Award className="h-10 w-10" />,
    description:
      "Awarded based on academic excellence, leadership qualities, and extracurricular achievements. These scholarships recognize outstanding students with exceptional academic records.",
  },
  {
    title: "Need-Based Scholarships",
    icon: <DollarSign className="h-10 w-10" />,
    description:
      "Provided to students who demonstrate financial need. These scholarships aim to make education accessible to talented students regardless of their financial background.",
  },
  {
    title: "Government Scholarships",
    icon: <Landmark className="h-10 w-10" />,
    description:
      "Funded by governments (both Indian and foreign) to promote international education and cultural exchange. These often cover tuition, living expenses, and sometimes travel costs.",
  },
  {
    title: "University-Specific Scholarships",
    icon: <Building className="h-10 w-10" />,
    description:
      "Offered directly by universities to attract talented international students. These vary widely in amount and eligibility criteria depending on the institution.",
  },
  {
    title: "Organization-Sponsored Scholarships",
    icon: <Users className="h-10 w-10" />,
    description:
      "Provided by private organizations, foundations, and corporations to support education in specific fields or for students from particular backgrounds.",
  },
  {
    title: "Country-Specific Scholarships",
    icon: <Compass className="h-10 w-10" />,
    description:
      "Designed specifically for students from certain countries, including many opportunities exclusively for Indian students studying abroad.",
  },
];

const topScholarships = [
  {
    name: "Inlaks Scholarships",
    provider: "Inlaks Shivdasani Foundation",
    amount: "Up to $100,000",
    eligibility:
      "Indian citizens under 30 years with exceptional academic records",
    deadline: "February each year",
    link: "#",
  },
  {
    name: "Tata Scholarships at Cornell University",
    provider: "Tata Education and Development Trust",
    amount: "Full tuition coverage",
    eligibility: "Indian students admitted to Cornell University",
    deadline: "Varies with Cornell's admission deadlines",
    link: "#",
  },
  {
    name: "Fulbright-Nehru Master's Fellowships",
    provider: "United States-India Educational Foundation (USIEF)",
    amount: "Full funding including travel, tuition, and living expenses",
    eligibility:
      "Indian citizens with at least 3 years of professional work experience",
    deadline: "May each year",
    link: "#",
  },
  {
    name: "Commonwealth Scholarships",
    provider: "Commonwealth Scholarship Commission",
    amount: "Full funding including travel, tuition, and living expenses",
    eligibility: "Indian citizens with strong academic backgrounds",
    deadline: "Varies by country, typically September-December",
    link: "#",
  },
  {
    name: "Chevening Scholarships",
    provider: "UK Government",
    amount: "Full funding including travel, tuition, and living expenses",
    eligibility:
      "Indian professionals with at least 2 years of work experience",
    deadline: "November each year",
    link: "#",
  },
  {
    name: "Great Scholarships for Indian Students",
    provider: "British Council and UK Universities",
    amount: "£10,000 towards tuition fees",
    eligibility: "Indian students applying for specific master's programs",
    deadline: "Varies by university",
    link: "#",
  },
];

const eligibilityCriteria = [
  {
    title: "Academic Excellence",
    icon: <GraduationCap className="h-6 w-6" />,
    description:
      "Most scholarships require a strong academic record, typically with a minimum of 65-80% in your highest qualification, depending on the scholarship.",
  },
  {
    title: "Standardized Test Scores",
    icon: <FileText className="h-6 w-6" />,
    description:
      "Competitive scores in tests like IELTS/TOEFL for language proficiency and GRE/GMAT for graduate programs are often required.",
  },
  {
    title: "Extracurricular Activities",
    icon: <Users className="h-6 w-6" />,
    description:
      "Leadership roles, community service, sports achievements, and other activities that demonstrate well-rounded abilities.",
  },
  {
    title: "Research Experience",
    icon: <Lightbulb className="h-6 w-6" />,
    description:
      "For graduate scholarships, relevant research experience, publications, or projects in your field of study can be advantageous.",
  },
  {
    title: "Work Experience",
    icon: <Briefcase className="h-6 w-6" />,
    description:
      "Some scholarships, especially for professional programs, require relevant work experience of 2-3 years.",
  },
  {
    title: "Financial Need",
    icon: <DollarSign className="h-6 w-6" />,
    description:
      "Need-based scholarships require documentation proving financial necessity, including income certificates and bank statements.",
  },
];

const applicationSteps = [
  {
    title: "Research Opportunities",
    description:
      "Start by researching scholarships that match your profile, academic interests, and chosen destination. Begin at least 12-18 months before your intended start date.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "Check Eligibility",
    description:
      "Carefully review the eligibility criteria for each scholarship to ensure you qualify before investing time in the application process.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Prepare Documentation",
    description:
      "Gather required documents including academic transcripts, standardized test scores, recommendation letters, statement of purpose, CV/resume, and financial documents.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Write Compelling Essays",
    description:
      "Craft thoughtful, personalized essays that highlight your achievements, goals, and why you deserve the scholarship. Tailor each essay to the specific scholarship.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Submit Applications",
    description:
      "Complete applications before deadlines, ensuring all requirements are met. Pay attention to specific submission guidelines for each scholarship.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Prepare for Interviews",
    description:
      "If shortlisted, prepare thoroughly for interviews by researching common questions and practicing your responses. Be ready to discuss your goals and motivations.",
    icon: <Users className="h-6 w-6" />,
  },
];

export default function ScholarshipsPage() {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/scholarships-cover.webp"
              alt="Students receiving scholarships"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <h1 className="text-5xl font-normal tracking-tighter text-white sm:text-7xl font-light">
              Fund Your Global Education Journey
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              Discover scholarships that can transform your dream of studying
              abroad into reality. Our comprehensive guide helps Indian students
              find and secure financial support for international education.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#ED4746] text-white hover:bg-[#ED4746]/90 transition-all duration-300"
                onClick={openPopup}
              >
                Find Scholarships
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:text-white hover:bg-transparent hover:opacity-80 transitions-all duration-300"
              >
                <Link href="/contact">Get Application Support</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Importance of Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Financial Support
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                    Why Scholarships Matter for
                    <span className="italic font-light font-nibpro">
                      {" "}
                      Indian Students
                    </span>
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    For many Indian students, scholarships are the gateway to
                    international education. They not only reduce financial
                    burden but also recognize academic excellence and open doors
                    to prestigious institutions worldwide.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Overcoming Financial Barriers
                      </h3>
                      <p className="text-gray-500">
                        With the average cost of studying abroad ranging from
                        ₹20-40 lakhs per year, scholarships make quality
                        education accessible despite currency differences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">Recognition of Excellence</h3>
                      <p className="text-gray-500">
                        Prestigious scholarships enhance your resume, validating
                        your academic achievements and potential to future
                        employers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Building className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">Access to Top Institutions</h3>
                      <p className="text-gray-500">
                        Scholarships enable talented Indian students to attend
                        world-class universities that might otherwise be
                        financially out of reach.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">Networking Opportunities</h3>
                      <p className="text-gray-500">
                        Many scholarship programs include mentorship, special
                        events, and alumni networks that provide valuable
                        connections.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/indian-student.webp"
                  width={600}
                  height={600}
                  alt="Indian students receiving scholarships"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Scholarships Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Scholarship Categories
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Types of Scholarships Available
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Understanding the different types of scholarships can help you
                  target the right opportunities for your profile and needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {scholarshipTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{type.icon}</div>
                  <h3 className="text-xl font-medium text-center">
                    {type.title}
                  </h3>
                  <p className="text-center text-gray-500">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Scholarships for Indian Students Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Top Opportunities
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Best Scholarships for Indian Students
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  These prestigious scholarships offer significant financial
                  support and are particularly well-suited for Indian students
                  pursuing international education.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-6 py-3 text-left font-medium">
                          Scholarship Name
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Provider
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Eligibility
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          Deadline
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {topScholarships.map((scholarship, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 font-medium">
                            {scholarship.name}
                          </td>
                          <td className="px-6 py-4">{scholarship.provider}</td>
                          <td className="px-6 py-4">{scholarship.amount}</td>
                          <td className="px-6 py-4">
                            {scholarship.eligibility}
                          </td>
                          <td className="px-6 py-4">{scholarship.deadline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Qualification Requirements
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  General Eligibility Criteria
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  While specific requirements vary by scholarship, these are the
                  common eligibility criteria that most international
                  scholarships consider for Indian applicants.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {eligibilityCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    {criteria.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{criteria.title}</h3>
                    <p className="mt-2 text-gray-500">{criteria.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Application Guide
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  How to Secure a Scholarship:
                  <span className="italic font-light font-nibpro">
                    {" "}
                    Step-by-Step
                  </span>
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Follow this proven process to maximize your chances of winning
                  scholarships for your international education.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 md:left-1/2" />
                <div className="space-y-12">
                  {applicationSteps.map((step, index) => (
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

        {/* Scholarships by Destination Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Country-Specific Opportunities
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Explore Scholarships by
                  <span className="italic font-light font-nibpro">
                    {" "}
                    Destination
                  </span>
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Different countries offer unique scholarship opportunities for
                  Indian students. Explore country-specific scholarships to find
                  the best fit for your educational goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {destinationData["destinations"].map((destination, index) => (
                <Link
                  key={index}
                  href={`/scholarships/${destination.slug}`}
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
                      <h3 className="text-xl font-medium">
                        {destination.country}
                      </h3>
                    </div>
                    <p className="text-sm">{destination.scholarshipCount}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IOES Scholarship Support Section */}
        <section className="w-full p-6 md:p-12 lg:p-24 bg-gradient-to-b from-white to-[#f0ebe6] text-white">
          <div className="container p-4 bg-[#b82b35] rounded-xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                    How IOES Helps You
                    <span className="my-2 block font-light font-nibpro italic">
                      Win Scholarships
                    </span>
                  </h2>
                </div>
                <ul className="grid gap-4 md:gap-2">
                  <li className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      <Search className="h-4 w-4" />
                    </div>
                    <span>
                      Personalized scholarship matching based on your profile
                      and aspirations
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
                      Interview preparation with mock sessions and feedback
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
                      Strategic advice from counselors who understand what
                      scholarship committees look for
                    </span>
                  </li>
                </ul>
                <div className="w-full flex justify-center items-center lg:block">
                  <Button
                    size="lg"
                    className="bg-[#1c1a1a] text-white hover:bg-[#1c1a1a]/90 transition-all duration-300"
                    onClick={openPopup}
                  >
                    Book a Scholarship Consultation
                  </Button>
                </div>
              </div>
              <div className="items-center justify-center hidden md:flex">
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
      </main>
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />

      <Footer />
    </div>
  );
}
