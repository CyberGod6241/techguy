import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { House } from "lucide-react";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import XFillIcon from "../assets/Xlogo";
import resumePdf from "../assets/Naim Abdulazeez.pdf";

function Header() {
  return (
    <header className="mt-2.5 md:mt-5.5 fixed left-0 right-0 flex justify-center items-center p-4 z-50">
      <div className="border rounded-[20px] border-zinc-200 backdrop-blur-sm bg-zinc-100/10 w-fit max-w-[53rem]">
        <nav className="p-4 flex items-center justify-center gap-6 cursor-pointer">
          <a
            href="#top"
            aria-label="Back to top"
            className="hover:pr-2.5 flex items-center transition-all"
          >
            <House className="opacity-70 scale-90" />
          </a>
          <div className="h-5 w-[2px] bg-zinc-600 md:mx-2"></div>
          <div className="hover:p-2.5 items-center flex transition-all">
            <a
              href="https://x.com/TechGuykunle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) profile"
            >
              <XFillIcon size={18} opacity={40} />
            </a>
          </div>
          <div className="hover:p-2.5  items-center flex transition-all">
            <a
              href="https://github.com/CyberGod6241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="opacity-70 scale-90" />
            </a>
          </div>
          <div className="hover:p-2.5 items-center flex transition-all">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="opacity-70 scale-90" />
            </a>
          </div>
          <div className="hover:p-2.5 items-center flex transition-all">
            <a
              href="https://facebook.com/TechGuyKunle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
            >
              <Facebook className="opacity-70 scale-90" />
            </a>
          </div>
          <div className="h-5 w-[2px] bg-zinc-600 md:mx-2"></div>
          <div>
            <a
              href={resumePdf}
              download="Naim Abdulazeez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
            >
              <button className="bg-zinc-950 text-zinc-100 p-2.5 rounded-xl cursor-pointer hover:bg-zinc-800 hover:scale-105 hover:px-4 transition-all font-bold">
                Resume
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
