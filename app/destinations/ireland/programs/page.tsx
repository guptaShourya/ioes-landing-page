import { CountrySpecificPage } from "@/components/country-specific-page";

const irelandStudyProgramsContent = {
  title: "Top Study Programs in Ireland",
  description:
    "Explore Ireland’s most popular programs and what makes them ideal for international students.",
  sections: [
    {
      title: "Business & Management",
      content: (
        <>
          <p>
            Ireland is home to some of Europe’s leading business schools,
            including Trinity Business School, UCD Smurfit, and University of
            Limerick. Programs are globally recognized and often include
            internships or consulting projects with local firms.
          </p>
          <p>
            Specializations in finance, marketing, HRM, and international
            business are common. The focus on practical skills, innovation, and
            EU/global markets makes these programs highly employable.
          </p>
        </>
      ),
      image: "/programs/business-3.webp",
    },
    {
      title: "Computer Science & IT",
      content: (
        <>
          <p>
            Ireland’s booming tech sector — with giants like Google, Meta, and
            Apple — supports top-quality computer science programs. Universities
            like Trinity College Dublin, UCD, and DCU offer strong theoretical
            and applied learning.
          </p>
          <p>
            Popular areas include data science, artificial intelligence, cloud
            computing, and cybersecurity. Many courses feature industry
            placements, and graduates have high job placement rates.
          </p>
        </>
      ),
      image: "/programs/it-3.webp",
    },
    {
      title: "Engineering",
      content: (
        <>
          <p>
            From civil to software, Ireland offers engineering programs aligned
            with modern industry needs. Courses focus on sustainability,
            robotics, biomedical devices, and renewable energy.
          </p>
          <p>
            Universities like NUIG, UCD, and University of Limerick combine
            lab-based learning with co-ops or placements. Programs are
            accredited by Engineers Ireland, ensuring global recognition.
          </p>
        </>
      ),
      image: "/programs/engineering-1.webp",
    },
    {
      title: "Law",
      content: (
        <>
          <p>
            Irish law schools such as Trinity and UCD offer LL.B. and LL.M.
            programs focused on EU, commercial, and international law. Courses
            emphasize analytical thinking and include moot courts and
            internships.
          </p>
          <p>
            Students benefit from Ireland’s common law system, which is
            compatible with UK and US legal frameworks, and a growing demand for
            legal professionals in tech and finance sectors.
          </p>
        </>
      ),
      image: "/programs/law-3.webp",
    },
    {
      title: "Sciences",
      content: (
        <>
          <p>
            Ireland is strong in biotechnology, environmental science, and
            pharmaceutical research. Programs emphasize lab skills and research
            training.
          </p>
          <p>
            Institutions like UCC, Maynooth, and RCSI collaborate with industry
            and EU bodies, offering good pathways to PhDs and jobs in Ireland’s
            growing life sciences sector.
          </p>
        </>
      ),
      image: "/programs/research-3.webp",
    },
    {
      title: "Medicine & Healthcare",
      content: (
        <>
          <p>
            Medical schools like RCSI, UCD, and Trinity attract global students.
            MB, BCh, BAO degrees (undergrad-entry) are popular, and programs are
            globally recognized.
          </p>
          <p>
            Nursing, physiotherapy, pharmacy, and public health are also strong
            options. Clinical rotations are well-integrated into teaching
            hospitals.
          </p>
        </>
      ),
      image: "/programs/medical-1.webp",
    },
    {
      title: "Arts & Humanities",
      content: (
        <>
          <p>
            Ireland’s rich cultural and literary legacy makes it ideal for
            literature, history, philosophy, and media studies. Programs are
            research-rich and emphasize critical thinking.
          </p>
          <p>
            Students can explore Irish and global perspectives, often with
            interdisciplinary options. Trinity College and UCD are top picks.
          </p>
        </>
      ),
      image: "/programs/art-3.webp",
    },
  ],
};

export default function IrelandStudyProgramsPage() {
  return (
    <CountrySpecificPage
      country="Ireland"
      slug="ireland"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg"
      pageType="programs"
      content={irelandStudyProgramsContent}
    />
  );
}
