import type { Metadata } from "next";
import CollegePage from "@/components/long-college-page";
import type { College } from "@/types/college";
import { fetchCollegeFromAzure } from "@/lib/azure-college";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    // Await params in Next.js 15
    const { slug } = await params;
    
    // Try to fetch from Azure directly
    const data = await fetchCollegeFromAzure(slug);
    
    if (!data) {
      return {
        title: "College | IOES",
        description:
          "Find the perfect college for your education journey with IOES.",
      };
    }
    
    return {
      title: `${data.name} | IOES`,
      description:
        data.overview?.slice(0, 160) ||
        `Learn about ${data.name} programs, admissions, and requirements at IOES.`,
      keywords: [
        data.name,
        data.city,
        data.country,
        "IOES",
        "college",
        "university",
        "education",
        ...(data.subjects || []),
      ].join(", "),
      openGraph: {
        title: `${data.name} | IOES`,
        description: data.overview?.slice(0, 160) || `Learn about ${data.name}`,
        images: [
          {
            url: data.bannerImage || data.logo || "/logo.png",
            width: 1200,
            height: 630,
            alt: `${data.name} banner`,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "College | IOES",
      description:
        "Find the perfect college for your education journey with IOES.",
    };
  }
}

export default async function Page({ params }: Params) {
  try {
    // Await params in Next.js 15
    const { slug } = await params;
    
    // Fetch directly from Azure Storage
    const data = await fetchCollegeFromAzure(slug);
    
    if (!data) {
      return (
        <div className="container px-4 md:px-6 py-20">
          <h1 className="text-2xl font-semibold">College not found</h1>
          <p className="text-gray-600 mt-2">
            The college "{slug}" could not be found. Please check the URL or explore other colleges.
          </p>
          <div className="mt-4">
            <a href="/colleges" className="text-blue-600 hover:underline">
              ← Back to all colleges
            </a>
          </div>
        </div>
      );
    }

    // Additional validation to ensure we have the required data
    if (!data.name || !data.slug) {
      return (
        <div className="container px-4 md:px-6 py-20">
          <h1 className="text-2xl font-semibold">Invalid college data</h1>
          <p className="text-gray-600 mt-2">
            The college data appears to be corrupted. Please try again later.
          </p>
        </div>
      );
    }

    return <CollegePage data={data} />;
  } catch (error) {
    console.error("Error loading college data:", error);
    return (
      <div className="container px-4 md:px-6 py-20">
        <h1 className="text-2xl font-semibold">Error loading college</h1>
        <p className="text-gray-600 mt-2">
          Something went wrong while loading the college information. Please try
          again later.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Error details: {error instanceof Error ? error.message : 'Unknown error'}
        </div>
      </div>
    );
  }
}
