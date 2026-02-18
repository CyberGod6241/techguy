import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
// import { mail } from "lucide-react";
import XFillIcon from "../assets/Xlogo";
function Footer() {
  return (
    <div className="w-full max-w-212 py-[40px] flex flex-col items-center gap-[16px] border-t border-[#E5E5E5]">
      <p className="text-[14px] text-center  text-[#5a5a5a]">
        Copyright
        <FontAwesomeIcon icon={faCopyright} className="mx-1 text-zinc-900" />
        2024 TechGuy.
      </p>
      <div className="flex items-center gap-6">
        <div className=" hover:text-zinc-950 items-center flex transition-all">
          <a
            href="https://github.com/techguy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="opacity-70 scale-90" />
          </a>
        </div>
        <div className=" hover:text-zinc-950 items-center flex transition-all">
          <a
            href="https://x.com/TechGuykunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XFillIcon size={18} opacity={40} />
          </a>
        </div>
        <div className=" items-center flex transition-all">
          <a
            href="https://facebook.com/TechGuyKunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="opacity-70 scale-90  hover:text-zinc-950" />
          </a>
        </div>
        {/* <div className=" items-center flex transition-all">
          <a
            href="https://facebook.com/TechGuyKunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mail className="opacity-70 scale-90  hover:text-zinc-950" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
