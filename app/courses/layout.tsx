import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "courses",
    pageKey: "courses",
    pathname: "/courses",
  });
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad Courses - Find Your Perfect Program | IOES",
    description: "Explore comprehensive study abroad courses and programs offered by top universities worldwide through IOES.",
    url: "https://ioes.in/courses",
  });

  const courseData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IOES Course Catalog",
    description: "Comprehensive catalog of international study programs and courses",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Study Abroad Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Undergraduate Programs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Postgraduate Programs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Professional Courses",
          },
        },
      ],
    },
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={courseData} />
      {children}
    </>
  );
}
