import React from "react";
import overviewImg from "../assets/IU.jpg";
import curvedImg from "../assets/CuvredImg.png";

const ABOUT_CONTENT = {
  title: "About the School of Engineering – Indira University",
  paragraphs: [
    "The School of Engineering (SOE) at Indira University, braced by two decades of Indira's legacy in engineering education through Indira College of Engineering and Management (ICEM), is designed to cultivate technically adept, ethically grounded, and industry-ready engineers. Our flagship B.Tech in Computer Science & Engineering bridges strong engineering fundamentals with the rapidly evolving demands of today's technology-driven world."
  ]
};

function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-[45%] space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] leading-tight">
            {ABOUT_CONTENT.title}
          </h2>

          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
            {ABOUT_CONTENT.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Image Container with Overlay */}
        <div className="w-full md:w-[55%] relative flex items-center justify-center">
          {/* Main Image */}
          <div className="w-full h-[280px] md:h-[380px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-lg border border-slate-100">
            <img
              src={overviewImg}
              alt="School of Engineering Overview"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top Right Overlay PNG */}
          <img
            src={curvedImg}
            alt="Decoration"
            className="absolute -top-6 -right-6 w-[100px] sm:w-[130px] md:w-[160px] h-auto object-contain pointer-events-none drop-shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
