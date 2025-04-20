import { ScholarshipCountryPage } from "@/components/scholarship-country-page";
import {
  Award,
  BookOpen,
  Building,
  DollarSign,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

const usaScholarshipData = {
  country: "United States",
  slug: "usa",
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  overview:
    "The United States offers a wide range of scholarship opportunities for Indian students, making it one of the most financially accessible destinations despite its high tuition costs. From prestigious Fulbright fellowships to university-specific funding, the US scholarship landscape is diverse and substantial. Many scholarships cover not just tuition but also living expenses, health insurance, and travel costs. With proper guidance and preparation, Indian students have excellent chances of securing significant financial support for their US education journey.",
  scholarshipTypes: [
    {
      title: "Government Scholarships",
      icon: <Landmark className="h-10 w-10" />,
      description:
        "Funded by the US government or in partnership with the Indian government, these prestigious scholarships often cover full tuition and living expenses.",
    },
    {
      title: "University Scholarships",
      icon: <Building className="h-10 w-10" />,
      description:
        "Merit-based funding offered directly by US universities, ranging from partial tuition waivers to full-ride scholarships with stipends.",
    },
    {
      title: "Private Foundation Scholarships",
      icon: <Award className="h-10 w-10" />,
      description:
        "Offered by private organizations, corporations, and foundations to support international students based on merit, need, or specific fields of study.",
    },
  ],
  governmentScholarships: [
    {
      name: "Fulbright-Nehru Master's Fellowships",
      provider: "United States-India Educational Foundation (USIEF)",
      amount:
        "Full funding including travel, tuition, living expenses, and health insurance",
      description:
        "The Fulbright-Nehru Master's Fellowships are designed for outstanding Indian students who demonstrate leadership qualities and have at least three years of professional work experience. These prestigious fellowships fund graduate study at select U.S. colleges and universities in a variety of fields.",
      eligibility: [
        "Indian citizenship",
        "At least 3 years of professional work experience",
        "Bachelor's degree with a strong academic record",
        "Demonstrated leadership qualities",
        "TOEFL score of at least 100 (internet-based)",
      ],
      deadline: "May each year",
      website:
        "https://www.usief.org.in/Fulbright-Nehru-Masters-Fellowships.aspx",
    },
    {
      name: "Hubert H. Humphrey Fellowship Program",
      provider: "U.S. Department of State",
      amount:
        "Full funding including tuition, living stipend, health insurance, and travel",
      description:
        "The Humphrey Fellowship Program is a non-degree program that brings accomplished mid-career professionals to the United States for a year of study and professional experiences. The program offers valuable opportunities for professional development through selected university courses, conferences, networking, and practical work experiences.",
      eligibility: [
        "Indian citizenship",
        "Minimum of 5 years of professional experience",
        "Bachelor's degree or equivalent",
        "Demonstrated leadership abilities",
        "Limited or no prior experience in the United States",
      ],
      deadline: "July each year",
      website:
        "https://www.usief.org.in/Hubert-H-Humphrey-Fellowship-Program.aspx",
    },
    {
      name: "Foreign Fulbright Student Program",
      provider: "U.S. Department of State",
      amount:
        "Full funding including tuition, living expenses, and health insurance",
      description:
        "The Foreign Fulbright Student Program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States. The program facilitates cultural exchange through direct interaction on campus, in the classroom, and in the community.",
      eligibility: [
        "Indian citizenship",
        "Excellent academic record",
        "Strong English language proficiency",
        "Leadership potential",
        "Compelling research or study proposal",
      ],
      deadline: "Varies by country, typically May-June for India",
      website: "https://foreign.fulbrightonline.org/",
    },
  ],
  nonGovernmentScholarships: [
    {
      name: "Inlaks Scholarships",
      provider: "Inlaks Shivdasani Foundation",
      amount: "Up to $100,000",
      description:
        "The Inlaks Scholarships provide the opportunity to young Indian students with exceptional talent to broaden their vision abroad and improve their skills to contribute to the development of India. The scholarship covers tuition fees, adequate living expenses, and one-way travel.",
      eligibility: [
        "Indian citizens under 30 years of age",
        "Exceptional academic record",
        "Admission to a top US university",
        "Demonstrated leadership potential",
        "Intent to return to India after studies",
      ],
      deadline: "February each year",
      website: "https://www.inlaksfoundation.org/",
    },
    {
      name: "Stanford Reliance Dhirubhai Fellowship",
      provider: "Stanford Graduate School of Business",
      amount: "Full tuition and associated fees",
      description:
        "The Stanford Reliance Dhirubhai Fellowship provides financial support to Indian students who need assistance in pursuing an MBA at Stanford GSB. The fellowship supports individuals who show promise of becoming leaders who will have a significant impact on development of India and its relationship to the world.",
      eligibility: [
        "Indian citizenship and current residence in India",
        "Completed undergraduate education in India",
        "Maximum of 4 years of full-time work experience",
        "Admitted to Stanford MBA program",
        "Commitment to return to India within 2-3 years post-graduation",
      ],
      deadline: "Aligned with Stanford MBA application deadlines",
      website:
        "https://www.gsb.stanford.edu/programs/mba/financial-aid/international-students",
    },
    {
      name: "The Aga Khan Foundation International Scholarship",
      provider: "Aga Khan Foundation",
      amount: "50% grant, 50% loan",
      description:
        "The Aga Khan Foundation provides a limited number of scholarships each year for postgraduate studies to outstanding students from developing countries who have no other means of financing their studies. The Foundation gives priority to requests for Master's level courses.",
      eligibility: [
        "Excellent academic records",
        "Admission to a highly reputable university/program",
        "Relevant work experience",
        "Demonstrated financial need",
        "Commitment to development of home country",
      ],
      deadline: "March 31 each year",
      website:
        "https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme",
    },
  ],
  universityScholarships: [
    {
      name: "Harvard University Scholarships",
      provider: "Harvard University",
      amount: "Varies, up to full tuition and living expenses",
      description:
        "Harvard University offers need-based scholarships to international students, ensuring that students from all financial backgrounds can attend. The university is committed to meeting 100% of demonstrated financial need for all admitted students.",
      eligibility: [
        "Admission to Harvard University",
        "Demonstrated financial need",
        "Strong academic record",
        "No separate application required for most scholarships",
      ],
      deadline: "Varies by program, aligned with admission deadlines",
      website:
        "https://college.harvard.edu/financial-aid/applying-aid/international-students",
    },
    {
      name: "Columbia University Scholarships",
      provider: "Columbia University",
      amount: "Partial to full tuition",
      description:
        "Columbia University offers a range of scholarships for international students across its various schools and programs. These include merit-based scholarships, need-based grants, and program-specific funding opportunities.",
      eligibility: [
        "Admission to Columbia University",
        "Exceptional academic achievements",
        "Leadership potential",
        "Some scholarships require separate applications",
      ],
      deadline: "Varies by program and scholarship",
      website: "https://www.columbia.edu/content/financial-aid",
    },
    {
      name: "MIT Scholarships",
      provider: "Massachusetts Institute of Technology",
      amount: "Based on financial need, average award $45,000 per year",
      description:
        "MIT is committed to meeting the full demonstrated financial need of all admitted undergraduate students through scholarships, grants, and work opportunities. Graduate funding varies by department and includes fellowships, research assistantships, and teaching assistantships.",
      eligibility: [
        "Admission to MIT",
        "Demonstrated financial need for undergraduates",
        "Academic excellence for graduate fellowships",
        "Research potential for assistantships",
      ],
      deadline: "Aligned with admission application deadlines",
      website:
        "https://sfs.mit.edu/undergraduate-students/types-of-aid/scholarships-grants/",
    },
  ],
  eligibilityCriteria: [
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Most US scholarships require a strong academic record, typically with a minimum GPA of 3.0/4.0 or equivalent (approximately 65-70% in the Indian system).",
    },
    {
      title: "Standardized Test Scores",
      icon: <FileText className="h-6 w-6" />,
      description:
        "Competitive scores in tests like TOEFL (minimum 90-100), IELTS (minimum 6.5-7.0), and GRE/GMAT (above 310 for GRE, above 650 for GMAT) are often required.",
    },
    {
      title: "Leadership Experience",
      icon: <Users className="h-6 w-6" />,
      description:
        "Many US scholarships value leadership roles in extracurricular activities, community service, or professional settings that demonstrate your potential.",
    },
    {
      title: "Research Experience",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        "For graduate scholarships, relevant research experience, publications, or projects in your field of study can significantly strengthen your application.",
    },
    {
      title: "Financial Need",
      icon: <DollarSign className="h-6 w-6" />,
      description:
        "Need-based scholarships require documentation proving financial necessity, including income certificates, bank statements, and details of assets.",
    },
  ],
  applicationProcess: [
    {
      title: "Research Opportunities",
      description:
        "Start by researching US scholarships that match your profile, academic interests, and financial needs. Begin at least 12-18 months before your intended start date.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Prepare for Standardized Tests",
      description:
        "Register for and take required standardized tests (TOEFL/IELTS, GRE/GMAT) well in advance, allowing time for retakes if necessary.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Apply to Universities",
      description:
        "Submit strong applications to US universities, as many scholarships require university admission first. Pay careful attention to application requirements and deadlines.",
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
      title: "Submit Applications",
      description:
        "Complete applications before deadlines, ensuring all requirements are met. Pay attention to specific submission guidelines for each scholarship.",
      icon: <Award className="h-6 w-6" />,
    },
  ],
};

export default function USAScholarshipsPage() {
  return <ScholarshipCountryPage data={usaScholarshipData} />;
}
