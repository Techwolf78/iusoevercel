import React from "react";
import CurvedImg from "../assets/Dots.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

import logo1  from "../assets/Logo/1.jpg";
import logo2  from "../assets/Logo/2.jpg";
import logo3  from "../assets/Logo/3.jpg";
import logo4  from "../assets/Logo/4.jpg";
import logo5  from "../assets/Logo/5.jpg";
import logo6  from "../assets/Logo/6.jpg";
import logo7  from "../assets/Logo/7.jpg";
import logo8  from "../assets/Logo/8.jpg";
import logo9  from "../assets/Logo/9.jpg";
import logo10 from "../assets/Logo/10.jpg";
import logo11 from "../assets/Logo/11.jpg";
import logo12 from "../assets/Logo/12.jpg";
import logo13 from "../assets/Logo/13.jpg";
import logo14 from "../assets/Logo/14.jpg";
import logo15 from "../assets/Logo/15.jpg";
import logo16 from "../assets/Logo/16.jpg";
import logo17 from "../assets/Logo/17.jpg";
import logo18 from "../assets/Logo/18.jpg";
import logo19 from "../assets/Logo/19.jpg";
import logo20 from "../assets/Logo/20.jpg";
import logo21 from "../assets/Logo/21.jpg";
import logo22 from "../assets/Logo/22.jpg";
import logo23 from "../assets/Logo/23.jpg";
import logo24 from "../assets/Logo/24.jpg";
import logo25 from "../assets/Logo/25.jpg";

const RecruitersStats = () => {
  const allLogos = [
    logo1,  logo2,  logo3,  logo4,  logo5,
    logo6,  logo7,  logo8,  logo9,  logo10,
    logo11, logo12, logo13, logo14, logo15,
    logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25,
  ];

  const statsData = [
    { value: "300+",  label: "Top Recruiters",  icon: icon1 },
    { value: "100%",  label: "Placement Rate",   icon: icon2 },
    { value: "3000+", label: "Students Placed",  icon: icon3 },
    { value: "18 LPA",label: "Highest CTC",      icon: icon4 },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-gradient-to-b from-[#051D58] to-[#990000] px-5 py-10">
        {/* Heading */}
        <p className="text-3xl font-bold text-white">Top</p>
        <h2 className="text-3xl font-bold text-white mb-3">Recruiters</h2>
        <p className="text-sm text-gray-200 leading-relaxed mb-6">
          Our industry connections open doors to exceptional career opportunities and real-world impact.
        </p>

        {/* Stats — 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
              <img src={stat.icon} alt={stat.label} className="w-9 h-9 object-contain flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logo grid — 3 columns */}
        <div className="grid grid-cols-3 gap-3">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex items-center justify-center p-2 shadow"
              style={{ aspectRatio: "3 / 2" }}
            >
              <img src={logo} alt="Recruiter Logo" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md) — UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="hidden md:flex w-full bg-gradient-to-l from-[#990000] via-[#011E5A] to-[#051D58] p-10 h-screen flex-col">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-[1800px] mx-auto w-full py-4">
          <div className="flex gap-6 flex-1">
            {/* Left - Text & Stats (35%) */}
            <div style={{ flex: "0 0 35%" }} className="relative flex flex-col justify-center pr-4 text-white">
              {/* Decorative image on right side */}
              <img
                src={CurvedImg}
                alt=""
                className="absolute -right-48 top-1/2 -translate-y-1/2 h-3/4 w-auto object-contain opacity-80 pointer-events-none"
              />
              <p className="text-4xl md:text-5xl font-bold relative z-10">Top</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Recruiters</h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify mb-10">
                Our industry connections open doors to exceptional career opportunities and real-world impact.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {statsData.map((stat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img src={stat.icon} alt={stat.label} className="w-10 h-10 object-contain flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Logo Grid (65%) */}
            <div style={{ flex: "0 0 65%" }} className="flex items-center justify-end">
              <div className="grid grid-cols-5 gap-4 w-full max-w-[700px]">
                {allLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg flex items-center justify-center p-2 shadow-lg"
                    style={{ aspectRatio: "3 / 2" }}
                  >
                    <img src={logo} alt="Recruiter Logo" className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruitersStats;
