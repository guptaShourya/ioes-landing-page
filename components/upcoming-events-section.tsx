"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import eventsData from "@/data/events.json";

export function UpcomingEventsSection() {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const featuredEvents = eventsData.events
    .filter((event) => event.featured)
    .slice(0, visibleEvents);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-800 font-nibpro">
              Upcoming Events
            </div>
            <h2 className="text-3xl font-normal tracking-tighter text-gray-900 sm:text-6xl">
              Join Us at Our Events
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg">
              Attend our informative sessions, workshops, and education fairs to
              get first-hand information about studying abroad.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg?height=200&width=300"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
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
                  className="mt-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                >
                  <Link href={event.registrationLink}>Register Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Button
            asChild
            variant="outline"
            className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
          >
            <Link href="/events">
              View All Events
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
