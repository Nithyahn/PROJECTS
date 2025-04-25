import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import mypic from "../../assets/mypic.png";

const Home = () => {
  const el = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello I' am, Nithya HN"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup
  }, []);

  // Scroll to footer on button click
  const handleContactClick = () => {
    const footer = document.getElementById("Footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-higher">
          <span ref={el} />
        </h1>
        <br />
        <p className="text-sm md:text-2xl tracking-tight">
          Third-year CSE student at PES University 🎓, passionate about gaining
          hands-on experience in building real-world solutions 🌍 through
          technology, creativity 💡, and continuous learning. I enjoy
          collaborating to learn, share, and grow together.
        </p>
        <div className="flex gap-4 mt-5 md:mt-10">
          <button
            onClick={handleContactClick}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-purple-600"
          >
            Contact Me
          </button>
        </div>
      </div>

      <img
       className="w-2/5 mt-5 -ml-14 animate-horizontal-spin"
        src={mypic}
        alt="mypic"
      />
    </div>
  );
};

export default Home;
