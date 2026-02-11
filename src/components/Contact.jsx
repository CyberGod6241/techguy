function Contact() {
  return (
    <div className="w-full max-w-[53rem]  p-6 flex flex-col py-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]">
      <div
        id="contact-form"
        className="w-full max-w-[53rem] flex flex-col py-[58px] items-start"
      >
        <h2 className="text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black mb-[16px]">
          Get In Touch
        </h2>
        <p className="text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] mb-[32px] max-w-[600px]">
          I'm always interested in exploring new opportunities, collaborating,
          or exchanging ideas with like-minded individuals. Feel free to book a
          call or email me if you'd like to see my portfolio deck or to discuss
          a potential project.
        </p>
        <form className="w-full flex flex-col gap-4">
          <div className="grid md:flex gap-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              required=""
              class="flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
              name="name"
              value=""
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              required=""
              class="flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
              name="email"
              value=""
            ></input>
          </div>
          <textarea
            name="message"
            placeholder="Write your Message"
            required=""
            class="w-full bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            class="bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-[300ms] transition-all w-full disabled:opacity-70"
          >
            {/* <img
              alt="Doodle"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="absolute object-cover top-0 left-0 opacity-10"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="100vw"
              srcset="/_next/image?url=%2Fdoodle.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fdoodle.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fdoodle.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fdoodle.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fdoodle.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fdoodle.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fdoodle.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fdoodle.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=%2Fdoodle.png&amp;w=3840&amp;q=75"
            /> */}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
