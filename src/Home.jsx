import Header from "./components/Header";
import Liner from "./components/Liner";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import item1 from "./assets/item1.png";
import item2 from "./assets/item2.png";
import item3 from "./assets/item3.png";
import item4 from "./assets/item4.png";
import item5 from "./assets/item5.png";
import item6 from "./assets/item6.png";
// import item7 from "./assets/item7.png";
// import item8 from "./assets/item8.png";

function Home() {
  const items = [
    {
      id: 1,
      image: item1,
      title: "Ask Your Doctor",
      link: "https://askyourdoctor.netlify.app/",
      description:
        "A health application where doctors and patient can keep track of health details and diagnoses.",
    },
    {
      id: 2,
      image: item2,
      link: "https://grove-cyber.netlify.app/",
      title: "Groove Music App",
      description:
        "A music streaming application that allows users to discover, play, and manage their favorite songs and playlists. The app features a sleek interface with personalized recommendations, offline playback capabilities, and integration with popular music platforms.",
    },
    {
      id: 3,
      image: item3,
      title: "The M&M Plate",
      link: "https://the-mms.netlify.app/",
      description:
        "A food delivery app that offers a wide variety of cuisines and dishes from local restaurants. Users can browse menus, place orders, and track deliveries in real-time. The app also features user reviews and ratings to help customers make informed dining choices.",
    },
    {
      id: 4,
      image: item4,
      title: "Daily Tracker",
      link: "https://dailytracker-cyber.netlify.app/",
      description:
        "A web application that allows users to track their daily activities, set goals, and monitor their progress. The app provides a user-friendly interface for logging tasks, habits, and routines, helping users stay organized and motivated throughout the day.",
    },
    {
      id: 5,
      image: item5,
      title: "Sign-Bridge",
      description:
        "A web application that helps users create and manage digital signatures for documents. The app provides a secure and user-friendly interface for generating, storing, and applying digital signatures to various file types.",
    },
    {
      id: 6,
      image: item6,
      title: "PixelGuard",
      description:
        "Image stegabography web application that allows users to hide messages within images. The app provides a simple interface for encoding and decoding hidden messages, ensuring secure communication through visual media.",
    },
  ];
  return (
    <>
      <Header />
      <Liner />
      <main className="relative flex flex-col mx-auto">
        <div className="relative mx-auto max-w-[53rem] w-full">
          <Profile />
          <About />
          <Projects items={items} />
          <Experience />
          <Help />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
