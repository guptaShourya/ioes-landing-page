import ServicePage from "@/components/service-page";
import { DollarSign } from "lucide-react";

const financialGuidanceData = {
  name: "Financial Guidance",
  slug: "financial-guidance",
  icon: <DollarSign className="h-24 w-24" />,
  shortDescription:
    "Comprehensive advice on budgeting, financial planning, and identifying funding opportunities for your studies.",
  longDescription:
    "Financing your international education is a significant consideration. Our financial guidance service provides comprehensive support to help you understand the costs involved, develop a realistic budget, and identify funding opportunities. We offer personalized advice on scholarships, education loans, part-time work options, and financial planning strategies to make your study abroad journey financially viable and sustainable.",
  benefits: [
    "Detailed breakdown of tuition fees, living expenses, and other costs for your chosen destination",
    "Personalized budget planning based on your financial situation and study destination",
    "Information on scholarship opportunities matching your profile and chosen universities",
    "Guidance on education loan options, including interest rates, repayment terms, and application processes",
    "Advice on part-time work regulations and opportunities in your destination country",
    "Strategies for reducing costs without compromising on educational quality",
    "Currency exchange and international money transfer guidance",
    "Long-term financial planning for your entire study duration",
  ],
  process: {
    title: "Our Financial Guidance Process",
    steps: [
      {
        title: "Financial Assessment",
        description:
          "We evaluate your current financial situation, including available funds, family support, and potential for external funding to understand your financial baseline.",
      },
      {
        title: "Cost Analysis",
        description:
          "We provide a comprehensive breakdown of costs associated with your chosen destination and program, including tuition, living expenses, health insurance, travel, and miscellaneous costs.",
      },
      {
        title: "Funding Gap Identification",
        description:
          "We identify the gap between your available resources and the total cost of education to determine the additional funding needed.",
      },
      {
        title: "Scholarship Matching",
        description:
          "We research and recommend scholarship opportunities that match your academic profile, extracurricular achievements, and chosen universities.",
      },
      {
        title: "Loan Options Exploration",
        description:
          "We provide information about education loan options from various financial institutions, including interest rates, collateral requirements, and repayment terms.",
      },
      {
        title: "Budget Development",
        description:
          "We help you create a realistic budget plan for your entire study duration, including strategies for managing expenses and saving opportunities.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does it typically cost to study abroad?",
      answer:
        "The cost varies significantly depending on the country, city, university, and program. For example, studying in the US typically costs $20,000-$50,000 per year for tuition alone, while countries like Germany offer free or low-cost education. Living expenses range from $8,000-$25,000 per year depending on the location. We provide detailed cost breakdowns for your specific situation during our financial guidance sessions.",
    },
    {
      question:
        "What types of scholarships are available for international students?",
      answer:
        "International students can access various scholarship types including merit-based scholarships (based on academic excellence), need-based scholarships (based on financial need), country-specific scholarships, university-specific scholarships, government scholarships, and organization-sponsored scholarships. Our counselors help identify opportunities that match your specific profile and eligibility criteria.",
    },
    {
      question:
        "Do I need a financial guarantor for my student visa application?",
      answer:
        "Most countries require proof of sufficient funds for your education and living expenses as part of the student visa application process. This often involves showing bank statements, scholarship letters, or a financial guarantor. Requirements vary by country, and we provide specific guidance based on your destination country's regulations.",
    },
    {
      question:
        "Can I work part-time while studying abroad to support my finances?",
      answer:
        "Work regulations for international students vary by country. Most countries allow students to work part-time during the academic year (typically 20 hours per week) and full-time during breaks. We provide detailed information about work rights, restrictions, and typical student wages in your chosen destination.",
    },
    {
      question:
        "How can I reduce the cost of studying abroad without compromising quality?",
      answer:
        "Several strategies can help reduce costs, including choosing universities in smaller cities with lower living costs, applying to countries with lower or no tuition fees, pursuing scholarships aggressively, considering community colleges for the first two years (in the US), and exploring work-study programs. Our counselors can help you develop a personalized cost-reduction strategy.",
    },
  ],
  globalPartners: [
    {
      name: "Global Education Finance",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "International financial institution specializing in education loans for students studying abroad.",
      website: "https://example.com/gef",
    },
    {
      name: "Scholarship Connect",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Global database of scholarships and grants for international students.",
      website: "https://example.com/sc",
    },
    {
      name: "Student Budget Planner",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Digital platform offering budgeting tools and financial education for international students.",
      website: "https://example.com/sbp",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "US Education Finance",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized financial services for students pursuing education in US universities.",
          website: "https://example.com/usef",
        },
        {
          name: "American Scholarship Foundation",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Organization offering scholarships specifically for international students in the US.",
          website: "https://example.com/asf",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Study Finance",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Financial services tailored for international students in the UK.",
          website: "https://example.com/uksf",
        },
        {
          name: "British Education Funding",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Organization providing financial guidance and scholarship information for UK education.",
          website: "https://example.com/bef",
        },
      ],
    },
  ],
};

export default function FinancialGuidancePage() {
  return <ServicePage data={financialGuidanceData} />;
}
