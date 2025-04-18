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
  Book,
  DollarSign,
} from "lucide-react";

const usaData: DestinationData = {
  name: "United States",
  slug: "usa",
  overview:
    "The United States is home to some of the world's most prestigious universities, offering a diverse range of programs and unparalleled research opportunities. With a flexible education system, students can customize their academic journey while experiencing American campus life and culture.",
  image: "/placeholder.svg?height=500&width=800",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
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
    { name: "Arts & Humanities", icon: <Book className="h-6 w-6" /> },
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
  universities: [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts",
      description:
        "One of the most prestigious universities in the world, known for its excellence in law, business, and medicine.",
      image: "/placeholder.svg?height=100&width=100&query=Harvard University",
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      description:
        "A leader in innovation and entrepreneurship, Stanford excels in engineering, computer science, and business.",
      image: "/placeholder.svg?height=100&width=100&query=Stanford University",
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, Massachusetts",
      description:
        "Renowned for its cutting-edge research and programs in engineering, technology, and sciences.",
      image: "/placeholder.svg?height=100&width=100&query=MIT University",
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      description:
        "Known for its strong emphasis on research and innovation, Berkeley is a top choice for science and engineering.",
      image: "/placeholder.svg?height=100&width=100&query=UC Berkeley",
    },
    {
      name: "University of Chicago",
      location: "Chicago, Illinois",
      description:
        "A world leader in economics, social sciences, and law, with a strong focus on critical thinking and research.",
      image:
        "/placeholder.svg?height=100&width=100&query=University of Chicago",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed high school with strong academic performance (GPA 3.0 or higher)",
      "Standardized test scores: SAT/ACT (optional for some universities)",
      "English proficiency: TOEFL (80-100), IELTS (6.5-7.0), or equivalent",
      "Personal statement or essay",
      "Letters of recommendation",
      "Extracurricular activities and leadership roles",
    ],
    postgraduate: [
      "Bachelor's degree with a strong academic record (GPA 3.0 or higher)",
      "Standardized test scores: GRE/GMAT (required for some programs)",
      "English proficiency: TOEFL (90-100), IELTS (6.5-7.5), or equivalent",
      "Statement of purpose (SOP)",
      "Letters of recommendation",
      "Work experience (for MBA and professional programs)",
    ],
  },
  intakes: {
    primary: ["August/September (Fall Intake)"],
    secondary: ["January (Spring Intake)"],
    applicationDeadlines: {
      undergraduate:
        "Early decision: November; Regular decision: January-March",
      postgraduate:
        "Varies by program, typically 6-12 months before the intended start date",
    },
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
};

export default function USAPage() {
  return <DestinationPage data={usaData} />;
}
