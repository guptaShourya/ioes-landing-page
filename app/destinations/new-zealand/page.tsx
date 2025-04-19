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
  Plane,
} from "lucide-react";

const newZealandData: DestinationData = {
  name: "New Zealand",
  slug: "new-zealand",
  overview:
    "New Zealand offers a high-quality education system with a focus on practical, hands-on learning in a breathtaking natural environment. Known for its safe, welcoming society and excellent quality of life, New Zealand provides international students with innovative teaching approaches, personalized attention, and post-study work opportunities in a country that values work-life balance.",
  image: "/placeholder.svg?height=500&width=800",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
  reasons: [
    {
      title: "Quality Education",
      description:
        "New Zealand's education system is based on the prestigious British model, offering globally recognized qualifications with an emphasis on critical thinking and practical skills.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Safe and Welcoming",
      description:
        "Consistently ranked among the world's safest and most peaceful countries, New Zealand offers a welcoming, inclusive environment for international students.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "Work Opportunities",
      description:
        "Generous work rights during and after studies, with post-study work visas allowing graduates to gain valuable international experience in a growing economy.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    { name: "Agriculture & Forestry", icon: <Globe className="h-6 w-6" /> },
    { name: "Environmental Sciences", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Tourism & Hospitality", icon: <Building className="h-6 w-6" /> },
    {
      name: "Engineering & Technology",
      icon: <Landmark className="h-6 w-6" />,
    },
    { name: "Creative Arts & Design", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Healthcare & Medicine", icon: <Heart className="h-6 w-6" /> },
  ],
  visa: {
    title: "Student Visa",
    description:
      "International students planning to study for more than three months in New Zealand require a student visa. Our counselors provide comprehensive guidance through the entire application process, ensuring you meet all requirements for a successful visa application.",
    requirements: [
      "Offer of place from a New Zealand educational institution",
      "Evidence of sufficient funds for tuition and living expenses (NZD 20,000 per year for living costs)",
      "Return air ticket or evidence of additional funds to purchase one",
      "Health and character requirements",
      "Full medical insurance for the duration of stay",
      "Evidence of genuine intention to study",
    ],
  },
  lifestyle: {
    title: "Exceptional Quality of Life",
    description:
      "New Zealand offers an outstanding quality of life with its perfect balance of urban amenities and natural beauty. Students enjoy outdoor adventures, cultural experiences, and a relaxed lifestyle in safe, clean cities with excellent public services and a strong emphasis on work-life balance.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Reasonable Living Costs",
    description:
      "New Zealand offers a high standard of living at relatively reasonable costs compared to many other developed countries. Students typically need NZD 20,000-25,000 per year for living expenses, with Auckland being the most expensive city and other regions offering more affordable options.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Diverse Scholarship Options",
    description:
      "New Zealand offers various scholarships for international students through government initiatives like the New Zealand Excellence Awards and Manaaki New Zealand Scholarships, as well as university-specific scholarships based on academic merit, research potential, and specific fields of study.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "University of Auckland",
      location: "Auckland",
      description:
        "New Zealand's top-ranked university with comprehensive programs and research excellence across disciplines.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Otago",
      location: "Dunedin",
      description:
        "New Zealand's oldest university, renowned for medicine, sciences, and humanities in a vibrant student city.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Victoria University of Wellington",
      location: "Wellington",
      description:
        "Located in the capital city with strengths in law, public policy, and creative disciplines.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "University of Canterbury",
      location: "Christchurch",
      description:
        "Known for engineering, forestry, and natural sciences with strong industry connections.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Massey University",
      location: "Multiple campuses (Palmerston North, Auckland, Wellington)",
      description:
        "Specializes in agriculture, veterinary science, aviation, and distance education.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Auckland University of Technology (AUT)",
      location: "Auckland",
      description:
        "Modern, industry-focused university with strength in technology, health sciences, and business.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed 12th grade with good academic performance (70-80% or higher depending on program)",
      "English proficiency: IELTS (6.0-6.5), TOEFL (80-90), or PTE (50-58)",
      "Specific subject prerequisites for certain programs",
      "Portfolio or audition for creative arts programs",
      "Statement of purpose and academic references",
    ],
    postgraduate: [
      "Bachelor's degree with minimum 60-65% or equivalent GPA",
      "English proficiency: IELTS (6.5-7.0), TOEFL (90-100), or PTE (58-65)",
      "Work experience for MBA and certain professional programs",
      "Research proposal for research degrees",
      "Letters of recommendation and statement of purpose",
    ],
  },
  intakes: {
    primary: ["February/March (Semester 1)", "July (Semester 2)"],
    secondary: ["November (Summer term) - limited programs"],
    applicationDeadlines: {
      undergraduate:
        "October-December for February intake; April-May for July intake",
      postgraduate:
        "Varies by university and program, generally 3-6 months before intended start date",
    },
  },
  careers: {
    title: "Graduate Route Visa",
    description:
      "The Graduate Route allows international students to stay in the UK for 2 years after graduation (3 years for PhD graduates) to work or look for work, providing valuable international experience.",
    industries: [
      { name: "Agriculture", icon: <Shovel className="h-6 w-6" /> },
      { name: "Technology", icon: <Lightbulb className="h-6 w-6" /> },
      { name: "Tourism", icon: <Plane className="h-6 w-6" /> },
      { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
    ],
  },
};

export default function NewZealandPage() {
  return <DestinationPage data={newZealandData} />;
}
