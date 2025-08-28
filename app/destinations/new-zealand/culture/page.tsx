import { CountrySpecificPage } from "@/components/country-specific-page";
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-new-zealand/culture",
    pageKey: "destinations-new-zealand-culture", 
    pathname: "/study-in-new-zealand/culture",
  });
}

const newZealandCultureContent = {
  title: "Experience New Zealand's Vibrant Culture & Lifestyle",
  description:
    "Discover the unique blend of Māori traditions, outdoor adventures, and relaxed atmosphere that makes New Zealand a welcoming destination for international students.",
  sections: [
    {
      title: "Cultural Diversity",
      content: (
        <>
          <p>
            New Zealand's culture is shaped by its indigenous Māori heritage and
            the influence of European settlers, primarily British, creating a
            unique bicultural foundation. In recent decades, immigration from
            Asia, the Pacific Islands, and around the world has transformed New
            Zealand into an increasingly multicultural society, particularly in
            urban areas like Auckland.
          </p>
          <p>
            This diversity creates a welcoming environment for international
            students, with communities from many different backgrounds
            contributing to New Zealand's cultural landscape. For Indian
            students, there are established Indian communities in major cities,
            with cultural associations, temples, and restaurants that provide
            familiar connections while experiencing New Zealand life.
          </p>
          <p>
            Universities celebrate this diversity through international cultural
            festivals, food fairs, and student associations representing
            different cultural groups.
          </p>
        </>
      ),
      image: "/diversity.webp",
    },
    {
      title: "Māori Culture",
      content: (
        <>
          <p>
            Māori culture is central to New Zealand's identity and offers
            international students a unique cultural experience not found
            elsewhere. The Māori are the indigenous Polynesian people of New
            Zealand (Aotearoa in the Māori language), with a rich heritage of
            traditions, language, arts, and connection to the land.
          </p>
          <p>
            Cultural concepts like manaakitanga (hospitality and kindness to
            others) and kaitiakitanga (guardianship of the environment)
            influence broader New Zealand values. Universities often incorporate
            Māori ceremonies like pōwhiri (formal welcome) during orientation
            and graduation.
          </p>
          <p>
            Experiencing a traditional hāngī (earth oven) feast, visiting a
            marae (meeting ground), or watching a kapa haka (cultural
            performance) are memorable ways to engage with Māori culture during
            your studies.
          </p>
        </>
      ),
      image: "/maori.webp",
    },
    {
      title: "Outdoor Lifestyle",
      content: (
        <>
          <p>
            New Zealand's stunning natural landscapes and favorable climate
            encourage an outdoor lifestyle that's central to the Kiwi way of
            life. From pristine beaches and ancient forests to dramatic
            mountains and geothermal wonders, the country offers endless
            opportunities for outdoor recreation.
          </p>
          <p>
            Cities are designed with green spaces and outdoor activities in
            mind, with abundant parks, walking trails, and public beaches. For
            students, this means plenty of opportunities for weekend adventures,
            from hiking (tramping) and camping to water sports and snow
            activities in winter.
          </p>
          <p>
            Universities often have outdoor clubs that organize trips and
            provide equipment rentals at affordable rates. This outdoor culture
            contributes to the work-life balance that New Zealanders value.
          </p>
        </>
      ),
      image: "/outdoor-cafe.webp",
    },
    {
      title: "Relaxed Social Atmosphere",
      content: (
        <>
          <p>
            New Zealand is known for its relaxed, friendly social atmosphere,
            often described as "laid-back" compared to more formal cultures.
            Kiwis (New Zealanders) tend to be approachable and informal in their
            interactions, with an egalitarian outlook that values people
            regardless of their status or background.
          </p>
          <p>
            This informality extends to the classroom, where relationships
            between students and professors are generally less hierarchical than
            in many Asian countries. Students are encouraged to participate in
            discussions and address professors by their first names.
          </p>
          <p>
            The Kiwi sense of humor, often self-deprecating and understated, is
            another aspect of social interaction that international students
            come to appreciate during their time in New Zealand.
          </p>
        </>
      ),
      image: "/social-atm.webp",
    },
    {
      title: "Food and Dining",
      content: (
        <>
          <p>
            New Zealand cuisine reflects the country's cultural diversity and
            abundance of fresh, high-quality ingredients. Traditional Kiwi foods
            include lamb, seafood, dairy products, and produce, with specialties
            like hangi (Māori earth oven cooking), pavlova (meringue dessert),
            and hokey pokey ice cream.
          </p>
          <p>
            Major cities offer diverse dining options at various price points,
            including many authentic Asian restaurants. Indian food is
            particularly popular, with numerous Indian restaurants in urban
            areas and ingredients for home cooking available in international
            grocery stores.
          </p>
          <p>
            Farmers' markets in most towns provide fresh, local produce at
            reasonable prices. Food costs are moderate by Western standards,
            with a weekly grocery budget of NZD 80-120 for a single person.
          </p>
        </>
      ),
      image: "/food.webp",
    },
    {
      title: "Arts and Entertainment",
      content: (
        <>
          <p>
            New Zealand has a vibrant arts and cultural scene that punches above
            its weight for a country of its size. Major cities like Auckland,
            Wellington, and Christchurch host international arts festivals,
            concerts, theater productions, and film events throughout the year.
          </p>
          <p>
            The country's film industry has gained international recognition
            through directors like Peter Jackson and Taika Waititi, with many
            international productions filmed in New Zealand's diverse
            landscapes.
          </p>
          <p>
            Museums and galleries showcase both Māori and contemporary art, with
            many offering free or discounted student entry. Universities often
            have their own theaters, galleries, and performance spaces, with
            regular events that are free or discounted for students.
          </p>
        </>
      ),
      image: "/entertainment.webp",
    },
    {
      title: "Sports and Recreation",
      content: (
        <>
          <p>
            Sports play a central role in New Zealand culture, with rugby being
            particularly significant—the national team, the All Blacks, are
            world-renowned for both their performance and their pre-game haka
            (Māori war dance). Cricket is also popular, providing a familiar
            connection point for Indian students.
          </p>
          <p>
            Beyond these major sports, New Zealanders participate in a wide
            range of outdoor activities including hiking, mountain biking,
            skiing, surfing, and sailing. University sports are well-organized,
            offering students opportunities to participate in competitive or
            recreational activities.
          </p>
          <p>
            Most universities have excellent sports facilities that are free or
            subsidized for students, encouraging an active lifestyle alongside
            academic pursuits.
          </p>
        </>
      ),
      image: "/cricket.webp",
    },
    {
      title: "Student Life",
      content: (
        <>
          <p>
            New Zealand universities offer a comprehensive student experience
            with numerous clubs, societies, and support services. Student
            associations organize social events, cultural activities, and
            volunteer opportunities that help international students integrate
            into campus life.
          </p>
          <p>
            Orientation weeks at the beginning of each semester include campus
            tours, social events, and information sessions designed to help new
            students adjust to university life. Most universities have dedicated
            international student support offices that assist with everything
            from accommodation and academic issues to cultural adjustment and
            immigration matters.
          </p>
          <p>
            For Indian students, many universities have Indian student
            associations that organize cultural celebrations like Diwali and
            Holi, providing a support network and connection to familiar
            traditions.
          </p>
        </>
      ),
      image: "/student-life.webp",
    },
  ],
};

export default function NewZealandCulturePage() {
  return (
    <CountrySpecificPage
      country="New Zealand"
      slug="new-zealand"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg"
      pageType="culture"
      content={newZealandCultureContent}
    />
  );
}
