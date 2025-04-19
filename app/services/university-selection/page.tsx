import ServicePage from "@/components/service-page";
import { GraduationCap } from "lucide-react";

const universitySelectionData = {
  name: "University Selection",
  slug: "university-selection",
  icon: <GraduationCap className="h-24 w-24" />,
  shortDescription:
    "Expert assistance in selecting universities that align with your academic goals, preferences, and budget.",
  longDescription:
    "Choosing the right university is one of the most critical decisions in your study abroad journey. Our university selection service provides personalized guidance to help you identify institutions that best match your academic profile, career aspirations, and personal preferences. We analyze factors such as program quality, location, campus culture, and financial considerations to create a tailored list of universities where you have strong chances of admission and success.",
  benefits: [
    "Personalized university recommendations based on your academic profile and career goals",
    "Insights into university rankings, program strengths, and specializations",
    "Guidance on admission requirements and competitive positioning",
    "Analysis of campus culture, location, and lifestyle factors",
    "Realistic assessment of admission chances at different universities",
    "Strategic application planning to maximize acceptance opportunities",
    "Advice on program selection and specialization options",
    "Comprehensive information about tuition fees, living costs, and financial aid opportunities",
  ],
  process: {
    title: "Our University Selection Process",
    steps: [
      {
        title: "Profile Assessment",
        description:
          "We conduct a thorough evaluation of your academic background, test scores, extracurricular activities, and career goals to understand your profile.",
      },
      {
        title: "Preference Analysis",
        description:
          "We discuss your preferences regarding location, campus size, program structure, specialization options, and other factors important to your university experience.",
      },
      {
        title: "Research and Analysis",
        description:
          "Our experts research universities worldwide to identify institutions that match your profile and preferences, considering factors like program quality, faculty expertise, and research opportunities.",
      },
      {
        title: "University Shortlisting",
        description:
          "We create a strategic shortlist of universities categorized as ambitious, target, and safe options to maximize your chances of admission while pursuing your goals.",
      },
      {
        title: "Detailed University Profiles",
        description:
          "We provide comprehensive information about each recommended university, including program details, admission requirements, campus facilities, and student life.",
      },
      {
        title: "Application Strategy",
        description:
          "We develop a strategic application plan, including timeline, application requirements, and positioning strategy for each university on your shortlist.",
      },
    ],
  },
  faqs: [
    {
      question: "How many universities will be included in my shortlist?",
      answer:
        "Typically, we recommend 6-8 universities, including 2-3 ambitious options, 2-3 target schools where you have a good chance of admission, and 2 safe options. However, the exact number can vary based on your specific situation, preferences, and application timeline.",
    },
    {
      question:
        "How do you determine which universities are the best fit for me?",
      answer:
        "We consider multiple factors including your academic profile (GPA, test scores), career goals, program preferences, budget constraints, location preferences, and personal interests. We also analyze admission trends, program strengths, and match your profile with the typical admitted student profile at various universities.",
    },
    {
      question:
        "Do you only recommend universities that have partnerships with IOES?",
      answer:
        "No, our recommendations are based solely on what's best for you, not our partnerships. While we have established relationships with 500+ universities worldwide, we recommend institutions based on their fit with your profile and goals, regardless of partnership status.",
    },
    {
      question:
        "Can you help me select universities for multiple program options?",
      answer:
        "Yes, if you're considering different program options (e.g., MBA vs. MS in Finance), we can provide separate university recommendations for each program type, helping you compare opportunities across different academic paths.",
    },
    {
      question: "How up-to-date is your university information?",
      answer:
        "We maintain current information through regular updates from university partners, education fairs, and our alumni network. Our counselors also participate in professional development activities to stay informed about changes in admission requirements, program offerings, and campus developments.",
    },
  ],
  globalPartners: [
    {
      name: "QS World University Rankings",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Access to comprehensive university ranking data and insights to inform university selection decisions.",
      website: "https://example.com/qs",
    },
    {
      name: "University Connection Network",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Global platform connecting students with university representatives for personalized guidance.",
      website: "https://example.com/ucn",
    },
    {
      name: "Global Campus Tours",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Virtual and in-person campus tour opportunities at universities worldwide.",
      website: "https://example.com/gct",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "US University Alliance",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Consortium of top US universities providing exclusive information and application support.",
          website: "https://example.com/usua",
        },
        {
          name: "American Campus Connect",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Platform offering virtual tours and student connections at US universities.",
          website: "https://example.com/acc",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Universities Network",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Comprehensive resource for UK university information and application guidance.",
          website: "https://example.com/ukun",
        },
        {
          name: "British Education Showcase",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Platform highlighting program offerings and campus features at UK institutions.",
          website: "https://example.com/bes",
        },
      ],
    },
  ],
};

export default function UniversitySelectionPage() {
  return <ServicePage data={universitySelectionData} />;
}
