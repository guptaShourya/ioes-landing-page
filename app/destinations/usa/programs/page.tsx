import { CountrySpecificPage } from "@/components/country-specific-page";

const usaStudyProgramsContent = {
  title: "Top Study Programs in the United States",
  description:
    "An overview of the most prestigious and in-demand academic programs for international students in the USA.",
  sections: [
    {
      title: "Business & Economics",
      content: (
        <>
          <p>
            The United States is home to many of the world's top business
            schools and economics programs. MBA programs from institutions like
            Harvard Business School, Stanford GSB, Wharton (UPenn), and MIT
            Sloan are globally recognized for their excellence. These programs
            typically feature case-based learning, extensive networking
            opportunities, and strong industry connections.
          </p>
          <p>
            Undergraduate business degrees are equally prestigious, with schools
            like NYU Stern, UC Berkeley Haas, and the University of Michigan
            Ross offering comprehensive programs that combine core business
            foundations with specializations in finance, marketing,
            entrepreneurship, and international business. Economics programs at
            institutions like Harvard, Chicago, Stanford, and MIT consistently
            rank among the world's best.
          </p>
          <p>
            International students in these programs benefit from experiential
            learning opportunities, including consulting projects with real
            companies, business plan competitions, and internships with leading
            corporations. The strong alumni networks and career services
            provided by top business schools offer exceptional value for career
            advancement globally.
          </p>
        </>
      ),
      image: "/programs/usa-business.webp",
    },
    {
      title: "Engineering",
      content: (
        <>
          <p>
            Engineering education in the US emphasizes innovation,
            problem-solving, and hands-on experience. MIT, Stanford, Caltech,
            Georgia Tech, and UC Berkeley lead global rankings across multiple
            engineering disciplines. Specialized programs in emerging fields
            like artificial intelligence, robotics, sustainable energy, and
            biomedical engineering offer cutting-edge training with world-class
            faculty and research facilities.
          </p>
          <p>
            US engineering programs are known for their strong connections to
            industry, with many incorporating cooperative education ("co-op")
            experiences that allow students to alternate between academic terms
            and paid industry work. Programs like Northeastern University's
            co-op and Purdue's Professional Practice Program provide up to 18
            months of work experience before graduation.
          </p>
          <p>
            Engineering graduates benefit from STEM OPT extensions allowing up
            to 36 months of post-graduation work in the United States. With high
            demand for engineering talent globally, these programs offer
            excellent return on investment and career prospects in industries
            ranging from technology and manufacturing to healthcare and finance.
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
            American legal education is primarily offered at the graduate level
            through the Juris Doctor (J.D.) degree, a three-year program
            required for bar admission and legal practice in the US. Top law
            schools like Harvard, Yale, Stanford, Columbia, and Chicago are
            renowned for their rigorous curriculum, prestigious faculty, and
            powerful alumni networks in government, business, and legal
            practice.
          </p>
          <p>
            For international students not seeking to practice in the US, the
            Master of Laws (LL.M.) provides specialized one-year training in
            areas like international law, intellectual property, business law,
            or human rights. These programs often serve as bridges between
            different legal systems and enhance career prospects in
            international legal practice, academia, or business.
          </p>
          <p>
            American legal education emphasizes the case method, where students
            analyze judicial opinions and participate in Socratic dialogue.
            Clinical programs provide hands-on experience representing real
            clients under faculty supervision. Law journals, moot court
            competitions, and externships with judges or legal organizations
            offer additional professional development opportunities.
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
            Medical education in the United States follows a distinctive
            structure, beginning with a four-year Doctor of Medicine (M.D.) or
            Doctor of Osteopathic Medicine (D.O.) program after completing an
            undergraduate degree. Top medical schools like Johns Hopkins,
            Harvard, Stanford, and UCSF combine biomedical science education
            with early clinical exposure and research opportunities.
          </p>
          <p>
            For international students not pursuing clinical practice in the US,
            alternative pathways include Master's and Ph.D. programs in areas
            like public health, biomedical sciences, health administration, and
            health informatics. The Johns Hopkins Bloomberg School of Public
            Health, Harvard T.H. Chan School of Public Health, and similar
            institutions offer world-class training in these fields.
          </p>
          <p>
            US healthcare education emphasizes evidence-based practice,
            interdisciplinary collaboration, and cutting-edge research. Programs
            typically feature state-of-the-art simulation centers, access to
            leading teaching hospitals, and opportunities to participate in
            groundbreaking clinical trials and research projects that shape
            global healthcare practices.
          </p>
        </>
      ),
      image: "/programs/medical-2.webp",
    },
    {
      title: "Arts & Design",
      content: (
        <>
          <p>
            The United States offers exceptional arts and design education
            across various disciplines. Schools like Rhode Island School of
            Design (RISD), Parsons School of Design, and Pratt Institute lead in
            visual arts and design education. Programs in graphic design,
            industrial design, fashion, and digital media prepare students for
            creative careers in a technology-driven economy.
          </p>
          <p>
            Performing arts training at institutions like Juilliard, Berklee
            College of Music, and NYU Tisch School of the Arts provides
            world-renowned instruction in music, theater, dance, and film. These
            programs combine rigorous technical training with professional
            performance opportunities and exposure to diverse artistic
            traditions and contemporary practices.
          </p>
          <p>
            American arts education emphasizes portfolio development,
            interdisciplinary exploration, and entrepreneurial skills. Many
            programs feature collaborations with industry partners, artist
            residencies, and showcase opportunities that connect students with
            potential employers, galleries, performance venues, and production
            companies. The vibrant arts scenes in cities like New York, Los
            Angeles, and Chicago provide additional resources and networking
            opportunities.
          </p>
        </>
      ),
      image: "/programs/art-6.webp",
    },
    {
      title: "Sciences",
      content: (
        <>
          <p>
            Scientific research and education in the US benefit from substantial
            funding, cutting-edge facilities, and collaborative environments.
            Leading institutions like Caltech, MIT, Stanford, and the University
            of California system offer exceptional programs across physical
            sciences, life sciences, and computational sciences. Research
            opportunities begin at the undergraduate level and expand
            significantly in graduate programs.
          </p>
          <p>
            Emerging fields with strong US leadership include neuroscience,
            genomics, quantum computing, nanoscience, and climate science.
            Graduate programs typically combine coursework with research
            training and often provide funding through research assistantships,
            teaching positions, and fellowships. The completion of original
            research culminating in a thesis or dissertation is central to most
            advanced science degrees.
          </p>
          <p>
            Scientific training in the US emphasizes independent inquiry,
            laboratory skills, and communication of findings through
            publications and presentations. Many programs include industry
            internships or research collaborations with government laboratories
            and private sector R&D departments. Science graduates benefit from
            STEM OPT extensions and strong global demand for their skills in
            research, development, and innovation roles.
          </p>
        </>
      ),
      image: "/programs/research-1.webp",
    },
    {
      title: "Computer Science & Information Technology",
      content: (
        <>
          <p>
            The United States leads global education in computer science and IT,
            with institutions like Stanford, MIT, Carnegie Mellon, UC Berkeley,
            and Georgia Tech consistently ranking among the world's best.
            Programs range from theoretical computer science to applied areas
            like artificial intelligence, machine learning, cybersecurity, cloud
            computing, and human-computer interaction.
          </p>
          <p>
            CS education in the US emphasizes project-based learning, with
            students building software, systems, and applications throughout
            their studies. Many programs incorporate hackathons, programming
            competitions, and industry-sponsored capstone projects. The
            proximity to tech hubs like Silicon Valley, Seattle, Austin, and
            Boston provides unparalleled networking and internship
            opportunities.
          </p>
          <p>
            Computer science graduates enjoy excellent career prospects both in
            the US and globally, with high starting salaries and strong demand
            across industries. The STEM OPT extension allows international
            students up to 36 months of post-graduation work experience in the
            US. Many programs also offer specialized tracks in entrepreneurship
            for students interested in launching their own technology ventures.
          </p>
        </>
      ),
      image: "/programs/it-6.webp",
    },
  ],
};

export default function USAStudyProgramsPage() {
  return (
    <CountrySpecificPage
      country="United States"
      slug="usa"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
      pageType="programs"
      content={usaStudyProgramsContent}
    />
  );
}
