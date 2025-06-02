import { Metadata } from "next";
import seoConfig, { SEOConfig } from "./seo.config";

interface GenerateMetadataProps {
  pageKey?: string;
  customSEO?: Partial<SEOConfig>;
  pathname?: string;
}

export function generateMetadata({
  pageKey,
  customSEO = {},
  pathname = "",
}: GenerateMetadataProps = {}): Metadata {
  // Get page-specific config or use defaults
  const pageConfig =
    pageKey && seoConfig.pages[pageKey as keyof typeof seoConfig.pages]
      ? seoConfig.pages[pageKey as keyof typeof seoConfig.pages]
      : ({} as any);

  // Merge configurations with priority: customSEO > pageConfig > defaults
  const config = {
    title: customSEO.title || pageConfig?.title || seoConfig.defaultTitle,
    description:
      customSEO.description ||
      pageConfig?.description ||
      seoConfig.defaultDescription,
    keywords:
      customSEO.keywords || pageConfig?.keywords || seoConfig.defaultKeywords,
    ogImage:
      customSEO.ogImage || pageConfig?.ogImage || seoConfig.defaultOgImage,
    ogType: customSEO.ogType || seoConfig.defaultOgType,
    canonical: customSEO.canonical || `${seoConfig.siteUrl}${pathname}`,
    noindex: customSEO.noindex || false,
    nofollow: customSEO.nofollow || false,
  };

  const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
      googleBot: {
        index: !config.noindex,
        follow: !config.nofollow,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical,
      siteName: "IOES - Study Abroad Consultants",
      images: [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: "en_US",
      type: config.ogType as any,
    },
    twitter: {
      card: seoConfig.twitterCard as any,
      site: seoConfig.twitterSite,
      title: config.title,
      description: config.description,
      images: [config.ogImage],
    },
    alternates: {
      canonical: config.canonical,
    },
    other: {
      "theme-color": "#9f1239", // Rose-800 color for IOES brand
    },
  };

  return metadata;
}

// Utility function to generate structured data (JSON-LD)
export function generateStructuredData(
  type: "organization" | "localBusiness" | "webpage",
  data: any = {}
) {
  const baseStructuredData = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "organization":
      return {
        ...baseStructuredData,
        "@type": "Organization",
        name: "IOES - Inspire Overseas Education Services",
        url: seoConfig.siteUrl,
        logo: `${seoConfig.siteUrl}/ioeslogo.webp`,
        description: seoConfig.defaultDescription,
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Near Central Metro Station",
            addressLocality: "Dwarka",
            addressRegion: "New Delhi",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-11-47051451",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.facebook.com/www.ioes.in/",
          "https://www.instagram.com/ioes.in/",
          "https://www.linkedin.com/company/inspire-overseaas-education-services/",
          "https://www.youtube.com/@inspireoverseaaseducation",
        ],
        ...data,
      };

    case "localBusiness":
      return {
        ...baseStructuredData,
        "@type": "LocalBusiness",
        name: "IOES Study Abroad Consultants",
        image: `${seoConfig.siteUrl}/ioeslogo.webp`,
        description:
          "Premier study abroad consultants helping students achieve their international education goals",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Central Metro Station",
          addressLocality: "Dwarka",
          addressRegion: "New Delhi",
          postalCode: "110075",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.59543277568508",
          longitude: "77.03823827571867",
        },
        telephone: "+91-11-47051451",
        url: seoConfig.siteUrl,
        openingHours: "Mo-Sa 10:00-18:00",
        priceRange: "$$",
        ...data,
      };

    case "webpage":
      return {
        ...baseStructuredData,
        "@type": "WebPage",
        name: data.title || seoConfig.defaultTitle,
        description: data.description || seoConfig.defaultDescription,
        url: data.url || seoConfig.siteUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "IOES",
          url: seoConfig.siteUrl,
        },
        ...data,
      };

    default:
      return baseStructuredData;
  }
}
