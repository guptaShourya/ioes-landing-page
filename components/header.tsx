"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="IOES Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight">IOES</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/study-abroad"
            className="text-sm font-medium hover:text-primary"
          >
            Study Abroad
          </Link>
          <Link
            href="/scholarships"
            className="text-sm font-medium hover:text-primary"
          >
            Scholarships
          </Link>
          <Link
            href="/success-stories"
            className="text-sm font-medium hover:text-primary"
          >
            Success Stories
          </Link>
          <Link
            href="/`contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Login
          </Button>
          <Button size="sm" className="hidden md:flex">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md z-40">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Services
            </Link>
            <Link
              href="/study-abroad"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Study Abroad
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Success Stories
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
