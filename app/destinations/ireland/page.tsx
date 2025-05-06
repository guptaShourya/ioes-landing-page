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
  Car,
  Factory,
  Beaker,
} from "lucide-react";

const irelandData: DestinationData = {
  name: "Ireland",
  slug: "ireland",
  overview:
    "Ireland is a rising star for international education, offering globally recognized degrees, a thriving tech industry, and a warm, English-speaking environment. Known for its research-driven universities and strong ties to global companies, Ireland provides students with quality education, career opportunities, and a vibrant cultural experience in a safe and friendly setting.",
  image: "/cover/ireland.webp",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg",
  reasons: [
    {
      title: "English-Taught Programs",
      description:
        "As an English-speaking country in Europe, Ireland offers a wide range of programs in English, making it accessible for international students.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Global Tech Hub",
      description:
        "Ireland hosts European headquarters for companies like Google, Apple, Meta, and Intel, offering exceptional internships and job opportunities.",
      icon: <Landmark className="h-10 w-10" />,
    },
    {
      title: "Post-Study Work Visa",
      description:
        "Graduates can stay in Ireland for up to 2 years after completing their degree to work or search for jobs under the Third Level Graduate Scheme.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    {
      name: "Computer Science & IT",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      name: "Engineering",
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      name: "Business & Management",
      icon: <Building className="h-6 w-6" />,
    },
    {
      name: "Life Sciences & Healthcare",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Social Sciences & Humanities",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      name: "Natural Sciences",
      icon: <Globe className="h-6 w-6" />,
    },
  ],
  visa: {
    title: "Irish Student Visa (Stamp 2)",
    description:
      "Non-EU/EEA students require a student visa (Stamp 2) to study in Ireland. We guide you through the application process, from gathering documentation to financial proof and visa interview preparation.",
    requirements: [
      "Letter of acceptance from an Irish institution",
      "Proof of sufficient funds (€10,000/year)",
      "Proof of tuition payment",
      "Private medical insurance",
      "Passport valid for the duration of the stay",
      "Academic transcripts and English language test results",
    ],
  },
  lifestyle: {
    title: "Welcoming & Safe Environment",
    description:
      "Ireland is known for its friendly people, vibrant cities, and scenic landscapes. Students enjoy a safe, inclusive atmosphere with excellent public services and a strong sense of community in university towns.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Moderate Living Expenses",
    description:
      "Students typically need €10,000–€15,000 per year for living expenses in Ireland. Dublin is the most expensive city, while smaller cities like Limerick or Cork offer more affordable options.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Government & University Scholarships",
    description:
      "Ireland offers various funding opportunities for international students including the Government of Ireland International Education Scholarship, university-specific merit scholarships, and research grants for postgraduate study.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "Trinity College Dublin",
      location: "Dublin",
      description:
        "Ireland’s oldest and most prestigious university, known for its historic campus and research-driven programs.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University College Dublin",
      location: "Dublin",
      description:
        "A leading research university with strengths in business, engineering, and sciences.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Galway",
      location: "Galway",
      description:
        "Renowned for arts, humanities, and science programs in a vibrant coastal city.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University College Cork",
      location: "Cork",
      description:
        "Recognized for its innovation in life sciences, business, and sustainability.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dublin City University",
      location: "Dublin",
      description:
        "Modern university focused on technology, business, and media studies with strong industry connections.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Technological University Dublin",
      location: "Dublin",
      description:
        "Ireland’s first technological university offering practical, career-focused programs.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completion of 12th grade with strong academic performance",
      "IELTS (6.0–6.5) or TOEFL (79–90) for English proficiency",
      "Subject-specific requirements for science/engineering programs",
      "Personal statement",
      "Letters of recommendation (varies by program)",
    ],
    postgraduate: [
      "Bachelor’s degree in a relevant field",
      "IELTS (6.5–7.0) or TOEFL (90–100)",
      "Statement of purpose and academic transcripts",
      "Letters of recommendation",
      "Work experience for professional programs (e.g., MBA)",
    ],
  },
  intakes: {
    primary: ["September (Autumn Intake)"],
    secondary: ["January (Spring Intake, limited programs)"],
    applicationDeadlines: {
      undergraduate:
        "Typically before July 1 for September intake (via CAO or direct to universities)",
      postgraduate:
        "Rolling deadlines; apply 6–9 months in advance for competitive programs",
    },
  },
  careers: {
    title: "Third Level Graduate Scheme",
    description:
      "International students graduating from Irish higher education institutions can stay for 1–2 years to seek employment under the Third Level Graduate Scheme, often leading to long-term work opportunities.",
    industries: [
      {
        name: "Information Technology",
        icon: <Lightbulb className="h-6 w-6" />,
      },
      { name: "Pharmaceuticals", icon: <Beaker className="h-6 w-6" /> },
      { name: "Finance & Accounting", icon: <Building className="h-6 w-6" /> },
      {
        name: "Healthcare & Life Sciences",
        icon: <Heart className="h-6 w-6" />,
      },
    ],
  },
};

export default function IrelandPage() {
  return <DestinationPage data={irelandData} />;
}
