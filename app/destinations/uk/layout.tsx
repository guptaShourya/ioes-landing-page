import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-uk",
    pageKey: "destinations-uk", 
    pathname: "/destinations/uk",
  });
}

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in UK - Premier British Universities & Education | IOES",
    description: "Experience prestigious British education at top UK universities with rich academic heritage and global recognition.",
    url: "https://ioes.in/destinations/uk",
  });

  const destinationData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "United Kingdom",
    description: "Premier study destination with world-renowned universities and academic excellence",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.3781,
      longitude: -3.4360
    },
    containsPlace: {
      "@type": "EducationalOrganization",
      name: "UK Universities"
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
