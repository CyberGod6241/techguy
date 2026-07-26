function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    },
    {
      category: "Backend & Cloud",
      skills: ["Node.js", "Firebase", "Firestore", "REST APIs", "Python"],
    },
    {
      category: "Security",
      skills: ["Web Security", "Auth Flows", "Image Steganography", "OWASP Basics"],
    },
    {
      category: "Tools & Practices",
      skills: ["Git & GitHub", "Figma", "Docker", "Agile/Scrum", "CI/CD"],
    },
  ];

  return (
    <div className="w-full max-w-[53rem] flex flex-col pb-[58px] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
      <div className="w-full flex flex-col items-start">
        <div className="flex w-full h-[1px] bg-[#E5E5E5] mb-[50px] md:mb-[100px]"></div>
        <h2 className="text-[22px] dark:text-white font-bold tracking-[-.03em] leading-[110%] text-black mb-[40px]">
          Skills &amp; Tools
        </h2>
        <div className="flex flex-col gap-[24px] w-full">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] md:items-start"
            >
              <div className="text-[#8F8F8F] dark:text-zinc-300 font-medium text-[13px] md:w-[160px] shrink-0 md:pt-[7px]">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#EEF4FF] dark:bg-zinc-800 text-[#3B82F6] dark:text-blue-300 px-3 py-1.5 rounded-md text-[14px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
