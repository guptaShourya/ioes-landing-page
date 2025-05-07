"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  GlobeIcon as GlobeHemisphereWest,
  MapPin,
  Compass,
  Home,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#f0ebe6] to-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-48 w-48 md:h-64 md:w-64">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Lost student"
                  fill
                  className="object-contain"
                />
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    x: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 text-5xl"
                >
                  🧭
                </motion.div>
                <motion.div
                  animate={{
                    rotate: [0, -10, 0, 10, 0],
                    y: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-6 -left-6 text-5xl"
                >
                  🗺️
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-light tracking-tighter sm:text-7xl">
                <span className="font-nibpro italic font-light">404</span> -
                Looks Like You're Lost
              </h1>

              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Even the best study abroad journeys can take unexpected detours!
                This page seems to have gone on an exchange program we didn't
                approve.
              </p>

              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center space-x-2 text-blue-800">
                  <GlobeHemisphereWest className="h-5 w-5" />
                  <span className="text-lg font-medium">
                    Current Location: Uncharted Territory
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-rose-800">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg font-medium">
                    Destination: Homepage
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-center space-y-2">
                <p className="text-gray-500">
                  Don't worry! We're redirecting you back to familiar territory
                  in:
                </p>
                <motion.div
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ED4746] text-white text-2xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: countdown > 0 ? Number.POSITIVE_INFINITY : 0,
                    duration: 1,
                    repeatDelay: 0,
                  }}
                >
                  {countdown}
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#ED4746] text-white hover:bg-[#ED4746]/90 transition-all duration-300"
                  >
                    <Link href="/" className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Return Home Now
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-300 transition-all duration-300"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Compass className="h-5 w-5" />
                      Need Directions?
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-md rounded-lg border bg-white/50 p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-medium">While You're Here...</h3>
              <p className="text-gray-500">
                Did you know that students who get lost on websites are 42% more
                likely to discover amazing study abroad opportunities? Okay, we
                made that up, but our counselors can help you find your way to
                the perfect international education program!
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
