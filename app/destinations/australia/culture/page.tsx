import { CountrySpecificPage } from "@/components/country-specific-page";
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-australia/culture",
    pageKey: "destinations-australia-culture", 
    pathname: "/study-in-australia/culture",
  });
}

const australiaCultureContent = {
  title: "Experience Australia's Vibrant Culture & Lifestyle",
  description:
    "Discover the unique blend of multicultural influences, outdoor living, and friendly atmosphere that makes Australia a welcoming destination for international students.",
  sections: [
    {
      title: "Multicultural Society",
      content: (
        <>
          <p>
            Australia is one of the world's most culturally diverse nations,
            with over 30% of its population born overseas. This multicultural
            environment creates a welcoming atmosphere for international
            students, with communities from all corners of the globe
            contributing to Australia's rich cultural tapestry.
          </p>
          <p>
            In major cities like Sydney and Melbourne, you'll find vibrant
            ethnic neighborhoods, cultural festivals, and restaurants serving
            authentic cuisine from around the world. This diversity means Indian
            students often find it easy to connect with their own cultural
            communities while experiencing the broader Australian way of life.
          </p>
          <p>
            Universities celebrate this diversity through cultural events,
            international student associations, and festivals that foster
            cross-cultural understanding and inclusivity.
          </p>
        </>
      ),
      image: "/diversity.webp",
    },
    {
      title: "Laid-back Lifestyle",
      content: (
        <>
          <p>
            Australians are known for their relaxed, friendly approach to life,
            often summarized by the phrase "no worries." The work-life balance
            is highly valued, with emphasis placed on leisure time, outdoor
            activities, and social connections.
          </p>
          <p>
            This laid-back attitude extends to the classroom, where
            relationships between students and professors tend to be less formal
            than in many Asian countries. Students are encouraged to participate
            actively in discussions and to address professors by their first
            names.
          </p>
          <p>
            While this informality might take some adjustment for Indian
            students, it creates an open learning environment that encourages
            critical thinking and creativity.
          </p>
        </>
      ),
      image: "/social-atm.webp",
    },
    {
      title: "Outdoor Living",
      content: (
        <>
          <p>
            Australia's favorable climate and stunning natural landscapes
            encourage an outdoor lifestyle that's central to the Australian
            identity. From world-famous beaches to lush rainforests and the
            iconic Outback, the country offers endless opportunities for outdoor
            recreation.
          </p>
          <p>
            Cities are designed with outdoor living in mind, featuring abundant
            parks, outdoor cafes, and public spaces. For students, this means
            plenty of opportunities for weekend adventures, from surfing and
            hiking to barbecues in local parks.
          </p>
          <p>
            Universities often have outdoor study areas and campus grounds where
            students can relax between classes, making the educational
            experience more pleasant and balanced.
          </p>
        </>
      ),
      image: "/outdoor-cafe.webp",
    },
    {
      title: "Sports Culture",
      content: (
        <>
          <p>
            Sports play a central role in Australian culture, with cricket,
            Australian Rules Football (AFL), rugby, soccer, and swimming being
            particularly popular. University sports are well-organized, offering
            students opportunities to participate in competitive or recreational
            activities.
          </p>
          <p>
            For Indian students, cricket provides a familiar connection point
            with locals, as both countries share a passion for the sport.
            Attending a cricket match or AFL game is a quintessential Australian
            experience that helps international students understand the local
            culture.
          </p>
          <p>
            Many universities have excellent sports facilities that are free or
            subsidized for students, encouraging an active lifestyle alongside
            academic pursuits.
          </p>
        </>
      ),
      image: "/cricket.webp",
    },
    {
      title: "Food and Dining Culture",
      content: (
        <>
          <p>
            Australian cuisine reflects the country's multicultural heritage,
            with influences from Indigenous, European, Asian, and Middle Eastern
            traditions. Fresh seafood, quality meats, and locally grown produce
            feature prominently.
          </p>
          <p>
            Major cities offer diverse dining options at various price points,
            including many authentic Indian restaurants. The café culture is
            particularly strong, with excellent coffee available everywhere from
            sophisticated urban cafés to small neighborhood shops.
          </p>
          <p>
            Communal dining experiences like barbecues (or "barbies") are
            popular social activities. For budget-conscious students, university
            campuses typically offer affordable food options, and many
            apartments come with cooking facilities, allowing students to
            prepare their own meals.
          </p>
        </>
      ),
      image: "/food.webp",
    },
    {
      title: "Festivals and Events",
      content: (
        <>
          <p>
            Throughout the year, Australia hosts numerous festivals and events
            celebrating everything from arts and culture to food and sports.
            Major events include the Sydney Festival, Melbourne International
            Comedy Festival, Adelaide Fringe, and various cultural celebrations
            reflecting Australia's diverse population.
          </p>
          <p>
            Notably, many cities host Diwali and Holi celebrations, helping
            Indian students feel connected to their cultural traditions.
            Universities organize orientation weeks, cultural events, and
            end-of-semester celebrations that help international students build
            social connections.
          </p>
          <p>
            These events often showcase Australia's multicultural character and
            provide opportunities for students to experience different aspects
            of Australian and global cultures.
          </p>
        </>
      ),
      image: "/au-culture.webp",
    },
    {
      title: "Student Life",
      content: (
        <>
          <p>
            Australian universities offer a comprehensive student experience
            with numerous clubs, societies, and support services. Student
            associations organize social events, cultural activities, and
            volunteer opportunities that help international students integrate
            into campus life.
          </p>
          <p>
            Most universities have dedicated international student support
            offices that assist with everything from accommodation and academic
            issues to cultural adjustment. For Indian students, many
            universities have Indian student associations that organize cultural
            celebrations and provide a support network.
          </p>
          <p>
            Campus facilities typically include libraries, study spaces, cafés,
            and recreational areas designed to enhance the student experience.
            Off-campus, student accommodations are often located in areas with
            good public transport, shopping, and dining options.
          </p>
        </>
      ),
      image: "/student-life.webp",
    },
  ],
};

export default function AustraliaCulturePage() {
  return (
    <CountrySpecificPage
      country="Australia"
      slug="australia"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"
      pageType="culture"
      content={australiaCultureContent}
    />
  );
}
