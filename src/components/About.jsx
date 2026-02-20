import Picture1 from "../assets/picture1.png";
import Picture2 from "../assets/picture2.png";
function About() {
  return (
    <div className="w-full max-w-[53rem] p-6 flex flex-col py-100px md:py-[158px] px-6 md:px-32 items-start gap-[25px] ">
      <h2 className="text-[25px] md:text-32px font-bold font leading-[110%]">
        About
      </h2>
      <div
        className="flex flex-col gap-6"
        style={{ opacity: 1, transform: "none" }}
      >
        <p className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a]">
          I like to craft solid and scalable products with exceptional user
          experiences, focusing on innovation and problem-solving across various
          industries.
        </p>
        <p className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a]">
          I’ve spent the last 4 years crafting digital experiences that live at
          the intersection of design and logic. While my heart belongs to the
          frontend—building sleek, responsive interfaces with React and Tailwind
          CSS—I’m no stranger to the server side. I’ve spent enough time with
          Node.js and Python to ensure that whatever I build isn’t just a pretty
          face, but a well-oiled machine. I believe in writing clean,
          maintainable code and building products that users actually enjoy
          navigating. If it involves JavaScript, high-quality CSS, or solving
          complex architectural puzzles, I’m in.
        </p>
        <p className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a]">
          I'm Naim Adekunle Abdulazeez, a self-taught programmer, ranked among
          the top programmers in Lagos, Nigeria, I am an active tech content
          creator and a speaker passionate about empowering others in tech.
        </p>
      </div>
      <div className="relative w-full h-[250px] mt-8 group">
        <div className="absolute top-0 left-[20%] bg-white px-2 pt-2 -rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:scale-105">
          <div className="w-[200px] h-[200px]">
            <img
              src={Picture1}
              alt="picture1"
              loading="lazy"
              width={200}
              height={200}
              style={{ color: "transparent" }}
              decoding="async"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">
            @techguykunle
          </span>
        </div>
        <div className="absolute top-10 right-[20%] bg-white px-2 pt-2 rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:translate-x-4 group-hover:scale-105">
          <div className="w-[200px] h-[200px]">
            <img
              src={Picture2}
              alt="picture2"
              loading="lazy"
              width={200}
              height={200}
              style={{ color: "transparent" }}
              decoding="async"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">
            @Cybergod
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
