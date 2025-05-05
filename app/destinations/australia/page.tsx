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
  Hotel,
} from "lucide-react";

const australiaData: DestinationData = {
  name: "Australia",
  slug: "australia",
  overview:
    "Australia offers a world-class education system with innovative teaching approaches in a stunning natural environment. Known for its friendly, laid-back culture and high quality of life, Australia provides international students with excellent academic opportunities, cultural diversity, and post-study work rights, making it an increasingly popular destination for Indian students.",
  image: "/cover/australia.webp",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
  reasons: [
    {
      title: "Top Ranked Universities",
      description:
        "Australian universities are globally recognized for their quality of education, student satisfaction, research outputs and teaching methods ensuring a comprehensive quality assurance system.",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      title: "Globally Demanded",
      description:
        "Graduates from Australian universities are highly demanded not only within the Country but globally due to the known fact that Australian qualifications are current, industry relevant and of world-class standard.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "Innovation Rich History",
      description:
        "The work of researchers at Australian providers has benefited millions worldwide, from the discovery of penicillin to the development of the cervical cancer vaccine, Wi-Fi, the Cochlear implant and so many more life-changing innovations.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ],
  studyAreas: [
    {
      name: "Engineering & Technology",
      icon: <Landmark className="h-6 w-6" />,
    },
    { name: "Computer Science", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Business & Management", icon: <Building className="h-6 w-6" /> },
    { name: "Healthcare & Medicine", icon: <Heart className="h-6 w-6" /> },
    { name: "Media & Communication", icon: <Globe className="h-6 w-6" /> },
    {
      name: "Academics & Teaching",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ],
  visa: {
    title: "Student Visa (Subclass 500)",
    description:
      "The Student Visa (Subclass 500) allows international students to study full-time in Australia. Our counselors provide comprehensive guidance through the entire application process, including meeting financial requirements, health insurance, and genuine temporary entrant (GTE) criteria.",
    requirements: [
      "Confirmation of Enrollment (CoE) from an Australian educational institution",
      "Financial capacity proof (tuition fees, living costs of AUD 29,710 per year, travel costs)",
      "English proficiency (IELTS, TOEFL, PTE, or equivalent)",
      "Overseas Student Health Cover (OSHC)",
      "Meeting the Genuine Temporary Entrant (GTE) requirement",
      "Character and health requirements",
    ],
  },
  lifestyle: {
    title: "Balanced Lifestyle",
    description:
      "Australia offers an enviable quality of life with its perfect balance of academic excellence and leisure opportunities. Students enjoy beautiful beaches, national parks, vibrant cities, and a safe environment with excellent public facilities, healthcare, and transportation systems.",
    image: "/placeholder.svg?height=200&width=300",
  },
  costOfLiving: {
    title: "Manageable Living Expenses",
    description:
      "While Australia has a high standard of living, costs are manageable with proper planning. Students typically need AUD 29,710 per year for living expenses, varying by location. Major cities like Sydney and Melbourne are more expensive than regional areas, which offer more affordable options and additional immigration benefits.",
    image: "/placeholder.svg?height=200&width=300",
  },
  scholarships: {
    title: "Generous Scholarship Opportunities",
    description:
      "Australia offers numerous scholarships for international students through government initiatives like Australia Awards, Destination Australia, and Research Training Program, as well as university-specific scholarships based on academic merit, research potential, and specific fields of study.",
    image: "/placeholder.svg?height=200&width=300",
  },
  universities: [
    {
      name: "University of Melbourne",
      location: "Melbourne, Victoria",
      description:
        "Australia's leading university with exceptional strength in medicine, engineering, and humanities.",
      image: "/placeholder.svg?height=100&width=100&query=Melbourne University",
    },
    {
      name: "University of Sydney",
      location: "Sydney, New South Wales",
      description:
        "Historic institution known for research excellence and beautiful campus in Australia's largest city.",
      image: "/placeholder.svg?height=100&width=100&query=Sydney University",
    },
    {
      name: "Australian National University",
      location: "Canberra, Australian Capital Territory",
      description:
        "Research-intensive university with strong connections to government and policy development.",
      image: "/placeholder.svg?height=100&width=100&query=ANU University",
    },
    {
      name: "University of Queensland",
      location: "Brisbane, Queensland",
      description:
        "Leading institution for life sciences, agriculture, and environmental studies.",
      image:
        "/placeholder.svg?height=100&width=100&query=Queensland University",
    },
    {
      name: "Monash University",
      location: "Melbourne, Victoria",
      description:
        "Innovative university with global outlook and strength in pharmacy, engineering, and business.",
      image: "/placeholder.svg?height=100&width=100&query=Monash University",
    },
    {
      name: "University of New South Wales",
      location: "Sydney, New South Wales",
      description:
        "Known for excellence in engineering, technology, and business with strong industry connections.",
      image: "/placeholder.svg?height=100&width=100&query=UNSW University",
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
    ],
  },
  intakes: {
    primary: ["February/March (Semester 1)", "July/August (Semester 2)"],
    secondary: ["November (Summer term) - limited programs"],
    applicationDeadlines: {
      undergraduate:
        "November-January for February intake; May-June for July intake",
      postgraduate:
        "Varies by university and program, generally 3-6 months before intended start date",
    },
  },
  careers: {
    title: "Temporary Graduate Visa",
    description:
      "The Graduate Route allows international students to stay in Australia for 2 - 3 years (depending on qualification) to work or look for work, providing valuable international experience.",
    industries: [
      { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
      { name: "Technology", icon: <Lightbulb className="h-6 w-6" /> },
      { name: "Education", icon: <Book className="h-6 w-6" /> },
      { name: "Hospitality Sectors", icon: <Hotel className="h-6 w-6" /> },
    ],
  },
};

export default function AustraliaPage() {
  return <DestinationPage data={australiaData} />;
}
