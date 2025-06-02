import { generateMetadata, generateStructuredData } from "../seo/Seo";
import { StructuredData } from "@/components/structured-data";

export const metadata = generateMetadata({
  pageKey: "events",
  pathname: "/events",
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webpageData = generateStructuredData("webpage", {
    title: "Study Abroad Events & Seminars - Join IOES Programs",
    description:
      "Attend IOES study abroad events, university fairs, and educational seminars. Get direct access to university representatives and experts.",
    url: "https://ioes.in/events",
  });

  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "IOES Study Abroad Events",
    description:
      "Educational events and seminars for students interested in studying abroad",
    organizer: {
      "@type": "Organization",
      name: "IOES - Inspire Overseas Education Services",
      url: "https://ioes.in",
    },
    location: {
      "@type": "Place",
      name: "IOES Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <StructuredData data={webpageData} />
      <StructuredData data={eventData} />
      {children}
    </>
  );
}
