import { generateMetadataWithAzure, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageKey: "scholarships",
    pathname: "/scholarships",
  });
}

export default function ScholarshipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad Scholarships - Find Your Perfect Match | IOES",
    description:
      "Discover scholarships for international education. Expert guidance on finding and applying for scholarships in USA, UK, Canada, Australia & more.",
    url: "https://ioes.in/scholarships",
  });

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What scholarships are available for Indian students studying abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are numerous scholarships available including merit-based, need-based, and country-specific scholarships for destinations like USA, UK, Canada, and Australia.",
        },
      },
      {
        "@type": "Question",
        name: "How can IOES help with scholarship applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IOES provides expert guidance on finding suitable scholarships, preparing applications, and increasing your chances of success with personalized counseling.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={faqData} />
      {children}
    </>
  );
}
