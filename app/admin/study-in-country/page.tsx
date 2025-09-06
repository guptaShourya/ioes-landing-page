import { StudyInCountryAdmin } from "@/components/admin/study-in-country-admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in Country Pages Admin | IOES",
  description: "Manage study in country SEO pages",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudyInCountryAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudyInCountryAdmin />
    </div>
  );
}
