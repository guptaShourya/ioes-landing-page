import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-australia",
    pageKey: "destinations-australia",
    pathname: "/destinations/australia",
  });
}

export default function AustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in Australia - World-Class Education Down Under | IOES",
    description: "Experience quality education in Australia with excellent lifestyle, work opportunities, and multicultural environment.",
    url: "https://ioes.in/destinations/australia",
  });

  const destinationData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Australia",
    description: "Study destination offering quality education with excellent lifestyle and work opportunities",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.2744,
      longitude: 133.7751
    },
    containsPlace: {
      "@type": "EducationalOrganization",
      name: "Australian Universities"
    }
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={destinationData} />
      {children}
    </>
  );
}
