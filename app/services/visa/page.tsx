import ServicePage from "@/components/service-page";
import { Stamp } from "lucide-react";

const visaServiceData = {
  name: "Visa Service",
  slug: "visa",
  icon: <Stamp className="h-24 w-24" />,
  shortDescription:
    "End-to-end visa application support with high success rates, including documentation and interview preparation.",
  longDescription:
    "Securing a student visa is a critical step in your international education journey. Our visa service provides comprehensive support throughout the entire visa application process, from documentation preparation to interview coaching. With our expert guidance and high success rate, we help minimize stress and maximize your chances of visa approval, ensuring a smooth transition to your study destination.",
  benefits: [
    "Expert guidance on visa requirements and application procedures for different countries",
    "Personalized document checklist tailored to your specific situation and destination country",
    "Thorough review of all application documents to ensure accuracy and completeness",
    "Assistance with visa application form completion to avoid common errors",
    "Mock visa interview sessions with feedback and coaching",
    "Regular updates on visa processing timelines and status tracking",
    "Guidance on addressing potential visa challenges or complications",
    "Post-visa support including pre-departure orientation",
  ],
  process: {
    title: "Our Visa Application Process",
    steps: [
      {
        title: "Visa Requirement Analysis",
        description:
          "We provide detailed information about visa requirements, eligibility criteria, and application procedures specific to your destination country.",
      },
      {
        title: "Documentation Preparation",
        description:
          "We help you prepare all required documents, including financial statements, admission letters, accommodation proof, and other supporting materials.",
      },
      {
        title: "Application Form Guidance",
        description:
          "We assist you in accurately completing the visa application form, ensuring all information is consistent and properly presented.",
      },
      {
        title: "Document Submission",
        description:
          "We guide you through the document submission process, including appointment scheduling, application fee payment, and biometric registration if required.",
      },
      {
        title: "Interview Preparation",
        description:
          "We conduct mock interview sessions to prepare you for visa interviews, covering likely questions and appropriate responses.",
      },
      {
        title: "Post-Approval Guidance",
        description:
          "After visa approval, we provide pre-departure orientation, including information about entry requirements, customs regulations, and initial arrival procedures.",
      },
    ],
  },
  faqs: [
    {
      question: "What is your visa success rate?",
      answer:
        "We maintain a 95% visa success rate across all destinations. Our success comes from thorough preparation, attention to detail, and our deep understanding of visa requirements and processes for different countries. We carefully assess each application to identify and address potential issues before submission.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "Processing times vary by country and season. Generally, student visas take 2-8 weeks to process. US student visas typically take 2-4 weeks, UK visas 3-4 weeks, Canadian visas 4-8 weeks, and Australian visas 4-6 weeks. We recommend starting the visa application process at least 3 months before your intended departure date.",
    },
    {
      question: "What documents are typically required for a student visa?",
      answer:
        "Common requirements include a valid passport, acceptance letter from the university, proof of financial means (bank statements, scholarship letters, loan approval), academic transcripts, standardized test scores, proof of accommodation, and a statement of purpose. Additional country-specific documents may be required, which we'll outline in your personalized document checklist.",
    },
    {
      question: "How do you prepare students for visa interviews?",
      answer:
        "Our visa interview preparation includes multiple mock interview sessions conducted by counselors familiar with the specific country's visa process. We cover likely questions, appropriate responses, proper etiquette, and documentation organization. We also provide feedback on your communication style and suggestions for improvement.",
    },
    {
      question: "What happens if my visa is rejected?",
      answer:
        "In the rare case of visa rejection, we analyze the reasons for rejection and develop a strategy for reapplication. This may involve strengthening certain aspects of your application, providing additional documentation, or addressing specific concerns raised by the visa officer. Our experience allows us to effectively address most rejection reasons in subsequent applications.",
    },
  ],
  globalPartners: [
    {
      name: "Global Visa Network",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "International organization providing up-to-date information on visa regulations worldwide.",
      website: "https://example.com/gvn",
    },
    {
      name: "Student Visa Connect",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Platform offering resources and guidance for student visa applicants.",
      website: "https://example.com/svc",
    },
    {
      name: "International Student Legal Aid",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Organization providing legal assistance and advice for international student visa matters.",
      website: "https://example.com/isla",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "US Visa Advisors",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized guidance for US student visa applications and interview preparation.",
          website: "https://example.com/usva",
        },
        {
          name: "SEVIS Support Services",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Assistance with SEVIS registration and I-20 processing for US-bound students.",
          website: "https://example.com/sss",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Visa Experts",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized guidance for UK student visa applications and CAS processing.",
          website: "https://example.com/ukve",
        },
        {
          name: "British Immigration Advisors",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "OISC-registered advisors providing expert guidance on UK immigration matters.",
          website: "https://example.com/bia",
        },
      ],
    },
  ],
};

export default function VisaServicePage() {
  return <ServicePage data={visaServiceData} />;
}
