import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-ireland",
    pageKey: "destinations-ireland",
    pathname: "/destinations/ireland",
  });
}

export default function IrelandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in Ireland - European Education Excellence | IOES",
    description: "Discover quality education in Ireland with EU advantages, English-taught programs, and rich cultural heritage.",
    url: "https://ioes.in/destinations/ireland",
  });

  const destinationData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Ireland",
    description: "European study destination with quality education and EU advantages",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.1424,
      longitude: -7.6921
    },
    containsPlace: {
      "@type": "EducationalOrganization",
      name: "Irish Universities"
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
