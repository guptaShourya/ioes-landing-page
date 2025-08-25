import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageKey: "success-stories",
    pathname: "/success-stories",
  });
}

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Student Success Stories - IOES Study Abroad Alumni",
    description:
      "Read inspiring success stories of IOES students who achieved their international education dreams. Real experiences, real results.",
    url: "https://ioes.in/success-stories",
  });

  return (
    <>
      <StructuredData data={webpageData} />
      {children}
    </>
  );
}
