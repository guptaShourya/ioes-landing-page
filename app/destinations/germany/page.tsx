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
} from "lucide-react";

const germanyData: DestinationData = {
  name: "Germany",
  slug: "germany",
  overview:
    "Germany offers world-class education with little to no tuition fees at public universities, making it an exceptionally affordable study destination. Known for its engineering excellence, innovative research, and strong economy, Germany provides international students with high-quality education, diverse cultural experiences, and excellent career opportunities in the heart of Europe.",
  image: "/placeholder.svg?height=500&width=800",
  flag: "/placeholder.svg?height=30&width=50",
  reasons: [
    {
      title: "Tuition-Free Education",
      description:
        "Most public universities in Germany charge no tuition fees for undergraduate and many graduate programs, requiring only a small semester contribution fee.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Engineering Excellence",
      description:
        "Germany is renowned worldwide for its engineering programs and technological innovation, offering cutting-edge education in technical fields.",
      icon: <Landmark className="h-10 w-10" />,
    },
    {
      title: "Strong Job Market",
      description:
        "As Europe's largest economy, Germany offers excellent employment prospects during studies and after graduation, with an 18-month job-seeking visa for graduates.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    {
      name: "Engineering & Technology",
      icon: <Landmark className="h-6 w-6" />,
    },
    { name: "Computer Science", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Natural Sciences", icon: <Globe className="h-6 w-6" /> },
    { name: "Business & Economics", icon: <Building className="h-6 w-6" /> },
    { name: "Medicine & Healthcare", icon: <Heart className="h-6 w-6" /> },
    { name: "Arts & Humanities", icon: <BookOpen className="h-6 w-6" /> },
  ],
  visa: {
    title: "Student Visa/Residence Permit",
    description:
      "International students from non-EU countries require a student visa to study in Germany. Our counselors provide comprehensive guidance through the entire application process, including documentation preparation and proof of financial resources.",
    requirements: [
      "Acceptance letter from a German university",
      "Proof of financial resources (approximately €10,332 per year in a blocked account)",
      "Health insurance coverage",
      "German language proficiency for German-taught programs",
      "Valid passport",
      "Proof of accommodation in Germany",
    ],
  },
  lifestyle: {
    title: "High Quality of Life",
    description:
      "Germany offers an excellent quality of life with efficient public transportation, comprehensive healthcare, rich cultural experiences, and beautiful natural landscapes. Students enjoy a safe environment with a perfect balance of historical heritage and modern amenities in vibrant, student-friendly cities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Affordable Living Costs",
    description:
      "Germany offers a relatively affordable cost of living compared to other Western European countries. Students typically need €850-1,000 per month (€10,200-12,000 per year) for living expenses, with costs varying by city. Major cities like Munich and Frankfurt are more expensive than smaller university towns.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Diverse Funding Options",
    description:
      "Germany offers numerous scholarships for international students through organizations like DAAD (German Academic Exchange Service), which provides various funding programs. Additionally, university-specific scholarships, government-funded programs, and foundation grants support international students based on academic merit and research potential.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "Technical University of Munich",
      location: "Munich, Bavaria",
      description:
        "Germany's top technical university with excellence in engineering, natural sciences, and technology.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ludwig Maximilian University of Munich",
      location: "Munich, Bavaria",
      description:
        "One of Europe's oldest universities with comprehensive programs and research excellence across disciplines.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Heidelberg University",
      location: "Heidelberg, Baden-Württemberg",
      description:
        "Germany's oldest university, renowned for medicine, sciences, and humanities.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "RWTH Aachen University",
      location: "Aachen, North Rhine-Westphalia",
      description:
        "Leading technical university with strong industry connections and engineering excellence.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Humboldt University of Berlin",
      location: "Berlin",
      description:
        "Historic institution in Germany's capital with strengths in humanities, social sciences, and law.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Technical University of Berlin",
      location: "Berlin",
      description:
        "Renowned for engineering, computer science, and technology programs in a vibrant capital city.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed 12th grade plus at least one year of bachelor's studies in India OR completion of Studienkolleg (foundation course)",
      "German language proficiency (B2/C1 level) for German-taught programs",
      "English proficiency for English-taught programs: IELTS (6.0-6.5) or TOEFL (80-90)",
      "Subject-specific entrance exams for certain programs",
      "Portfolio for art and design programs",
    ],
    postgraduate: [
      "Bachelor's degree in a related field with good academic standing",
      "German language proficiency (B2/C1 level) for German-taught programs",
      "English proficiency for English-taught programs: IELTS (6.5-7.0) or TOEFL (90-100)",
      "GRE/GMAT for specific programs (especially business and engineering)",
      "Letters of recommendation and statement of purpose",
      "Work experience for MBA and some professional programs",
    ],
  },
  intakes: {
    primary: ["October (Winter Semester)", "April (Summer Semester)"],
    secondary: [],
    applicationDeadlines: {
      undergraduate:
        "July 15 for Winter Semester, January 15 for Summer Semester (varies by university)",
      postgraduate:
        "Varies by program, generally 3-6 months before semester start",
    },
  },
  workOpportunities: {
    duringStudy: "Up to 120 full days or 240 half days per year",
    afterGraduation:
      "18-month residence permit to seek employment; can be extended into a work permit once a job is found",
    careerProspects:
      "Strong opportunities in engineering, IT, automotive, manufacturing, and research sectors",
  },
  pathwayToResidency:
    "Germany offers pathways to permanent residency for international graduates. After working for 24 months with a German degree, graduates can apply for permanent residency. Proficiency in German language and integration into German society are important factors for successful residency applications.",
};

export default function GermanyPage() {
  return <DestinationPage data={germanyData} />;
}
