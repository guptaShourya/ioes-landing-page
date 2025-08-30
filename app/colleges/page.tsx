"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, School, Search } from "lucide-react";

type CollegeCard = {
  slug: string;
  name: string;
  logo?: string;
  city: string;
  country: string;
  subjects?: string[];
  feeFrom?: string;
  nextIntake?: string;
  type?: string;
};

export default function CollegesIndexPage() {
  const [data, setData] = useState<CollegeCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const [institution, setInstitution] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    fetch("/api/college/index")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch colleges");
        }
        return r.json();
      })
      .then((d) => {
        setData(Array.isArray(d) ? d : []);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching colleges:", err);
        setError("Failed to load colleges. Please try again later.");
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const cities = useMemo(
    () => Array.from(new Set(data.map((d) => d.city))).sort(),
    [data]
  );
  const subjects = useMemo(
    () => Array.from(new Set(data.flatMap((d) => d.subjects || []))).sort(),
    [data]
  );

  const filtered = useMemo(() => {
    return data.filter((c) => {
      const matchesQ =
        q.trim() === "" ||
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.country.toLowerCase().includes(q.toLowerCase()) ||
        c.city.toLowerCase().includes(q.toLowerCase());
      const matchesCity = !city || c.city === city;
      const matchesInstitution =
        !institution ||
        c.name.toLowerCase().includes(institution.toLowerCase());
      const matchesSubject =
        !subject ||
        (c.subjects || []).some(
          (s) => s.toLowerCase() === subject.toLowerCase()
        );
      return matchesQ && matchesCity && matchesInstitution && matchesSubject;
    });
  }, [data, q, city, institution, subject]);

  return (
    <div className="w-full">
      {/* Hero-lite */}
      <section className="w-full py-10 md:py-16 college-gradient-bg">
        <div className="container px-4 md:px-6">
          <h1 className="text-white text-3xl sm:text-5xl font-light tracking-tight">
            Explore Colleges
          </h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Find the right institution by location, subject, and upcoming
            intakes.
          </p>
          {/* Filters */}
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search by college, country..."
                className="pl-9 bg-white/95"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <select
              title="Filter by city"
              className="h-10 rounded-md border bg-white/95 px-3 text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Input
              placeholder="Institution name"
              className="bg-white/95"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
            <select
              title="Filter by subject"
              className="h-10 rounded-md border bg-white/95 px-3 text-sm"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">All Subjects</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-b from-[#f0ebe6] to-white">
        <div className="container px-4 md:px-6">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-600">Loading colleges...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Results */}
          {!loading && !error && (
            <>
              {filtered.length === 0 ? (
                <p className="text-gray-600">
                  No colleges found. Adjust your filters.
                </p>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((c, i) => (
                    <motion.div
                      key={c.slug}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      whileHover={{ y: -4 }}
                      className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                      <Link href={`/colleges/${c.slug}`} className="block">
                        <div className="flex items-center gap-3">
                          {c.logo ? (
                            <Image
                              src={c.logo || "/placeholder.svg"}
                              alt={`${c.name} logo`}
                              width={44}
                              height={44}
                              className="h-11 w-11 rounded bg-gray-50 p-1 object-contain"
                            />
                          ) : null}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {c.name}
                            </h3>
                            <p className="text-sm text-gray-600 inline-flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-rose-600" />
                              {c.city}, {c.country}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-700 grid gap-2">
                          {c.type ? (
                            <p className="inline-flex items-center gap-2">
                              <School className="h-4 w-4 text-rose-600" />{" "}
                              {c.type}
                            </p>
                          ) : null}
                          <div className="flex flex-wrap gap-1">
                            {(c.subjects || []).slice(0, 3).map((s) => (
                              <span
                                key={s}
                                className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            {c.feeFrom ? (
                              <span>Fee from {c.feeFrom}</span>
                            ) : null}
                            {c.nextIntake ? (
                              <span>Next intake {c.nextIntake}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            className="bg-[#ED4746] hover:bg-[#ED4746]/90 text-white"
                            size="sm"
                          >
                            View College
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
