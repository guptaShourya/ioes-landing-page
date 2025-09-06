import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  BookOpen,
  Users,
  Settings,
  Search,
  School,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage courses, content, and system settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add College Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <School className="h-6 w-6 text-indigo-600" />
              <CardTitle>Add College</CardTitle>
            </div>
            <CardDescription>
              Add new colleges to the database with comprehensive information
              including programs, admissions, and SEO metadata.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/add-college">
              <Button className="w-full">Add New College</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Add Course Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Plus className="h-6 w-6 text-blue-600" />
              <CardTitle>Add Course</CardTitle>
            </div>
            <CardDescription>
              Add new courses to the database with detailed information
              including intakes, fees, and campus details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/add-course">
              <Button className="w-full">Add New Course</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Manage Colleges Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
              <CardTitle>Manage Colleges</CardTitle>
            </div>
            <CardDescription>
              View, edit, and manage existing colleges and their information.
              Search, filter, and update college data with SEO optimization.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/manage-colleges">
              <Button className="w-full">Manage Colleges</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Manage Courses Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-green-600" />
              <CardTitle>Manage Courses</CardTitle>
            </div>
            <CardDescription>
              View, edit, and manage existing courses in the database.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* Study in Country Pages Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-indigo-600" />
              <CardTitle>Study in Country Pages</CardTitle>
            </div>
            <CardDescription>
              Create and manage SEO-optimized study in country landing pages
              with customizable content and metadata.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/manage-study-in-country">
              <Button className="w-full">Manage Pages</Button>
            </Link>
          </CardContent>
        </Card>

        {/* User Management Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle>User Management</CardTitle>
            </div>
            <CardDescription>
              Manage user accounts, permissions, and access levels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* System Settings Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-orange-600" />
              <CardTitle>System Settings</CardTitle>
            </div>
            <CardDescription>
              Configure system settings, API keys, and application preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* SEO Management Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Search className="h-6 w-6 text-blue-500" />
              <CardTitle>SEO Management</CardTitle>
            </div>
            <CardDescription>
              Manage SEO meta data, titles, descriptions, and keywords for all
              pages.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/seo">
              <Button className="w-full">Manage SEO</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Quick Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-indigo-600">--</div>
              <p className="text-sm text-gray-600">Total Colleges</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">--</div>
              <p className="text-sm text-gray-600">Total Courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">--</div>
              <p className="text-sm text-gray-600">Active Intakes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">--</div>
              <p className="text-sm text-gray-600">Countries</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600">--</div>
              <p className="text-sm text-gray-600">Institutions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
