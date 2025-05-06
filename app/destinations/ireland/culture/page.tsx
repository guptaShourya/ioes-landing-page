import { CountrySpecificPage } from "@/components/country-specific-page";

const irelandCultureContent = {
  title: "Experience Ireland's Rich Culture & Lifestyle",
  description:
    "Discover the unique blend of tradition and modernity, warmth and creativity that defines Irish culture and makes it a welcoming destination for international students from India.",
  sections: [
    {
      title: "Cultural Values",
      content: (
        <>
          <p>
            Irish culture is characterized by warmth, friendliness, and a strong
            sense of community. The famous Irish hospitality ("céad míle fáilte"
            or "a hundred thousand welcomes") makes international students feel
            at home quickly. Conversation and storytelling are highly valued,
            with a culture that appreciates wit, humor, and the art of good
            communication.
          </p>
          <p>
            While generally relaxed about timekeeping in social settings, Irish
            professional and academic environments maintain punctuality
            standards similar to India's. The Irish value modesty and
            understatement, often downplaying achievements and using
            self-deprecating humor, which differs from more formal cultural
            expressions.
          </p>
          <p>
            For Indian students, Ireland offers a welcoming environment with
            growing multicultural influences, particularly in urban centers like
            Dublin, Cork, and Galway. The shared history of British influence
            creates some familiar cultural touchpoints, making the transition
            smoother than to many other European countries.
          </p>
        </>
      ),
      image: "/ie-culture.webp",
    },
    {
      title: "Academic Culture",
      content: (
        <>
          <p>
            Irish academic culture blends British educational traditions with a
            distinctively Irish approach that emphasizes creative thinking and
            student engagement. Universities operate on a relatively informal
            basis, with students often addressing professors by their first
            names and enjoying approachable relationships with faculty.
          </p>
          <p>
            The education system emphasizes critical thinking, independent
            research, and practical application of knowledge. Class
            participation is highly valued, with students expected to contribute
            to discussions and develop original perspectives. Group projects and
            collaborative work are common across most disciplines.
          </p>
          <p>
            International students appreciate the supportive learning
            environment, with comprehensive orientation programs, international
            student offices, and peer mentoring systems. The academic year
            typically runs from September to May, divided into semesters or
            trimesters depending on the institution, with holiday breaks
            allowing for travel or part-time work.
          </p>
        </>
      ),
      image: "/programs/academic.webp",
    },
    {
      title: "Daily Life and Routine",
      content: (
        <>
          <p>
            Daily life in Ireland combines modern European efficiency with a
            more relaxed approach to time outside of work and academic
            commitments. Business hours typically run from 9 AM to 5:30 PM on
            weekdays, with shops often open late on Thursdays and throughout
            weekends in urban areas.
          </p>
          <p>
            The Irish typically begin their day with breakfast between 7-9 AM,
            have lunch between 1-2 PM, and dinner between 6-8 PM. Tea is an
            important cultural ritual throughout the day. Weather influences
            daily routines significantly, with the famous Irish rain leading to
            flexible indoor-outdoor plans and the characteristic "soft day"
            greeting acknowledging the mild, misty conditions.
          </p>
          <p>
            Public transportation is well-developed in cities, though less
            comprehensive in rural areas. Dublin offers an integrated system of
            buses, trams (LUAS), and commuter trains, while intercity travel is
            served by Irish Rail and a national bus network. Many students also
            cycle, with bike-sharing schemes available in major cities.
          </p>
        </>
      ),
      image: "/ie-routine.webp",
    },
    {
      title: "Food and Dining",
      content: (
        <>
          <p>
            Irish cuisine has evolved far beyond traditional staples of potatoes
            and stew to embrace international influences while celebrating local
            ingredients. Cities offer diverse dining options, from traditional
            Irish pubs serving hearty comfort food to international restaurants
            catering to all tastes and dietary requirements.
          </p>
          <p>
            For Indian students, Ireland's major cities have excellent Indian
            restaurants and grocery stores, making familiar ingredients readily
            available. Dublin's neighborhoods like South Richmond Street feature
            numerous Indian and South Asian shops. Unlike many European
            countries, finding vegetarian options is relatively easy, with most
            restaurants offering plant-based choices.
          </p>
          <p>
            Student dining options include subsidized campus restaurants and
            cafes, with meals typically costing €6-10. Grocery shopping costs
            approximately €50-70 weekly, with budget options like Lidl and Aldi
            popular among students. The vibrant café culture provides affordable
            spaces to study and socialize, with a coffee costing around €3-4.
          </p>
        </>
      ),
      image: "/food.webp",
    },
    {
      title: "Social Life and Recreation",
      content: (
        <>
          <p>
            Irish social life centers around conversation and community, with
            pubs serving as important social hubs beyond simply being places to
            drink. Student societies and clubs form the backbone of university
            social life, offering everything from sports and cultural activities
            to academic and professional networking opportunities.
          </p>
          <p>
            Sports play a significant role in Irish culture, particularly the
            traditional Gaelic games (hurling and Gaelic football), alongside
            rugby, soccer, and golf. Outdoor activities are popular despite the
            changeable weather, with hiking in the wicklow mountains, surfing on
            the Atlantic coast, and exploring abundant parklands.
          </p>
          <p>
            Arts and culture thrive across Ireland, with cinemas, theaters,
            galleries, and music venues offering student discounts. Traditional
            Irish music sessions in pubs provide free entertainment and
            authentic cultural experiences. The compact size of Irish cities
            makes cultural venues easily accessible, while the natural beauty of
            the countryside offers weekend escapes within easy reach.
          </p>
        </>
      ),
      image: "/ie-social.webp",
    },
    {
      title: "Festivals and Events",
      content: (
        <>
          <p>
            Ireland's calendar is filled with vibrant festivals and events that
            showcase its cultural heritage and contemporary creativity. St.
            Patrick's Day (March 17th) transforms the entire country into a
            celebration of Irish culture, with parades, music, and festivities
            that welcome international participation.
          </p>
          <p>
            Literary and arts festivals abound, including the Dublin Theatre
            Festival, Galway Arts Festival, and Bloomsday celebrations honoring
            James Joyce. Traditional music is celebrated at events like the
            Willie Clancy Summer School and countless local festivals. Cities
            host cultural events representing their diverse communities,
            including Diwali celebrations organized by Ireland's growing Indian
            population.
          </p>
          <p>
            Universities organize their own events calendar, including
            orientation weeks, international cultural festivals, and formal
            balls that provide opportunities to experience both traditional and
            modern aspects of Irish social life. Seasonal celebrations like
            Halloween (which originated in Ireland) and Christmas offer insight
            into Irish traditions and create memorable experiences for
            international students.
          </p>
        </>
      ),
      image: "/ie-festival.webp",
    },
  ],
};

export default function IrelandCulturePage() {
  return (
    <CountrySpecificPage
      country="Ireland"
      slug="ireland"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg"
      pageType="culture"
      content={irelandCultureContent}
    />
  );
}
