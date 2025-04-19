import ServicePage from "@/components/service-page";
import { Home } from "lucide-react";

const accommodationData = {
  name: "Accommodation",
  slug: "accommodation",
  icon: <Home className="h-24 w-24" />,
  shortDescription:
    "Assistance in finding suitable and affordable accommodation options through our housing partners worldwide.",
  longDescription:
    "Finding the right accommodation is essential for a comfortable and productive study experience abroad. Our accommodation service connects you with trusted housing providers and offers personalized guidance to help you secure safe, convenient, and affordable housing that meets your preferences and budget. From university dormitories to private rentals, we assist you in exploring various options and making informed decisions about your living arrangements.",
  benefits: [
    "Access to a wide range of accommodation options through our global housing partners",
    "Personalized recommendations based on your preferences, budget, and lifestyle",
    "Information about housing locations, amenities, costs, and proximity to campus",
    "Guidance on housing application procedures and documentation requirements",
    "Advice on lease agreements, tenant rights, and responsibilities in different countries",
    "Support with roommate matching and shared accommodation options",
    "Assistance with temporary accommodation for your initial arrival",
    "Ongoing support for housing-related queries or issues during your stay",
  ],
  process: {
    title: "Our Accommodation Assistance Process",
    steps: [
      {
        title: "Housing Needs Assessment",
        description:
          "We discuss your accommodation preferences, budget constraints, lifestyle, and specific requirements to understand your housing needs.",
      },
      {
        title: "Options Research",
        description:
          "We research and present various accommodation options available in your study destination, including on-campus housing, private rentals, and student residences.",
      },
      {
        title: "Comparative Analysis",
        description:
          "We provide detailed information about each option, including location, facilities, costs, lease terms, and proximity to campus to help you make comparisons.",
      },
      {
        title: "Application Guidance",
        description:
          "We assist you with the application process for your chosen accommodation, including form completion, documentation preparation, and communication with housing providers.",
      },
      {
        title: "Lease Review",
        description:
          "We help you understand lease agreements, including terms, conditions, deposit requirements, and tenant responsibilities before you make commitments.",
      },
      {
        title: "Pre-Arrival Arrangements",
        description:
          "We coordinate with housing providers to ensure your accommodation is ready for your arrival and arrange temporary housing if needed.",
      },
    ],
  },
  faqs: [
    {
      question: "When should I start looking for accommodation?",
      answer:
        "We recommend starting your accommodation search 3-6 months before your planned arrival. University housing applications often have early deadlines (sometimes 6-8 months in advance), while private rentals typically become available 2-3 months before the move-in date. Starting early gives you more options and better rates, especially in competitive housing markets.",
    },
    {
      question:
        "What types of accommodation are available for international students?",
      answer:
        "Common options include university dormitories/halls of residence (offering convenience and community), purpose-built student accommodations (offering modern facilities and all-inclusive billing), private rentals (apartments or houses offering independence), homestays (living with local families), and shared accommodations (renting with other students). Each option has different costs, benefits, and application processes.",
    },
    {
      question: "How much should I budget for accommodation?",
      answer:
        "Housing costs vary significantly by country and city. In the US, expect $10,000-$15,000 per academic year for on-campus housing and $8,000-$20,000 for off-campus options. In the UK, costs range from £5,000-£9,000 per year in London and £4,000-£6,000 elsewhere. In Canada, expect CAD 8,000-12,000 annually. We provide detailed cost breakdowns for your specific destination during our consultation.",
    },
    {
      question: "Do I need to pay a security deposit, and is it refundable?",
      answer:
        "Yes, most accommodations require a security deposit, typically equivalent to 1-2 months' rent. This deposit is generally refundable at the end of your stay, provided there is no damage to the property and all contractual obligations are met. Some countries have specific regulations regarding deposit protection and return procedures, which we'll explain for your destination.",
    },
    {
      question: "Can you help me find a roommate or shared accommodation?",
      answer:
        "Yes, we offer roommate matching services through our partner platforms where you can create a profile, specify preferences, and connect with potential roommates. We also provide guidance on shared accommodation options and can help you navigate the process of finding and securing shared housing safely.",
    },
  ],
  globalPartners: [
    {
      name: "Global Student Housing",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Worldwide network of student accommodations with verified listings and secure booking.",
      website: "https://example.com/gsh",
    },
    {
      name: "International Roommate Finder",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Platform connecting international students for shared accommodation opportunities.",
      website: "https://example.com/irf",
    },
    {
      name: "Student Stay Solutions",
      logo: "/placeholder.svg?height=80&width=160",
      description:
        "Comprehensive housing services including temporary and long-term accommodation options.",
      website: "https://example.com/sss",
    },
  ],
  countryPartners: [
    {
      country: "United States",
      partners: [
        {
          name: "American Campus Living",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Specialized off-campus housing options near major US universities.",
          website: "https://example.com/acl",
        },
        {
          name: "US Student Residences",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Network of purpose-built student accommodations across US college towns.",
          website: "https://example.com/usr",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "UK Student Homes",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Verified private and shared accommodations for students across the UK.",
          website: "https://example.com/uksh",
        },
        {
          name: "British University Housing",
          logo: "/placeholder.svg?height=60&width=120",
          description:
            "Direct connections to university-managed and private halls of residence in the UK.",
          website: "https://example.com/buh",
        },
      ],
    },
  ],
};

export default function AccommodationPage() {
  return <ServicePage data={accommodationData} />;
}
