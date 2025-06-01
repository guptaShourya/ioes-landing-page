"use client";

import type React from "react";

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
  Linkedin,
  MessageSquare,
  Users,
  Building,
  Youtube,
} from "lucide-react";
import { Footer } from "@/components/footer";
import contact from "../../data/contact.json";
import { useState } from "react";
import { AlertToast } from "@/components/ui/alert-toast";
import FAQs from "../../data/faqs.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    variant: "success" | "error";
    message: string;
    description?: string;
  }>({
    show: false,
    variant: "success",
    message: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Handle form submission logic here
      const response = await fetch("https://sheetdb.io/api/v1/1kz4nka53rvpu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }), // key `data` is mandatory
      });

      if (response.ok) {
        const result = await response.json();

        // Show success alert
        setAlert({
          show: true,
          variant: "success",
          message: "Message Sent Successfully!",
          description:
            "Thank you for reaching out. Our team will contact you within 24-48 hours.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
      } else {
        // Show error alert
        setAlert({
          show: true,
          variant: "error",
          message: "Submission Failed",
          description:
            "Please call our office at " +
            contact.primaryNumber +
            " for immediate assistance.",
        });
      }
    } catch (error) {
      // Show error alert
      setAlert({
        show: true,
        variant: "error",
        message: "Something went wrong",
        description:
          "Please call our office at " +
          contact.primaryNumber +
          " for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {alert.show && (
        <AlertToast
          variant={alert.variant}
          message={alert.message}
          description={alert.description}
          position="top"
          duration={5000}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                    Get in Touch
                  </div>
                  <h1 className="text-5xl font-light italic font-nibpro tracking-tighter text-black sm:text-7xl font-light">
                    Contact Us
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Have questions about studying abroad? Our team of expert
                    counselors is here to help you navigate your international
                    education journey.
                  </p>
                </div>
                <div className="space-y-6">
                  {/* Visit Our Offices */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visit Our Offices</h3>
                      <div className="mt-2 space-y-2 text-gray-500">
                        <div>
                          <p className="font-medium text-gray-700">
                            Delhi Office:
                          </p>
                          <p>{contact["address-delhi-line1"]}</p>
                          <p>{contact["address-delhi-line2"]}</p>
                          <p>{contact["address-delhi-line3"]}</p>
                        </div>
                        <div className="pt-2">
                          <p className="font-medium text-gray-700">
                            Mumbai Office:
                          </p>
                          <p>{contact["address-mumbai-line1"]}</p>
                          <p>{contact["address-mumbai-line2"]}</p>
                          <p>{contact["address-mumbai-line3"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <div className="mt-2 space-y-2 text-gray-500">
                        <div>
                          <p className="font-medium text-gray-700">
                            Delhi Office:
                          </p>
                          <p>{contact["number-delhi"]}</p>
                        </div>
                        <div className="pt-2">
                          <p className="font-medium text-gray-700">
                            Mumbai Office:
                          </p>
                          <p>{contact["number-mumbai"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <div className="mt-2 space-y-2 text-gray-500">
                        <div>
                          {/* <p className="font-medium text-gray-700"> */}
                          {/* General Inquiries: */}
                          {/* </p> */}
                          <p>{contact["general-email"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
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
                      <Link
                        href="https://www.facebook.com/www.ioes.in/"
                        target="_blank"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Link
                        href="https://www.instagram.com/ioes.in/"
                        target="_blank"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Link
                        href="https://www.youtube.com/@inspireoverseaaseducation"
                        target="_blank"
                      >
                        <Youtube className="h-5 w-5" />
                      </Link>
                      <span className="sr-only">Youtube</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Link
                        href="https://www.linkedin.com/company/inspire-overseaas-education-services/"
                        target="_blank"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border bg-white p-6 shadow-sm w-full">
                  <h3 className="mb-4 text-xl font-bold">Send Us a Message</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
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
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
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
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
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
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleSelectChange}
                        required
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-rose-800 hover:bg-rose-900"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Our Location
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
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
                    src="/contact-cover.png"
                    alt="Office location map"
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-rose-800" />
                    <span>{contact.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-rose-800" />
                    <span>Near Central Metro Station</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-rose-800" />
                    <span>10:00 AM - 6:00 PM (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Departments Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Departments
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  <span className="italic font-nibpro font-light">
                    Contact{" "}
                  </span>{" "}
                  Specific Departments
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
                  email: "counsellor3@ioes.in",
                  phone: "+91 9355451451",
                },
                {
                  title: "Visa Assistance",
                  icon: <Globe className="h-10 w-10" />,
                  email: "info@ioes.in",
                  phone: "+91 8448008651",
                },
                {
                  title: "Scholarship Support",
                  icon: <Building className="h-10 w-10" />,
                  email: "info@ioes.in",
                  phone: "+91 8448008651",
                },
                {
                  title: "Student Support",
                  icon: <MessageSquare className="h-10 w-10" />,
                  email: "partnerships@ioes.in",
                  phone: "+91 9355451451",
                },
                {
                  title: "Partnerships",
                  icon: <Users className="h-10 w-10" />,
                  email: "partnerships@ioes.in",
                  phone: "+91 11-47051451",
                },
                {
                  title: "Media Inquiries",
                  icon: <Globe className="h-10 w-10" />,
                  email: "info@ioes.in",
                  phone: "+91 11-47051451",
                },
              ].map((department, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-rose-800">{department.icon}</div>
                  <h3 className="text-xl font-medium">{department.title}</h3>
                  <div className="space-y-2 text-center">
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-rose-800" />
                      <span>{department.email}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-rose-800" />
                      <span>{department.phone}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  FAQs
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Frequently Asked
                  <span className="font-nibpro italic font-light">
                    {" "}
                    Questions
                  </span>
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Find answers to common questions about contacting and working
                  with IOES.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-6">
                {FAQs["contact"].map((faq, index) => (
                  <div key={index} className="rounded-lg border p-6">
                    <h3 className="text-lg font-normal italic">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
