import { DestinationPage } from "@/components/destination-page";
import type { DestinationData } from "@/components/destination-page";
import {
  GraduationCap,
  Globe,
  Landmark,
  BookOpen,
  Building,
  Lightbulb,
  Heart,
  Book,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";

const ukData: DestinationData = {
  name: "United Kingdom",
  slug: "uk",
  overview:
    "The United Kingdom offers a rich academic tradition with some of the world's oldest and most prestigious universities. Known for shorter, more intensive degree programs, the UK provides high-quality education that is globally recognized and respected.",
  image: "/cover/uk.webp",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  reasons: [
    {
      title: "Prestigious Education",
      description:
        "Home to world-renowned institutions like Oxford, Cambridge, and Imperial College, offering centuries of academic excellence.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Shorter Degree Programs",
      description:
        "Bachelor's degrees typically take 3 years and Master's programs just 1 year, saving time and money compared to other countries.",
      icon: <Clock className="h-10 w-10" />,
    },
    {
      title: "Multicultural Experience",
      description:
        "Study in one of the world's most diverse countries, with students from across the globe and rich cultural experiences.",
      icon: <Globe className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    { name: "Business & Economics", icon: <Building className="h-6 w-6" /> },
    { name: "Engineering", icon: <Landmark className="h-6 w-6" /> },
    { name: "Law", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Medicine", icon: <Heart className="h-6 w-6" /> },
    { name: "Arts & Design", icon: <Book className="h-6 w-6" /> },
    { name: "Sciences", icon: <Lightbulb className="h-6 w-6" /> },
  ],
  visa: {
    title: "Student Visa (Tier 4)",
    description:
      "The UK Student Visa allows international students to study at UK institutions. Our counselors will guide you through the points-based application system, helping you prepare all necessary documentation and meet financial requirements.",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of financial means",
      "English language proficiency",
      "Tuberculosis test (for certain countries)",
      "Valid passport",
    ],
  },
  lifestyle: {
    title: "Rich Cultural Experience",
    description:
      "Experience life in a country with rich history, diverse cities, and excellent public transportation. UK universities offer numerous societies and clubs to enhance your student experience.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Variable by Region",
    description:
      "London is more expensive than other UK cities. Students should budget £12,000-£15,000 per year for living expenses outside London, and £15,000-£18,000 in London, covering accommodation, food, and transportation.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Chevening & Institution-Specific",
    description:
      "The UK government offers prestigious Chevening Scholarships, while many universities have their own scholarship programs for international students based on academic excellence and leadership potential.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      description:
        "Ranked as one of the top universities globally, Oxford offers a wide range of programs and is renowned for its research excellence.",
      image: "/placeholder.svg?height=100&width=100&query=Oxford University",
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, England",
      description:
        "Known for its rigorous academic programs and historic campus, Cambridge is a top choice for students worldwide.",
      image: "/placeholder.svg?height=100&width=100&query=Cambridge University",
    },
    {
      name: "Imperial College London",
      location: "London, England",
      description:
        "Specializing in science, engineering, medicine, and business, Imperial is a leader in innovation and research.",
      image: "/placeholder.svg?height=100&width=100&query=Imperial College",
    },
    {
      name: "London School of Economics and Political Science (LSE)",
      location: "London, England",
      description:
        "A world leader in social sciences, LSE attracts students from over 150 countries.",
      image: "/placeholder.svg?height=100&width=100&query=LSE University",
    },
    {
      name: "University College London (UCL)",
      location: "London, England",
      description:
        "UCL is known for its multidisciplinary approach and strong emphasis on research.",
      image: "/placeholder.svg?height=100&width=100&query=UCL University",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed 12th grade with strong academic performance (70-80% or higher depending on program)",
      "English proficiency: IELTS (6.0-6.5), TOEFL (70-90), or PTE (50-64)",
      "Specific subject prerequisites for certain programs",
      "Portfolio or audition for creative arts programs",
      "Statement of purpose and academic references",
    ],
    postgraduate: [
      "Bachelor's degree with minimum 60-70% or equivalent GPA",
      "English proficiency: IELTS (6.5-7.0), TOEFL (90-100), or PTE (65-79)",
      "Work experience for MBA and certain professional programs",
      "Research proposal for research degrees",
      "GRE/GMAT for specific programs (especially business and engineering)",
      "Letters of recommendation and statement of purpose",
    ],
  },
  intakes: {
    primary: ["September/October (Autumn Intake)"],
    secondary: ["January/February (Spring Intake)"],
    applicationDeadlines: {
      undergraduate:
        "UCAS deadline: January 25 for most courses; October 15 for Oxbridge and medical programs",
      postgraduate:
        "Varies by university and program, generally 3-6 months before intended start date",
    },
  },
  careers: {
    title: "Graduate Route Visa",
    description:
      "The Graduate Route allows international students to stay in the UK for 2 years after graduation (3 years for PhD graduates) to work or look for work, providing valuable international experience.",
    industries: [
      { name: "Finance", icon: <DollarSign className="h-6 w-6" /> },
      { name: "Creative Industries", icon: <Users className="h-6 w-6" /> },
      { name: "Technology", icon: <Lightbulb className="h-6 w-6" /> },
      { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
    ],
  },
};

export default function UKPage() {
  return <DestinationPage data={ukData} />;
}
