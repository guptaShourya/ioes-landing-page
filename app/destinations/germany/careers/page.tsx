import { CountrySpecificPage } from "@/components/country-specific-page";

const germanyCareerOptionsContent = {
  title: "Career Opportunities in Germany",
  description:
    "Uncover promising career pathways in Germany’s high-tech, export-driven economy — ideal for international graduates and professionals looking to thrive in Europe’s economic powerhouse.",
  sections: [
    {
      title: "Engineering & Advanced Manufacturing",
      content: (
        <>
          <p>
            Germany’s global reputation as an engineering and manufacturing
            leader makes it a top destination for professionals in mechanical,
            automotive, electrical, and industrial engineering. With companies
            like Siemens, Bosch, BMW, and Volkswagen, opportunities abound in
            automation, robotics, Industry 4.0, and sustainable mobility.
          </p>
          <p>
            Cities like Stuttgart, Munich, and Wolfsburg are engineering hubs,
            while new opportunities emerge in renewable energy systems and
            additive manufacturing. Many roles qualify for the EU Blue Card or
            Germany’s Skilled Workers Immigration Act.
          </p>
          <p>
            Professional registration isn’t always required, but German language
            skills significantly enhance employability. International engineers
            are increasingly welcomed, particularly in high-demand areas like
            energy systems, embedded software, and quality assurance.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Information Technology & Digital Innovation",
      content: (
        <>
          <p>
            Germany's digital sector is rapidly expanding, with Berlin, Munich,
            and Hamburg leading in software development, cybersecurity, AI,
            fintech, and digital health. Startups, SMEs, and corporations alike
            offer roles for developers, data scientists, IT security experts,
            and DevOps professionals.
          </p>
          <p>
            Many IT roles are on Germany’s shortage occupation list, making it
            easier for international professionals to secure visas and work
            permits. Remote-friendly policies and flexible work cultures are
            common in the tech scene.
          </p>
          <p>
            While English-speaking roles are common in tech startups and
            multinational firms, German fluency can expand access to
            client-facing and government-sector roles. The sector also values
            certifications (AWS, Azure, CISSP, etc.) and agile development
            experience.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Healthcare & Life Sciences",
      content: (
        <>
          <p>
            Germany's robust healthcare system offers demand-driven
            opportunities for doctors, nurses, physiotherapists, and other
            health professionals. The country actively recruits international
            talent to address shortages, especially in eldercare and rural
            healthcare delivery.
          </p>
          <p>
            Medical professionals must undergo a qualification recognition
            process and achieve German language proficiency (often B2 or
            higher). Once registered, they gain access to long-term employment,
            integration support, and strong job security.
          </p>
          <p>
            Germany is also a hub for pharmaceutical and biotechnology research,
            with career paths in clinical trials, bioinformatics, and regulatory
            affairs. Key hubs include Heidelberg, Frankfurt, and Leipzig, often
            clustered around leading research universities and hospitals.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Finance & Business Services",
      content: (
        <>
          <p>
            Frankfurt, as Europe’s financial capital, anchors Germany’s finance
            sector. The city is home to the European Central Bank, Deutsche
            Bank, and many global firms. Career opportunities span investment
            banking, insurance, accounting, risk management, and compliance.
          </p>
          <p>
            Berlin and Munich also host a growing fintech ecosystem, with roles
            in digital banking, payments, and financial analytics. Multinational
            companies seek international professionals for corporate finance and
            strategic planning roles, especially those fluent in both English
            and German.
          </p>
          <p>
            Germany offers visa routes for skilled finance professionals,
            particularly those with international experience and certifications
            (e.g. CFA, ACCA). Professionals with a grasp of EU financial
            regulations, ESG reporting, and fintech trends are in high demand.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Renewable Energy & Sustainability",
      content: (
        <>
          <p>
            As a global leader in the energy transition (Energiewende), Germany
            offers strong career prospects in renewable energy, sustainable
            building, and environmental technology. Wind, solar, and hydrogen
            sectors are expanding, alongside sustainable urban planning and
            e-mobility infrastructure.
          </p>
          <p>
            Engineers, scientists, and project managers with experience in green
            technology, life cycle analysis, and circular economy principles are
            especially sought after. The German government’s climate goals drive
            consistent investment into sustainable development.
          </p>
          <p>
            International professionals benefit from favorable immigration
            policies for green sectors, with added opportunities in policy,
            consulting, and R&D roles. Fluency in German is often required for
            regulatory and public-facing positions.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Academic Research & Higher Education",
      content: (
        <>
          <p>
            Germany’s world-class research institutions and tuition-free public
            universities attract global academic talent. Research careers span
            universities, Max Planck Institutes, Helmholtz centers, and applied
            science universities (Fachhochschulen).
          </p>
          <p>
            Many roles are available in English, especially at postgraduate and
            doctoral levels. Germany participates in EU research initiatives
            like Horizon Europe, with strong funding support for
            interdisciplinary and innovation-driven research.
          </p>
          <p>
            The German Academic Exchange Service (DAAD) provides pathways for
            international scholars. Career progression often requires grant
            acquisition success, teaching experience, and German language
            proficiency for long-term roles.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Logistics & Automotive Industry",
      content: (
        <>
          <p>
            Germany’s central location in Europe makes it a logistics
            powerhouse. With companies like DHL, DB Schenker, and BMW’s global
            supply chains, careers in supply chain management, operations
            research, and transportation technology are plentiful.
          </p>
          <p>
            The automotive industry remains a cornerstone of Germany’s economy,
            now shifting toward electric vehicles and autonomous driving.
            Engineers, supply chain experts, and software professionals are
            integral to this transformation.
          </p>
          <p>
            Many automotive firms operate in English-friendly environments, but
            proficiency in German is valuable for integration and career
            advancement. International professionals benefit from Germany’s
            focus on high-precision manufacturing and efficient logistics
            systems.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function GermanyCareerOptionsPage() {
  return (
    <CountrySpecificPage
      country="Germany"
      slug="germany"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
      pageType="careers"
      content={germanyCareerOptionsContent}
    />
  );
}
