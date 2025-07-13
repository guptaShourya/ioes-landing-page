"use client";

import { useState, useMemo, useEffect } from "react";
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
import { type Course } from "../../data/courses";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";
import { API_CONFIG, buildApiUrl } from "@/lib/constants";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCourses, setTotalCourses] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("name"); // name, fees-low-high, fees-high-low
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filter options from API
  const [filterOptions, setFilterOptions] = useState({
    subjects: [] as string[],
    countries: [] as string[],
    intakeYears: [] as number[],
    durations: [] as string[],
    courseLevels: [] as string[],
  });
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [filtersError, setFiltersError] = useState<string | null>(null);

  const { isOpen, openPopup, closePopup } = usePopup();

  // Helper function to format subject names consistently
  const formatSubject = (subject: string) => {
    return subject
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
  };

  // Transform API data to match our Course interface
  const transformApiCourse = (apiCourse: any): Course => {
    // Handle up to 3 next intakes
    const upcomingIntakes =
      apiCourse.upcomingIntakes ||
      (apiCourse.upcomingIntake ? [apiCourse.upcomingIntake] : []);
    const intakes = upcomingIntakes
      .slice(0, 3)
      .map((intake: any, index: number) => {
        const durationValue = intake.duration.value;
        const durationUnit = intake.duration.unit.toLowerCase();

        // Convert duration to a readable format
        let durationString = "";
        if (durationUnit === "month") {
          if (durationValue === 12) {
            durationString = "1 year";
          } else if (durationValue === 24) {
            durationString = "2 years";
          } else if (durationValue === 36) {
            durationString = "3 years";
          } else if (durationValue === 48) {
            durationString = "4 years";
          } else if (durationValue === 18) {
            durationString = "1.5 years";
          } else {
            durationString = `${durationValue} months`;
          }
        } else {
          durationString = `${durationValue} ${durationUnit}${
            durationValue > 1 ? "s" : ""
          }`;
        }

        return {
          id: `${apiCourse.id}-${index + 1}`,
          campusName: intake.campus?.name || "Main Campus",
          fees: intake.fees.amount,
          currency: intake.fees.currency,
          duration: durationString,
          startMonth: intake.intakeMonth,
          startYear: intake.intakeYear,
          attendanceType: intake.attendanceType || ("Full-time" as const),
        };
      });

    // Create nextIntake display string from the first intake
    const nextIntake =
      intakes.length > 0
        ? `${intakes[0].startMonth} ${intakes[0].startYear}`
        : "TBD";

    return {
      id: apiCourse.id,
      courseName: apiCourse.courseName,
      institutionName: apiCourse.institutionName,
      degreeAwarded: apiCourse.courseName,
      subject: formatSubject(apiCourse.primarySubject),
      city: "Unknown",
      country: apiCourse.country,
      courseLevel: apiCourse.courseLevel as
        | "Undergraduate"
        | "Postgraduate"
        | "Diploma"
        | "Certificate",
      nextIntake,
      intakes,
      englishRequirements: [],
      description: `A comprehensive ${apiCourse.courseLevel.toLowerCase()} program in ${apiCourse.primarySubject.replace(
        /-/g,
        " "
      )}.`,
      highlights: [
        "Top-tier education",
        "Industry-relevant curriculum",
        "Expert faculty",
        "Career support",
      ],
      careerProspects: [
        "Industry Professional",
        "Research Specialist",
        "Consultant",
        "Manager",
      ],
      slug: apiCourse.id, // Use the API ID directly as the slug
    };
  };

  // Fetch filter options from API
  const fetchFilters = async () => {
    try {
      setFiltersLoading(true);
      setFiltersError(null);

      const response = await fetch(
        buildApiUrl(API_CONFIG.ENDPOINTS.COURSES_FILTERS),
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform and set filter options based on API response structure
      setFilterOptions({
        subjects: (data.subjects || []).map(formatSubject),
        countries: data.countries || [],
        intakeYears: data.years || [],
        durations: data.durations || [],
        courseLevels: data.levels || [],
      });
    } catch (err) {
      console.error("Error fetching filters:", err);
      setFiltersError(
        err instanceof Error ? err.message : "Failed to fetch filters"
      );
    } finally {
      setFiltersLoading(false);
    }
  };

  // Fetch courses from API
  const fetchCourses = async (
    page: number = 1,
    isLoadMore: boolean = false
  ) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
        setError(null);
        setCourses([]);
        setCurrentPage(1);
      }

      const pageSize = 15; // Set page size to 15 as requested

      // Build query parameters
      const params = new URLSearchParams({
        page: page.toString(),
        page_size: pageSize.toString(),
      });

      // Add filter parameters if they're not "all"
      if (searchTerm.trim()) {
        params.append("search", searchTerm.trim());
      }
      if (selectedSubject !== "all") {
        // Convert formatted subject back to API format (e.g., "Computer Science" -> "computer-science")
        const apiSubject = selectedSubject.toLowerCase().replace(/\s+/g, "-");
        params.append("subject", apiSubject);
      }
      if (selectedCountry !== "all") {
        params.append("country", selectedCountry);
      }
      if (selectedYear !== "all") {
        params.append("years", selectedYear);
      }
      if (selectedDuration !== "all") {
        params.append("duration", selectedDuration);
      }
      if (selectedLevel !== "all") {
        params.append("level", selectedLevel);
      }
      if (sortBy !== "name") {
        params.append("sort", sortBy);
      }

      const apiUrl = `${buildApiUrl(
        API_CONFIG.ENDPOINTS.COURSES
      )}?${params.toString()}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Assuming the API returns either an array or an object with pagination info
      // Adjust this based on your actual API response structure
      let coursesData, total;

      if (Array.isArray(data)) {
        coursesData = data;
        total = data.length; // If no pagination info, assume we got all data
        setHasMore(data.length === pageSize); // Has more if we got a full page
      } else {
        // If API returns pagination object like { results: [...], count: 100, next: "..." }
        coursesData = data.results || data.courses || data.data || [];
        total = data.count || data.total || coursesData.length;
        setHasMore(!!data.next || page * pageSize < total);
      }

      // Transform API data to match our Course interface
      const transformedCourses = coursesData.map(transformApiCourse);

      if (isLoadMore) {
        setCourses((prev) => [...prev, ...transformedCourses]);
        setCurrentPage(page);
      } else {
        setCourses(transformedCourses);
        setCurrentPage(1);
      }

      setTotalCourses(total);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch courses");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCourses(1, false);
    fetchFilters(); // Fetch filter options on component mount
  }, []);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCourses(1, false);
    }, 500); // 500ms delay for search

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Reset pagination when filters change (except search which is debounced above)
  useEffect(() => {
    fetchCourses(1, false);
  }, [
    selectedSubject,
    selectedYear,
    selectedDuration,
    selectedCountry,
    selectedLevel,
    sortBy,
  ]);

  // Load more function
  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchCourses(currentPage + 1, true);
    }
  };

  // Generate filter options from API data
  const subjects = filterOptions.subjects;
  const countries = filterOptions.countries;
  const intakeYears = filterOptions.intakeYears;
  const durations = filterOptions.durations;

  // Since we're doing server-side filtering, we can use courses directly
  // Keep minimal client-side sorting as fallback if needed
  const filteredCourses = useMemo(() => {
    // The API should handle most filtering and sorting, but we can add fallback sorting here if needed
    return [...courses].sort((a, b) => {
      switch (sortBy) {
        case "fees-low-high":
          const aFees = a.intakes.length > 0 ? a.intakes[0].fees : 0;
          const bFees = b.intakes.length > 0 ? b.intakes[0].fees : 0;
          return aFees - bFees;
        case "fees-high-low":
          const aFeesHigh = a.intakes.length > 0 ? a.intakes[0].fees : 0;
          const bFeesHigh = b.intakes.length > 0 ? b.intakes[0].fees : 0;
          return bFeesHigh - aFeesHigh;
        case "name":
        default:
          return a.courseName.localeCompare(b.courseName);
      }
    });
  }, [courses, sortBy]);

  const formatFee = (course: Course) => {
    if (course.intakes.length === 0) return "TBD";
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
            <span>{course.country}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
            <span>{course.subject}</span>
          </div>

          {/* Next Intakes - up to 3 */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
              <span className="font-medium">Next Intakes:</span>
            </div>
            <div className="ml-6 space-y-1">
              {course.intakes.slice(0, 3).map((intake, index) => (
                <div
                  key={intake.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-700">
                    {intake.startMonth} {intake.startYear}
                  </span>
                  <span className="text-gray-900 font-medium">
                    {intake.currency} {intake.fees.toLocaleString()}
                  </span>
                </div>
              ))}
              {course.intakes.length === 0 && (
                <span className="text-gray-500 text-sm">TBD</span>
              )}
            </div>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {course.courseName}
          </Link>
          <p className="text-sm text-gray-600 mt-1">{course.institutionName}</p>
        </div>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{course.country}</td>
      <td className="py-4 px-4 text-sm text-gray-600">{course.subject}</td>
      <td className="py-4 px-4">
        <Badge
          variant="secondary"
          className="bg-rose-100 text-rose-800 border-rose-200"
        >
          {course.courseLevel}
        </Badge>
      </td>
      <td className="py-4 px-4">
        <div className="space-y-1">
          {course.intakes.slice(0, 3).map((intake, index) => (
            <div key={intake.id} className="text-sm text-gray-600">
              {intake.startMonth} {intake.startYear}
            </div>
          ))}
          {course.intakes.length === 0 && (
            <span className="text-sm text-gray-500">TBD</span>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="space-y-1">
          {course.intakes.slice(0, 3).map((intake, index) => (
            <div key={intake.id} className="text-sm font-medium text-gray-900">
              {intake.currency} {intake.fees.toLocaleString()}
            </div>
          ))}
          {course.intakes.length === 0 && (
            <span className="text-sm text-gray-500">-</span>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <Link
          href={`/courses/${course.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
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
                  disabled={filtersLoading}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={filtersLoading ? "Loading..." : "Subject"}
                    />
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
                  disabled={filtersLoading}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={filtersLoading ? "Loading..." : "Country"}
                    />
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

                <Select
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                  disabled={filtersLoading}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        filtersLoading ? "Loading..." : "Intake Year"
                      }
                    />
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
                  disabled={filtersLoading}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={filtersLoading ? "Loading..." : "Duration"}
                    />
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

                <Select
                  value={selectedLevel}
                  onValueChange={setSelectedLevel}
                  disabled={filtersLoading}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={filtersLoading ? "Loading..." : "Level"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {filterOptions.courseLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filter Error */}
              {filtersError && (
                <div className="text-center py-2">
                  <p className="text-sm text-red-600">
                    Unable to load filter options: {filtersError}
                  </p>
                </div>
              )}

              {/* View Toggle and Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-medium">{filteredCourses.length}</span>{" "}
                  {hasMore ? "courses (more available)" : "courses"}
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
            {loading ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-600"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Loading courses...
                </h3>
                <p className="text-gray-600">
                  Please wait while we fetch the latest courses
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Error loading courses
                </h3>
                <p className="text-gray-600 mb-6">{error}</p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Try Again
                </Button>
              </div>
            ) : filteredCourses.length === 0 ? (
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
                        Next Intakes
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                        Fees
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

            {/* Load More Button */}
            {!loading && !error && filteredCourses.length > 0 && hasMore && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white min-w-[200px]"
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Loading more...
                    </>
                  ) : (
                    "Load More Courses"
                  )}
                </Button>
              </div>
            )}

            {/* Show courses info */}
            {!loading && !error && filteredCourses.length > 0 && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  {hasMore
                    ? `Loaded ${filteredCourses.length} courses so far`
                    : `All ${filteredCourses.length} matching courses loaded`}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 bg-gradient-to-br from-rose-600 to-indigo-600 text-white">
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
        </section> */}
      </main>

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
}
