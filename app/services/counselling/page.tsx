import ServicePage from "@/components/service-page";
import { Users } from "lucide-react";

const counsellingData = {
  name: "Counselling",
  slug: "counselling",
  icon: <Users className="h-24 w-24" />,
  shortDescription:
    "Personalized guidance from experienced counselors to help you make informed decisions about your education abroad.",
  longDescription:
    "Our expert counselors provide personalized guidance to help you navigate the complex process of studying abroad. We understand that each student has unique aspirations, preferences, and concerns. Our counseling services are designed to address your specific needs and help you make informed decisions about your international education journey.",
  benefits: [
    "One-on-one sessions with experienced education counselors",
    "Personalized guidance based on your academic profile and career goals",
    "Comprehensive information about various study destinations and their education systems",
    "Insights into course selection aligned with your career aspirations",
    "Realistic assessment of admission chances at different universities",
    "Guidance on building a strong profile for competitive programs",
    "Regular follow-ups and continuous support throughout the application process",
    "Post-admission counseling to prepare for your journey abroad",
  ],
  process: {
    title: "Our Counselling Process",
    steps: [
      {
        title: "Initial Consultation",
        description:
          "A free introductory session to understand your academic background, career goals, and preferences.",
      },
      {
        title: "Profile Assessment",
        description:
          "Detailed evaluation of your academic credentials, extracurricular activities, and other relevant factors.",
      },
      {
        title: "Destination and Course Guidance",
        description:
          "Recommendations on suitable countries, universities, and programs based on your profile and aspirations.",
      },
      {
        title: "Application Strategy",
        description:
          "Developing a strategic plan for university applications, including timelines and requirements.",
      },
      {
        title: "Regular Follow-ups",
        description:
          "Continuous support and guidance throughout the application process with scheduled check-ins.",
      },
      {
        title: "Pre-departure Counselling",
        description:
          "Comprehensive orientation to prepare you for life and studies abroad after securing admissions.",
      },
    ],
  },
  faqs: [
    {
      question: "Is there a fee for the counselling services?",
      answer:
        "No, our counselling services are completely free of cost. We believe in providing accessible guidance to all students aspiring to study abroad.",
    },
    {
      question: "How do I schedule a counselling session?",
      answer:
        "You can schedule a counselling session by filling out the contact form on our website, calling our office, or visiting us in person. We offer both in-person and virtual counselling sessions.",
    },
    {
      question: "How many counselling sessions will I need?",
      answer:
        "The number of sessions varies depending on your specific needs and the stage of your application process. We provide continuous support until you secure admission and are ready to depart for your studies.",
    },
    {
      question: "Can I change my counselor if I'm not satisfied?",
      answer:
        "Yes, we understand the importance of a good rapport between students and counselors. If you feel the need to change your counselor, please let us know, and we will assign another experienced counselor to assist you.",
    },
    {
      question:
        "Do you provide counselling for specific countries or universities?",
      answer:
        "Yes, our counselors specialize in various study destinations and can provide detailed guidance on specific countries and universities based on your preferences and eligibility.",
    },
  ],
  globalPartners: [
    {
      name: "Global Education Network",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "An international network of education consultants providing up-to-date information on global education trends.",
      website: "https://example.com/gen",
    },
    {
      name: "Career Compass International",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Specialists in career guidance and professional development for international students.",
      website: "https://example.com/cci",
    },
    {
      name: "Academic Excellence Alliance",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "A consortium of academic advisors dedicated to helping students achieve their educational goals.",
      website: "https://example.com/aea",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "US Education Advisors",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized counseling for US university admissions and visa processes.",
          website: "https://example.com/usea",
        },
        {
          name: "American Campus Connect",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Expert guidance on US campus life and cultural adaptation.",
          website: "https://example.com/acc",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Study Advisors",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized counseling for UK university admissions and visa processes.",
          website: "https://example.com/uksa",
        },
        {
          name: "British Education Consultants",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Expert guidance on UK education system and cultural adaptation.",
          website: "https://example.com/bec",
        },
      ],
    },
  ],
};

export default function CounsellingPage() {
  return <ServicePage data={counsellingData} />;
}
