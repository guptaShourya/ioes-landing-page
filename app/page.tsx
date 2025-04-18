import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="IOES Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold tracking-tight">IOES</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#destinations"
              className="text-sm font-medium hover:text-primary"
            >
              Destinations
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Success Stories
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm" className="hidden md:flex">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Global Education Journey Starts Here
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Expert guidance for students aspiring to study abroad.
                    Transform your educational dreams into reality with IOES.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                    Free Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    Explore Programs
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Trusted by <span className="font-medium">2,000+</span>{" "}
                    students
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Students studying abroad"
                className="mx-auto aspect-square rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  About IOES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Your Trusted Education Partner
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  IOES is a premier overseas education consultancy based in
                  Delhi, helping students achieve their dreams of studying
                  abroad since 2010.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="IOES Office"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Expert Counselors</h3>
                      <p className="text-gray-500">
                        Our team of experienced counselors provides personalized
                        guidance tailored to your academic goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Building className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        University Partnerships
                      </h3>
                      <p className="text-gray-500">
                        We have partnerships with top universities worldwide,
                        ensuring you get the best opportunities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Proven Success</h3>
                      <p className="text-gray-500">
                        With thousands of successful placements, we have a track
                        record of turning aspirations into achievements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Support
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                    "Personalized recommendations based on your academic profile and career goals.",
                },
                {
                  icon: <CheckCircle2 className="h-10 w-10" />,
                  title: "Application Assistance",
                  description:
                    "Expert guidance on preparing compelling applications for your target universities.",
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Visa Guidance",
                  description:
                    "Step-by-step support for visa application process with high success rates.",
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Pre-Departure Briefing",
                  description:
                    "Comprehensive orientation to prepare you for life and studies abroad.",
                },
                {
                  icon: <Building className="h-10 w-10" />,
                  title: "Accommodation Support",
                  description:
                    "Assistance in finding suitable and affordable accommodation options.",
                },
                {
                  icon: <Award className="h-10 w-10" />,
                  title: "Scholarship Guidance",
                  description:
                    "Information and application support for various scholarship opportunities.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-center text-gray-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Study Destinations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Global Education Opportunities
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore top study destinations with world-class universities
                  and diverse cultural experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  country: "United States",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "1,000+ Universities",
                },
                {
                  country: "United Kingdom",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "150+ Universities",
                },
                {
                  country: "Canada",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "100+ Universities",
                },
                {
                  country: "Australia",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "40+ Universities",
                },
                {
                  country: "New Zealand",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "8+ Universities",
                },
                {
                  country: "Germany",
                  image: "/placeholder.svg?height=200&width=300",
                  universities: "400+ Universities",
                },
              ].map((destination, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.country}
                    width={300}
                    height={200}
                    className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4 text-white">
                    <h3 className="text-xl font-bold">{destination.country}</h3>
                    <p className="text-sm">{destination.universities}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-blue-800 hover:bg-blue-900">
                Explore All Destinations
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-800 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hear From Our Students
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real experiences from students who achieved their dreams with
                  IOES guidance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rahul Sharma",
                  university: "Harvard University, USA",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "IOES made my dream of studying at Harvard a reality. Their counselors guided me through every step of the application process.",
                },
                {
                  name: "Priya Patel",
                  university: "University of Toronto, Canada",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "The visa guidance from IOES was exceptional. They prepared me thoroughly for the interview, which helped me secure my student visa without any issues.",
                },
                {
                  name: "Arjun Singh",
                  university: "University of Melbourne, Australia",
                  image: "/placeholder.svg?height=100&width=100",
                  testimonial:
                    "From university selection to scholarship applications, IOES provided comprehensive support that made my journey to Australia smooth and successful.",
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
                className="border-white text-blue-800 hover:bg-blue-800 hover:text-white"
              >
                View More Success Stories
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Why Choose IOES
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Your Future, Our Priority
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                    We're committed to helping you achieve your educational
                    goals with personalized guidance and support.
                  </p>
                </div>
                <ul className="grid gap-4">
                  {[
                    "Personalized counseling tailored to your academic profile",
                    "Partnerships with 500+ universities worldwide",
                    "95% visa success rate",
                    "Comprehensive support from application to arrival",
                    "Regular workshops and seminars on study abroad opportunities",
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-800" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-800 hover:bg-blue-900">
                    Book a Consultation
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Students celebrating graduation"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your Journey Today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us for a free consultation and take the first step
                  towards your international education.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-gray-500">
                      123 Education Street, Delhi, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-500">info@ioes.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-bold">Office Hours</h3>
                    <p className="text-gray-500">
                      Monday - Saturday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 font-bold">Follow Us</h3>
                  <div className="flex gap-4">
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                      (social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-full"
                        >
                          <span className="sr-only">{social}</span>
                          <div className="h-5 w-5 rounded-full bg-gray-300" />
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  Request a Free Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Preferred Study Destination
                    </label>
                    <select
                      id="country"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="newzealand">New Zealand</option>
                      <option value="germany">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your study plans and requirements"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-12">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="IOES Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold tracking-tight">IOES</span>
            </Link>
            <p className="text-sm text-gray-500">
              Institute of Overseas Education Services (IOES) is a premier
              education consultancy helping students achieve their dreams of
              studying abroad.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                  </Button>
                )
              )}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-blue-800">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-blue-800">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Study Destinations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-blue-800">
                  United States
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-800">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-800">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-800">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-800">
                  New Zealand
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-800">
                  Germany
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-800" />
                <span>123 Education Street, Delhi, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-800" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-blue-800" />
                <span>info@ioes.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-blue-800" />
                <span>Monday - Saturday: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} IOES. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:underline underline-offset-4"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
