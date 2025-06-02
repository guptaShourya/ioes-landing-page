export interface Course {
  id: string;
  courseName: string;
  institutionName: string;
  degreeAwarded: string;
  subject: string;
  city: string;
  country: string;
  courseLevel: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
  nextIntake: string;
  intakes: Intake[];
  englishRequirements: EnglishRequirement[];
  description: string;
  highlights: string[];
  careerProspects: string[];
  slug: string;
}

export interface Intake {
  id: string;
  campusName: string;
  fees: number;
  currency: string;
  duration: string;
  startMonth: string;
  startYear: number;
  attendanceType: "Full-time" | "Part-time" | "Online" | "Hybrid";
}

export interface EnglishRequirement {
  testName: string;
  minScore: number;
  maxScore?: number;
  overallScore: number;
}

export const courses: Course[] = [
  {
    id: "1",
    courseName: "Master of Computer Science",
    institutionName: "Stanford University",
    degreeAwarded: "Master of Science (MS)",
    subject: "Computer Science",
    city: "Stanford",
    country: "USA",
    courseLevel: "Postgraduate",
    nextIntake: "Sep 2024",
    slug: "master-computer-science-stanford",
    description:
      "A comprehensive program designed to provide students with advanced knowledge in computer science, including artificial intelligence, machine learning, and software engineering.",
    highlights: [
      "World-renowned faculty",
      "State-of-the-art research facilities",
      "Strong industry connections",
      "Excellent placement record",
    ],
    careerProspects: [
      "Software Engineer",
      "Data Scientist",
      "Research Scientist",
      "Product Manager",
      "AI/ML Engineer",
    ],
    intakes: [
      {
        id: "1-1",
        campusName: "Main Campus",
        fees: 58416,
        currency: "USD",
        duration: "2 years",
        startMonth: "September",
        startYear: 2024,
        attendanceType: "Full-time",
      },
      {
        id: "1-2",
        campusName: "Main Campus",
        fees: 58416,
        currency: "USD",
        duration: "2 years",
        startMonth: "January",
        startYear: 2025,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 7.0,
        maxScore: 9.0,
        overallScore: 7.0,
      },
      {
        testName: "TOEFL",
        minScore: 100,
        maxScore: 120,
        overallScore: 100,
      },
    ],
  },
  {
    id: "2",
    courseName: "Bachelor of Business Administration",
    institutionName: "University of Oxford",
    degreeAwarded: "Bachelor of Arts (BA)",
    subject: "Business Administration",
    city: "Oxford",
    country: "UK",
    courseLevel: "Undergraduate",
    nextIntake: "Oct 2024",
    slug: "bachelor-business-administration-oxford",
    description:
      "A prestigious undergraduate program that combines theoretical knowledge with practical business skills, preparing students for leadership roles in global organizations.",
    highlights: [
      "Historic institution with 900+ years of excellence",
      "Tutorial system for personalized learning",
      "Global alumni network",
      "Internship opportunities with top firms",
    ],
    careerProspects: [
      "Management Consultant",
      "Investment Banker",
      "Business Analyst",
      "Entrepreneur",
      "Marketing Manager",
    ],
    intakes: [
      {
        id: "2-1",
        campusName: "Oxford Campus",
        fees: 39000,
        currency: "GBP",
        duration: "3 years",
        startMonth: "October",
        startYear: 2024,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 7.5,
        maxScore: 9.0,
        overallScore: 7.5,
      },
      {
        testName: "TOEFL",
        minScore: 110,
        maxScore: 120,
        overallScore: 110,
      },
    ],
  },
  {
    id: "3",
    courseName: "Master of Engineering",
    institutionName: "University of Toronto",
    degreeAwarded: "Master of Engineering (MEng)",
    subject: "Engineering",
    city: "Toronto",
    country: "Canada",
    courseLevel: "Postgraduate",
    nextIntake: "Jan 2025",
    slug: "master-engineering-toronto",
    description:
      "An advanced engineering program focusing on innovation, research, and practical application of engineering principles in various industries.",
    highlights: [
      "Top-ranked engineering faculty",
      "Research opportunities",
      "Industry partnerships",
      "Co-op programs available",
    ],
    careerProspects: [
      "Senior Engineer",
      "Project Manager",
      "Research Engineer",
      "Technical Consultant",
      "Engineering Manager",
    ],
    intakes: [
      {
        id: "3-1",
        campusName: "St. George Campus",
        fees: 45000,
        currency: "CAD",
        duration: "1.5 years",
        startMonth: "January",
        startYear: 2025,
        attendanceType: "Full-time",
      },
      {
        id: "3-2",
        campusName: "St. George Campus",
        fees: 45000,
        currency: "CAD",
        duration: "1.5 years",
        startMonth: "September",
        startYear: 2024,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 6.5,
        maxScore: 9.0,
        overallScore: 6.5,
      },
      {
        testName: "TOEFL",
        minScore: 93,
        maxScore: 120,
        overallScore: 93,
      },
    ],
  },
  {
    id: "4",
    courseName: "Bachelor of Medicine",
    institutionName: "University of Melbourne",
    degreeAwarded: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    subject: "Medicine",
    city: "Melbourne",
    country: "Australia",
    courseLevel: "Undergraduate",
    nextIntake: "Mar 2025",
    slug: "bachelor-medicine-melbourne",
    description:
      "A comprehensive medical program that prepares students for careers in healthcare, combining theoretical knowledge with extensive clinical practice.",
    highlights: [
      "World-class medical facilities",
      "Clinical rotations in top hospitals",
      "Research opportunities",
      "Strong graduate employment rate",
    ],
    careerProspects: [
      "Medical Doctor",
      "Specialist Physician",
      "Surgeon",
      "Medical Researcher",
      "Public Health Officer",
    ],
    intakes: [
      {
        id: "4-1",
        campusName: "Parkville Campus",
        fees: 75000,
        currency: "AUD",
        duration: "6 years",
        startMonth: "March",
        startYear: 2025,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 7.0,
        maxScore: 9.0,
        overallScore: 7.0,
      },
      {
        testName: "TOEFL",
        minScore: 102,
        maxScore: 120,
        overallScore: 102,
      },
    ],
  },
  {
    id: "5",
    courseName: "Master of Data Science",
    institutionName: "Technical University of Munich",
    degreeAwarded: "Master of Science (MSc)",
    subject: "Data Science",
    city: "Munich",
    country: "Germany",
    courseLevel: "Postgraduate",
    nextIntake: "Oct 2024",
    slug: "master-data-science-munich",
    description:
      "An interdisciplinary program combining statistics, computer science, and domain expertise to extract insights from complex data sets.",
    highlights: [
      "Industry-relevant curriculum",
      "Strong research focus",
      "Low tuition fees",
      "Excellent job market in Germany",
    ],
    careerProspects: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Research Scientist",
      "Data Engineer",
    ],
    intakes: [
      {
        id: "5-1",
        campusName: "Main Campus",
        fees: 3000,
        currency: "EUR",
        duration: "2 years",
        startMonth: "October",
        startYear: 2024,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 6.5,
        maxScore: 9.0,
        overallScore: 6.5,
      },
      {
        testName: "TOEFL",
        minScore: 88,
        maxScore: 120,
        overallScore: 88,
      },
    ],
  },
  {
    id: "6",
    courseName: "Bachelor of Environmental Science",
    institutionName: "University of Auckland",
    degreeAwarded: "Bachelor of Science (BSc)",
    subject: "Environmental Science",
    city: "Auckland",
    country: "New Zealand",
    courseLevel: "Undergraduate",
    nextIntake: "Feb 2025",
    slug: "bachelor-environmental-science-auckland",
    description:
      "A comprehensive program focusing on environmental issues, sustainability, and conservation, preparing students for careers in environmental protection and research.",
    highlights: [
      "Field work opportunities",
      "Sustainability focus",
      "Beautiful natural environment",
      "Strong environmental sector in NZ",
    ],
    careerProspects: [
      "Environmental Consultant",
      "Conservation Scientist",
      "Environmental Policy Analyst",
      "Sustainability Manager",
      "Research Scientist",
    ],
    intakes: [
      {
        id: "6-1",
        campusName: "City Campus",
        fees: 35000,
        currency: "NZD",
        duration: "3 years",
        startMonth: "February",
        startYear: 2025,
        attendanceType: "Full-time",
      },
      {
        id: "6-2",
        campusName: "City Campus",
        fees: 35000,
        currency: "NZD",
        duration: "3 years",
        startMonth: "July",
        startYear: 2024,
        attendanceType: "Full-time",
      },
    ],
    englishRequirements: [
      {
        testName: "IELTS",
        minScore: 6.0,
        maxScore: 9.0,
        overallScore: 6.0,
      },
      {
        testName: "TOEFL",
        minScore: 80,
        maxScore: 120,
        overallScore: 80,
      },
    ],
  },
];

export const subjects = Array.from(
  new Set(courses.map((course) => course.subject))
).sort();
export const cities = Array.from(
  new Set(courses.map((course) => course.city))
).sort();
export const institutions = Array.from(
  new Set(courses.map((course) => course.institutionName))
).sort();
export const countries = Array.from(
  new Set(courses.map((course) => course.country))
).sort();
