"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  MapPin,
  Plane,
  BookOpen,
  Globe,
} from "lucide-react";

const inspirationalQuotes = [
  "Education is the passport to the future.",
  "The world is your classroom.",
  "Your global journey begins with a single step.",
  "Dreams take flight across borders.",
  "Discover yourself by discovering the world.",
  "Knowledge knows no boundaries.",
  "Your potential is limitless, just like your destinations.",
  "New horizons await your brilliance.",
];

export function ArtisticLoader() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Select a random quote
    const randomQuote =
      inspirationalQuotes[
        Math.floor(Math.random() * inspirationalQuotes.length)
      ];
    setQuote(randomQuote);
  }, []);

  // Icons that will float around
  const icons = [
    { Icon: Plane, color: "bg-purple-500", size: 24, delay: 0 },
    { Icon: GraduationCap, color: "bg-teal-500", size: 28, delay: 0.5 },
    { Icon: Globe, color: "bg-emerald-500", size: 26, delay: 1 },
    { Icon: MapPin, color: "bg-amber-500", size: 22, delay: 1.5 },
    { Icon: BookOpen, color: "bg-rose-500", size: 24, delay: 2 },
    { Icon: Compass, color: "bg-blue-500", size: 26, delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-50">
      {/* Main compass loader */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <Compass className="text-indigo-600" size={36} />
          </div>
        </motion.div>

        {/* Orbiting icons */}
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg`}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: [
                0,
                60 * Math.cos((index * Math.PI) / 3),
                0,
                -60 * Math.cos((index * Math.PI) / 3),
                0,
              ],
              y: [
                0,
                60 * Math.sin((index * Math.PI) / 3),
                0,
                -60 * Math.sin((index * Math.PI) / 3),
                0,
              ],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size} className="text-white" />
          </motion.div>
        ))}
      </motion.div>

      {/* Inspirational quote */}
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-xl md:text-2xl font-medium text-indigo-900 mb-2">
          {quote}
        </p>
        <p className="text-sm text-indigo-600">
          Your journey to global education is loading...
        </p>
      </motion.div>

      {/* Animated progress bar */}
      <motion.div
        className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* World map silhouette in the background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[-1]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('/loading.webp')",
          }}
        />
      </motion.div>
    </div>
  );
}
