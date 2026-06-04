
import Dots from "../assets/cta.avif";

/**
 * RecruitersStats
 *
 * A premium Call-to-Action (CTA) section designed to encourage student applications.
 * Features a deep navy base background with an imported dot pattern texture from assets,
 * ambient neon glow graphics, bold modern typography, and an animated apply button.
 */
const RecruitersStats = () => {
  const handleApplyClick = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="w-full bg-[#000B24] py-6 md:py-10 px-6 md:px-12 text-center relative overflow-hidden bg-cover bg-top"
      style={{ backgroundImage: `url(${Dots})` }}
    >

      <div className="max-w-5xl mx-auto relative z-10 py-1 md:space-y-4">
        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl py-2 font-black text-white leading-tight tracking-tight md:whitespace-nowrap">
          Ready to Build Your Engineering Future?
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
          Admissions open for 2026–2027. Limited seats available.
        </p>

        {/* Apply Button */}
        <div className="pt-4">
          <button
            onClick={handleApplyClick}
            className="px-6 py-3 md:px-8 md:py-3.5 bg-linear-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] text-white font-bold rounded-lg text-sm md:text-base shadow-[0_6px_20px_-4px_rgba(194,22,59,0.35)] hover:shadow-[0_8px_25px_-4px_rgba(194,22,59,0.45)] transform hover:-translate-y-0.5 hover:scale-103 active:translate-y-0 active:scale-100 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <span>Apply Now</span>
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
};

export default RecruitersStats;
