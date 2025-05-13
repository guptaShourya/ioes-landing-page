"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import promotions from "../data/promotions.json";

interface PromotionalMessage {
  id: string;
  title: string;
  prompt: string;
  text: string;
  cta: string;
  link: string;
  imageUrl: string;
}

// Sample promotional messages
const promotionalMessages: PromotionalMessage[] = promotions["pop-up"];

export function PromotionalPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState<PromotionalMessage | null>(null);

  useEffect(() => {
    // Check if the popup has been closed in this session
    const hasBeenClosed = sessionStorage.getItem("promoPopupClosed");
    console.log(isVisible);

    if (!hasBeenClosed) {
      // Select a random promotional message
      const randomMessage =
        promotionalMessages[
          Math.floor(Math.random() * promotionalMessages.length)
        ];
      setMessage(randomMessage);

      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that the popup has been closed in this session
    sessionStorage.setItem("promoPopupClosed", "true");
  };

  const handleCTAClick = () => {
    // We don't close the popup here because the link will navigate away
    // But we still want to remember it was shown in case they come back
    sessionStorage.setItem("promoPopupClosed", "true");
  };

  if (!message) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-1.5 text-gray-700 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            {/* Image section */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-500">
                {/* We'll use a placeholder for now, but you can replace with actual images */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <svg
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="smallGrid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                  </svg>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-400 opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-teal-400 opacity-20"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    {message.prompt}
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md md:text-3xl">
                    {message.title}
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Content section */}
            <div className="p-6">
              <p className="mb-4 text-gray-600">{message.text}</p>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-rose-500 text-white transition-all hover:from-purple-700 hover:to-rose-600"
                  onClick={handleCTAClick}
                >
                  <Link href={message.link} target="_blank">
                    {message.cta}
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
