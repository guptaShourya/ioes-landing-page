import ServicePage from "@/components/service-page";
import { Heart } from "lucide-react";

const healthInsuranceData = {
  name: "Health Insurance",
  slug: "health-insurance",
  icon: <Heart className="h-24 w-24" />,
  shortDescription:
    "Access to comprehensive health insurance plans through our global and country-specific insurance partners.",
  longDescription:
    "Health insurance is a critical component of your international education journey, often mandatory for visa approval and university enrollment. Our health insurance service connects you with trusted insurance providers offering comprehensive coverage tailored to international students' needs. We help you understand policy options, coverage details, and claim procedures to ensure you have appropriate health protection throughout your studies abroad.",
  benefits: [
    "Access to a range of student-specific health insurance plans from trusted global providers",
    "Guidance on selecting the most suitable insurance plan based on your destination, duration, and health needs",
    "Explanation of coverage details, including medical services, emergency care, and prescription benefits",
    "Information about country-specific insurance requirements for visa and university enrollment",
    "Assistance with insurance application and documentation",
    "Support for insurance claims and policy management during your stay abroad",
    "Competitive rates through our partnerships with leading insurance providers",
    "Guidance on supplementary insurance options for specific needs",
  ],
  process: {
    title: "Our Health Insurance Guidance Process",
    steps: [
      {
        title: "Insurance Requirement Analysis",
        description:
          "We provide information about health insurance requirements specific to your destination country and university.",
      },
      {
        title: "Health Needs Assessment",
        description:
          "We discuss your specific health needs, including any pre-existing conditions or ongoing treatments, to identify appropriate coverage options.",
      },
      {
        title: "Plan Comparison",
        description:
          "We present multiple insurance options, comparing coverage details, premiums, deductibles, and additional benefits to help you make an informed choice.",
      },
      {
        title: "Application Assistance",
        description:
          "We guide you through the insurance application process, ensuring all information is accurately provided and documentation is complete.",
      },
      {
        title: "Policy Management Guidance",
        description:
          "We explain how to use your insurance, including finding in-network providers, making claims, and accessing emergency services in your destination country.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide assistance with insurance-related queries or issues throughout your study period, including policy renewals or modifications if needed.",
      },
    ],
  },
  faqs: [
    {
      question: "Is health insurance mandatory for international students?",
      answer:
        "Yes, most countries require international students to have health insurance coverage for the duration of their stay. It's typically a visa requirement and often mandatory for university enrollment. The specific coverage requirements vary by country and sometimes by university.",
    },
    {
      question: "What does student health insurance typically cover?",
      answer:
        "Standard student health insurance plans typically cover doctor visits, hospitalization, emergency care, prescription medications, and sometimes mental health services. Premium plans may include dental care, vision care, and coverage for pre-existing conditions. Coverage limits, deductibles, and co-payments vary by plan.",
    },
    {
      question: "How much does student health insurance cost?",
      answer:
        "The cost varies by country, coverage level, and provider. On average, student health insurance ranges from $500-$1,500 per year in the US, £300-£700 per year in the UK, and CAD 600-900 per year in Canada. Through our partnerships, we can often secure competitive rates for our students.",
    },
    {
      question:
        "Can I use my existing health insurance from India while studying abroad?",
      answer:
        "In most cases, domestic Indian health insurance plans don't provide adequate coverage for international study. While some international plans from Indian providers exist, they often don't meet the specific requirements of host countries or universities. We recommend obtaining insurance that complies with your destination country's requirements.",
    },
    {
      question: "How do I make a claim if I need medical care while abroad?",
      answer:
        "The claim process varies by provider but typically involves visiting an in-network healthcare provider, presenting your insurance card, paying any applicable co-payment, and submitting a claim form with supporting documentation. Many insurers now offer mobile apps for streamlined claims processing. We provide detailed guidance on the claim process for your specific insurance plan.",
    },
  ],
  globalPartners: [
    {
      name: "International Student Insurance",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Comprehensive insurance plans designed specifically for international students worldwide.",
      website: "https://example.com/isi",
    },
    {
      name: "Global Health Protector",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Worldwide health coverage with extensive network of healthcare providers.",
      website: "https://example.com/ghp",
    },
    {
      name: "Student Secure Insurance",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Flexible insurance options with 24/7 multilingual support for students abroad.",
      website: "https://example.com/ssi",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "US Student Health",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized health insurance plans meeting US university and visa requirements.",
          website: "https://example.com/ussh",
        },
        {
          name: "American Campus Care",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Comprehensive health coverage with extensive network of US healthcare providers.",
          website: "https://example.com/acc",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Student Cover",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Insurance plans designed to complement NHS services for international students in the UK.",
          website: "https://example.com/uksc",
        },
        {
          name: "British Health Protect",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Comprehensive private health insurance for international students in the UK.",
          website: "https://example.com/bhp",
        },
      ],
    },
  ],
};

export default function HealthInsurancePage() {
  return <ServicePage data={healthInsuranceData} />;
}
