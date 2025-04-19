import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
  Users,
  Building,
} from "lucide-react";

export default function ContactPage() {
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
                    Get in Touch
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Contact Us
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Have questions about studying abroad? Our team of expert
                    counselors is here to help you navigate your international
                    education journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visit Our Office</h3>
                      <p className="text-gray-500">
                        123 Education Street, Delhi, India
                      </p>
                      <p className="text-gray-500">
                        Landmark: Near Central Metro Station
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-gray-500">
                        +91 98765 43210 (General Inquiries)
                      </p>
                      <p className="text-gray-500">
                        +91 98765 43211 (Admissions)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-gray-500">
                        info@ioes.in (General Inquiries)
                      </p>
                      <p className="text-gray-500">
                        admissions@ioes.in (Admissions)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="text-gray-500">
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Connect With Us</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border bg-white p-6 shadow-sm w-full">
                  <h3 className="mb-4 text-xl font-bold">Send Us a Message</h3>
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
                        htmlFor="inquiry-type"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiry-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Information</option>
                        <option value="admission">Admission Process</option>
                        <option value="visa">Visa Guidance</option>
                        <option value="scholarship">
                          Scholarship Information
                        </option>
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
                        placeholder="Enter your message"
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-800 hover:bg-blue-900"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Location
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Find Us
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Visit our office for a personalized consultation with our
                  expert counselors.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="overflow-hidden rounded-xl border shadow-sm">
                <div className="aspect-[16/9] w-full bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Office location map"
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-blue-800" />
                    <span>123 Education Street, Delhi, India</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-blue-800" />
                    <span>Near Central Metro Station</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-blue-800" />
                    <span>10:00 AM - 6:00 PM (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Departments Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Departments
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Specific Departments
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Reach out directly to our specialized teams for specific
                  inquiries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Admissions",
                  icon: <Users className="h-10 w-10" />,
                  email: "admissions@ioes.in",
                  phone: "+91 98765 43211",
                },
                {
                  title: "Visa Assistance",
                  icon: <Globe className="h-10 w-10" />,
                  email: "visa@ioes.in",
                  phone: "+91 98765 43212",
                },
                {
                  title: "Scholarship Support",
                  icon: <Building className="h-10 w-10" />,
                  email: "scholarships@ioes.in",
                  phone: "+91 98765 43213",
                },
                {
                  title: "Student Support",
                  icon: <MessageSquare className="h-10 w-10" />,
                  email: "support@ioes.in",
                  phone: "+91 98765 43214",
                },
                {
                  title: "Partnerships",
                  icon: <Users className="h-10 w-10" />,
                  email: "partnerships@ioes.in",
                  phone: "+91 98765 43215",
                },
                {
                  title: "Media Inquiries",
                  icon: <Globe className="h-10 w-10" />,
                  email: "media@ioes.in",
                  phone: "+91 98765 43216",
                },
              ].map((department, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-blue-800">{department.icon}</div>
                  <h3 className="text-xl font-bold">{department.title}</h3>
                  <div className="space-y-2 text-center">
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-blue-800" />
                      <span>{department.email}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-blue-800" />
                      <span>{department.phone}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                  Find answers to common questions about contacting and working
                  with IOES.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-6">
                {[
                  {
                    question: "How can I schedule a counseling session?",
                    answer:
                      "You can schedule a counseling session by filling out the contact form on this page, calling our office, or visiting us in person. We offer both in-person and virtual counseling sessions.",
                  },
                  {
                    question: "Is there a fee for initial consultation?",
                    answer:
                      "No, our initial consultations are completely free of charge. We believe in providing accessible guidance to all students aspiring to study abroad.",
                  },
                  {
                    question:
                      "How quickly will I receive a response to my inquiry?",
                    answer:
                      "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our office directly.",
                  },
                  {
                    question: "Can I visit your office without an appointment?",
                    answer:
                      "While we welcome walk-ins, we recommend scheduling an appointment to ensure that a counselor with expertise in your area of interest is available to assist you.",
                  },
                  {
                    question: "Do you have offices in other cities?",
                    answer:
                      "Currently, our main office is in Delhi, but we have partner offices in Mumbai, Bangalore, Chennai, and Hyderabad. We also offer virtual consultations for students from any location.",
                  },
                ].map((faq, index) => (
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
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed">
                  Contact us today for a free consultation and take the first
                  step towards your international education.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-white/90"
                >
                  Book a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  Explore Study Destinations
                </Button>
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
                <Link href="/" className="hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:text-blue-800">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-blue-800">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-blue-800">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Study Destinations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/destinations/usa" className="hover:text-blue-800">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/destinations/uk" className="hover:text-blue-800">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/canada"
                  className="hover:text-blue-800"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/australia"
                  className="hover:text-blue-800"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/new-zealand"
                  className="hover:text-blue-800"
                >
                  New Zealand
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/germany"
                  className="hover:text-blue-800"
                >
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
