import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-abroad",
    pageKey: "study-abroad",
    pathname: "/study-abroad",
  });
}

export default function StudyAbroadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad - Complete Guide & Expert Assistance | IOES",
    description: "Your complete guide to studying abroad with expert assistance from IOES. Explore opportunities, requirements, and support services.",
    url: "https://ioes.in/study-abroad",
  });

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Study Abroad Guidance",
    provider: {
      "@type": "Organization",
      name: "IOES - Inspire Overseas Education Services",
    },
    description: "Comprehensive study abroad guidance and support services",
    serviceType: "Educational Consulting",
    areaServed: "India",
    offers: {
      "@type": "Offer",
      description: "Complete study abroad assistance including counseling, application support, and visa guidance",
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
