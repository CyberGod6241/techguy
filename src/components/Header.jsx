import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { House } from "lucide-react";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import XFillIcon from "../assets/Xlogo";

function Header() {
  return (
    <header className="mt-2.5 md:mt-5.5 fixed left-0 right-0 flex justify-center items-center p-4 z-50">
      <div className="border rounded-[20px] border-zinc-200 backdrop-blur-sm bg-zinc-100/10 w-fit max-w-[53rem]">
        <nav className="p-4 flex items-center justify-center gap-6 cursor-pointer">
          <div className="hover:pr-2.5 hover:bg-zinc-100/10 flex items-center transition-all">
            <House className="opacity-70 scale-90" />
          </div>
          <div className="h-5 w-[2px] bg-zinc-600 md:mx-2"></div>
          <div className="hover:p-2.5 hover:bg-zinc-100/10 items-center flex transition-all">
            <a
              href="https://x.com/TechGuykunle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XFillIcon size={18} opacity={40} />
            </a>
          </div>
          <div className="hover:p-2.5 hover:bg-zinc-100/10 items-center flex transition-all">
            <a
              href="https://github.com/CyberGod6241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="opacity-70 scale-90" />
            </a>
          </div>
          <div className="hover:p-2.5 hover:bg-zinc-100/10 items-center flex transition-all">
            <a
              href="https://facebook.com/TechGuyKunle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="opacity-70 scale-90" />
            </a>
          </div>
          <div className="h-5 w-[2px] bg-zinc-600 md:mx-2"></div>
          <div>
            <a
              href="./src/assets/Naim Abdulazeez.pdf"
              download="Naim Abdulazeez.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
