"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Grid,
  List,
  MapPin,
  GraduationCap,
  Calendar,
  DollarSign,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  courses,
  subjects,
  intakeYears,
  durations,
  countries,
  type Course,
} from "../../data/courses";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("name"); // name, fees-low-high, fees-high-low
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const { isOpen, openPopup, closePopup } = usePopup();

  const filteredCourses = useMemo(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch =
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.institutionName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject =
        selectedSubject === "all" || course.subject === selectedSubject;
      const matchesYear =
        selectedYear === "all" ||
        course.intakes.some(
          (intake) => intake.startYear.toString() === selectedYear
        );
      const matchesDuration =
        selectedDuration === "all" ||
        course.intakes.some((intake) => intake.duration === selectedDuration);
      const matchesCountry =
        selectedCountry === "all" || course.country === selectedCountry;
      const matchesLevel =
        selectedLevel === "all" || course.courseLevel === selectedLevel;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesYear &&
        matchesDuration &&
        matchesCountry &&
        matchesLevel
      );
    });

    // Sort the filtered results
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "fees-low-high":
          return a.intakes[0].fees - b.intakes[0].fees;
        case "fees-high-low":
          return b.intakes[0].fees - a.intakes[0].fees;
        case "name":
        default:
          return a.courseName.localeCompare(b.courseName);
      }
    });
  }, [
    searchTerm,
    selectedSubject,
    selectedYear,
    selectedDuration,
    selectedCountry,
    selectedLevel,
    sortBy,
  ]);

  const formatFee = (course: Course) => {
    const intake = course.intakes[0];
    return `${intake.currency} ${intake.fees.toLocaleString()}`;
  };

  const CourseCard = ({ course }: { course: Course }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-medium text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2">
              {course.courseName}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              {course.institutionName}
            </p>
          </div>
          <Badge
            variant="secondary"
            className="ml-2 bg-rose-100 text-rose-800 border-rose-200"
          >
            {course.courseLevel}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>
              {course.city}, {course.country}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
            <span>{course.subject}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>Next: {course.nextIntake}</span>
            </div>
            <div className="flex items-center text-sm font-medium text-gray-900">
              <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
              <span>{formatFee(course)}</span>
            </div>
          </div>
          <Link href={`/courses/${course.slug}`} className="block">
            <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700 text-white">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  const TableRow = ({ course }: { course: Course }) => (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4">
        <div>
          <Link
            href={`/courses/${course.slug}`}
            className="font-medium text-gray-900 hover:text-rose-600 transition-colors"
          >
            {course.courseName}
          </Link>
          <p className="text-sm text-gray-600 mt-1">{course.institutionName}</p>
        </div>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">
        {course.city}, {course.country}
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{course.subject}</td>
      <td className="py-4 px-4">
        <Badge
          variant="secondary"
          className="bg-rose-100 text-rose-800 border-rose-200"
        >
          {course.courseLevel}
        </Badge>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{course.nextIntake}</td>
      <td className="py-4 px-4 text-sm font-medium text-gray-900">
        {formatFee(course)}
      </td>
      <td className="py-4 px-4">
        <Link href={`/courses/${course.slug}`}>
          <Button
            size="sm"
            className="bg-rose-600 hover:bg-rose-700 text-white"
          >
            View
          </Button>
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-normal tracking-tighter sm:text-6xl font-nibpro">
                Find Your Perfect{" "}
                <span className="font-light italic">Course</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Discover thousands of courses from top universities worldwide.
                Filter by subject, location, and more to find your ideal
                program.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search courses, institutions, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Select
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Intake Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {intakeYears.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="Diploma">Diploma</SelectItem>
                    <SelectItem value="Certificate">Certificate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Toggle and Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-medium">{filteredCourses.length}</span>{" "}
                  courses
                </p>
                <div className="flex items-center space-x-2">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Course Name</SelectItem>
                      <SelectItem value="fees-low-high">
                        Fees: Low to High
                      </SelectItem>
                      <SelectItem value="fees-high-low">
                        Fees: High to Low
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode Buttons */}
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={
                      viewMode === "grid" ? "bg-rose-600 hover:bg-rose-700" : ""
                    }
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "table" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("table")}
                    className={
                      viewMode === "table"
                        ? "bg-rose-600 hover:bg-rose-700"
                        : ""
                    }
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 bg-gradient-to-t from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  onClick={openPopup}
                  className="bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Get Help Finding Courses
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Course
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Location
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Subject
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Level
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Next Intake
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Fee
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCourses.map((course) => (
                      <TableRow key={course.id} course={course} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-rose-600 to-indigo-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl mb-4">
              Need Help Choosing the Right Course?
            </h2>
            <p className="mx-auto max-w-2xl text-lg opacity-90 mb-8">
              Our expert counselors can help you find the perfect course based
              on your interests, career goals, and budget.
            </p>
            <Button
              onClick={openPopup}
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
}
