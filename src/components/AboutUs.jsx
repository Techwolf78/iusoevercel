import React from "react";
import OverviewImg from "../assets/Overview.jpg";

function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] text-white py-16 px-6 overflow-hidden relative">
      <div className=" flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-wide">
            About Us
          </h2>

          <div className="text-gray-100 text-xl md:text-2xl leading-relaxed space-y-4 font-light">
            <p>
              The{" "}
              <span className="font-bold">
                School of Engineering at Indira University
              </span>{" "}
              is built upon the strong academic foundation and proven legacy of{" "}
              <span className="font-bold">
                Indira College of Engineering & Management
              </span>{" "}
              and the{" "}
              <span className="font-bold">Indira Group of Institutes</span>.
            </p>
            <p>
              With a long-standing tradition of excellence in engineering
              education, innovation, industry integration, and placements
              reaching up to{" "}
              <span className="font-bold text-red-500">27 LPA</span>, the
              institution continues to shape future-ready engineers equipped for
              the global technology landscape.
            </p>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="md:w-1/2 relative">
          <div className="border border-white/30 p-1 bg-white/5">
            <img
              src={OverviewImg}
              alt="School of Engineering Overview"
              className="w-full h-auto max-h-[350px] object-cover"
            />
          </div>
        </div>
      </div>

  
    </section>
  );
}

export default AboutUs;
