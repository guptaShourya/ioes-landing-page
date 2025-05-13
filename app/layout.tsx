import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { satoshi, nibpro } from "./fonts";
import { FloatingContactButton } from "@/components/floating-contact-button";
import Script from "next/script";
import { PromotionalPopup } from "@/components/promotional-popup";

export const metadata = {
  title: "IOES - Inspire Overseass Education Services",
  description:
    "Premier overseas education consultancy based in Delhi, helping students achieve their dreams of studying abroad.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${nibpro.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MV7RS8E2K9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MV7RS8E2K9');
          `}
        </Script>
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
