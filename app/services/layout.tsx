import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageKey: "services",
    pathname: "/services",
  });
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad Services - Complete Education Solutions | IOES",
    description:
      "Comprehensive study abroad services including university selection, visa guidance, scholarship assistance, and more from IOES experts.",
    url: "https://ioes.in/services",
  });

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Study Abroad Consulting Services",
    provider: {
      "@type": "Organization",
      name: "IOES - Inspire Overseas Education Services",
    },
    description:
      "Comprehensive study abroad consulting services including university selection, visa guidance, and admission support",
    serviceType: "Education Consulting",
    areaServed: "India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Study Abroad Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Counselling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "University Selection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visa Assistance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Education Loan Guidance",
          },
        },
      ],
    },
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={serviceData} />
      {children}
    </>
  );
}
