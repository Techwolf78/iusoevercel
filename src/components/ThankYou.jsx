import { useState, useEffect } from "react";
import IUlogo from "../assets/IULogo.avif";
import curvedImg from "../assets/stamp4.avif";

const pulseKeyframes = `
  @keyframes pulseText {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

const ThankYou = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Fire Google Tag conversion event for lead tracking
    if (typeof window.gtag === "function") {
      // General Lead Generation Event
      window.gtag("event", "generate_lead", {
        value: 1.0,
        currency: "INR",
      });
      
      // Google Ads Specific Conversion Event
      window.gtag("event", "conversion", {
        send_to: "AW-18195766943/lead_submission",
      });
    }

    // Auto-redirect timer after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "https://indirauniversity.edu.in/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#02103B] via-[#14002E] to-[#4c001c] text-white flex flex-col font-sans relative overflow-hidden selection:bg-[#E3003A] selection:text-white">
      <style>{pulseKeyframes}</style>
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#1E62EC] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E3003A] rounded-full blur-[150px] opacity-15 pointer-events-none" />

      {/* MOBILE NAVBAR (hidden on md and above) */}
      <div className="block md:hidden w-full relative z-30">
        <div className="flex flex-col items-center py-3 px-4 bg-[#000B2E] w-full relative">
          {/* Curved Stamp Decoration */}
          <img
            src={curvedImg}
            alt="Indira University Stamp"
            className="absolute top-3 right-4 h-8 w-auto object-contain pointer-events-none drop-shadow-xl z-20"
          />
          {/* Top Row - Logos */}
          <div className="flex justify-center w-full items-center mb-2">
            <div className="shrink-0">
              <img src={IUlogo} alt="IU Logo" className="h-auto w-20" />
            </div>
          </div>
          {/* Center Text - Mobile */}
          <div className="text-center w-full">
            <h1
              className="text-white text-[15px] font-bold px-2 leading-tight"
              style={{ animation: "pulseText 2s infinite" }}
            >
              SCHOOL OF ENGINEERING
              <br />
              (INDIRA UNIVERSITY)
            </h1>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR (hidden below md) */}
      <div className="hidden md:block w-full relative z-30">
        <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4 bg-[#000B2E] relative">
          {/* LEFT LOGO */}
          <div className="shrink-0">
            <img
              src={IUlogo}
              alt="IU Logo"
              className="h-auto w-24 md:w-28 lg:w-36 xl:w-42"
            />
          </div>
          {/* CENTER TEXT */}
          <div className="grow flex items-center justify-center text-center px-2 md:px-4">
            <h1
              className="text-white text-base md:text-lg lg:text-2xl xl:text-3xl font-bold whitespace-nowrap"
              style={{ animation: "pulseText 2s infinite" }}
            >
              SCHOOL OF ENGINEERING (INDIRA UNIVERSITY)
            </h1>
          </div>
          {/* SPACER FOR BALANCED CENTERING */}
          <div className="w-24 md:w-28 lg:w-36 xl:w-42 shrink-0" />
          {/* Curved Stamp Decoration (97% in navbar, 3% in hero) */}
          <img
            src={curvedImg}
            alt="Indira University Stamp"
            className="absolute top-0 right-6 lg:right-16 w-[55px] md:w-[70px] lg:w-[85px] h-auto object-contain pointer-events-none drop-shadow-xl z-50"
          />
        </div>
      </div>

      {/* Thank You Card Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          {/* Simple Green Checkmark */}
          <div className="mx-auto w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <svg
              className="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Thank You!
          </h2>

          {/* Short Text */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Your inquiry for B.Tech Admissions 2026-2027 has been received. Our admissions team will get in touch with you shortly.
          </p>

          {/* Countdown Indicator */}
          <p className="text-xs text-slate-400 mt-4 font-medium animate-pulse">
            Redirecting to indirauniversity.edu.in in <span className="text-[#1E62EC] font-bold text-sm">{countdown}</span> seconds...
          </p>

          {/* Clean Back Button */}
          <div className="pt-6">
            <a
              href="/"
              className="inline-block px-8 py-2.5 bg-[#1E62EC] hover:bg-[#1553d1] rounded-lg text-white font-semibold text-sm transition-all active:scale-[0.98] shadow-md"
            >
              Go Back
            </a>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="w-full py-6 text-center text-xs text-slate-500 border-t border-white/5 relative z-10">
        &copy; {new Date().getFullYear()} Indira University School of Engineering. All rights reserved.
      </footer>
    </div>
  );
};

export default ThankYou;
