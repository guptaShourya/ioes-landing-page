"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Building,
  CheckCircle,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Users,
} from "lucide-react";
import team from "../../data/team.json";
import reviews from "../../data/reviews.json";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
          className="relative py-20 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-5xl font-light md:text-5xl">
                  Empowering Global Education
                </h1>
                <div className="relative inline-block w-fit self-start">
                  <h1 className="text-5xl font-light font-nibpro italic opacity-60 md:text-5xl">
                    Dreams
                  </h1>
                  <Image
                    src="/underline.svg"
                    alt="Underline"
                    width={140}
                    height={10}
                    className="absolute left-1/2 -translate-x-1/2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-medium text-center w-[95%] md:text-left md:w-[75%]">
                  Since 2019, IOES has guided over 1,500 students in achieving
                  their study abroad goals through ethical, personalized
                  support. Focused on integrity and student success, we help
                  turn aspirations into global opportunities — one informed
                  decision at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                Our
                <span className="italic font-nibpro font-light text-[#1C1A1A]">
                  {" "}
                  Story
                </span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/team/cover.webp"
                    alt="IOES History"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">
                        Founded in 2019
                      </h3>
                      <p className="text-gray-700">
                        IOES was established in Delhi by a team of education
                        enthusiasts who recognized the need for ethical and
                        comprehensive overseas education consultancy services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">
                        Expanding Our Reach
                      </h3>
                      <p className="text-gray-700">
                        By 2019, we had expanded to multiple cities across India
                        and established partnerships with over 200 universities
                        worldwide, becoming a trusted name in overseas education
                        consultancy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">
                        Global Recognition
                      </h3>
                      <p className="text-gray-700">
                        Today, IOES is recognized as one of India's premier
                        education consultancies, with a network of offices
                        across the country and partnerships with over 500
                        institutions globally.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">
                        Student Success
                      </h3>
                      <p className="text-gray-700">
                        We've helped over 1,500 students achieve their dreams of
                        studying abroad, with a 98% visa success rate and
                        countless success stories from alumni now thriving in
                        global careers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container mx-auto px-4">
            <div className="mb-12 space-y-2 text-center flex flex-col items-center">
              <h2 className="text-5xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                Our
                <span className="italic font-nibpro font-light text-[#1C1A1A]">
                  {" "}
                  Core{" "}
                </span>
                Values
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These principles guide every interaction and decision we make at
                IOES
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <CheckCircle className="h-10 w-10" />,
                  title: "Integrity",
                  description:
                    "We provide honest, transparent guidance that puts student interests first.",
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Student-Centric",
                  description:
                    "Every recommendation is tailored to the unique needs and goals of each student.",
                },
                {
                  icon: <Award className="h-10 w-10" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in all our services, constantly improving our processes.",
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Global Perspective",
                  description:
                    "We embrace diversity and foster a global mindset in all our operations.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center p-6 text-center"
                >
                  <div className="mb-4 text-blue-600">{value.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 space-y-2 text-center flex flex-col items-center">
              <h2 className="text-5xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                Our
                <span className="italic font-nibpro font-light text-[#1C1A1A]">
                  {" "}
                  Leadership{" "}
                </span>
                Team
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experienced professionals guiding IOES's mission
              </p>
            </div>
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team["teamMembers"].map((member, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <div className="relative group h-[400px] overflow-hidden rounded-lg shadow-md">
                    {/* Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>

                      {/* Initial content - name and title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-8">
                        <h3 className="mb-1 text-xl font-medium">
                          {member.name}
                        </h3>
                        <p className="text-sm font-light italic font-nibpro text-white/80">
                          {member.position}
                        </p>
                      </div>

                      {/* Hover content - bio */}
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#102324] to-[#102324]/80 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                        initial={false}
                      >
                        <h3 className="mb-1 text-xl font-medium text-white">
                          {member.name}
                        </h3>
                        <p className="mb-3 text-sm font-light italic font-nibpro text-white/80">
                          {member.position}
                        </p>
                        <div className="overflow-y-auto max-h-[180px] pr-2 custom-scrollbar">
                          <p className="text-white/90 text-sm">{member.bio}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                Our
                <span className="italic font-nibpro font-light text-[#1C1A1A]">
                  {" "}
                  Achievements
                </span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "1,500+",
                  label: "Students Placed",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  number: "200+",
                  label: "University Placements",
                  icon: <Building className="h-8 w-8" />,
                },
                {
                  number: "98%",
                  label: "Visa Success Rate",
                  icon: <CheckCircle className="h-8 w-8" />,
                },
                {
                  number: "2",
                  label: "Offices Across India",
                  icon: <MapPin className="h-8 w-8" />,
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center p-6 text-center"
                >
                  <div className="mb-4 text-blue-600">{stat.icon}</div>
                  <h3 className="mb-2 text-3xl font-bold">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
                What Our
                <span className="italic font-nibpro font-light text-[#1C1A1A]">
                  {" "}
                  Students{" "}
                </span>
                Say
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {reviews["about-us-cards"].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm font-nibpro italic text-blue-600">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.review}"</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild className="bg-[#ED4746] text-white">
                <Link href="/success-stories">Read More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: "#102324",
            backgroundImage:
              "radial-gradient(circle farthest-corner at 140% -10%, #2d737b 10%, #102324 100%)",
          }}
          className="py-16 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-2 text-4xl font-normal tracking-tighter text-white sm:text-5xl sm:mb-4">
              <span className="italic font-nibpro font-light text-4xl sm:text-5xl">
                Ready
              </span>{" "}
              to Begin Your Global Education Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Schedule a free consultation with our expert counselors to discuss
              your study abroad options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#ED4746] text-white hover:bg-[#ED4746] hover:opacity-80 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-transparent transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
