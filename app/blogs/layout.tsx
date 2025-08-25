import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "blogs",
    pageKey: "blogs",
    pathname: "/blogs",
  });
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad Blog - Tips, Guides & Student Stories | IOES",
    description: "Read the latest study abroad blogs, tips, guides, and student experiences from IOES education experts.",
    url: "https://ioes.in/blogs",
  });

  const blogData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IOES Study Abroad Blog",
    description: "Educational blog featuring study abroad tips, guides, and student experiences",
    publisher: {
      "@type": "Organization",
      name: "IOES - Inspire Overseas Education Services",
    },
    url: "https://ioes.in/blogs",
    inLanguage: "en-US",
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={blogData} />
      {children}
    </>
  );
}
