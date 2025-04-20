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

const newZealandScholarshipData = {
  country: "New Zealand",
  slug: "new-zealand",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
  overview:
    "New Zealand offers a range of scholarships for international students, making it an attractive destination for Indian students seeking financial support. With its high-quality education system, safe environment, and excellent quality of life, New Zealand provides great value for scholarship recipients from India who wish to pursue undergraduate, graduate, or research studies.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Fully-funded scholarships provided by the New Zealand government, covering tuition fees, living expenses, and travel costs for eligible students.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based scholarships offered by New Zealand universities, ranging from partial fee waivers to full funding for outstanding students.",
    },
    {
      title: "Research Scholarships",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Funding opportunities for doctoral and research students, including stipends, tuition coverage, and research support.",
    },
  ],
  governmentScholarships: [
    {
      name: "New Zealand Excellence Awards",
      provider: "Education New Zealand and Indian Universities",
      amount: "NZD 5,000 - 10,000",
      description:
        "Collaborative scholarships between Education New Zealand and Indian universities designed specifically for Indian students. These awards support undergraduate and postgraduate study across various disciplines.",
      eligibility: [
        "Indian citizenship",
        "Admission to a participating New Zealand university",
        "Strong academic record",
      ],
      deadline: "Varies by university",
      website: "#",
    },
    {
      name: "New Zealand Commonwealth Scholarships",
      provider: "New Zealand Government",
      amount: "Full tuition, living expenses, travel, and other allowances",
      description:
        "Prestigious scholarships for postgraduate study (Master's and PhD) in specific subject areas that are relevant to the development of Commonwealth countries.",
      eligibility: [
        "Citizens of Commonwealth countries including India",
        "Bachelor's degree with strong academic performance",
        "Commitment to development in home country",
      ],
      deadline: "March-April",
      website: "#",
    },
    {
      name: "New Zealand Aid Programme Scholarships",
      provider: "New Zealand Ministry of Foreign Affairs and Trade",
      amount: "Full tuition, living expenses, travel, and other allowances",
      description:
        "Scholarships aimed at fostering sustainable development in developing countries. These scholarships support postgraduate study in areas relevant to the development needs of the student's home country.",
      eligibility: [
        "Citizens of eligible developing countries including India",
        "Strong academic record",
        "Commitment to return to home country after studies",
      ],
      deadline: "February-March",
      website: "#",
    },
  ],
  universityScholarships: [
    {
      name: "University of Auckland International Student Scholarships",
      provider: "University of Auckland",
      amount: "NZD 10,000 - 20,000",
      description:
        "Various scholarships for international students at undergraduate and postgraduate levels, based on academic excellence and other criteria.",
      eligibility: [
        "International students with excellent academic records",
        "Admission to the University of Auckland",
      ],
      deadline: "Varies by program",
      website: "#",
    },
    {
      name: "Victoria University of Wellington Scholarships",
      provider: "Victoria University of Wellington",
      amount: "NZD 5,000 - 20,000",
      description:
        "Range of scholarships for international students, from partial tuition fee scholarships to full tuition scholarships for exceptional candidates.",
      eligibility: [
        "International students with strong academic backgrounds",
        "Admission to Victoria University of Wellington",
      ],
      deadline: "Varies by scholarship",
      website: "#",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "New Zealand-India Research Institute (NZIRI) Scholarships",
      provider: "New Zealand-India Research Institute",
      amount: "Varies by program",
      description:
        "Scholarships supporting research collaboration between New Zealand and India. These scholarships focus on areas of mutual interest such as sustainability, agriculture, and technology.",
      eligibility: [
        "Indian students pursuing research in areas relevant to New Zealand-India relations",
        "Strong academic and research background",
      ],
      deadline: "Varies by program",
      website: "#",
    },
    {
      name: "Rotary Global Grants for New Zealand",
      provider: "Rotary Foundation",
      amount: "USD 30,000 minimum",
      description:
        "Supports international graduate-level study in fields related to Rotary's areas of focus, including peace and conflict resolution, disease prevention, water and sanitation, and education.",
      eligibility: [
        "Graduate students studying in one of Rotary's seven areas of focus",
        "Strong academic and leadership background",
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
        "Most New Zealand scholarships require a strong academic record, typically with a minimum of 65-80% in your highest qualification, depending on the scholarship and institution.",
    },
    {
      title: "English Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "Proof of English proficiency through standardized tests like IELTS (minimum 6.5) or TOEFL (minimum 90) is typically required for both admission and scholarships.",
    },
    {
      title: "Leadership Potential",
      icon: <Users className="h-6 w-6" />,
      description:
        "Demonstrated leadership abilities, community involvement, and potential to contribute to your home country's development are important for many New Zealand scholarships.",
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Start by researching scholarships that match your profile, academic interests, and financial needs. Begin at least 12-18 months before your intended start date.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Prepare Required Documents",
      description:
        "Gather required documents including transcripts, test scores, recommendation letters, statement of purpose, CV/resume, and financial documents.",
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

export default function NewZealandScholarshipsPage() {
  return <ScholarshipCountryPage data={newZealandScholarshipData} />;
}
