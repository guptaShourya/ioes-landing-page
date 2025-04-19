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

const australiaScholarshipData = {
  country: "Australia",
  slug: "australia",
  flag: "/placeholder.svg?height=30&width=50",
  heroImage: "/placeholder.svg?height=600&width=1200",
  overview:
    "Australia offers numerous scholarships for international students, making it an attractive destination for Indian students seeking financial support. With its world-class education system, innovative research opportunities, and high quality of life, Australia provides excellent value for scholarship recipients from India.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Fully-funded scholarships provided by the Australian government, covering tuition fees, living expenses, and travel costs for eligible students.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based scholarships offered by Australian universities, ranging from partial fee waivers to full funding for outstanding students.",
    },
    {
      title: "Non-Government Scholarships",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Scholarships provided by private organizations and foundations, supporting students with academic excellence and leadership potential.",
    },
  ],
  governmentScholarships: [
    {
      name: "Australia Awards Scholarships",
      provider: "Department of Foreign Affairs and Trade (DFAT)",
      amount: "Full tuition, living expenses, travel insurance, and more",
      description:
        "Prestigious international scholarships funded by the Australian Government that offer full financial support to study in Australia. These scholarships aim to contribute to the development needs of Australia's partner countries.",
      eligibility: ["Indian students applying for master's or PhD programs"],
      deadline: "April-June (varies by country)",
      website: "#",
    },
    {
      name: "Destination Australia Scholarships",
      provider: "Australian Government",
      amount: "AUD 15,000 per year",
      description:
        "Scholarships designed to support international students who choose to study in regional Australia. These scholarships encourage educational opportunities in regional communities.",
      eligibility: [
        "International students studying at regional campus locations",
      ],
      deadline: "Varies by institution",
      website: "#",
    },
    {
      name: "Research Training Program (RTP)",
      provider: "Australian Government",
      amount: "Tuition fees and stipend (approximately AUD 28,000 per year)",
      description:
        "Supports research students with an annual stipend and covers tuition fees. Universities select RTP recipients from among their research candidates based on academic merit and research potential.",
      eligibility: [
        "International students pursuing research master's or doctoral degrees",
      ],
      deadline: "Varies by university",
      website: "#",
    },
  ],
  universityScholarships: [
    {
      name: "University of Melbourne International Scholarships",
      provider: "University of Melbourne",
      amount: "Full or partial tuition fee waivers and living allowances",
      description:
        "Competitive scholarships for high-achieving international students, covering either full tuition fees or partial tuition fee waivers, with some including a living allowance.",
      eligibility: ["High-achieving international students"],
      deadline: "Varies by program",
      website: "#",
    },
    {
      name: "University of Sydney International Scholarships",
      provider: "University of Sydney",
      amount: "Tuition fees and living allowance",
      description:
        "Highly competitive scholarships offered to international students with outstanding academic merit to pursue research degrees at the University of Sydney.",
      eligibility: ["International students with outstanding academic merit"],
      deadline: "September for Semester 1, February for Semester 2",
      website: "#",
    },
    {
      name: "Monash International Merit Scholarships",
      provider: "Monash University",
      amount: "AUD 10,000 per year",
      description:
        "Merit-based scholarships that recognize high-achieving international students with a scholarship valued at AUD 10,000 per year for the duration of their course.",
      eligibility: ["High-achieving international students"],
      deadline: "Ongoing throughout the year",
      website: "#",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Australia-India Council (AIC) Grants Program",
      provider: "Australia-India Council",
      amount: "Varies by project",
      description:
        "Supports projects that strengthen Australia-India relations in areas including education, science, technology, and arts. Can support research collaborations and educational exchanges.",
      eligibility: ["Indian students and professionals in specific fields"],
      deadline: "February",
      website: "#",
    },
    {
      name: "Rotary Global Grants",
      provider: "Rotary Foundation",
      amount: "USD 30,000 minimum",
      description:
        "Supports international graduate-level study in fields related to Rotary's areas of focus, including peace and conflict resolution, disease prevention, water and sanitation, and education.",
      eligibility: [
        "Graduate students studying in one of Rotary's seven areas of focus",
      ],
      deadline: "Varies by local Rotary district",
      website: "#",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most Australian scholarships require a strong academic record, typically with a minimum of 65-80% in your highest qualification, depending on the scholarship and institution.",
    },
    {
      title: "English Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "Proof of English proficiency through standardized tests like IELTS (minimum 6.5) or TOEFL (minimum 90) is typically required for both admission and scholarships.",
    },
    {
      title: "Relevant Work Experience",
      icon: <Building className="h-6 w-6" />,
      description:
        "For certain scholarships, particularly at the postgraduate level, relevant work experience in your field of study can strengthen your application.",
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Start by researching scholarships that match your academic profile and career goals at least 12 months before your intended start date.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Prepare Required Documents",
      description:
        "Gather required documents including academic transcripts, standardized test scores, letters of recommendation, and a well-crafted statement of purpose.",
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

export default function AustraliaScholarshipsPage() {
  return <ScholarshipCountryPage data={australiaScholarshipData} />;
}
