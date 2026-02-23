import { ArrowBigRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faJsSquare,
  faReact,
  faPython,
  faJava,
  faHtml5,
  faCss,
} from "@fortawesome/free-brands-svg-icons";

function Projects({ items }) {
  return (
    <div className="w-full max-w-[53rem]   p-6 flex flex-col py-[10rem]  items-center gap-[25px]">
      <div className="flex gap-6 w-[10rem]">
        <div className="relative overflow-hidden w-full ">
          <div className="rfm-marquee-text flex py-6 gap-4 whitespace-nowrap items-center justify-center transition-all">
            <span>
              <FontAwesomeIcon
                icon={faNodeJs}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faJsSquare}
                className="text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faReact}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faPython}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faJava}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faHtml5}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCss}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faNodeJs}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faJsSquare}
                className="text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faReact}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faPython}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faJava}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faHtml5}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCss}
                className="mr-1 text-zinc-900 font-extrabold"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-bold text-[32px] text-center  font-bold tracking-[-.03em] leading-[110%] text-black-center mb-8">
          Here Is What I've Been Up To
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 hover:cursor-pointer w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full rounded-[20px] overflow-hidden border-[1.5px]  border-[#0000001a] relative transition-all"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="px-5 pt-5 pb-4 rounded-[20px] group">
                <div className="relative w-full h-[200px] border   border-[#00000015] rounded-[20px] overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="px-7 pb-7">
                <h3 className="text-[24px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[#5a5a5a] text-[16px] line-clamp-2">
                  {item.description}
                </p>
                <button className="mt-5 bg-[#f2f2f2] hover:bg-[#e5e5e5] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-black text-start no-underline transition-all duration-500 group">
                  <span className="flex items-center group-hover:pr-2 font-medium text-[15px] transition-all duration-300">
                    View Project
                    <ArrowBigRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
