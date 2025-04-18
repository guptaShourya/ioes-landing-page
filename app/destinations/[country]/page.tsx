import {
  DestinationPage,
  type DestinationData,
} from "@/components/destination-page";
import {
  GraduationCap,
  Globe,
  Landmark,
  BookOpen,
  Users,
  Building,
  Briefcase,
  Clock,
  Lightbulb,
  Heart,
  DollarSign,
} from "lucide-react";

// This would typically come from a CMS or API
const countryData: Record<string, DestinationData> = {
  usa: {
    name: "United States",
    slug: "usa",
    overview:
      "The United States is home to some of the world's most prestigious universities, offering a diverse range of programs and unparalleled research opportunities. With a flexible education system, students can customize their academic journey while experiencing American campus life and culture.",
    image: "/placeholder.svg?height=500&width=800",
    flag: "/placeholder.svg?height=30&width=50",
    reasons: [
      {
        title: "World-Class Education",
        description:
          "Home to 8 of the top 10 universities in the world, the US offers exceptional academic standards and research opportunities.",
        icon: <GraduationCap className="h-10 w-10" />,
      },
      {
        title: "Diverse Program Options",
        description:
          "With over 4,000 institutions, students can choose from a vast array of programs and specializations to match their interests.",
        icon: <BookOpen className="h-10 w-10" />,
      },
      {
        title: "Global Career Opportunities",
        description:
          "A US degree is highly valued by employers worldwide, opening doors to international career opportunities.",
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
      { name: "Medicine & Healthcare", icon: <Heart className="h-6 w-6" /> },
      { name: "Arts & Humanities", icon: <Users className="h-6 w-6" /> },
      { name: "Natural Sciences", icon: <Globe className="h-6 w-6" /> },
    ],
    visa: {
      title: "F-1 Student Visa",
      description:
        "The F-1 visa is the most common visa for international students studying in the US. Our expert counselors will guide you through the entire application process, from preparing documentation to interview preparation, ensuring a smooth visa approval process.",
      requirements: [
        "Acceptance letter from a SEVP-approved institution",
        "Proof of financial support",
        "Strong ties to home country",
        "English proficiency",
        "Valid passport",
      ],
    },
    lifestyle: {
      title: "American Campus Life",
      description:
        "Experience the vibrant campus culture with numerous clubs, sports, and social activities. American universities offer a holistic education that extends beyond the classroom.",
      image: "/placeholder.svg?height=200&width=300",
    },
    costOfLiving: {
      title: "Affordable to Premium Options",
      description:
        "Cost of living varies significantly across the US, from affordable small towns to premium metropolitan areas. On average, students should budget $10,000-$25,000 per year for living expenses, depending on the location.",
      image: "/placeholder.svg?height=200&width=300",
    },
    scholarships: {
      title: "Merit & Need-Based Funding",
      description:
        "Many US universities offer generous scholarships to international students based on academic merit, leadership potential, and financial need. Our counselors can help you identify and apply for scholarships that match your profile.",
      image: "/placeholder.svg?height=200&width=300",
    },
    careers: {
      title: "Global Career Pathways",
      description:
        "A US degree opens doors to career opportunities worldwide. Many programs include internship components, and the Optional Practical Training (OPT) program allows international students to work in the US for up to 3 years after graduation.",
      industries: [
        { name: "Technology", icon: <Lightbulb className="h-6 w-6" /> },
        { name: "Finance", icon: <DollarSign className="h-6 w-6" /> },
        { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
        { name: "Engineering", icon: <Landmark className="h-6 w-6" /> },
      ],
    },
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    overview:
      "The United Kingdom offers a rich academic tradition with some of the world's oldest and most prestigious universities. Known for shorter, more intensive degree programs, the UK provides high-quality education that is globally recognized and respected.",
    image: "/placeholder.svg?height=500&width=800",
    flag: "/placeholder.svg?height=30&width=50",
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
  },
  // Add more countries following the same structure
};

export async function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({
    country: country,
  }));
}

export default function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const country = params.country;
  const data = countryData[country];

  if (!data) {
    return <div>Country not found</div>;
  }

  return <DestinationPage data={data} />;
}
