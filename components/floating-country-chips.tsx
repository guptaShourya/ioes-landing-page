"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CountryChip {
  name: string;
  slug: string;
  initialPosition: { x: number; y: number };
  floatRadius: { x: number; y: number };
  speed: number;
  delay: number;
}

export function FloatingCountryChips() {
  const [isPaused, setIsPaused] = useState<string | null>(null);

  const countries: CountryChip[] = [
    {
      name: "USA",
      slug: "usa",
      initialPosition: { x: -120, y: -80 },
      floatRadius: { x: 20, y: 15 },
      speed: 8,
      delay: 0,
    },
    {
      name: "UK",
      slug: "uk",
      initialPosition: { x: 120, y: -100 },
      floatRadius: { x: 15, y: 20 },
      speed: 9,
      delay: 1,
    },
    {
      name: "Canada",
      slug: "canada",
      initialPosition: { x: -100, y: 100 },
      floatRadius: { x: 25, y: 10 },
      speed: 7,
      delay: 2,
    },
    {
      name: "Australia",
      slug: "australia",
      initialPosition: { x: 130, y: 80 },
      floatRadius: { x: 20, y: 25 },
      speed: 10,
      delay: 3,
    },
    {
      name: "Germany",
      slug: "germany",
      initialPosition: { x: 0, y: -130 },
      floatRadius: { x: 15, y: 15 },
      speed: 8,
      delay: 4,
    },
    {
      name: "New Zealand",
      slug: "new-zealand",
      initialPosition: { x: 0, y: 130 },
      floatRadius: { x: 20, y: 20 },
      speed: 9,
      delay: 5,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {countries.map((country) => (
        <motion.div
          key={country.name}
          className="absolute pointer-events-auto"
          style={{
            left: "45%",
            top: "30%",
            x: country.initialPosition.x,
            y: country.initialPosition.y,
          }}
          animate={
            isPaused === country.name
              ? {}
              : {
                  x: [
                    country.initialPosition.x - country.floatRadius.x,
                    country.initialPosition.x + country.floatRadius.x,
                    country.initialPosition.x - country.floatRadius.x,
                  ],
                  y: [
                    country.initialPosition.y - country.floatRadius.y,
                    country.initialPosition.y + country.floatRadius.y,
                    country.initialPosition.y - country.floatRadius.y,
                  ],
                }
          }
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: country.speed,
            ease: "easeInOut",
            delay: country.delay,
          }}
          onMouseEnter={() => setIsPaused(country.name)}
          onMouseLeave={() => setIsPaused(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/destinations/${country.slug}`}
            className="inline-flex h-10 items-center justify-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-purple-200 shadow-md text-sm font-medium text-purple-800 hover:bg-purple-50 hover:text-purple-900 hover:border-purple-300 transition-all duration-200"
          >
            {country.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
