"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  MapPin,
  School,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Star,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Users,
  Building,
  BookOpen,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Download,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { College } from "@/types/college";

export default function CollegePage({ data }: { data: College }) {
  const { isOpen, openPopup, closePopup } = usePopup();

  // Handle case where data is null or undefined
  if (!data) {
    return (
      <div className="container px-4 md:px-6 py-20">
        <h1 className="text-2xl font-semibold">College data not available</h1>
        <p className="text-gray-600 mt-2">
          Please try again later or contact support.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-3">
          <div className="container px-4 md:px-6">
            <nav className="flex items-center space-x-1 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/colleges" className="hover:text-gray-900">Colleges</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">{data.name}</span>
            </nav>
          </div>
        </section>

        {/* College Header */}
        <section className="w-full py-6 md:py-8 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* College Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  {data.logo && (
                    <Image
                      src={data.logo}
                      alt={`${data.name} logo`}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-lg bg-white p-2 object-contain shadow-md border"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {data.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-red-500" />
                            {data.city}{data.state ? `, ${data.state}` : ""}, {data.country}
                          </span>
                          {data.established && (
                            <span className="inline-flex items-center gap-1">
                              <School className="h-4 w-4 text-blue-500" />
                              Estd. {data.established}
                            </span>
                          )}
                          {data.type && (
                            <Badge variant="secondary">{data.type} Institute</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">4.2</span>
                            <span className="text-gray-600">/5 (120 Reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4 text-blue-500" />
                            <span className="text-blue-600">85 Q&A</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="md:w-80">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border">
                  <div className="space-y-3">
                    <Button onClick={openPopup} className="w-full bg-orange-600 hover:bg-orange-700">
                      Get Free Consultation
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Brochure
                      </Button>
                      {data.website && (
                        <Button variant="outline" size="sm" asChild className="text-xs">
                          <Link href={data.website} target="_blank">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                        </Button>
                      )}
                    </div>
                    <div className="text-center text-xs text-gray-600">
                      Compare with other colleges
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-12">
            <div className="flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4">
                {data.logo ? (
                  <Image
                    src={data.logo || "/placeholder.svg"}
                    alt={`${data.name} logo`}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded bg-white p-1 object-contain shadow"
                  />
                ) : null}
                <h1 className="text-white text-3xl sm:text-5xl font-light tracking-tight">
                  {data.name}
                </h1>
              </div>
              <p className="text-white/90 max-w-2xl">
                {data.overview ||
                  "Discover programs, admissions, scholarships, and campus life for your next academic leap."}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#ED4746]" />
                  {data.city}
                  {data.state ? `, ${data.state}` : ""}, {data.country}
                </span>
                {data.established ? (
                  <span className="inline-flex items-center gap-2">
                    <School className="h-5 w-5 text-[#ED4746]" />
                    Established {data.established}
                  </span>
                ) : null}
                {data.type ? (
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#ED4746]" />
                    {data.type}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={openPopup}
                  className="bg-[#ED4746] hover:bg-[#ED4746]/90 text-white"
                >
                  Get Free Consultation
                </Button>
                {data.website ? (
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link
                      href={data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Image
                src={
                  data.bannerImage ||
                  "/placeholder.svg?height=360&width=640&query=college%20campus%20hero"
                }
                alt={`${data.name} campus`}
                width={640}
                height={360}
                className="mx-auto aspect-video rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="w-full bg-gradient-to-b from-[#f0ebe6] to-white py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <FactCard
              title="Location"
              value={`${data.city}${data.state ? `, ${data.state}` : ""}, ${
                data.country
              }`}
            />
            <FactCard
              title="Established"
              value={data.established ? String(data.established) : "—"}
            />
            <FactCard title="Institution Type" value={data.type || "—"} />
          </div>

          {/* Rankings */}
          {data.rankings && data.rankings.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Rankings
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.rankings.map((r, i) => (
                  <div
                    key={i}
                    className="rounded-lg border bg-white p-4 flex items-center gap-3"
                  >
                    <Star className="h-5 w-5 text-amber-500" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {r.rank}
                        {r.year ? ` • ${r.year}` : ""}
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        {r.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Programs */}
      <section className="w-full py-10 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-gray-900">
                Programs
              </h2>
              <p className="text-gray-600">
                Explore flagship programs, fees, and intakes.
              </p>
            </div>
          </div>

          {data.programs && data.programs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-xl overflow-hidden">
                <thead className="bg-rose-50">
                  <tr className="text-left text-gray-700">
                    <th className="p-3">Program</th>
                    <th className="p-3">Degree</th>
                    <th className="p-3">Level</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Fee</th>
                    <th className="p-3">Next Intake</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.programs.map((p, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3">{p.name}</td>
                      <td className="p-3">{p.degree}</td>
                      <td className="p-3">{p.level}</td>
                      <td className="p-3">{p.subject}</td>
                      <td className="p-3">{p.duration}</td>
                      <td className="p-3">{p.fee}</td>
                      <td className="p-3">{p.nextIntake || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">Programs will be updated soon.</p>
          )}

          {/* Detailed Intakes */}
          {data.programs?.some((p) => p.intakes && p.intakes.length) ? (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Upcoming Intakes</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.programs?.flatMap((p) =>
                  (p.intakes || []).map((i, idx) => (
                    <div
                      key={`${p.name}-${idx}`}
                      className="rounded-lg border p-4 bg-white"
                    >
                      <p className="text-gray-900 font-medium">{p.name}</p>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
                        <span className="text-gray-500">Campus</span>
                        <span>{i.campus}</span>
                        <span className="text-gray-500">Fees</span>
                        <span>{i.fees}</span>
                        <span className="text-gray-500">Duration</span>
                        <span>{i.duration}</span>
                        <span className="text-gray-500">Start</span>
                        <span>
                          {i.startMonth} {i.startYear}
                        </span>
                        <span className="text-gray-500">Attendance</span>
                        <span>{i.attendance}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Eligibility & English Tests + Admissions + Scholarships */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-3">
          {/* English Tests */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              English Requirements
            </h3>
            <p className="text-gray-600 mb-4">
              Minimum scores for accepted tests.
            </p>
            <div className="space-y-4">
              {data.englishRequirements?.length ? (
                data.englishRequirements.map((e, i) => (
                  <div key={i} className="rounded-lg border bg-white p-4">
                    <p className="font-medium text-gray-900">{e.test}</p>
                    <p className="text-sm text-gray-600">
                      {e.min !== undefined ? `Min: ${e.min}` : ""}
                      {e.max !== undefined ? ` • Max: ${e.max}` : ""}
                      {e.bandBreakdown ? ` • ${e.bandBreakdown}` : ""}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Details will be updated soon.</p>
              )}
            </div>
          </div>

          {/* Admissions */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-900">Admissions</h3>
            {data.admissions?.applicationFee ? (
              <p className="text-sm text-gray-600 mb-2">
                Application Fee: {data.admissions.applicationFee}
              </p>
            ) : null}
            <div className="space-y-4">
              {data.admissions?.steps?.length ? (
                data.admissions.steps.map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{s.title}</p>
                      {s.description ? (
                        <p className="text-gray-600 text-sm">{s.description}</p>
                      ) : null}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Admissions steps coming soon.</p>
              )}
            </div>
          </div>

          {/* Scholarships */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-900">
              Scholarships
            </h3>
            <div className="space-y-4">
              {data.scholarships?.length ? (
                data.scholarships.map((sch, i) => (
                  <div key={i} className="rounded-lg border bg-white p-4">
                    <p className="font-medium text-gray-900">{sch.name}</p>
                    <p className="text-sm text-gray-600">{sch.amount || ""}</p>
                    {sch.eligibility ? (
                      <p className="text-sm text-gray-600 mt-1">
                        {sch.eligibility}
                      </p>
                    ) : null}
                    {sch.link ? (
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto text-[#ED4746]"
                      >
                        <Link
                          href={sch.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn more <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                ))
              ) : (
                <p className="text-gray-600">
                  Scholarship details coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {data.gallery?.length ? (
        <section className="w-full py-10 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Gallery
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.gallery.map((src, i) => (
                <Image
                  key={i}
                  src={
                    src ||
                    "/placeholder.svg?height=200&width=360&query=campus%20photo"
                  }
                  alt={`Gallery ${i + 1}`}
                  width={360}
                  height={200}
                  className="h-48 w-full rounded-lg object-cover shadow"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTAs */}
      <section className="w-full py-10 md:py-16 text-white college-gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <CtaCard
              title={`Learn more about Study in ${data.country}`}
              description="Explore scholarships, visas, and student life."
              href={`/study-abroad`}
              button="Explore"
            />
            <CtaCard
              title={`Explore more ${
                data.programs?.[0]?.subject || "program"
              } courses`}
              description="Compare programs across universities."
              href={`/courses?subject=${encodeURIComponent(
                data.programs?.[0]?.subject || ""
              )}`}
              button="Browse Courses"
            />
            <div className="rounded-xl bg-white/10 backdrop-blur p-6 border border-white/15">
              <h4 className="text-xl font-medium mb-2">How IOES can help</h4>
              <p className="text-white/90 mb-4">
                From shortlisting to visa, get end‑to‑end guidance tailored for
                you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={openPopup}
                  className="bg-[#ED4746] hover:bg-[#ED4746]/90 text-white"
                >
                  Get Free Consultation
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Map */}
      {data.contact?.mapUrl || data.contact?.address ? (
        <section className="w-full py-10 md:py-16 bg-gradient-to-b from-white to-[#f0ebe6]">
          <div className="container px-4 md:px-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Location
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-4">
                <p className="text-gray-900 font-medium">{data.name}</p>
                {data.contact?.address ? (
                  <p className="text-gray-700 mt-2">{data.contact.address}</p>
                ) : null}
                <div className="mt-3 text-sm text-gray-600">
                  {data.contact?.phone ? (
                    <p>Phone: {data.contact.phone}</p>
                  ) : null}
                  {data.contact?.email ? (
                    <p>Email: {data.contact.email}</p>
                  ) : null}
                </div>
                {data.website ? (
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#ED4746]"
                    asChild
                  >
                    <Link href={data.website} target="_blank">
                      Visit Official Website
                    </Link>
                  </Button>
                ) : null}
              </div>
              <div className="rounded-xl overflow-hidden border bg-white">
                {data.contact?.mapUrl ? (
                  <iframe
                    src={data.contact.mapUrl}
                    className="w-full h-64 md:h-full"
                    title={`Map location for ${data.name}`}
                  />
                ) : (
                  <div className="h-64 md:h-full flex items-center justify-center text-gray-500">
                    Map will appear here
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}

function FactCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-xl font-medium text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function CtaCard({
  title,
  description,
  href,
  button,
}: {
  title: string;
  description: string;
  href: string;
  button: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-6 border border-white/15">
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-white/90 mb-4">{description}</p>
      <Button asChild className="bg-white text-gray-900 hover:bg-white/90">
        <Link href={href}>
          {button} <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
