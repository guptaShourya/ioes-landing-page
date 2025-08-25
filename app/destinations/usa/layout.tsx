import { generateMetadataWithAzure, generateStructuredData } from "../../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageKey: "destinations-usa",
    pathname: "/destinations/usa",
  });
}

export default function USADestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study in USA - Top Universities & Programs | IOES",
    description:
      "Complete guide to studying in the USA. Top universities, programs, scholarships, and admission requirements.",
    url: "https://ioes.in/destinations/usa",
  });

  const countryData = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: "United States of America",
    alternateName: "USA",
    description:
      "Premier destination for international education with world-renowned universities and diverse academic programs",
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={countryData} />
      {children}
    </>
  );
}
