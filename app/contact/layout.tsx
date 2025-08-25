import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageKey: "contact",
    pathname: "/contact",
  });
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessData = generateStructuredData("localBusiness");
  const webpageData = generateStructuredData("webpage", {
    title: "Contact IOES - Get Expert Study Abroad Guidance Today",
    description:
      "Contact IOES for personalized study abroad consultation. Visit our Delhi & Mumbai offices or get in touch online for expert guidance.",
    url: "https://ioes.in/contact",
  });

  return (
    <>
      <StructuredData data={localBusinessData} />
      <StructuredData data={webpageData} />
      {children}
    </>
  );
}
