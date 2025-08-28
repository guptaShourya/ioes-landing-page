import { CountrySpecificPage } from "@/components/country-specific-page";
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-australia/programs",
    pageKey: "destinations-australia-programs", 
    pathname: "/study-in-australia/programs",
  });
}

const australiaStudyProgramsContent = {
  title: "Top Study Programs in Australia",
  description:
    "An overview of the most prestigious and in-demand academic programs for international students in Australia.",
  sections: [
    {
      title: "Business & Economics",
      content: (
        <>
          <p>
            Australian business education combines academic rigor with practical
            application and a global outlook. The Group of Eight universities,
            particularly the University of Melbourne, University of Sydney,
            Australian National University (ANU), and University of New South
            Wales (UNSW), offer highly regarded business and economics programs
            recognized throughout the Asia-Pacific region and beyond.
          </p>
          <p>
            MBA programs at institutions like Melbourne Business School, AGSM
            (UNSW), and Macquarie Graduate School of Management emphasize
            leadership development, sustainability, and Asia-Pacific business
            perspectives. Specialized Master's programs in finance,
            international business, marketing, and data analytics provide
            focused expertise for global careers.
          </p>
          <p>
            Australian business education benefits from the country's strategic
            position between Asian and Western economies and strong industry
            connections in sectors like mining, finance, agriculture, and
            tourism. Programs often incorporate work-integrated learning through
            internships, industry projects, and case competitions, preparing
            graduates for diverse global business environments.
          </p>
        </>
      ),
      image: "/programs/business-1.webp",
    },
    {
      title: "Engineering",
      content: (
        <>
          <p>
            Engineering education in Australia emphasizes practical skills
            alongside theoretical knowledge, with strong connections to industry
            and research institutions. Leading universities like Monash,
            University of Melbourne, UNSW, and University of Queensland offer
            comprehensive programs across civil, mechanical, electrical,
            chemical, and emerging engineering disciplines.
          </p>
          <p>
            Australian engineering degrees follow either a four-year Bachelor of
            Engineering (Honours) structure or a 3+2 model with a Bachelor's
            degree followed by a Master of Engineering. These programs are
            accredited by Engineers Australia, providing international
            recognition. Australia's resources sector, renewable energy
            initiatives, and infrastructure projects create excellent training
            and career opportunities.
          </p>
          <p>
            Engineering programs often include mandatory industrial experience,
            team-based design projects, and research components. Australia's
            leadership in mining engineering, water management, renewable
            energy, and biomedical engineering provides specialized study paths
            with global relevance. The diverse landscape and environmental
            challenges create unique contexts for engineering practice and
            innovation.
          </p>
        </>
      ),
      image: "/programs/engineering-3.webp",
    },
    {
      title: "Law",
      content: (
        <>
          <p>
            Australian legal education follows two main pathways: the
            undergraduate Bachelor of Laws (LLB), typically completed in four
            years, and the graduate Juris Doctor (JD) for those with prior
            degrees. Top law schools include the University of Melbourne,
            University of Sydney, ANU, UNSW, and Monash University, all known
            for their research output and teaching excellence.
          </p>
          <p>
            Australia's legal system combines British common law traditions with
            distinctive Australian jurisprudence and growing engagement with
            Asian legal systems. This provides a valuable comparative
            perspective for international students. Specialized Master of Laws
            (LLM) programs offer advanced training in areas like international
            law, commercial law, environmental law, and intellectual property.
          </p>
          <p>
            Australian law schools emphasize practical legal skills through moot
            courts, client interviewing competitions, and clinical legal
            education programs. Many offer dual degrees combining law with
            business, international relations, or STEM disciplines. The
            country's growing role in international dispute resolution, trade
            law, and Asia-Pacific legal developments provides relevant contexts
            for legal study.
          </p>
        </>
      ),
      image: "/programs/law-1.webp",
    },
    {
      title: "Medicine & Healthcare",
      content: (
        <>
          <p>
            Medical education in Australia follows either a five to six-year
            undergraduate pathway or a four-year graduate-entry Doctor of
            Medicine (MD) program. Leading institutions include the University
            of Melbourne, University of Sydney, Monash University, and
            University of Queensland. Australian medical qualifications are
            recognized internationally and provide strong foundations in
            clinical practice, research, and public health.
          </p>
          <p>
            Australia offers exceptional training in allied health fields,
            including nursing, physiotherapy, occupational therapy, and
            psychology. The country's universal healthcare system (Medicare) and
            diverse population create rich learning environments for
            understanding healthcare delivery across urban, rural, and remote
            settings, with particular strengths in indigenous health and
            tropical medicine.
          </p>
          <p>
            Public health and health administration programs benefit from
            Australia's globally recognized achievements in disease prevention,
            health promotion, and healthcare system design. The country's
            research strengths in areas like immunology, neuroscience, and
            cancer biology provide opportunities for engaging with cutting-edge
            medical research during educational programs.
          </p>
        </>
      ),
      image: "/programs/medical-3.webp",
    },
    {
      title: "Arts & Design",
      content: (
        <>
          <p>
            Australia offers vibrant arts and design education through
            institutions like the Victorian College of the Arts, National
            Institute of Dramatic Art (NIDA), and RMIT University. These
            programs combine technical training with critical thinking and
            creative development, drawing on both Western traditions and
            Australia's unique cultural landscape, including indigenous
            perspectives and Asia-Pacific influences.
          </p>
          <p>
            Design education encompasses industrial design, communication
            design, digital media, fashion, and architecture, with programs
            emphasizing sustainability, innovation, and cross-disciplinary
            collaboration. Australia's creative industries are supported by
            strong government investment in cultural institutions and
            initiatives, creating rich contexts for learning and professional
            development.
          </p>
          <p>
            Performing arts training through institutions like the Sydney
            Conservatorium of Music, Australian Film Television and Radio
            School, and Western Australian Academy of Performing Arts provides
            world-class instruction in music, theatre, dance, and screen
            production. These programs feature small cohorts, personalized
            mentoring, and professional performance opportunities in Australia's
            dynamic cultural centers.
          </p>
        </>
      ),
      image: "/programs/art-1.webp",
    },
    {
      title: "Sciences",
      content: (
        <>
          <p>
            Scientific research and education in Australia benefit from
            world-class facilities, international collaborations, and unique
            natural environments for field studies. Leading institutions include
            the Australian National University, University of Melbourne,
            University of Sydney, and Monash University, with particular
            strengths in astronomy, quantum physics, environmental science, and
            biological sciences.
          </p>
          <p>
            Australian science degrees typically follow a three-year Bachelor of
            Science structure with options for honours years and
            research-focused Master's programs. The country's distinctive
            ecosystems and geographical isolation have created unique research
            opportunities in fields like marine biology, ecology, agricultural
            science, and geology. Specialized research centers study challenges
            like climate change, water management, and biodiversity
            conservation.
          </p>
          <p>
            Science education emphasizes hands-on laboratory work, field
            studies, and research projects. Australia's location provides
            advantages for astronomy, space science, and geological studies,
            while its marine environments support world-leading research in
            oceanography and marine biology. The country's leadership in areas
            like quantum computing, medical research, and solar energy creates
            exciting contexts for science education at all levels.
          </p>
        </>
      ),
      image: "/programs/research-6.webp",
    },
    {
      title: "Computer Science & Information Technology",
      content: (
        <>
          <p>
            Australia offers excellent computer science and IT education through
            institutions like the University of Melbourne, Australian National
            University, University of Sydney, and UNSW. These programs combine
            theoretical foundations with practical skills development in
            software engineering, artificial intelligence, cybersecurity, data
            science, and human-computer interaction.
          </p>
          <p>
            Australian computer science degrees typically follow a three-year
            structure with honours options and pathways to specialized Master's
            programs. Many universities offer flexible degree structures
            allowing combinations with other disciplines like mathematics,
            engineering, or business. Industry connections are emphasized
            through internships, cooperative education programs, and capstone
            projects with corporate partners.
          </p>
          <p>
            Australia's growing technology sector, particularly in Sydney and
            Melbourne, provides excellent career opportunities in areas like
            financial technology, digital health, educational technology, and
            cybersecurity. The country's strategic focus on digital
            transformation across government and industry creates demand for
            graduates with advanced computing skills and innovative mindsets.
          </p>
        </>
      ),
      image: "/programs/it-1.webp",
    },
  ],
};

export default function AustraliaStudyProgramsPage() {
  return (
    <CountrySpecificPage
      country="Australia"
      slug="australia"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"
      pageType="programs"
      content={australiaStudyProgramsContent}
    />
  );
}
