import { ScholarshipCountryPage } from "@/components/scholarship-country-page";
import {
  Award,
  BookOpen,
  Building,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

const germanyScholarshipData = {
  country: "Germany",
  slug: "germany",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  overview:
    "Germany offers numerous scholarships for international students, making it an attractive destination for Indian students seeking financial support. With its tuition-free public universities, world-class education system, and strong economy, Germany provides excellent value for scholarship recipients from India who wish to pursue undergraduate, graduate, or research studies.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Fully-funded scholarships provided by the German government, covering tuition fees, living expenses, and travel costs for eligible students.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based scholarships offered by German universities, ranging from partial fee waivers to full funding for outstanding students.",
    },
    {
      title: "Non-Government Scholarships",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Scholarships provided by private organizations and foundations, supporting students with academic excellence and social engagement.",
    },
  ],
  governmentScholarships: [
    {
      name: "DAAD Scholarships",
      provider: "German Academic Exchange Service (DAAD)",
      amount: "€850-1,200 monthly stipend plus other benefits",
      description:
        "DAAD offers a wide range of scholarships for international students at all academic levels. These include study scholarships for graduates, research grants for doctoral candidates, and postdoctoral researchers, as well as faculty development programs.",
      eligibility: [
        "Indian students for various degree levels and research stays",
        "Strong academic record",
        "Meet language requirements (German or English)",
      ],
      deadline: "Varies by program (typically October-December)",
      website: "#",
    },
    {
      name: "Erasmus+ Program",
      provider: "European Union",
      amount: "€850-1,500 monthly stipend plus travel costs",
      description:
        "Supports exchange programs, degree mobility, and cooperation projects between European and non-European universities. Indian students can participate through their home universities that have Erasmus partnerships with German institutions.",
      eligibility: [
        "Students enrolled in partner universities in India",
        "Strong academic record",
      ],
      deadline: "Varies by home university",
      website: "#",
    },
  ],
  universityScholarships: [
    {
      name: "Excellence Scholarships at Technical University of Munich",
      provider: "Technical University of Munich",
      amount: "€1,000 monthly for 1-3 years",
      description:
        "Merit-based scholarships for outstanding international students admitted to master's programs at TUM. Selection is based on academic achievements, motivation, and extracurricular activities.",
      eligibility: [
        "Outstanding international master's students",
        "Admission to TUM",
      ],
      deadline: "October 31 for summer semester, April 30 for winter semester",
      website: "#",
    },
    {
      name: "RWTH Aachen University Scholarships",
      provider: "RWTH Aachen University",
      amount: "€300-800 monthly",
      description:
        "Various scholarships for international students at different academic levels. The university offers both merit-based and need-based scholarships through different programs.",
      eligibility: ["International students with excellent academic records"],
      deadline: "Varies by program",
      website: "#",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Deutschlandstipendium",
      provider: "Private sponsors and German Federal Government",
      amount: "€300 monthly for at least two semesters",
      description:
        "A scholarship program where private sponsors and the German Federal Government each provide €150 per month to support talented students. Applications are submitted through the German university where you are enrolled or plan to enroll.",
      eligibility: [
        "Talented and high-achieving students of all nationalities",
      ],
      deadline: "Varies by university",
      website: "#",
    },
    {
      name: "Alexander von Humboldt Foundation Fellowships",
      provider: "Alexander von Humboldt Foundation",
      amount: "€2,650-3,150 monthly",
      description:
        "Prestigious fellowships for postdoctoral researchers to conduct research at German institutions. The foundation supports researchers from all disciplines and countries.",
      eligibility: [
        "Postdoctoral researchers with above-average qualifications",
      ],
      deadline: "Applications accepted year-round",
      website: "#",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most German scholarships require a strong academic record, typically with a minimum of 70-80% in your highest qualification or equivalent GPA, depending on the scholarship and institution.",
    },
    {
      title: "Language Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "Depending on the program, either German proficiency (typically B2/C1 level) for German-taught programs or English proficiency (IELTS 6.5+ or TOEFL 90+) for English-taught programs.",
    },
    {
      title: "Social/Political Engagement",
      icon: <Users className="h-6 w-6" />,
      description:
        "Many German political foundation scholarships require demonstrated social or political engagement aligned with the foundation's values.",
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Start by researching scholarships that match your academic profile and career goals at least 12-18 months before your intended start date.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Prepare Required Documents",
      description:
        "Gather required documents including academic transcripts, language certificates, letters of recommendation, and a well-crafted motivation letter or research proposal.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Submit Applications",
      description:
        "Submit scholarship applications before deadlines, ensuring all requirements are met and documents are properly formatted.",
      icon: <Award className="h-6 w-6" />,
    },
  ],
};

export default function GermanyScholarshipsPage() {
  return <ScholarshipCountryPage data={germanyScholarshipData} />;
}
