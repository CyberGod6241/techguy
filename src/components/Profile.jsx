import { Dot } from "lucide-react";
import TextType from "../assets/TextType";
import Picture from "../assets/Picture.png";

function Profile() {
  return (
    <div className="w-full max-w-[53rem] p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
      <div className="max-w-30 mb-3.5">
        <img src={Picture} alt="My Image" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-3 mb-3.5">
        <p className="font-bold text-4xl font-mono">
          <TextType
            text={["Hey, I'm Naim Adekunle Abdulazeez. Software Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Hey, I'm Naim Adekunle Abdulazeez. Software engineer"]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </p>
        <p className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a]">
          Creating innovative solutions and captivating designs. University
          student by day, visionary creator by night.
        </p>
      </div>
      <div className="flex gap-2.5 items-center">
        <a href="#contact">
          <button className="bg-zinc-950 text-zinc-50 rounded-xl p-4 hover:scale-105 transition-all">
            Hire Me!
          </button>
        </a>
        <p className="text-green-600 bg-green-600/10 p-4 rounded-xl flex">
          <Dot className="mr-1 font-bold" />i am available for hire
        </p>
      </div>
    </div>
  );
}

export default Profile;
