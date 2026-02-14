import Header from "./components/Header";
import Liner from "./components/Liner";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Help from "./components/Help";
import List from "./components/List";
import item1 from "./assets/item1.png";
import item2 from "./assets/item2.png";
import item3 from "./assets/item3.png";
import item4 from "./assets/item4.png";
import item5 from "./assets/item5.png";
import item6 from "./assets/item6.png";
function Home() {
  const items = [
    {
      id: 1,
      image: item1,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
    },
    {
      id: 2,
      image: item2,
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern technologies to deliver seamless online experiences.",
    },
    {
      id: 3,
      image: item3,
      title: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications for iOS and Android platforms that meet client needs and exceed expectations.",
    },
    {
      id: 4,
      image: item4,
      title: "Graphic Design",
      description:
        "Designing visually compelling graphics and branding materials that effectively communicate brand identity and message.",
    },
    {
      id: 5,
      image: item5,
      title: "Digital Marketing",
      description:
        "Developing and executing digital marketing strategies to increase online presence, drive traffic, and boost conversions.",
    },
    {
      id: 6,
      image: item6,
      title: "Content Creation",
      description:
        "Producing engaging and high-quality content for various platforms to attract and retain target audiences.",
    },
  ];
  return (
    <>
      <Header />
      <Liner />
      <main className="relative flex flex-col mx-auto">
        <div className="relative mx-auto max-w-[53rem] w-full">
          <Profile />
          <List items={items} />
          <About />
          <Experience />
          <Help />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default Home;
