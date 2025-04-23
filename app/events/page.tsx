"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import eventsData from "@/data/events.json";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, upcoming, past

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const today = new Date();

  const filteredEvents = eventsData.events
    .filter((event) => {
      // Search filter
      if (
        searchTerm &&
        !event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !event.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Date filter
      const eventDate = new Date(event.date);
      if (filter === "upcoming" && eventDate < today) {
        return false;
      }
      if (filter === "past" && eventDate >= today) {
        return false;
      }

      return true;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Events & Workshops
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-[600px] text-white/80 md:text-xl"
                  >
                    Join our educational events, workshops, and fairs to get
                    expert guidance and connect with university representatives.
                  </motion.p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/events/events-hero.jpg"
                  alt="IOES Events"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full py-8 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className={
                    filter === "all" ? "bg-indigo-600 hover:bg-indigo-700" : ""
                  }
                >
                  All Events
                </Button>
                <Button
                  variant={filter === "upcoming" ? "default" : "outline"}
                  onClick={() => setFilter("upcoming")}
                  className={
                    filter === "upcoming"
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : ""
                  }
                >
                  Upcoming
                </Button>
                <Button
                  variant={filter === "past" ? "default" : "outline"}
                  onClick={() => setFilter("past")}
                  className={
                    filter === "past" ? "bg-indigo-600 hover:bg-indigo-700" : ""
                  }
                >
                  Past Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events List Section */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            {filteredEvents.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={
                          event.image || "/placeholder.svg?height=200&width=300"
                        }
                        alt={event.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {new Date(event.date) < today && (
                        <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-xs font-medium">
                          Past Event
                        </div>
                      )}
                      {new Date(event.date) >= today && (
                        <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-medium">
                          Upcoming
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="mr-2 h-4 w-4 text-indigo-600" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="mr-2 h-4 w-4 text-indigo-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="mr-2 h-4 w-4 text-indigo-600" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 flex-1">
                        {event.description}
                      </p>
                      <Button
                        asChild
                        className={`mt-auto ${
                          new Date(event.date) < today
                            ? "bg-gray-600 hover:bg-gray-700"
                            : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                        } text-white`}
                        disabled={new Date(event.date) < today}
                      >
                        <Link href={event.registrationLink}>
                          {new Date(event.date) < today
                            ? "Event Completed"
                            : "Register Now"}
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-gray-100 p-6 mb-4">
                  <Calendar className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No events found
                </h3>
                <p className="text-gray-600 max-w-md">
                  We couldn't find any events matching your search criteria.
                  Please try a different search term or check back later.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
