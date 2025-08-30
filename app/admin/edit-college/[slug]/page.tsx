import { notFound } from "next/navigation";
import { EditCollegeView } from "@/components/admin/edit-college-view";
import { collegeAzureService } from "@/lib/azure-college";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  return {
    title: `Edit College: ${slug} | IOES Admin`,
    description: `Edit college information and SEO metadata for ${slug}`,
    robots: "noindex,nofollow",
  };
}

export default async function EditCollegePage({ params }: PageProps) {
  const { slug } = params;

  try {
    // Fetch the college data
    const college = await collegeAzureService.getCollege(slug);

    if (!college) {
      notFound();
    }

    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Edit College: {college.name}
            </h1>
            <p className="text-gray-600">
              Update college information, programs, requirements, and SEO
              metadata
            </p>
          </div>

          <EditCollegeView college={college} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading college for editing:", error);
    notFound();
  }
}
