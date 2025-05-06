import { ScholarshipCountryPage } from "@/components/scholarship-country-page";
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

const irelandScholarshipData = {
  country: "Ireland",
  slug: "ireland",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg",
  overview:
    "Ireland offers numerous prestigious scholarship opportunities for international students, making it an increasingly popular destination for Indian students seeking financial support. With its world-class education system, growing economy, and status as an English-speaking gateway to Europe, Ireland provides excellent value for scholarship recipients from India pursuing undergraduate, postgraduate, or research studies.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Prestigious scholarships funded by the Irish government, covering tuition fees and living expenses for outstanding international students across various disciplines.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based scholarships offered by Irish universities, ranging from partial fee waivers to full funding packages for exceptional international applicants.",
    },
    {
      title: "Non-Government Scholarships",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Funding opportunities provided by private organizations, foundations, and international partnerships, supporting students with academic excellence and leadership potential.",
    },
  ],
  governmentScholarships: [
    {
      name: "Government of Ireland International Education Scholarships",
      provider: "Higher Education Authority of Ireland",
      amount: "€10,000 for one year of study",
      description:
        "Prestigious scholarships aimed at high-calibre international students to study in Ireland for a period of one year. The scholarship covers €10,000 of tuition fees or living expenses for one academic year.",
      eligibility: [
        "Students from non-EU/EEA countries including India",
        "Applicants must have received an offer from an eligible Irish higher education institution",
        "Strong academic qualifications with a minimum 2:1 honours degree (or equivalent)",
      ],
      deadline: "March-April annually",
      website: "#",
    },
    {
      name: "Ireland Fellows Programme",
      provider: "Irish Department of Foreign Affairs",
      amount:
        "Full funding including tuition, accommodation, living expenses, and flights",
      description:
        "A prestigious fully-funded scholarship program for early to mid-career professionals from developing countries including India. The program covers master's degree studies in fields relevant to Ireland's development priorities.",
      eligibility: [
        "Indian applicants with minimum 3 years of work experience",
        "Bachelor's degree with minimum 3.0 GPA (or equivalent)",
        "English language proficiency (IELTS 6.5 or equivalent)",
      ],
      deadline: "August-September annually",
      website: "#",
    },
  ],
  universityScholarships: [
    {
      name: "Trinity College Dublin Global Excellence Scholarships",
      provider: "Trinity College Dublin",
      amount: "€5,000-€20,000 tuition fee reduction",
      description:
        "Prestigious scholarships for exceptional international students applying to undergraduate and postgraduate programs. Awards are based on academic merit and potential contribution to the university community.",
      eligibility: [
        "International students with outstanding academic achievements",
        "Admission to a degree program at Trinity College Dublin",
      ],
      deadline: "Varies by program, typically April-June",
      website: "#",
    },
    {
      name: "University College Dublin Global Excellence Scholarships",
      provider: "University College Dublin",
      amount: "€2,000-€25,000 tuition fee reduction",
      description:
        "Merit-based scholarships for international students in undergraduate and graduate programs. UCD offers various scholarship schemes based on academic excellence, with specific allocations for Indian applicants.",
      eligibility: [
        "International students with strong academic records",
        "Minimum 75-85% in previous academic qualification (varies by program)",
      ],
      deadline: "Rolling basis, apply early for best consideration",
      website: "#",
    },
    {
      name: "NUI Galway International Student Scholarships",
      provider: "National University of Ireland, Galway",
      amount: "25-50% tuition fee reduction",
      description:
        "Various merit-based scholarships for international students across different programs and disciplines. The university offers specific scholarships targeting Indian students in STEM fields.",
      eligibility: [
        "International students with excellent academic records",
        "Acceptance to a full-time program at NUI Galway",
      ],
      deadline: "Varies by program, typically March-June",
      website: "#",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Fulbright-Ireland Awards",
      provider: "The Fulbright Commission of Ireland",
      amount: "€10,000-€45,000 depending on program duration",
      description:
        "Prestigious awards for postgraduate study, research, or teaching in Ireland. These scholarships promote cultural exchange and academic excellence between Ireland and participating countries, including India.",
      eligibility: [
        "Indian citizens with excellent academic credentials",
        "Research or study proposal relevant to Irish-Indian relations",
      ],
      deadline: "October-November annually",
      website: "#",
    },
    {
      name: "Science Foundation Ireland Research Scholarships",
      provider: "Science Foundation Ireland",
      amount: "€18,500 annual stipend plus tuition fees and research expenses",
      description:
        "Research-focused scholarships for outstanding students in STEM fields. These competitive awards support doctoral and postdoctoral research at Irish institutions, particularly in areas aligned with Ireland's research priorities.",
      eligibility: [
        "Strong research proposal in STEM disciplines",
        "Minimum 2:1 honours degree (or equivalent) in relevant field",
      ],
      deadline: "Varies by research center and program",
      website: "#",
    },
    {
      name: "Walsh Fellowship Programme",
      provider: "Teagasc (Agriculture and Food Development Authority)",
      amount: "€22,000-€24,000 annual stipend plus research expenses",
      description:
        "Research scholarships for master's and doctoral students in agriculture, food science, agri-environmental research, and related disciplines. The program supports innovative research addressing global agricultural challenges.",
      eligibility: [
        "Excellent academic record in relevant agricultural or food science disciplines",
        "Research proposal aligned with Teagasc research priorities",
      ],
      deadline: "Advertised throughout the year for specific projects",
      website: "#",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most Irish scholarships require strong academic performance, typically with a minimum of 70-80% in your highest qualification or a 2:1 honours degree equivalent (60-69%) for postgraduate programs.",
    },
    {
      title: "English Language Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "As an English-speaking country, Ireland requires proof of language proficiency through standardized tests (IELTS academic score of 6.5+ or TOEFL 90+) for most scholarship applications.",
    },
    {
      title: "Field-Specific Requirements",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "Some scholarships target specific fields aligned with Ireland's strategic priorities, including technology, pharmaceutical sciences, financial services, and sustainable agriculture.",
    },
    {
      title: "Leadership Potential",
      icon: <Users className="h-6 w-6" />,
      description:
        "Many Irish scholarships evaluate candidates based on demonstrated leadership, community involvement, and potential to contribute meaningfully to both academic and broader communities.",
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Begin researching scholarship options 12-15 months before your intended start date, focusing on those that align with your academic background and career objectives.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "University Application",
      description:
        "For most scholarships, you must first secure admission to an Irish institution, so prioritize completing your university applications before scholarship deadlines.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Prepare Required Documents",
      description:
        "Gather necessary documents including academic transcripts, standardized test scores, letters of recommendation, a comprehensive CV, and a compelling personal statement or research proposal.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Submit Applications",
      description:
        "Submit scholarship applications before stated deadlines, ensuring all requirements are met and documents follow the specified format guidelines.",
      icon: <Award className="h-6 w-6" />,
    },
  ],
};

export default function IrelandScholarshipsPage() {
  return <ScholarshipCountryPage data={irelandScholarshipData} />;
}
