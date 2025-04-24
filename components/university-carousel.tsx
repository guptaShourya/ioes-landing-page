"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface University {
  name: string;
  logo: string;
}

const universities: University[] = [
  { name: "Monash University", logo: "/university/monash.png" },
  { name: "University of Melbourne", logo: "/university/melbourne.png" },
  { name: "Deakin University", logo: "/university/deakin.png" },
  { name: "Pennsylvania State University", logo: "/university/penn-state.png" },
  {
    name: "GLION Institute of Higher Education",
    logo: "/university/glion.png",
  },
  { name: "Trinity College Dublin", logo: "/university/trinity-dublin.png" },
  { name: "University of Galway", logo: "/university/galway.png" },
  { name: "ANU", logo: "/university/anu.png" },
  { name: "UNSW", logo: "/university/unsw.png" },
  { name: "Flinders University", logo: "/university/flinders.png" },
  { name: "Western Sydney University", logo: "/university/wsu.png" },
  { name: "Griffith University", logo: "/university/griffith.png" },
  { name: "Wolloongong University", logo: "/university/wollongong.png" },
  { name: "Nottingham University", logo: "/university/nottingham.png" },
  { name: "Manchester University", logo: "/university/manchester.png" },
  { name: "University of Sussex", logo: "/university/sussex.png" },
  { name: "University of Dundee", logo: "/university/dundee.png" },
];

export function UniversityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState<University[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const updateItemsPerPage = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    }
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  useEffect(() => {
    const endIndex = currentIndex + itemsPerPage;
    const wrappedEndIndex =
      endIndex > universities.length ? universities.length : endIndex;
    setVisibleLogos(universities.slice(currentIndex, wrappedEndIndex));
  }, [currentIndex, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= universities.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex items-center justify-between">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-12">
          <AnimatePresence mode="wait">
            <div className="flex w-full items-center justify-around gap-4 md:gap-12">
              {visibleLogos.map((university, index) => (
                <motion.div
                  key={`${university.name}-${index}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative h-24 w-48 overflow-hidden rounded-lg bg-white p-2 shadow-md transition-all duration-300 hover:shadow-lg sm:h-40 sm:w-40">
                    <Image
                      src={university.logo || "/placeholder.svg"}
                      alt={university.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-gray-600 sm:text-sm">
                    {university.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
