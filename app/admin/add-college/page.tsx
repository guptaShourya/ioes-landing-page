"use client";

import { AddCollegeForm } from "@/components/admin/add-college-form";

export default function AddCollegePage() {
  return (
    <div className="container max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Add New College
        </h1>
        <p className="text-gray-600">
          Add comprehensive college data including SEO metadata to Azure Storage
        </p>
      </div>

      <AddCollegeForm />
    </div>
  );
}
