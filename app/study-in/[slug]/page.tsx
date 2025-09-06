import { StudyInCountryPage } from "@/components/study-in-country-page";
import { studyInUSAData } from "@/data/study-in-usa";
import { studyInCanadaData } from "@/data/study-in-canada";
import { StudyInCountryData } from "@/types/study-in-country";
import { getStudyInCountryData, getAllStudyInCountrySlugs } from "@/lib/azure-study-in-country";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Fallback data for development/demo
const fallbackData: Record<string, StudyInCountryData> = {
  "study-in-usa-seo": studyInUSAData,
  "study-in-canada-opportunities": studyInCanadaData,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPageData(slug: string): Promise<StudyInCountryData | null> {
  // Try to get data from Azure Storage first
  try {
    const azureData = await getStudyInCountryData(slug);
    if (azureData) {
      return azureData;
    }
  } catch (error) {
    console.warn("Azure Storage not available, using fallback data");
  }

  // Fallback to local data
  return fallbackData[slug] || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPageData(slug);
  
  if (!data) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
    keywords: data.seo.keywords.join(", "),
    alternates: {
      canonical: data.seo.canonicalUrl,
    },
    openGraph: {
      title: data.seo.ogTitle || data.seo.metaTitle,
      description: data.seo.ogDescription || data.seo.metaDescription,
      images: data.seo.ogImage ? [{ url: data.seo.ogImage }] : undefined,
      type: "website",
      siteName: "IOES Education",
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.ogTitle || data.seo.metaTitle,
      description: data.seo.ogDescription || data.seo.metaDescription,
      images: data.seo.ogImage ? [data.seo.ogImage] : undefined,
    },
    robots: {
      index: true, // Assuming all pages are active and should be indexed
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  // Try to get slugs from Azure Storage first
  try {
    const azureSlugs = await getAllStudyInCountrySlugs();
    if (azureSlugs.length > 0) {
      return azureSlugs.map((slug) => ({ slug }));
    }
  } catch (error) {
    console.warn("Azure Storage not available for generateStaticParams");
  }

  // Fallback to local data
  return Object.keys(fallbackData).map((slug) => ({
    slug,
  }));
}

export default async function StudyInCountrySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data || !data.isActive) {
    notFound();
  }

  return <StudyInCountryPage data={data} />;
}
