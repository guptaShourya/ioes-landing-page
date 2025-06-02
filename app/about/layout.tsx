import { generateMetadata, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export const metadata = generateMetadata({
  pageKey: "about",
  pathname: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "About IOES - Leading Study Abroad Consultants Since Years",
    description:
      "Learn about IOES's journey in helping thousands of students achieve their international education goals. Expert team, proven track record.",
    url: "https://ioes.in/about",
  });

  return (
    <>
      <StructuredData data={webpageData} />
      {children}
    </>
  );
}
