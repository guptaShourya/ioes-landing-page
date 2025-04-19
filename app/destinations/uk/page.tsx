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
  DollarSign,
  Users,
  Clock,
} from "lucide-react";

const ukData: DestinationData = {
  name: "United Kingdom",
  slug: "uk",
  overview:
    "The United Kingdom offers a rich academic tradition with some of the world's oldest and most prestigious universities. Known for shorter, more intensive degree programs, the UK provides high-quality education that is globally recognized and respected.",
  image: "/UKDestinationBG.jpg",
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
    { name: "Arts & Design", icon: <Users className="h-6 w-6" /> },
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

export default function ukPage() {
  return <DestinationPage data={ukData} />;
}
