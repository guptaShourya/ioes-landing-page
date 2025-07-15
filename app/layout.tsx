import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { satoshi, nibpro } from "./fonts";
import { FloatingContactButton } from "@/components/floating-contact-button";
import { ConditionalAnalytics } from "@/components/conditional-analytics";
import { PromotionalPopup } from "@/components/promotional-popup";
import { StructuredData } from "@/components/structured-data";
import { generateMetadata, generateStructuredData } from "./seo/Seo";
import { Toaster } from "sonner";

export const metadata = generateMetadata({
  pageKey: "home",
  pathname: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = generateStructuredData("organization");

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${nibpro.variable}`}
    >
      <head>
        <meta name="theme-color" content="#f0ebe6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-navbutton-color" content="#f0ebe6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
          <ConditionalAnalytics />
          <Toaster
            position="top-right"
            richColors
            expand={false}
            duration={4000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
