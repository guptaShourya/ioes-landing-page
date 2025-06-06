"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import {
  GraduationCap,
  MapPin,
  Globe,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  CheckCircle2,
  Users,
  Building,
  Award,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import type { JSX } from "react";
import contact from "../data/contact.json";
import reviews from "../data/reviews.json";
import { motion } from "framer-motion";
import { UniversityCarousel } from "@/components/university-carousel";
import { ApplicationTimeline } from "@/components/application-timeline";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";
import destinations from "../data/destinations.json";

export default function Home() {
  const { isOpen, openPopup, closePopup } = usePopup();
  const icons: Record<
    "Facebook" | "Instagram" | "Youtube" | "LinkedIn",
    JSX.Element
  > = {
    Facebook: <Facebook className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
    Youtube: <Youtube className="h-5 w-5" />,
    LinkedIn: <Linkedin className="h-5 w-5" />,
  };
  const links: Record<
    "Facebook" | "Instagram" | "Youtube" | "LinkedIn",
    string
  > = {
    Facebook: "https://www.facebook.com/www.ioes.in/",
    Instagram: "https://www.instagram.com/ioes.in/",
    Youtube: "https://www.youtube.com/@inspireoverseaaseducation",
    LinkedIn:
      "https://www.linkedin.com/company/inspire-overseaas-education-services/",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - Updated with vibrant gradient */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4 gap-2">
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-normal font-satoshi tracking-tighter text-white sm:text-7xl font-normal"
                  >
                    Your{" "}
                    <motion.span
                      animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ fontStyle: "italic", fontWeight: "lighter" }}
                      className="relative font-nibpro inline-block m-2"
                    >
                      Global
                      <Image
                        src="/underline.svg"
                        alt="Underline"
                        width={140}
                        height={10}
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                      />
                    </motion.span>{" "}
                    Education Journey Starts Here
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-[600px] text-white md:text-xl font-light"
                  >
                    Expert guidance for students aspiring to study abroad.
                    Transform your educational dreams into reality with IOES.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Button
                    size="lg"
                    // className="px-4 py-2 font-satoshi font-medium text-white rounded-md bg-gradient-to-r from-[#ED4746] to-[#FF8A50] hover:opacity-90 transition-opacity"
                    className="px-4 py-2 font-satoshi font-medium text-white rounded-md bg-[#ED4746] hover:opacity-80 hover:bg-[#ED4746] transition-opacity"
                    onClick={openPopup}
                  >
                    Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-satoshi font-light border-white text-white bg-transparent"
                  >
                    <Link href="/study-abroad#destinations">
                      Explore Destinations
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <div className="flex -space-x-2">
                    {[1, 3, 2, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      >
                        <Image
                          src={`/avatars/${i}.png`}
                          alt="user"
                          width={6}
                          height={6}
                          className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-nibpro font-medium text-normal text-white">
                    Trusted by{" "}
                    <span className="font-medium text-[#ed4746]">1,500+</span>{" "}
                    students
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                // className="w-full relative"
                className="w-full"
              >
                <Image
                  src="/lp1.webp"
                  width={550}
                  height={550}
                  alt="Students studying abroad"
                  className="mx-auto aspect-square rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
                />
                {/* <FloatingCountryChips /> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* University Partners Carousel - New Section */}
        <section className="w-full py-12 md:py-18 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 font-nibpro">
                  Student Placements
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Our Track Record of Global Admissions
                </h2>
                <div className="w-full flex justify-center">
                  <p className="max-w-[700px] text-gray-500 md:text-lg">
                    We take pride in guiding students to achieve their dreams of
                    studying abroad. Over the years, we've helped students gain
                    admission to some of the world’s most prestigious
                    institutions.
                  </p>
                </div>
              </div>
            </div>
            <UniversityCarousel />
          </div>
        </section>

        {/* About Section - Updated with softer colors */}
        <section
          id="about"
          className="w-full py-12 md:py-18 bg-gradient-to-b from-white to-[#f0ebe6]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 font-nibpro">
                  About IOES
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Your Trusted Education Partner
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  IOES is a premier overseas education consultancy based in
                  Delhi, helping students achieve their dreams of studying
                  abroad since 2019.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/ioes-student-partner.webp"
                  width={400}
                  height={400}
                  alt="IOES Office"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  {[
                    {
                      icon: <Users className="h-5 w-5" />,
                      title: "Expert Counselors",
                      description:
                        "Our team of experienced counselors provides personalized guidance tailored to your academic goals.",
                      color: "bg-teal-100 text-teal-800",
                    },
                    {
                      icon: <Building className="h-5 w-5" />,
                      title: "University Partnerships",
                      description:
                        "We have partnerships with top universities worldwide, ensuring you get the best opportunities.",
                      color: "bg-emerald-100 text-emerald-800",
                    },
                    {
                      icon: <Award className="h-5 w-5" />,
                      title: "Proven Success",
                      description:
                        "With thousands of successful placements, we have a track record of turning aspirations into achievements.",
                      color: "bg-cyan-100 text-cyan-800",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Timeline - New Section */}
        <section className="w-full py-12 md:py-18 md:pb-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800 font-nibpro">
                  Application Process
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Your Path to International Education
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-lg">
                  A simple step-by-step guide to your overseas education journey
                  with IOES
                </p>
              </div>
            </div>
            <ApplicationTimeline />
          </div>
        </section>

        {/* Services Section - Updated with new colors */}
        <section id="services" className="w-full py-12 md:py-18 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 font-nibpro">
                  Our Services
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Comprehensive Support
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From university selection to visa approval, we guide you
                  through every step of your international education journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <GraduationCap className="h-10 w-10" />,
                  title: "University Selection",
                  description:
                    "Free personalized recommendations based on your academic profile and career goals.",
                  color: "text-amber-600 bg-amber-50 border-amber-200",
                },
                {
                  icon: <CheckCircle2 className="h-10 w-10" />,
                  title: "Application Assistance",
                  description:
                    "Expert guidance on preparing compelling applications for your target universities.",
                  color: "text-orange-600 bg-orange-50 border-orange-200",
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Visa Guidance",
                  description:
                    "Step-by-step support for visa application process with high success rates.",
                  color: "text-rose-600 bg-rose-50 border-rose-200",
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Pre-Departure Briefing",
                  description:
                    "Comprehensive orientation to prepare you for life and studies abroad.",
                  color: "text-purple-600 bg-purple-50 border-purple-200",
                },
                {
                  icon: <Building className="h-10 w-10" />,
                  title: "Accommodation Support",
                  description:
                    "Assistance in finding suitable and affordable accommodation options.",
                  color: "text-indigo-600 bg-indigo-50 border-indigo-200",
                },
                {
                  icon: <Award className="h-10 w-10" />,
                  title: "Scholarship Guidance",
                  description:
                    "Information and application support for various scholarship opportunities.",
                  color: "text-cyan-600 bg-cyan-50 border-cyan-200",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${service.color}`}
                >
                  <div className={service.color.split(" ")[0]}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                asChild
                className="bg-[#ED4746] hover:bg-[#ED4746] text-white shadow-md"
              >
                <Link href="/services">
                  Explore All Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Destinations Section - Updated with vibrant colors */}
        <section
          id="destinations"
          className="w-full py-12 md:py-18 bg-gradient-to-b from-white to-indigo-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-800 font-nibpro">
                  Study Destinations
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Global Education Opportunities
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore top study destinations with world-class universities
                  and diverse cultural experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {destinations["destinations"].map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="group relative overflow-hidden rounded-xl shadow-lg block h-full"
                  >
                    <Image
                      src={
                        `/cover/${destination.slug}.webp` || "/placeholder.svg"
                      }
                      alt={destination.country}
                      width={300}
                      height={200}
                      className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h3 className="text-xl font-bold">
                        {destination.country}
                      </h3>
                      <p className="text-sm text-indigo-100">
                        {destination.universities}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#ED4746] hover:bg-[#ED4746]/80 text-white shadow-md">
                <Link href="/study-abroad">Learn More</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Updated with deeper colors */}
        <section
          id="testimonials"
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
          className="w-full py-12 md:py-18 text-white"
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
              {reviews["landing-page"].map((testimonial, index) => (
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

        {/* <UpcomingEventsSection /> */}

        {/* Why Choose Us Section - Updated with fresh colors */}
        <section className="w-full py-12 md:py-18 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 font-nibpro">
                    Why Choose IOES
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                    Your Future, Our Priority
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    We're committed to helping you achieve your educational
                    goals with personalized guidance and support.
                  </p>
                </div>
                <ul className="grid gap-4">
                  {[
                    "Free personalized counseling tailored to your academic profile",
                    "Students placed at 200+ universities worldwide",
                    "98% visa success rate",
                    "Comprehensive support from application to arrival",
                    "Regular workshops and seminars on study abroad opportunities",
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-700">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Button
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-md"
                    onClick={openPopup}
                  >
                    Book a Consultation
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }} // Reduced from 30 to 20
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/students-celebrating-graduation.webp"
                  width={500}
                  height={400}
                  alt="Students celebrating graduation"
                  className="rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section - Updated with subtle colors */}
        <section id="contact" className="w-full py-12 md:py-18 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800 font-nibpro">
                  Get in Touch
                </div>
                <h2 className="text-4xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                  Start Your Journey Today
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us for a free consultation and take the first step
                  towards your international education.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-10">
                {/* Delhi Office */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-rose-50 p-6"
                >
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Delhi Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">{contact["office-delhi"]}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">{contact["number-delhi"]}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Mumbai Office */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-rose-50 p-6"
                >
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Mumbai Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">
                        {contact["office-mumbai"]}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">
                        {contact["number-mumbai"]}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Common Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-rose-50 p-6"
                >
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Other Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">info@ioes.in</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-rose-600" />
                      <p className="text-gray-600">
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Socials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-rose-50 p-6"
                >
                  <h3 className="mb-4 font-bold text-gray-900">Follow Us</h3>
                  <div className="flex gap-4">
                    {["Facebook", "Instagram", "Youtube", "LinkedIn"].map(
                      (social) => (
                        <motion.div
                          key={social}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full mr-3 border-rose-300 text-rose-600 hover:bg-rose-100"
                          >
                            <Link
                              href={links[social as keyof typeof links]}
                              target="_blank"
                            >
                              {icons[social as keyof typeof icons]}
                            </Link>
                          </Button>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                style={{ height: "fit-content" }}
                className="rounded-xl border border-rose-100 bg-white p-6 shadow-md"
              >
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Request a Free Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2 font-nibpro">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 font-nibpro">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div className="space-y-2 font-nibpro">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div className="space-y-2 font-nibpro">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Preferred Study Destination
                    </label>
                    <select
                      id="country"
                      className="flex h-10 w-full rounded-md border border-rose-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="newzealand">New Zealand</option>
                      <option value="ireland">Ireland</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none font-nibpro text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your study plans and requirements"
                      className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full font-nibpro bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-md"
                    >
                      Submit Request
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
}
