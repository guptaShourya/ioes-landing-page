import { CountrySpecificPage } from "@/components/country-specific-page";

const canadaCultureContent = {
  title: "Experience Canadian Campus Life and Culture",
  description:
    "Discover the vibrant and diverse cultural experience that awaits you as an international student in Canada.",
  sections: [
    {
      title: "Multicultural Environment",
      content: (
        <>
          <p>
            Canada is renowned for its multicultural society and welcoming
            attitude toward international students and immigrants. As one of the
            world's most diverse countries, Canada embraces cultural differences
            and celebrates diversity in all aspects of life.
          </p>
          <p>
            In Canadian universities, you'll study alongside students from
            around the world, creating a rich international learning
            environment. This diversity extends beyond campus into cities and
            communities, offering authentic global experiences without leaving
            the country.
          </p>
          <p>
            Cultural festivals, ethnic neighborhoods, and international cuisine
            are integral parts of Canadian life, allowing you to experience
            global cultures while forming your own unique Canadian experience.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Campus Life and Community",
      content: (
        <>
          <p>
            Canadian universities offer vibrant campus communities with numerous
            opportunities for involvement and personal growth. Student
            associations, clubs, and organizations cater to diverse interests,
            from academic and professional development to cultural, artistic,
            and recreational pursuits.
          </p>
          <p>
            International student services provide specialized support,
            including orientation programs, language assistance, cultural
            adjustment workshops, and social events designed to help you connect
            with fellow students and adapt to Canadian life.
          </p>
          <p>
            Many universities offer on-campus housing options, particularly for
            first-year students, creating a supportive community environment.
            Residence life programs organize social activities, educational
            events, and community-building initiatives to enhance your campus
            experience.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Outdoor Lifestyle",
      content: (
        <>
          <p>
            Canada's stunning natural landscapes provide the backdrop for an
            active outdoor lifestyle throughout the year. From the Rocky
            Mountains to the Atlantic coastline, Canada offers endless
            opportunities for outdoor recreation and adventure.
          </p>
          <p>
            Winter activities are a significant part of Canadian culture, with
            skiing, snowboarding, ice skating, and hockey being popular
            pastimes. Universities often organize ski trips, outdoor excursions,
            and winter festivals to help students embrace the snowy season.
          </p>
          <p>
            During warmer months, hiking, camping, canoeing, and exploring
            national parks become favorite activities. Many universities have
            outdoor recreation clubs that organize trips and provide equipment
            rentals, making it easy for international students to experience
            Canada's natural beauty.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Canadian Values and Social Norms",
      content: (
        <>
          <p>
            Canadian society is characterized by values of politeness, respect,
            and inclusivity. Canadians are generally known for being friendly,
            helpful, and apologetic (the stereotype about saying "sorry"
            frequently has some truth to it!).
          </p>
          <p>
            Equality and respect for diversity are fundamental Canadian values,
            reflected in policies and social attitudes. Canada was one of the
            first countries to legalize same-sex marriage and has strong
            anti-discrimination laws protecting various aspects of identity.
          </p>
          <p>
            Environmental consciousness is also important in Canadian culture,
            with recycling programs, conservation efforts, and sustainable
            practices being widely embraced both on and off campus.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Food and Dining Culture",
      content: (
        <>
          <p>
            Canadian cuisine reflects the country's multicultural heritage, with
            influences from Indigenous, French, British, and various immigrant
            traditions. Iconic Canadian foods include maple syrup, poutine
            (French fries with cheese curds and gravy), butter tarts, and
            Nanaimo bars.
          </p>
          <p>
            Major cities offer diverse international dining options, making it
            easy to find familiar foods from your home country or explore new
            cuisines. Farmers' markets are popular in many communities, offering
            fresh local produce and artisanal food products.
          </p>
          <p>
            Campus dining has evolved to include diverse options catering to
            various dietary preferences and restrictions. Most universities
            offer meal plans for on-campus students, with options ranging from
            all-you-can-eat dining halls to food courts with multiple vendors.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Arts, Entertainment, and Nightlife",
      content: (
        <>
          <p>
            Canada has a vibrant arts and cultural scene, with world-class
            museums, galleries, theaters, and music venues in major cities. Many
            cultural institutions offer student discounts, making arts and
            entertainment accessible on a student budget.
          </p>
          <p>
            Canadian cities offer diverse nightlife options, from casual pubs
            and sports bars to dance clubs and live music venues. The legal
            drinking age is 19 in most provinces (18 in Alberta, Manitoba, and
            Quebec), and campus pubs are common social hubs at many
            universities.
          </p>
          <p>
            Festivals are an important part of Canadian cultural life, with
            events celebrating film, music, literature, food, and various
            cultural traditions throughout the year. Major events include the
            Toronto International Film Festival, Montreal Jazz Festival, Calgary
            Stampede, and numerous winter carnivals.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function CanadaCulturePage() {
  return (
    <CountrySpecificPage
      country="Canada"
      slug="canada"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg"
      pageType="culture"
      content={canadaCultureContent}
    />
  );
}
