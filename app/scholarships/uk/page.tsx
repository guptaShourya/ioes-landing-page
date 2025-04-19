import { ScholarshipCountryPage } from "@/components/scholarship-country-page";
import {
  Award,
  BookOpen,
  Building,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

const ukScholarshipData = {
  country: "United Kingdom",
  slug: "uk",
  flag: "/placeholder.svg?height=30&width=50",
  heroImage: "/placeholder.svg?height=600&width=1200",
  overview:
    "The United Kingdom offers numerous prestigious scholarship opportunities for Indian students, making it an attractive destination for higher education. From the renowned Chevening Scholarships to the Commonwealth Scholarships and various university-specific awards, the UK provides substantial financial support options. These scholarships often cover tuition fees, living expenses, travel costs, and other allowances. With the UK's shorter degree programs (typically one year for Master's), scholarships can make studying in the UK both academically rewarding and financially viable for Indian students.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Prestigious awards funded by the UK government, such as Chevening and Commonwealth Scholarships, offering comprehensive funding packages for Indian students.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based funding offered directly by UK universities, ranging from partial fee waivers to full scholarships covering tuition and living expenses.",
    },
    {
      title: "Research Scholarships",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Funding opportunities for research students (PhD) including stipends, tuition coverage, and research support provided by research councils and universities.",
    },
  ],
  governmentScholarships: [
    {
      name: "Chevening Scholarships",
      provider:
        "UK Government's Foreign, Commonwealth & Development Office (FCDO)",
      amount:
        "Full funding including tuition fees, living expenses, travel costs, and other allowances",
      description:
        "Chevening Scholarships are the UK government's global scholarship program, funded by the FCDO and partner organizations. The program offers awards to outstanding professionals with leadership potential to study for a one-year master's degree at any UK university.",
      eligibility: [
        "Indian citizenship",
        "Minimum 2 years of work experience",
        "Bachelor's degree equivalent to UK 2:1 honors",
        "Meet English language requirements",
        "Return to India for at least 2 years after the scholarship",
      ],
      deadline: "November each year",
      website: "https://www.chevening.org/",
    },
    {
      name: "Commonwealth Scholarships",
      provider: "Commonwealth Scholarship Commission in the UK",
      amount:
        "Full funding including tuition fees, living allowance, travel costs, and other allowances",
      description:
        "Commonwealth Scholarships enable students from Commonwealth countries to pursue Master's and PhD study in the UK. These scholarships aim to contribute to the UK's international development aims and wider overseas interests, supporting excellence in UK higher education and sustaining the principles of the Commonwealth.",
      eligibility: [
        "Indian citizenship and permanent residence in India",
        "Bachelor's degree with at least upper second class (2:1) honors",
        "Unable to afford to study in the UK without this scholarship",
        "Commitment to development in home country",
      ],
      deadline: "October-December each year",
      website: "https://cscuk.fcdo.gov.uk/scholarships/",
    },
    {
      name: "GREAT Scholarships",
      provider: "British Council and UK Universities",
      amount: "£10,000 towards tuition fees for a one-year master's program",
      description:
        "The GREAT Scholarships program offers Indian students the opportunity to undertake postgraduate study in the UK. The scholarships are jointly funded by the UK government's GREAT Britain Campaign and participating UK universities.",
      eligibility: [
        "Indian citizenship",
        "Completed all components of an undergraduate degree",
        "Meet the entry requirements of the UK university",
        "Meet English language requirements",
      ],
      deadline: "Varies by university, typically January-May",
      website:
        "https://study-uk.britishcouncil.org/scholarships/great-scholarships",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Charles Wallace India Trust Scholarships",
      provider: "Charles Wallace India Trust",
      amount:
        "Varies by program, typically covers living expenses and some study costs",
      description:
        "The Charles Wallace India Trust offers scholarships to Indian students and professionals in the early or middle stages of their careers. The trust supports a wide range of academic fields, particularly in the arts, heritage conservation, and humanities.",
      eligibility: [
        "Indian citizenship and residence",
        "Age between 25-38 years (with some exceptions)",
        "Relevant academic or professional experience",
        "Acceptance at a UK institution",
        "Intention to return to India after studies",
      ],
      deadline: "Varies by program, typically November-February",
      website: "https://www.wallace-trusts.org.uk/cwit_india/",
    },
    {
      name: "Inlaks Scholarships",
      provider: "Inlaks Shivdasani Foundation",
      amount: "Up to £100,000",
      description:
        "The Inlaks Scholarships provide the opportunity to young Indian students with exceptional talent to broaden their vision abroad and improve their skills to contribute to the development of India. The scholarship covers tuition fees, adequate living expenses, and one-way travel.",
      eligibility: [
        "Indian citizens under 30 years of age",
        "Exceptional academic record",
        "Admission to a top UK university",
        "Demonstrated leadership potential",
        "Intent to return to India after studies",
      ],
      deadline: "February each year",
      website: "https://www.inlaksfoundation.org/",
    },
    {
      name: "Dr. Manmohan Singh Scholarships",
      provider: "St. John's College, University of Cambridge",
      amount:
        "Full funding including tuition fees, living expenses, and travel costs",
      description:
        "The Dr. Manmohan Singh Scholarships were established to encourage academically outstanding Indian students to come to St. John's College, University of Cambridge to study for doctoral degrees in subjects like Science & Technology, Economics, and Social Sciences.",
      eligibility: [
        "Indian citizenship and residence",
        "Exceptional academic record",
        "Admission to a PhD program at St. John's College, Cambridge",
        "Preference for applicants under 35 years of age",
      ],
      deadline: "December each year",
      website: "https://www.joh.cam.ac.uk/dr-manmohan-singh-scholarships",
    },
  ],
  universityScholarships: [
    {
      name: "Oxford and Cambridge India Scholarships",
      provider: "University of Oxford and University of Cambridge",
      amount: "Varies, partial to full funding",
      description:
        "Both Oxford and Cambridge offer various scholarships specifically for Indian students, including the Oxford India Centre scholarships at Oxford and the Cambridge India Scholarships at Cambridge. These prestigious awards support outstanding Indian students pursuing various degree programs.",
      eligibility: [
        "Indian citizenship",
        "Admission to Oxford or Cambridge University",
        "Exceptional academic record",
        "Meeting specific criteria for individual scholarship schemes",
      ],
      deadline:
        "January each year, aligned with university application deadlines",
      website:
        "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/fees-funding-and-scholarship-search",
    },
    {
      name: "Imperial College London India Scholarships",
      provider: "Imperial College London",
      amount: "£10,000-£20,000 towards tuition fees",
      description:
        "Imperial College London offers several scholarships specifically for Indian students across various departments. These merit-based scholarships aim to attract the brightest minds from India to pursue undergraduate and postgraduate studies at Imperial.",
      eligibility: [
        "Indian citizenship",
        "Admission to Imperial College London",
        "Outstanding academic achievement",
        "Some scholarships require separate applications",
      ],
      deadline: "Varies by program, typically January-March",
      website:
        "https://www.imperial.ac.uk/study/fees-and-funding/scholarships/",
    },
    {
      name: "University of Edinburgh India Scholarships",
      provider: "University of Edinburgh",
      amount: "£5,000-£10,000 per year",
      description:
        "The University of Edinburgh offers several scholarship programs for Indian students, including the Edinburgh Global Scholarships and India-specific awards. These scholarships are available for both undergraduate and postgraduate study across various disciplines.",
      eligibility: [
        "Indian citizenship",
        "Admission to the University of Edinburgh",
        "Strong academic background",
        "Meeting specific criteria for individual scholarship schemes",
      ],
      deadline: "Varies by program, typically February-May",
      website:
        "https://www.ed.ac.uk/student-funding/postgraduate/international/region/asia/india",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most UK scholarships require a strong academic record, typically with a minimum of 60-70% in your highest qualification, with prestigious scholarships often requiring 75% or higher.",
    },
    {
      title: "English Proficiency",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        "Competitive scores in English language tests like IELTS (typically 6.5-7.5 overall) or equivalent are required for most UK scholarships.",
    },
    {
      title: "Work Experience",
      icon: <Building className="h-6 w-6" />,
      description:
        "Many UK scholarships, especially Chevening, require 2-3 years of relevant work experience that demonstrates your career progression and leadership potential.",
    },
    {
      title: "Leadership Potential",
      icon: <Users className="h-6 w-6" />,
      description:
        "Evidence of leadership skills through professional achievements, community involvement, or extracurricular activities is highly valued by UK scholarship committees.",
    },
    {
      title: "Career Plan",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        'A clear vision of how your UK education will contribute to your career goals and how you "A clear vision of how your UK education will contribute to your career goals and how you plan to use your knowledge and skills to benefit India upon your return is essential for many UK scholarships.',
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Start by researching UK scholarships that match your profile, academic interests, and financial needs. Begin at least 12-18 months before your intended start date.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Prepare for English Tests",
      description:
        "Register for and take required English language tests (IELTS/TOEFL) well in advance, allowing time for retakes if necessary to achieve competitive scores.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Apply to Universities",
      description:
        "Submit strong applications to UK universities, as many scholarships require university admission first. Pay careful attention to application requirements and deadlines.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Prepare Scholarship Applications",
      description:
        "Gather required documents including transcripts, test scores, recommendation letters, statement of purpose, CV/resume, and financial documents.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Write Compelling Essays",
      description:
        "Craft thoughtful, personalized essays that highlight your achievements, goals, and why you deserve the scholarship. Tailor each essay to the specific scholarship.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Prepare for Interviews",
      description:
        "If shortlisted, prepare thoroughly for interviews by researching common questions, practicing your responses, and being ready to discuss your goals and motivations.",
      icon: <Award className="h-6 w-6" />,
    },
  ],
};

export default function UKScholarshipsPage() {
  return <ScholarshipCountryPage data={ukScholarshipData} />;
}
