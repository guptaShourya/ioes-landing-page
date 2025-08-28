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
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "scholarships/canada",
    pageKey: "scholarships-canada", 
    pathname: "/scholarships/canada",
  });
}

const canadaScholarshipData = {
  country: "Canada",
  slug: "canada",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
  overview:
    "Canada offers a wide range of scholarships for international students, making it an attractive destination for Indian students seeking financial support for their education. With its high-quality education system, multicultural environment, and post-graduation work opportunities, Canada provides excellent value for scholarship recipients.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Fully-funded scholarships provided by the Canadian government, covering tuition fees, living expenses, and travel costs for eligible students.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based scholarships offered by Canadian universities, ranging from partial fee waivers to full funding for outstanding students.",
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
      name: "Vanier Canada Graduate Scholarships",
      provider: "Government of Canada",
      amount: "CAD 50,000 per year for three years",
      description:
        "Prestigious scholarships for doctoral students demonstrating academic excellence, research potential, and leadership. Indian students pursuing PhD programs in Canadian universities are eligible to apply.",
      eligibility: [
        "Doctoral students with leadership skills and high academic achievement",
      ],
      deadline: "November (varies by university)",
      website: "#",
    },
    {
      name: "Canada Graduate Scholarships - Master's Program",
      provider: "Government of Canada",
      amount: "CAD 17,500 for 12 months",
      description:
        "Supports high-caliber students pursuing master's degrees in Canadian institutions. Applications are submitted through the university where you plan to study.",
      eligibility: ["Master's students with excellent academic records"],
      deadline: "December (varies by university)",
      website: "#",
    },
    {
      name: "Shastri Indo-Canadian Institute Fellowships",
      provider: "Shastri Indo-Canadian Institute",
      amount: "Varies by program",
      description:
        "Offers various fellowships and grants specifically for Indian students and researchers to promote academic collaboration between India and Canada.",
      eligibility: [
        "Indian students and researchers in various academic fields",
      ],
      deadline: "Various deadlines throughout the year",
      website: "#",
    },
    {
      name: "Ontario Trillium Scholarship",
      provider: "Government of Ontario",
      amount: "CAD 40,000 annually for up to four years",
      description:
        "Highly competitive scholarships for international doctoral students to study at Ontario universities. Universities nominate candidates from their applicant pool.",
      eligibility: [
        "International PhD students with excellent academic records",
      ],
      deadline: "Varies by university",
      website: "#",
    },
    {
      name: "Quebec Provincial Government Scholarship",
      provider: "Fonds de recherche du Québec",
      amount: "CAD 20,000 - 35,000 per year",
      description:
        "Merit-based scholarships for international students studying in Quebec universities. Focuses on research excellence and academic achievement.",
      eligibility: [
        "International students pursuing master's or doctoral studies in Quebec",
      ],
      deadline: "October-November",
      website: "#",
    },
  ],
  universityScholarships: [
    {
      name: "University of Toronto International Scholar Award",
      provider: "University of Toronto",
      amount: "Partial to full tuition coverage",
      description:
        "Competitive entrance scholarships for international students based on academic merit. Automatically considered upon admission application.",
      eligibility: [
        "International undergraduate applicants with outstanding academic achievements",
      ],
      deadline: "Varies by program",
      website: "#",
    },
    {
      name: "University of British Columbia International Leader of Tomorrow Award",
      provider: "University of British Columbia",
      amount: "Varies, can cover full tuition, fees, and living expenses",
      description:
        "Prestigious awards recognizing international students who demonstrate exceptional academic achievement, leadership skills, and involvement in community service.",
      eligibility: [
        "International undergraduate students with financial need and outstanding academic achievement",
      ],
      deadline: "December",
      website: "#",
    },
    {
      name: "McGill University Major Entrance Scholarships",
      provider: "McGill University",
      amount: "CAD 3,000 - 12,000 per year",
      description:
        "Merit-based entrance scholarships for international students with exceptional academic achievements. Some are renewable for subsequent years of study.",
      eligibility: [
        "International undergraduate students with outstanding academic records",
      ],
      deadline: "February",
      website: "#",
    },
    {
      name: "University of Alberta International Scholarships",
      provider: "University of Alberta",
      amount: "CAD 5,000 - 40,000",
      description:
        "Various scholarships for international students at undergraduate and graduate levels, based on academic excellence and other criteria.",
      eligibility: ["International students with strong academic backgrounds"],
      deadline: "Varies by scholarship",
      website: "#",
    },
    {
      name: "York University International Student Scholarship Program",
      provider: "York University",
      amount: "CAD 60,000 - 100,000 (for 4 years)",
      description:
        "Renewable entrance scholarships for international students with outstanding academic achievement and extracurricular involvement.",
      eligibility: ["International students with excellent academic records"],
      deadline: "February",
      website: "#",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Anne Vallee Ecological Fund",
      provider: "Anne Vallee Ecological Fund",
      amount: "CAD 1,500",
      description:
        "Supports graduate students conducting research in animal biology, ecology, or wildlife conservation in Western Canada or Quebec.",
      eligibility: [
        "Graduate students in animal biology, ecology, or wildlife conservation",
      ],
      deadline: "February",
      website: "#",
    },
    {
      name: "Trudeau Foundation Scholarships",
      provider: "Pierre Elliott Trudeau Foundation",
      amount: "CAD 40,000 per year for three years",
      description:
        "Prestigious scholarships for doctoral students pursuing research in social sciences and humanities, with a focus on themes of human rights, citizenship, Canada in the world, and people in their natural environment.",
      eligibility: ["Doctoral students in humanities and social sciences"],
      deadline: "January",
      website: "#",
    },
    {
      name: "Mitacs Globalink Research Internship",
      provider: "Mitacs",
      amount: "Fully funded research internship",
      description:
        "Offers 12-week research internships at Canadian universities, which can lead to graduate scholarship opportunities for those who return to Canada for graduate studies.",
      eligibility: [
        "Undergraduate students from India in their 3rd or 4th year",
      ],
      deadline: "September",
      website: "#",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most Canadian scholarships require a strong academic record, typically with a minimum of 70-85% in your highest qualification, depending on the scholarship and institution.",
    },
    {
      title: "Language Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "Proof of English or French proficiency through standardized tests like IELTS (minimum 6.5) or TOEFL (minimum 90) is typically required.",
    },
    {
      title: "Extracurricular Activities",
      icon: <Users className="h-6 w-6" />,
      description:
        "Leadership roles, community service, sports achievements, and other activities that demonstrate well-rounded abilities are valued for many scholarships.",
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

export default function CanadaScholarshipsPage() {
  return <ScholarshipCountryPage data={canadaScholarshipData} />;
}
