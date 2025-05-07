"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { ChevronRight, Quote } from "lucide-react";
import { Footer } from "@/components/footer";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { usePopup } from "@/hooks/use-popup";
import reviews from "../../data/reviews.json";
import destinations from "../../data/destinations.json";
import VideoStoriesSection from "@/components/video-stories-section";

const featuredStories = reviews["success-stories-main"];

const testimonials = reviews["success-stories-cards"];

const destinationsData = destinations["destinations"];

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
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <h1 className="text-5xl font-normal tracking-tighter text-white sm:text-7xl font-light">
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
                className="bg-[#ED4746] text-white hover:bg-[#ED4746]/90 transition-all duration-300"
              >
                <Link href="/contact">Start Your Success Story</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:text-white hover:bg-transparent hover:opacity-80 transitions-all duration-300"
                onClick={openPopup}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Success Stories Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Featured Stories
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
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
                  className={`flex flex-col gap-8 md:flex-row items-center ${
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
                    <div className="flex items-center gap-2 text-rose-800">
                      <Quote className="h-6 w-6" />
                      <span className="text-sm font-medium">Success Story</span>
                    </div>
                    <h3 className="text-2xl font-bold">{story.name}</h3>
                    <div className="space-y-1 text-gray-500 italic">
                      <p>
                        <span>{story.course}</span>, {story.university}
                      </p>
                      <p>
                        {story.country}, Class of {story.year}
                      </p>
                    </div>
                    <p className="italic text-gray-600">"{story.review}"</p>
                    {story.achievement != "" ? (
                      <div className="rounded-lg bg-rose-50 p-4">
                        <p className="font-medium text-rose-800">
                          Achievement: {story.achievement}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Student Voices
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
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
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white"
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center flex-col">
                    <p className="text-gray-500">"{testimonial.review}"</p>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm italic text-rose-800">
                        {testimonial.course}, {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <VideoStoriesSection />

        {/* Success by Numbers Section */}
        <section className="w-full p-6 md:p-12 lg:p-24 bg-gradient-to-t from-white to-[#f0ebe6] text-white">
          <div className="container pt-8 p-4 bg-[#b82b35] rounded-xl md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-light font-nibpro italic tracking-tighter sm:text-6xl">
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
                { label: "Visa Success Rate", value: "98%" },
                { label: "Student Satisfaction", value: "4.92/5" },
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
                <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Global Presence
                </div>
                <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
                  Where Our Students Study
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
                  IOES students are pursuing their dreams at top universities
                  across these popular study destinations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {destinationsData.map((destination, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-800">
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
                    <p className="text-gray-500">{destination.universities}</p>
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
                  Start Your Success Story
                  <span className="font-light italic font-nibpro"> Today</span>
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl/relaxed">
                  Join thousands of successful students who achieved their
                  international education dreams with IOES guidance. Your
                  journey begins with a simple conversation.
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
