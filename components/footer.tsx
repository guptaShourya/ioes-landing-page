import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { JSX } from "react";

export function Footer() {
  const icons: Record<
    "Facebook" | "Instagram" | "Youtube" | "LinkedIn",
    JSX.Element
  > = {
    Facebook: <Facebook className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
    Youtube: <Youtube className="h-5 w-5" />,
    LinkedIn: <Linkedin className="h-5 w-5" />,
  };
  const links: Record<
    "Facebook" | "Instagram" | "Youtube" | "LinkedIn",
    string
  > = {
    Facebook: "https://www.facebook.com/www.ioes.in/",
    Instagram: "https://www.instagram.com/ioes.in/",
    Youtube: "https://www.youtube.com/@inspireoverseaaseducation",
    LinkedIn:
      "https://www.linkedin.com/company/inspire-overseaas-education-services/",
  };
  return (
    <footer className="w-full border-t bg-gray-50 py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ioeslogo.webp"
              alt="IOES Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight">IOES</span>
          </Link>
          <p className="text-sm text-gray-500">
            Inspire Overseaas Education Services (IOES) is a premier education
            consultancy helping students achieve their dreams of studying
            abroad.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Youtube", "LinkedIn"].map(
              (social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                >
                  <Link
                    href={links[social as keyof typeof links]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-full w-full"
                  >
                    {icons[social as keyof typeof icons]}
                  </Link>
                </Button>
              )
            )}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-800">
                Services
              </Link>
            </li>
            <li>
              <Link href="/study-abroad" className="hover:text-blue-800">
                Study Abroad
              </Link>
            </li>
            <li>
              <Link href="/scholarships" className="hover:text-blue-800">
                Scholarships
              </Link>
            </li>
            <li>
              <Link href="/success-stories" className="hover:text-blue-800">
                Success Stories
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-800">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Study Destinations</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/destinations/usa" className="hover:text-blue-800">
                United States
              </Link>
            </li>
            <li>
              <Link href="/destinations/uk" className="hover:text-blue-800">
                United Kingdom
              </Link>
            </li>
            <li>
              <Link href="/destinations/canada" className="hover:text-blue-800">
                Canada
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/australia"
                className="hover:text-blue-800"
              >
                Australia
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/new-zealand"
                className="hover:text-blue-800"
              >
                New Zealand
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/germany"
                className="hover:text-blue-800"
              >
                Germany
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Information</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-blue-800" />
              <span>123 Education Street, Delhi, India</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-blue-800" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-blue-800" />
              <span>info@ioes.in</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-blue-800" />
              <span>Monday - Saturday: 10:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} IOES. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:underline underline-offset-4"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
