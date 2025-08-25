import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-new-zealand",
    pageKey: "destinations-new-zealand",
    pathname: "/destinations/new-zealand",
  });
}

export default function NewZealandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in New Zealand - Quality Education & Lifestyle | IOES",
    description: "Experience world-class education in New Zealand's stunning natural environment with excellent quality of life.",
    url: "https://ioes.in/destinations/new-zealand",
  });

  const destinationData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "New Zealand",
    description: "Study destination offering world-class education in stunning natural environment",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -40.9006,
      longitude: 174.8860
    },
    containsPlace: {
      "@type": "EducationalOrganization",
      name: "New Zealand Universities"
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
