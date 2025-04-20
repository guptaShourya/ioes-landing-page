import { CountrySpecificPage } from "@/components/country-specific-page";

const usaCultureContent = {
  title: "Experience American Campus Life and Culture",
  description:
    "Discover the vibrant and diverse cultural experience that awaits you as an international student in the United States.",
  sections: [
    {
      title: "Campus Life and Community",
      content: (
        <>
          <p>
            American universities are known for their vibrant campus communities
            and holistic approach to education. Beyond academics, campus life
            offers numerous opportunities for personal growth, social
            connections, and cultural exchange.
          </p>
          <p>
            Most universities have hundreds of student clubs and organizations
            covering interests from academic and professional development to
            cultural, religious, artistic, and recreational pursuits.
            International student associations provide a supportive community
            and celebrate cultural diversity through events and activities.
          </p>
          <p>
            The residential experience is a significant aspect of American
            campus life, with many students living in dormitories or on-campus
            housing, especially during their first year. This creates a
            close-knit community and facilitates friendships with students from
            diverse backgrounds.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cultural Diversity and Inclusion",
      content: (
        <>
          <p>
            The United States is a melting pot of cultures, and this diversity
            is reflected in its universities. International students from over
            200 countries contribute to this multicultural environment, creating
            opportunities for cross-cultural learning and global perspectives.
          </p>
          <p>
            Most universities celebrate this diversity through international
            festivals, cultural showcases, and global awareness events. These
            provide platforms for students to share their heritage and learn
            about other cultures, fostering a more inclusive and globally-minded
            campus community.
          </p>
          <p>
            Universities also offer resources and support services specifically
            for international students, including orientation programs, language
            support, cultural adjustment workshops, and international student
            advisors who can help navigate academic and cultural challenges.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sports and Recreation",
      content: (
        <>
          <p>
            Athletics and sports play a significant role in American campus
            culture. Collegiate sports events, particularly football and
            basketball, are major social gatherings that foster school spirit
            and community bonding. Attending these events is a quintessential
            American college experience, complete with team chants, mascots, and
            traditions.
          </p>
          <p>
            Beyond varsity athletics, universities offer extensive recreational
            facilities and intramural sports programs that allow students of all
            skill levels to participate in physical activities and team sports.
            These range from traditional sports like soccer and tennis to
            activities like rock climbing, yoga, and dance.
          </p>
          <p>
            Outdoor recreation is also popular, with many universities
            organizing hiking trips, camping excursions, and adventure
            activities that allow students to explore America's diverse natural
            landscapes, from mountains and forests to beaches and deserts.
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
            American food culture is diverse and regionally varied, reflecting
            the country's immigrant heritage and regional influences. From New
            York pizza and Philadelphia cheesesteaks to Southern barbecue and
            Californian fusion cuisine, each region offers unique culinary
            experiences.
          </p>
          <p>
            Campus dining has evolved significantly, with most universities
            offering diverse food options that cater to various dietary
            preferences and restrictions, including vegetarian, vegan, halal,
            and kosher options. Many campuses also feature international
            cuisine, allowing students to enjoy familiar flavors from home or
            explore new culinary traditions.
          </p>
          <p>
            The social aspect of dining is important in American culture, with
            meals often serving as opportunities for socializing and community
            building. Coffee shops, both on and off campus, are popular
            gathering spots for studying, casual meetings, and relaxation.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Holidays and Traditions",
      content: (
        <>
          <p>
            Experiencing American holidays and traditions provides insight into
            the country's cultural values and history. Major celebrations
            include Thanksgiving (November), a time for gratitude and family
            gatherings; Independence Day (July 4th), marked by fireworks and
            patriotic displays; and Halloween (October 31st), when people dress
            in costumes and engage in festive activities.
          </p>
          <p>
            Universities have their own traditions and celebrations, from
            homecoming weekends and spring festivals to unique customs specific
            to each institution. These events foster a sense of belonging and
            connection to the university community.
          </p>
          <p>
            Academic traditions like convocation ceremonies, graduation rituals,
            and honor societies are also important aspects of American
            university culture, marking significant milestones in students'
            educational journeys.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Travel and Exploration",
      content: (
        <>
          <p>
            Studying in the US offers excellent opportunities for travel and
            exploration. The country's vast geography encompasses diverse
            landscapes, from the skyscrapers of New York City to the beaches of
            California, the mountains of Colorado, and the unique ecosystems of
            national parks like Yellowstone and the Grand Canyon.
          </p>
          <p>
            Many universities organize field trips and study tours that combine
            academic learning with cultural exploration. Academic breaks,
            particularly the longer winter and summer breaks, provide
            opportunities for more extensive travel within the US or to
            neighboring countries like Canada and Mexico.
          </p>
          <p>
            Public transportation varies significantly by region, with extensive
            systems in major cities but limited options in rural areas. Many
            international students use a combination of public transportation,
            rideshare services, and organized tours to explore beyond their
            campus community.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function USACulturePage() {
  return (
    <CountrySpecificPage
      country="United States"
      slug="usa"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
      pageType="culture"
      content={usaCultureContent}
    />
  );
}
