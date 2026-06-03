import React from "react";
import CtaBg from "../assets/cta.jpg";

/**
 * OurCourse
 *
 * A premium CTA section styled to match RecruitersStats.
 * Features the cta.jpg background, high-contrast typography,
 * and a smooth scroll-to-top Apply button.
 */
function OurCourse() {
  const handleApplyClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full bg-[#000B24] py-10 md:py-14 px-6 md:px-12 text-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${CtaBg})` }}
    >
      <div className="max-w-5xl mx-auto relative z-10 space-y-6 md:space-y-8">
        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight md:whitespace-nowrap">
          Your Engineering Journey Awaits
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
          Join a community of innovators, builders, and future-ready engineers.
        </p>

        {/* Apply Button */}
        <div className="pt-4">
          <button
            onClick={handleApplyClick}
            className="px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] text-white font-bold rounded-lg text-sm md:text-base shadow-[0_6px_20px_-4px_rgba(194,22,59,0.35)] hover:shadow-[0_8px_25px_-4px_rgba(194,22,59,0.45)] transform hover:-translate-y-0.5 hover:scale-103 active:translate-y-0 active:scale-100 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <span>Apply Now for 2026–2027</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurCourse;
