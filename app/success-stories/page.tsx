"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import {
  ChevronRight,
  Quote,
  GraduationCap,
  Briefcase,
  Award,
  Star,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";

const featuredStories = [
  {
    name: "Rahul Sharma",
    image: "/placeholder.svg?height=400&width=400",
    university: "Harvard University",
    country: "USA",
    program: "Master of Business Administration",
    year: "2022",
    quote:
      "IOES transformed my dream of studying at Harvard into reality. Their counselors provided personalized guidance throughout my application journey, from selecting the right program to preparing for interviews. Their scholarship assistance helped me secure substantial funding, making my Harvard education financially viable.",
    achievement: "Secured $80,000 scholarship and internship at Goldman Sachs",
  },
  {
    name: "Priya Patel",
    image: "/placeholder.svg?height=400&width=400",
    university: "University of Oxford",
    country: "UK",
    program: "MSc in Computer Science",
    year: "2021",
    quote:
      "The comprehensive support from IOES was instrumental in my journey to Oxford. Their expertise in UK university applications and visa processes ensured a smooth transition. The pre-departure orientation prepared me well for life in the UK, and their continuous support even after arrival made a significant difference.",
    achievement: "Published research paper in leading computer science journal",
  },
  {
    name: "Arjun Singh",
    image: "/placeholder.svg?height=400&width=400",
    university: "University of Toronto",
    country: "Canada",
    program: "PhD in Biomedical Engineering",
    year: "2020",
    quote:
      "IOES's guidance was exceptional from start to finish. Their in-depth knowledge of Canadian universities and immigration processes was invaluable. They helped me identify the perfect program aligned with my research interests and connected me with alumni who provided insider perspectives. Their scholarship guidance helped me secure full funding.",
    achievement: "Received prestigious research grant worth CAD 50,000",
  },
];

const testimonials = [
  {
    name: "Ananya Desai",
    image: "/placeholder.svg?height=100&width=100",
    university: "University of Melbourne, Australia",
    program: "Master of Public Health",
    quote:
      "IOES made my Australian education journey seamless. Their guidance on university selection and visa application was spot-on.",
  },
  {
    name: "Vikram Mehta",
    image: "/placeholder.svg?height=100&width=100",
    university: "Technical University of Munich, Germany",
    program: "MS in Mechanical Engineering",
    quote:
      "Studying in Germany seemed daunting until IOES stepped in. Their expertise in German university applications and language requirements was invaluable.",
  },
  {
    name: "Neha Sharma",
    image: "/placeholder.svg?height=100&width=100",
    university: "University of British Columbia, Canada",
    program: "Master of Education",
    quote:
      "The scholarship guidance from IOES helped me secure substantial funding for my studies in Canada. Their personalized approach made all the difference.",
  },
  {
    name: "Karan Malhotra",
    image: "/placeholder.svg?height=100&width=100",
    university: "Imperial College London, UK",
    program: "MSc in Finance",
    quote:
      "IOES's counselors understood exactly what top UK universities look for in applications. Their strategic guidance helped me get into my dream program.",
  },
  {
    name: "Sanya Gupta",
    image: "/placeholder.svg?height=100&width=100",
    university: "Stanford University, USA",
    program: "MS in Computer Science",
    quote:
      "From SOP reviews to interview preparation, IOES provided comprehensive support that was crucial for my Stanford admission.",
  },
  {
    name: "Rohan Kapoor",
    image: "/placeholder.svg?height=100&width=100",
    university: "University of Auckland, New Zealand",
    program: "Master of Engineering Management",
    quote:
      "IOES's expertise in New Zealand education system and post-study work opportunities helped me make informed decisions about my future.",
  },
];

const statistics = [
  {
    number: "5000+",
    label: "Students Placed",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    number: "95%",
    label: "Visa Success Rate",
    icon: <Award className="h-6 w-6" />,
  },
  {
    number: "500+",
    label: "University Partners",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    number: "₹100Cr+",
    label: "Scholarships Secured",
    icon: <Star className="h-6 w-6" />,
  },
];

