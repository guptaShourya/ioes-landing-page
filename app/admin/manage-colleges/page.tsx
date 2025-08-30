"use client";

import { ManageCollegesView } from "@/components/admin/manage-colleges-view";

export default function ManageCollegesPage() {
  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Manage Colleges
        </h1>
        <p className="text-gray-600">
          View, edit, and manage all colleges in your database
        </p>
      </div>

      <ManageCollegesView />
    </div>
  );
}
