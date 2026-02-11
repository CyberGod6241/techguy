import Header from "./components/Header";
import Liner from "./components/Liner";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Help from "./components/Help";
function Home() {
  return (
    <>
      <Header />
      <Liner />
      <main className="relative flex flex-col mx-auto">
        <div className="relative mx-auto max-w-[53rem] w-full">
          <Profile />
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
