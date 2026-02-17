import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "abdulazeeznaim@gmail.com";
    const subject = encodeURIComponent(
      `Contact from ${formData.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to,
    )}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="w-full max-w-[53rem]  p-6 flex flex-col py-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]"
    >
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
              value={formData.name}
              onChange={handleChange}
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              required=""
              className="flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <textarea
            name="message"
            placeholder="Write your Message"
            required=""
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black relative text-white py-[14px] px-[24px]
            rounded-[14px] text-[16px] hover:opacity-90 duration-[300ms]
            transition-all w-full disabled:opacity-70"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
