"use client";

import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

export function ConditionalAnalytics() {
  const pathname = usePathname();

  // Don't load analytics for admin pages
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <Analytics />;
}
