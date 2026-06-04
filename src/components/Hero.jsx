import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IUlogo from "../assets/IULogo.avif";
import HeroBg from "../assets/HeroImg.avif";
import curvedImg from "../assets/stamp4.avif";

import Icon1 from "../assets/icon5.avif";
import Icon2 from "../assets/icon6.avif";
import Icon3 from "../assets/icon7.avif";
import Icon4 from "../assets/icon8.avif";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Icon1, target: 20, suffix: "+", title: "20+", subtitle: "Years of Engineering Legacy" },
  { icon: Icon2, target: 350, suffix: "+", title: "350+", subtitle: "Top Recruiters" },
  { icon: Icon3, target: 100, suffix: "%", title: "100%", subtitle: "Guaranteed Placement Opportunities" },
  { icon: Icon4, target: 27, suffix: " LPA", title: "27 LPA", subtitle: "Highest CTC" },
];

const HERO_CONTENT = {
  limitedSeats: "LIMITED SEATS",
  heading: [
    "Join India's Most Future-Ready  ",
    "B.Tech Programme",
  ],
  description: "Specialise in Artificial Intelligence & Data Science and Cyber Security & Cloud Computing. Learn through hackathons, live projects, and innovation labs. 350+ recruiters are waiting for you.",
  subText: (
    <>
      Enrol for <span className="font-bold text-[#E3003A]">B.Tech in CSE</span> under <span className="font-bold text-[#E3003A]">School of Engineering (SOE)</span> to be a part of the Exclusive Coder's Club
    </>
  ),
  admissionTag: "Admission open for 2026-2027",
  buttons: {
    apply: "APPLY NOW",
    brochure: "Download brochure",
  }
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance animation timeline on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      
      tl.fromTo(".hero-bg", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 })
        .fromTo(".hero-title-line", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, "-=1")
        .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6")
        .fromTo(".hero-tag", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.7)" }, "-=0.6")
        .fromTo(".hero-form-container", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.8")
        .fromTo(".hero-stat-card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.6");

      // 2. Parallax background scroll effect
      gsap.to(".hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // 3. Count up stats animation
      const statsNum = document.querySelectorAll(".stat-number");
      statsNum.forEach(stat => {
        const targetValStr = stat.getAttribute("data-target");
        const targetVal = parseFloat(targetValStr);
        const suffix = stat.getAttribute("data-suffix") || "";
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: targetVal,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            stat.innerText = Math.floor(obj.value) + suffix;
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const pulseKeyframes = `
    @keyframes pulseText {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
      }
      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
    }
  `;

  return (
    <div ref={containerRef} className="overflow-hidden w-full relative">
      <style>{pulseKeyframes}</style>
      
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="hero-bg absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Curved Stamp Decoration */}
        <img
          src={curvedImg}
          alt="Indira University Stamp"
          className="absolute top-[90px] right-3 w-[70px] h-auto object-contain pointer-events-none drop-shadow-xl z-20 transform -translate-y-1/2"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-auto">
          {/* Navbar */}
          <div className="flex flex-col items-center py-3 px-4 bg-[#000B2E] w-full">
            {/* Top Row - Logos */}
            <div className="flex justify-center w-full items-center mb-2">
              <div className="shrink-0">
                <img
                  src={IUlogo}
                  alt="IU Logo"
                  className="h-auto w-20"
                />
              </div>
            </div>

            {/* Center Text - Mobile */}
            <div className="text-center w-full">
              <h1
                className="text-white text-[15px] font-bold px-2 leading-tight"
                style={{ animation: 'pulseText 2s infinite' }}
              >
                SCHOOL OF ENGINEERING<br />(INDIRA UNIVERSITY)
              </h1>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col justify-center items-center text-center px-5 py-8">
            {/* Heading */}
            <h1 className="hero-title text-white font-bold leading-tight text-[18px] sm:text-2xl">
              {HERO_CONTENT.heading.map((line, index) => (
                <span key={index} className={`hero-title-line block ${index === 1 ? "text-[#1E62EC]" : "text-white"}`}>{line}</span>
              ))}
            </h1>

            {/* Description */}
            <p className="hero-desc text-white/80 text-sm leading-relaxed mt-4">
              {HERO_CONTENT.description}
            </p>

            {/* Subtext */}
            <p className="hero-desc text-white/60 text-xs leading-relaxed mt-2">
              {HERO_CONTENT.subText}
            </p>

            {/* Admission tag */}
            <div className="hero-tag mt-4 inline-flex items-center self-center bg-[#1E62EC] text-white px-4 py-1.5 rounded-lg font-semibold text-xs shadow-[0_4px_20px_rgba(30,98,236,0.3)]">
              {HERO_CONTENT.admissionTag}
            </div>

            {/* NPF Form Container for Mobile */}
            <div className="hero-form-container mt-5 w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
              <div id="npf-mobile-form" className="w-full">
                <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
                  <input
                    id="mobile-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter Name"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <input
                    id="mobile-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter Email Address"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <input
                    id="mobile-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <select
                    id="mobile-course"
                    name="course"
                    className="w-full h-9 bg-[#000B2E]/90 border border-white/10 focus:border-white/30 focus:bg-[#000B2E]/10 transition-all rounded-lg px-3 text-white/70 text-xs outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="btech-ai-ds">B.Tech (AI & Data Science)</option>
                    <option value="btech-cyber-cloud">B.Tech (Cyber Security & Cloud Technology)</option>
                  </select>
                  <button className="w-full bg-linear-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] py-2 rounded-lg text-white font-bold text-[11px] tracking-wider active:scale-[0.98] transition-all shadow-md">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Stats for Mobile (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-20 mt-5 w-full max-w-md border-t border-white/10 pt-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="hero-stat-card flex items-center gap-1.5"
                >
                  <div className="flex items-center justify-center border border-[#1E62EC]/40 bg-[#1E62EC]/10 rounded-full w-8 h-8 shrink-0">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-4 h-4 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(83%) saturate(3474%) hue-rotate(213deg) brightness(97%) contrast(91%)' }}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-white text-xs font-extrabold leading-none whitespace-nowrap">
                      <span className="stat-number" data-target={item.target} data-suffix={item.suffix}>0{item.suffix}</span>
                    </h3>
                    <p className="text-white/70 text-[9px] sm:text-[10px] leading-none mt-1 whitespace-nowrap">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full min-h-screen relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Curved Stamp Decoration */}
        <img
          src={curvedImg}
          alt="Indira University Stamp"
          className="absolute top-[72px] lg:top-[120px]  right-6 lg:right-16 w-[100px] md:w-[130px] lg:w-[155px] h-auto object-contain pointer-events-none drop-shadow-xl z-20 transform -translate-y-1/2"
        />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navbar */}
          <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4 bg-[#000B2E]">
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
                style={{ animation: 'pulseText 2s infinite' }}
              >
                SCHOOL OF ENGINEERING (INDIRA UNIVERSITY)
              </h1>
            </div>

            {/* SPACER FOR BALANCED CENTERING */}
            <div className="w-24 md:w-28 lg:w-36 xl:w-42 shrink-0 hidden md:block" />
          </div>

          {/* Hero Body */}
          <div className="flex-1 flex items-center px-5 md:px-16 py-8 md:py-12">
            <div className="w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16">

              {/* Left Column: Text & Stats */}
              <div className="w-full md:w-[58%] flex flex-col items-center md:items-start text-center md:text-left">
                {/* Heading */}
                <h1 className="hero-title text-white font-bold leading-tight text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {HERO_CONTENT.heading.map((line, index) => (
                    <span key={index} className={`hero-title-line block md:whitespace-nowrap ${index === 1 ? "text-[#1E62EC]" : "text-white"}`}>{line}</span>
                  ))}
                </h1>

                {/* Description */}
                <p className="hero-desc text-white/90 text-sm sm:text-base md:text-xl mt-4 leading-relaxed">
                  {HERO_CONTENT.description}
                </p>

                {/* Admission Tag */}
                <p className="hero-tag mt-4 text-sm sm:text-base md:text-lg bg-[#1E62EC] text-white px-4 py-1.5 rounded-xl inline-block font-semibold w-fit shadow-[0_4px_20px_rgba(30,98,236,0.3)]">
                  {HERO_CONTENT.admissionTag}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-6 w-full mt-6">
                  {stats.map((item, index) => (
                    <div
                      key={index}
                      className="hero-stat-card flex items-center gap-3.5"
                    >
                      <div className="flex items-center justify-center border border-[#1E62EC]/50 bg-[#1E62EC]/10 rounded-full w-10 h-10 lg:w-11 lg:h-11 shrink-0">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-5 h-5 lg:w-5.5 lg:h-5.5 object-contain"
                          style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(83%) saturate(3474%) hue-rotate(213deg) brightness(97%) contrast(91%)' }}
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <h3 className="text-white text-base lg:text-lg xl:text-xl font-extrabold leading-none whitespace-nowrap">
                          <span className="stat-number" data-target={item.target} data-suffix={item.suffix}>0{item.suffix}</span>
                        </h3>
                        <p className="text-white/75 text-xs lg:text-sm font-semibold leading-none mt-1 whitespace-nowrap">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="hero-desc text-white/70 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
                  {HERO_CONTENT.subText}
                </p>
              </div>

              {/* Right Column: NPF Form Container */}
              <div className="hero-form-container w-full md:w-[32%] flex justify-center md:justify-end">
                <div className="w-full max-w-md bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex flex-col">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      id="desktop-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter Name"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <input
                      id="desktop-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Email Address"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <input
                      id="desktop-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter Mobile Number"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <select
                      id="desktop-course"
                      name="course"
                      className="w-full h-10 bg-[#000B2E]/90 border border-white/10 focus:border-white/30 focus:bg-[#000B2E]/10 transition-all rounded-lg px-3 text-white/70 text-xs outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Course</option>
                      <option value="btech-ai-ds">B.Tech (AI & Data Science)</option>
                      <option value="btech-cyber-cloud">B.Tech (Cyber Security & Cloud Technology)</option>
                    </select>
                    <button className="w-full bg-linear-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] py-2.5 rounded-lg text-white font-bold text-sm tracking-wider shadow-lg active:scale-[0.98] transition-all">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

