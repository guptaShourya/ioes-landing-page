import type { Metadata } from "next";
import CollegePage from "@/components/long-college-page";
import type { College } from "@/types/college";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    // Await params in Next.js 15
    const { slug } = await params;
    // For metadata generation, we need to construct the full URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/college/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return {
        title: "College | IOES",
        description:
          "Find the perfect college for your education journey with IOES.",
      };
    }
    const data = (await res.json()) as College;
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
    // For server-side fetch, we need the full URL in production
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/college/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return (
        <div className="container px-4 md:px-6 py-20">
          <h1 className="text-2xl font-semibold">College not found</h1>
          <p className="text-gray-600 mt-2">
            Please check the URL or explore other colleges.
          </p>
          <div className="mt-4">
            <a href="/colleges" className="text-blue-600 hover:underline">
              ← Back to all colleges
            </a>
          </div>
        </div>
      );
    }
    const data = (await res.json()) as College;

    // Additional validation to ensure we have the required data
    if (!data || !data.name || !data.slug) {
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
      </div>
    );
  }
}
