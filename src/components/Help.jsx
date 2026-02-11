function Help() {
  return (
    <div className="w-full max-w-[53rem]  flex flex-col  items-start">
      <div className="relative bg-black px-[1rem] md:px-[5rem] py-[5rem] w-full">
        <div className="relative z-10">
          <h2 className="text-[32px] font-bold tracking-[-.03em] leading-[110%] text-white text-center w-full mb-[16px]">
            How Can I Help?
          </h2>
          <p className="text-[18px] text-[#a4a2a2] text-center w-full mb-[40px]">
            Let's turn your vision into something amazing.
          </p>
          <div className="flex gap-6 w-full">
            <div className="rfm-marquee-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
