"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "./counselling-form-popup";

const STUDY_ABROAD_COUNTRIES = [
  { name: "Why Study Abroad?", href: "/study-abroad" },
  { name: "USA", href: "/destinations/usa" },
  { name: "UK", href: "/destinations/uk" },
  { name: "Canada", href: "/destinations/canada" },
  { name: "Australia", href: "/destinations/australia" },
  { name: "New Zealand", href: "/destinations/new-zealand" },
  { name: "Ireland", href: "/destinations/ireland" },
];

const SCHOLARSHIP_COUNTRIES = [
  { name: "Overview", href: "/scholarships" },
  { name: "USA", href: "/scholarships/usa" },
  { name: "UK", href: "/scholarships/uk" },
  { name: "Canada", href: "/scholarships/canada" },
  { name: "Australia", href: "/scholarships/australia" },
  { name: "New Zealand", href: "/scholarships/new-zealand" },
  { name: "Ireland", href: "/scholarships/ireland" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, openPopup, closePopup } = usePopup();
  const [openDropdown, setOpenDropdown] = useState<
    "study" | "scholarship" | null
  >(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = (type: "study" | "scholarship") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-[#f0ebe6] bg-[#f0ebe6]">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image-coffee.png"
              alt="IOES Logo"
              width={120}
              height={60}
              className="rounded color-white"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 items-center text-base font-satoshi font-light text-gray-800">
            <Link
              href="/about"
              className="group relative hover:text-primary transition"
            >
              About Us
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/services"
              className="group relative hover:text-primary transition"
            >
              Services
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Study Abroad Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("study")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-primary transition inline-block relative">
                Study Abroad
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
              </span>

              {openDropdown === "study" && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg z-50">
                  {STUDY_ABROAD_COUNTRIES.map((country) => (
                    <Link
                      key={country.href}
                      href={country.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Scholarships Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("scholarship")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-primary transition inline-block relative">
                Scholarships
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
              </span>

              {openDropdown === "scholarship" && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg z-50">
                  {SCHOLARSHIP_COUNTRIES.map((country) => (
                    <Link
                      key={country.href}
                      href={country.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/success-stories"
              className="group relative hover:text-primary transition"
            >
              Success Stories
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
            </Link>
            {/* <Link
              href="/events"
              className="group relative hover:text-primary transition"
            >
              Events
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
            </Link> */}
            <Link
              href="/contact"
              className="group relative hover:text-primary transition"
            >
              Contact
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#ed4746] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="hidden lg:flex bg-[#ED4746]"
              onClick={openPopup}
            >
              Get Free Consultation
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f0ebe6] border-t shadow-md z-40">
            <nav className="flex flex-col gap-4 p-4 font-satoshi">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/study-abroad"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Abroad
              </Link>
              <Link
                href="/scholarships"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Scholarships
              </Link>
              <Link
                href="/success-stories"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              {/* <Link
                href="/events"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link> */}
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
}
