import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { satoshi, nibpro } from "./fonts";
import { FloatingContactButton } from "@/components/floating-contact-button";
import { Analytics } from "@vercel/analytics/next";
import { PromotionalPopup } from "@/components/promotional-popup";
import { StructuredData } from "@/components/structured-data";
import { generateMetadata, generateStructuredData } from "./seo/Seo";

export const metadata = generateMetadata({
  pageKey: 'home',
  pathname: '/'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = generateStructuredData('organization');
  
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${nibpro.variable}`}
    >
      <head>
        <Analytics />
        <StructuredData data={organizationData} />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <PromotionalPopup />
          <FloatingContactButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
