import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Building,
  CheckCircle,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                  Empowering Global Education Dreams Since 2005
                </h1>
                <p className="mb-8 text-lg opacity-90">
                  IOES has helped over 15,000 students achieve their dreams of
                  studying abroad through personalized guidance and support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-gray-100"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white bg-indigo-700 hover:bg-white hover:text-indigo-700"
                  >
                    <Link href="/success-stories">View Success Stories</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-80 w-full max-w-md overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="IOES Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Mission & Vision</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700">
                    To provide comprehensive, ethical, and personalized guidance
                    to students aspiring to study abroad, ensuring they make
                    informed decisions that align with their academic goals,
                    career aspirations, and financial circumstances.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="bg-indigo-600 p-4 text-white">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700">
                    To be the most trusted overseas education consultancy in
                    India, recognized for our integrity, student-centric
                    approach, and consistent delivery of exceptional service
                    that transforms educational aspirations into reality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
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
                      <h3 className="mb-2 text-xl font-bold">
                        Founded in 2005
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
                      <h3 className="mb-2 text-xl font-bold">
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
                      <h3 className="mb-2 text-xl font-bold">
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
                      <h3 className="mb-2 text-xl font-bold">
                        Student Success
                      </h3>
                      <p className="text-gray-700">
                        We've helped over 15,000 students achieve their dreams
                        of studying abroad, with a 98% visa success rate and
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
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
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Leadership Team</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Meet the experienced professionals guiding IOES's mission
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rajiv Sharma",
                  position: "Founder & CEO",
                  bio: "With over 25 years in international education, Rajiv founded IOES with a vision to transform overseas education consultancy in India.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Priya Patel",
                  position: "Director of Operations",
                  bio: "Priya oversees all operational aspects of IOES, ensuring seamless service delivery across all our offices.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Dr. Anand Verma",
                  position: "Head of Academic Counseling",
                  bio: "A former university professor, Dr. Verma leads our team of academic counselors with his extensive knowledge of global education systems.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Meera Kapoor",
                  position: "Visa & Immigration Specialist",
                  bio: "With a background in immigration law, Meera has helped thousands of students navigate complex visa processes successfully.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Vikram Singh",
                  position: "Financial Aid Advisor",
                  bio: "Vikram specializes in helping students secure scholarships and financial aid to make their study abroad dreams affordable.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Neha Gupta",
                  position: "University Relations Manager",
                  bio: "Neha maintains our partnerships with universities worldwide, staying updated on admission requirements and new programs.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-blue-600">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Achievements</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "15,000+",
                  label: "Students Placed",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  number: "500+",
                  label: "University Partners",
                  icon: <Building className="h-8 w-8" />,
                },
                {
                  number: "98%",
                  label: "Visa Success Rate",
                  icon: <CheckCircle className="h-8 w-8" />,
                },
                {
                  number: "12",
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
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">What Our Students Say</h2>
              <div className="mx-auto h-1 w-20 bg-blue-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Aditya Mehta",
                  university: "University of Toronto",
                  quote:
                    "IOES made my dream of studying in Canada a reality. Their counselors guided me through every step of the process, from university selection to visa application.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Sneha Reddy",
                  university: "University of Melbourne",
                  quote:
                    "I was overwhelmed by the prospect of studying abroad, but IOES simplified everything. Their scholarship guidance helped me secure a 50% tuition waiver!",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Rahul Khanna",
                  university: "Imperial College London",
                  quote:
                    "The personalized attention I received from IOES was exceptional. They understood my academic goals perfectly and matched me with the ideal program.",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
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
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild className="bg-blue-800 text-white">
                <Link href="/success-stories">Read More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Begin Your Global Education Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Schedule a free consultation with our expert counselors to discuss
              your study abroad options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-indigo-700 hover:bg-white hover:text-indigo-700"
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
