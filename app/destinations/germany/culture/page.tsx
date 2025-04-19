import { CountrySpecificPage } from "@/components/country-specific-page";

const germanyCultureContent = {
  title: "Experience Germany's Rich Culture & Lifestyle",
  description:
    "Discover the unique blend of tradition and innovation, precision and creativity that defines German culture and makes it a fascinating destination for international students.",
  sections: [
    {
      title: "Cultural Values",
      content: (
        <>
          <p>
            German culture is characterized by values that shape daily life and
            social interactions. Punctuality is highly valued, and being on time
            for classes, appointments, and social gatherings is expected.
            Directness in communication is appreciated, with Germans preferring
            clear, straightforward expression over indirect approaches.
          </p>
          <p>
            Order and structure (Ordnung) are important, reflected in
            well-organized public spaces, systematic approaches to work and
            study, and respect for rules and regulations. Environmental
            consciousness is deeply ingrained, with extensive recycling systems,
            energy conservation practices, and sustainable living being part of
            everyday life.
          </p>
          <p>
            For Indian students, adapting to these cultural values may require
            some adjustment, but understanding and respecting them will greatly
            enhance your experience in Germany.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Academic Culture",
      content: (
        <>
          <p>
            German academic culture emphasizes independence, critical thinking,
            and self-motivation. The university system offers considerable
            freedom, with students expected to organize their own study
            schedules and take responsibility for meeting requirements.
          </p>
          <p>
            Professors are typically addressed formally with their titles, and
            the relationship between students and faculty tends to be more
            formal than in some other countries. Class participation is
            encouraged, with students expected to contribute to discussions and
            develop their own perspectives on the material.
          </p>
          <p>
            Research is highly valued, with opportunities for students to engage
            in research projects even at undergraduate levels. The academic
            calendar is divided into winter and summer semesters, with breaks in
            between that allow for internships, travel, or intensive study.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Daily Life and Routine",
      content: (
        <>
          <p>
            Daily life in Germany tends to follow predictable patterns that
            reflect the cultural emphasis on balance and structure. Business
            hours typically run from 9 AM to 6 PM on weekdays, with most shops
            closed on Sundays (a significant difference from India).
          </p>
          <p>
            Meals follow a regular schedule, with breakfast (Frühstück) between
            6-8 AM, lunch (Mittagessen) between 12-2 PM as the main meal of the
            day, and dinner (Abendessen) between 6-8 PM, often consisting of
            bread, cold cuts, and cheese.
          </p>
          <p>
            Public transportation is efficient and widely used, with punctual
            services that allow for precise planning of daily activities.
            Work-life balance is highly valued, with clear boundaries between
            work/study time and leisure time.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Food and Dining",
      content: (
        <>
          <p>
            German cuisine varies by region but generally features hearty dishes
            with meat, potatoes, and bread as staples. Traditional foods include
            various sausages (Wurst), schnitzel, pretzels (Brezel), and black
            bread (Schwarzbrot). Beer is an important part of German culture,
            with over 1,500 breweries producing thousands of different
            varieties.
          </p>
          <p>
            Dining out ranges from affordable options like university cafeterias
            (Mensa) offering meals for €3-5, to mid-range restaurants where
            meals cost €10-20. For Indian students, vegetarian options are
            increasingly available, especially in university towns, though they
            may need to explain dietary restrictions clearly.
          </p>
          <p>
            Many cities have Indian grocery stores and restaurants, making it
            possible to cook familiar foods. Students often save money by
            cooking at home, with weekly grocery costs ranging from €40-80
            depending on eating habits.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Social Life and Recreation",
      content: (
        <>
          <p>
            Social life in Germany offers numerous opportunities for
            international students to build connections and enjoy their time
            outside of studies. Universities have student organizations
            (Hochschulgruppen) catering to various interests, from sports and
            culture to academic and professional development.
          </p>
          <p>
            Germans typically form friendships gradually, based on shared
            interests and experiences rather than casual interactions. Sports
            are popular, with football (soccer) having a special place in German
            culture. Outdoor activities are common regardless of weather, with
            hiking, cycling, and swimming being popular recreational choices.
          </p>
          <p>
            Cultural activities like visiting museums, attending concerts, or
            going to theaters are affordable with student discounts, and many
            museums offer free entry on certain days.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Festivals and Events",
      content: (
        <>
          <p>
            Throughout the year, Germany celebrates numerous festivals and
            events that provide insight into the country's traditions and
            contemporary culture. Oktoberfest in Munich is the world's largest
            folk festival, featuring traditional Bavarian music, food, and beer.
          </p>
          <p>
            Christmas markets (Weihnachtsmärkte) transform city centers into
            magical winter wonderlands during Advent, with handcrafted goods,
            seasonal foods, and mulled wine (Glühwein). Carnival (Karneval or
            Fasching) is celebrated exuberantly in February, especially in
            Cologne and the Rhineland.
          </p>
          <p>
            Universities often organize their own events, including summer
            festivals, graduation ceremonies, and international cultural
            celebrations that allow students from different countries to share
            their traditions.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
  ],
};

export default function GermanyCulturePage() {
  return (
    <CountrySpecificPage
      country="Germany"
      slug="germany"
      flag="/placeholder.svg?height=30&width=50"
      heroImage="/placeholder.svg?height=600&width=1200"
      pageType="culture"
      content={germanyCultureContent}
    />
  );
}
