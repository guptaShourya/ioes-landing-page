"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  CheckCircle,
  CreditCard,
  Stamp,
  GraduationCap,
  Plane,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Research & Counseling",
    description:
      "Explore options and receive expert guidance from our counselors.",
  },
  {
    icon: <FileText className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Application Preparation",
    description:
      "Prepare and submit compelling applications to your chosen universities.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Admission Confirmation",
    description: "Receive and accept your university admission offer.",
  },
  {
    icon: <CreditCard className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Financial Planning",
    description:
      "Arrange tuition payment and explore scholarship opportunities.",
  },
  {
    icon: <Stamp className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Visa Application",
    description: "Complete visa application with our step-by-step guidance.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Pre-Departure Prep",
    description: "Attend orientation sessions to prepare for your journey.",
  },
  {
    icon: <Plane className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Travel & Arrival",
    description: "Begin your international education journey with confidence.",
  },
];

export function ApplicationTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Determine how many steps to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Show only active step on mobile
        setVisibleSteps([activeStep]);
      } else if (width < 768) {
        // Show 3 steps on small screens
        setVisibleSteps(getVisibleStepsRange(3));
      } else if (width < 1024) {
        // Show 5 steps on medium screens
        setVisibleSteps(getVisibleStepsRange(5));
      } else {
        // Show all steps on large screens
        setVisibleSteps(steps.map((_, i) => i));
      }
    };

    // Get range of steps to display centered around active step
    const getVisibleStepsRange = (count: number) => {
      const half = Math.floor(count / 2);
      let start = activeStep - half;
      let end = activeStep + half + (count % 2 === 0 ? 0 : 1);

      // Adjust if out of bounds
      if (start < 0) {
        end -= start;
        start = 0;
      }
      if (end > steps.length) {
        start = Math.max(0, start - (end - steps.length));
        end = steps.length;
      }

      return Array.from({ length: end - start }, (_, i) => i + start);
    };

    // Initial call and set up resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeStep]);

  // Auto-progress timer
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const goToPreviousStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsPaused(true);
  };

  const goToNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setIsPaused(true);
  };

  return (
    <div
      className="w-full flex flex-col md:gap-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mb-12 flex justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousStep}
          className="absolute left-0 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ebe6] text-gray-600 hover:bg-[#f0ebe6] md:left-4"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-5 w-5" style={{ color: "#ED4746" }} />
        </button>

        {/* Timeline Steps */}
        <div className="flex items-center justify-center px-10 md:px-6 gap-10">
          {visibleSteps.map((index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Connector Line */}
              {index > 0 && visibleSteps.includes(index - 1) && (
                <div
                  className={`absolute left-[-2.5rem] md:left-[-4rem] top-4 md:top-6 h-0.5 w-10 md:w-16 ${
                    index <= activeStep ||
                    (index === visibleSteps[0] && activeStep < index)
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500"
                      : "bg-gray-200"
                  }`}
                />
              )}

              {/* Step Circle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveStep(index);
                  setIsPaused(true);
                }}
                className={`relative z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full ${
                  index === activeStep
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                    : index < activeStep
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-gray-100 text-gray-400"
                } transition-all duration-300 mx-2 md:mx-4`}
              >
                {steps[index].icon}
                <span className="absolute -bottom-6 whitespace-nowrap text-[10px] font-nibpro md:text-xs font-medium font-nibpro">
                  {window.innerWidth > 640 ? `Step ${index + 1}` : ""}
                </span>
              </motion.button>
            </div>
          ))}
        </div>

        <button
          onClick={goToNextStep}
          className="absolute right-0 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ebe6] text-gray-600 hover:bg-[#f0ebe6] md:right-4"
          aria-label="Next step"
        >
          <ChevronRight className="h-5 w-5" style={{ color: "#ED4746" }} />
        </button>
      </div>

      {/* Step Details */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-2xl rounded-xl bg-white p-4 md:p-6 shadow-md"
      >
        <div className="flex items-start gap-3 md:gap-4">
          <div className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 p-2 md:p-3 text-white">
            {steps[activeStep].icon}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              {steps[activeStep].title}
            </h3>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Mobile Step Indicator */}
        <div className="mt-4 flex justify-center md:hidden">
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-4 rounded-full ${
                  index === activeStep ? "bg-emerald-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
