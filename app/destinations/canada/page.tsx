import { DestinationPage } from "@/components/destination-page";
import type { DestinationData } from "@/components/destination-page";
import {
  GraduationCap,
  Globe,
  Landmark,
  BookOpen,
  Building,
  Briefcase,
  Lightbulb,
  Heart,
  Shovel,
} from "lucide-react";

const canadaData: DestinationData = {
  name: "Canada",
  slug: "canada",
  overview:
    "Canada offers world-class education with a welcoming, multicultural environment and affordable tuition compared to many other English-speaking destinations. Known for its high quality of life, safety, and post-graduation work opportunities, Canada has become a top choice for international students seeking both academic excellence and future career prospects.",
  image: "/placeholder.svg?height=500&width=800",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
  reasons: [
    {
      title: "Quality Education",
      description:
        "Canadian universities consistently rank among the world's best, offering innovative programs with state-of-the-art facilities and research opportunities.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Multicultural Environment",
      description:
        "One of the world's most diverse countries, Canada offers a welcoming, inclusive society where international students feel at home.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "Post-Graduation Opportunities",
      description:
        "Generous post-study work permits and pathways to permanent residency make Canada an excellent choice for long-term career planning.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    { name: "Business & Management", icon: <Building className="h-6 w-6" /> },
    {
      name: "Engineering & Technology",
      icon: <Landmark className="h-6 w-6" />,
    },
    { name: "Computer Science", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Environmental Studies", icon: <Globe className="h-6 w-6" /> },
    { name: "Health Sciences", icon: <Heart className="h-6 w-6" /> },
    { name: "Arts & Humanities", icon: <BookOpen className="h-6 w-6" /> },
  ],
  visa: {
    title: "Study Permit",
    description:
      "International students require a study permit to study in Canada for programs longer than six months. Our expert counselors will guide you through the entire application process, from preparing documentation to biometrics submission, ensuring a smooth visa approval process.",
    requirements: [
      "Acceptance letter from a Designated Learning Institution (DLI)",
      "Proof of financial support (tuition fees plus CAD 10,000 for living expenses)",
      "Clean criminal record",
      "Good health and medical examination if required",
      "Intent to leave Canada after studies (though pathways to permanent residency exist)",
    ],
  },
  lifestyle: {
    title: "High Quality of Life",
    description:
      "Canada consistently ranks among the top countries for quality of life, offering clean cities, excellent healthcare, outstanding public facilities, and beautiful natural environments. Students enjoy a safe, balanced lifestyle with access to diverse cultural experiences and outdoor activities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Affordable Living Costs",
    description:
      "While varying by location, Canada's cost of living is generally lower than the US and UK. Students typically need CAD 10,000-15,000 per year for living expenses, with higher costs in major cities like Toronto and Vancouver, and more affordable options in smaller cities and provinces like Quebec and Manitoba.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Diverse Funding Opportunities",
    description:
      "Canadian institutions offer various scholarships for international students, including entrance scholarships, research grants, and program-specific awards. Government scholarships like the Vanier Canada Graduate Scholarships and Canada-specific awards for Indian students provide additional funding opportunities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "University of Toronto",
      location: "Toronto, Ontario",
      description:
        "Canada's top-ranked university, known for research innovation and academic excellence across diverse disciplines.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of British Columbia",
      location: "Vancouver, British Columbia",
      description:
        "Renowned for sustainability initiatives and strong programs in science, business, and environmental studies.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "McGill University",
      location: "Montreal, Quebec",
      description:
        "Historic institution with global reputation for medicine, law, and engineering in a vibrant bilingual city.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Alberta",
      location: "Edmonton, Alberta",
      description:
        "Leading research university with strengths in natural resources, engineering, and health sciences.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Waterloo",
      location: "Waterloo, Ontario",
      description:
        "Known for cooperative education programs and excellence in mathematics, computer science, and engineering.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Montreal",
      location: "Montreal, Quebec",
      description:
        "Major French-language institution with outstanding programs in linguistics, computer science, and healthcare.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed higher secondary education (12th grade) with strong academic performance",
      "English proficiency through IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90)",
      "Standardized tests like SAT/ACT (for some universities/programs)",
      "Statement of purpose and letters of recommendation",
      "Portfolio or additional requirements for specific programs (e.g., arts, architecture)",
    ],
    postgraduate: [
      "Bachelor's degree with minimum 65-75% or equivalent GPA",
      "English proficiency through IELTS (minimum 6.5-7.0) or TOEFL (minimum 90-100)",
      "GRE/GMAT for specific programs (especially business and engineering)",
      "Research proposal for research-based programs",
      "Work experience for professional programs like MBA",
      "Letters of recommendation and statement of purpose",
    ],
  },
  intakes: {
    primary: ["September (Fall)", "January (Winter)"],
    secondary: ["May (Summer) - limited programs"],
    applicationDeadlines: {
      undergraduate:
        "January-March for September intake; September-November for January intake",
      postgraduate:
        "Varies by university and program, generally 6-12 months before intended start date",
    },
  },
  careers: {
    title: "Graduate Route Visa",
    description:
      "The Graduate Route allows international students to stay in the UK for 2 years after graduation (3 years for PhD graduates) to work or look for work, providing valuable international experience.",
    industries: [
      { name: "Engineering", icon: <Lightbulb className="h-6 w-6" /> },
      { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
      { name: "Business Sectors", icon: <Briefcase className="h-6 w-6" /> },
      { name: "Natural Resources", icon: <Shovel className="h-6 w-6" /> },
    ],
  },
};

export default function CanadaPage() {
  return <DestinationPage data={canadaData} />;
}
