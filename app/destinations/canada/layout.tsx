import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-canada",
    pageKey: "destinations-canada",
    pathname: "/destinations/canada",
  });
}

export default function CanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in Canada - Top Universities & Immigration | IOES",
    description: "Discover world-class education in Canada with excellent post-graduation work opportunities and pathway to permanent residency.",
    url: "https://ioes.in/destinations/canada",
  });

  const destinationData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Canada",
    description: "Study destination offering high-quality education and immigration opportunities",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.1304,
      longitude: -106.3468
    },
    containsPlace: {
      "@type": "EducationalOrganization",
      name: "Canadian Universities"
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
