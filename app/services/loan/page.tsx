import { ServicePage } from "@/components/service-page";
import { CreditCard } from "lucide-react";

const loanData = {
  name: "Loan Assistance",
  slug: "loan",
  icon: <CreditCard className="h-24 w-24" />,
  shortDescription:
    "Support in securing education loans through our partner financial institutions with competitive interest rates.",
  longDescription:
    "Financing your education abroad is a significant consideration. Our loan assistance service connects you with trusted financial institutions offering education loans with competitive interest rates and flexible repayment options. We guide you through the entire loan application process, from documentation to disbursement, ensuring a smooth experience.",
  benefits: [
    "Access to multiple loan options from our partner banks and financial institutions",
    "Competitive interest rates and favorable terms for international education loans",
    "Guidance on selecting the most suitable loan option based on your financial situation",
    "Assistance with loan documentation and application process",
    "Support in securing collateral-free loans where eligible",
    "Faster loan processing through our established partnerships",
    "Regular updates on loan application status",
    "Post-disbursement support for any loan-related queries",
  ],
  process: {
    title: "Our Loan Assistance Process",
    steps: [
      {
        title: "Financial Assessment",
        description:
          "Evaluation of your financial requirements and eligibility for various loan options.",
      },
      {
        title: "Loan Options Presentation",
        description:
          "Detailed information about available loan options from our partner institutions, including interest rates, terms, and requirements.",
      },
      {
        title: "Documentation Guidance",
        description:
          "Assistance in preparing and organizing all necessary documents for the loan application.",
      },
      {
        title: "Application Submission",
        description:
          "Support in submitting the loan application to the selected financial institution.",
      },
      {
        title: "Application Follow-up",
        description:
          "Regular follow-ups with the financial institution to track the status of your loan application.",
      },
      {
        title: "Loan Disbursement",
        description:
          "Assistance in completing the final formalities for loan disbursement once approved.",
      },
    ],
  },
  faqs: [
    {
      question: "Is there a fee for your loan assistance service?",
      answer:
        "No, our loan assistance service is completely free of cost. We have partnerships with financial institutions that allow us to provide this service to students without any charges.",
    },
    {
      question: "What types of education loans can I apply for?",
      answer:
        "Through our partner institutions, you can apply for secured loans (with collateral) and unsecured loans (without collateral, subject to eligibility). The loan can cover tuition fees, living expenses, travel costs, and other education-related expenses.",
    },
    {
      question: "What is the maximum loan amount I can get?",
      answer:
        "The maximum loan amount varies depending on the financial institution, your chosen country of study, university, and program. Secured loans typically offer higher amounts compared to unsecured loans.",
    },
    {
      question: "What documents are required for an education loan?",
      answer:
        "Common documents include admission letter, fee structure, academic records, identity proof, address proof, income proof, and collateral documents (for secured loans). We will provide a detailed checklist based on your specific situation.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "The loan approval process typically takes 2-4 weeks, depending on the financial institution and the completeness of your application. Through our partnerships, we strive to expedite the process wherever possible.",
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
      name: "Student Loan International",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Offers flexible loan options with competitive interest rates for international education.",
      website: "https://example.com/sli",
    },
    {
      name: "Education Funding Partners",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Provides collateral-free loans for meritorious students pursuing education abroad.",
      website: "https://example.com/efp",
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
            "Specialized loans for students pursuing education in US universities.",
          website: "https://example.com/usef",
        },
        {
          name: "American Student Loans",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Offers loans with extended repayment periods for US education.",
          website: "https://example.com/asl",
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
            "Tailored loan options for students heading to UK universities.",
          website: "https://example.com/uksf",
        },
        {
          name: "British Education Loans",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Provides loans with favorable terms for UK education expenses.",
          website: "https://example.com/bel",
        },
      ],
    },
    {
      country: "Australia",
      partners: [
        {
          name: "Aussie Education Fund",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized loans for students pursuing education in Australian universities.",
          website: "https://example.com/aef",
        },
        {
          name: "Down Under Finance",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Offers loans with competitive interest rates for Australian education.",
          website: "https://example.com/duf",
        },
      ],
    },
  ],
};

export default function LoanPage() {
  return <ServicePage data={loanData} />;
}