export default function SuccessStoriesPage() {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/success-stories-cover.webp"
              alt="Students celebrating graduation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Success Stories
            </h1>
            <p className="mt-4 max-w-[800px] text-lg text-white/90 md:text-xl">
              Meet our students who turned their dreams of international
              education into reality with IOES guidance. Their journeys inspire
              us and showcase the transformative power of global education.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-white/90"
              >
                <Link href="/contact">Start Your Success Story</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white"
                onClick={openPopup}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-blue-800">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Success Stories Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Featured Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Inspiring Student Journeys
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Discover how these students overcame challenges and achieved
                  their international education goals with IOES support.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-12">
              {featuredStories.map((story, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-8 md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-2/5">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4 md:w-3/5">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Quote className="h-6 w-6" />
                      <span className="text-sm font-medium">Success Story</span>
                    </div>
                    <h3 className="text-2xl font-bold">{story.name}</h3>
                    <div className="space-y-1 text-gray-500">
                      <p>
                        <span className="font-medium">{story.program}</span>,{" "}
                        {story.university}
                      </p>
                      <p>
                        {story.country}, Class of {story.year}
                      </p>
                    </div>
                    <p className="italic text-gray-600">"{story.quote}"</p>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <p className="font-medium text-blue-800">
                        Achievement: {story.achievement}
                      </p>
                    </div>
                    <Button className="w-fit bg-blue-800 hover:bg-blue-900">
                      Read Full Story
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Student Voices
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What Our Students Say
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  Hear directly from our students about their experiences with
                  IOES and their international education journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
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
                    <p className="text-gray-500">"{testimonial.quote}"</p>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.program}, {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Video Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Watch Our Student Journeys
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  See and hear our students share their experiences in their own
                  words.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((video, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-white">
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
                          className="h-6 w-6"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold">
                    Student Journey: From Delhi to{" "}
                    {index === 0
                      ? "Harvard"
                      : index === 1
                      ? "Oxford"
                      : "Toronto"}
                  </h3>
                  <p className="text-gray-500">
                    Watch how{" "}
                    {index === 0 ? "Rahul" : index === 1 ? "Priya" : "Arjun"}{" "}
                    navigated the challenges of international education with
                    IOES support.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-blue-800 hover:bg-blue-900">
                <Link
                  href="https://www.youtube.com/@inspireoverseaaseducation"
                  target="_blank"
                >
                  View All Videos
                </Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Success by Numbers Section */}
        <section className="w-full py-12 md:py-24 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Success by Numbers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Track Record
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Over the years, we've helped thousands of students achieve
                  their international education dreams.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Top 100 Universities", value: "300+ Admits" },
                { label: "Average Scholarship", value: "₹15 Lakhs" },
                { label: "Visa Success Rate", value: "95%" },
                { label: "Student Satisfaction", value: "4.8/5" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-6"
                >
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Our Students Study In */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Global Presence
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Where Our Students Study
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  IOES students are pursuing their dreams at top universities
                  across these popular study destinations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  country: "United States",
                  count: "1,500+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
                },
                {
                  country: "United Kingdom",
                  count: "1,200+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
                },
                {
                  country: "Canada",
                  count: "900+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
                },
                {
                  country: "Australia",
                  count: "700+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
                },
                {
                  country: "New Zealand",
                  count: "300+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
                },
                {
                  country: "Germany",
                  count: "400+ Students",
                  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
                },
              ].map((destination, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <Image
                      src={destination.flag}
                      alt={`${destination.country} flag`}
                      width={30}
                      height={20}
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{destination.country}</h3>
                    <p className="text-gray-500">{destination.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Start Your Success Story Today
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Join thousands of successful students who achieved their
                  international education dreams with IOES guidance. Your
                  journey begins with a simple conversation.
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
                  className="border-white text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white"
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
