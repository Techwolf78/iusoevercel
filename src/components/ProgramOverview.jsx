import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ai from "../assets/Ai.avif";
import Cyber from "../assets/Cyber.avif";
import {
  FaRegClock,
  
  
  
  FaGraduationCap,
  FaCreditCard,
} from "react-icons/fa";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PROGRAM_CONTENT = {
  sectionTitle: "B.Tech in Computer Science & Engineering",
  sectionSubtitle: "Programme Overview",
  sectionDesc: "The B.Tech in Computer Science & Engineering at Indira University blends core engineering principles with advanced computing technologies, creating a learning environment where innovation, problem-solving, and industry readiness go hand in hand.",
  specialisations: [
    {
      title: "B.Tech in Artificial Intelligence & Data Science",
      bgImage: Ai,
      description: "Prepares students to build intelligent, data-driven solutions for the evolving digital economy. Through practical learning, advanced analytics, and emerging AI technologies, students gain expertise to create smart systems and drive innovation across industries.",
      points: [
        "Artificial Intelligence & Machine Learning",
        "DevOps Engineering",
        "Deep Learning & Neural Networks",
        "Big Data Analytics & Data Engineering",
        "Computer Vision & Image Processing",
        "Generative AI & Large Language Models (LLMs)",
      ]
    },
    {
      title: "B.Tech in Cyber Security & Cloud Technology",
      bgImage: Cyber,
      description: "Prepares students to become next-generation cyber defenders and cloud security professionals in an increasingly connected digital world. Through hands-on learning, real-world simulations, and advanced security practices, students gain expertise in protecting systems, networks, cloud platforms, and digital infrastructure.",
      points: [
        "Operating System Security",
        "Cyber Law & Cyber Policy",
        "Penetration Testing & Vulnerability Assessment",
        "Digital Forensics",
        "Cloud Computing Architecture",
        "Cloud Infrastructure & Services",
        "Cloud Security & Governance",
      ]
    }
  ]
};

const POINTERS_DATA = [
  {
    id: 1,
    title: "Duration",
    value: "4 Years (8 Semesters)",
    icon: FaRegClock,
  },
  {
    id: 2,
    title: "Study Mode",
    value: "Full-Time",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    title: "Fees",
    value: "2,50,000 per year",
    icon: FaCreditCard,
  },
];

const ProgramOverview = () => {
  const containerRef = useRef(null);

  const handleApplyClick = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".program-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Pointers staggered entrance
      gsap.fromTo(
        ".program-pointer",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".program-pointers-grid",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Course card background parallax
      gsap.utils.toArray(".program-spec-bg").forEach((bg) => {
        gsap.fromTo(bg, 
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: bg.closest(".program-spec-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white py-2 md:py-8 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Top Section */}
      <div className="program-title mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] mb-4 md:mb-6 leading-tight">
          {PROGRAM_CONTENT.sectionSubtitle}
          <span className="block text-[#990000] text-lg md:text-2xl font-bold uppercase tracking-wider mb-2">
            {PROGRAM_CONTENT.sectionTitle}
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
          {PROGRAM_CONTENT.sectionDesc}
        </p>
      </div>

      <div className="program-pointers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-6">
        {POINTERS_DATA.map(({ id, title, value, icon: Icon }) => (
          <div
            key={id}
            className="program-pointer w-full bg-[#F6FBFF] p-6 shadow-md flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]"
          >
            <Icon size={34} className="text-[#790D20]" />

            <h2 className="text-base md:text-lg font-bold mt-3 text-center text-slate-800">
              {title}
            </h2>

            <p className="text-sm md:text-base text-center mt-2 text-slate-600 font-semibold">
              {value}
            </p>
          </div>
        ))}
      </div>

      {PROGRAM_CONTENT.specialisations.map((spec, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className="mb-8 last:mb-6">
            {/* Desktop Course Box */}
            <div
              className="program-spec-card hidden md:flex w-full min-h-[45vh] rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative py-8 md:py-10"
            >
              {/* Inner container to handle background image and gradient clipping */}
              <div className="absolute inset-0 rounded-tl-[2.5rem] rounded-br-[2.5rem] overflow-hidden z-0 pointer-events-none bg-[#071A8C]">
                {/* Background Image */}
                <div
                  className="program-spec-bg absolute inset-0 bg-cover bg-top"
                  style={{ backgroundImage: `url(${spec.bgImage})` }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 ${isEven
                    ? "bg-linear-to-r from-[#071A8C]/95 via-[#071A8C]/75 to-transparent"
                    : "bg-linear-to-l from-[#071A8C]/95 via-[#071A8C]/75 to-transparent"
                    }`}
                />
              </div>

              {/* Study Mode Info Panel for Cyber (Odd Index) */}
              {!isEven && (
                <div className="relative z-10 w-[40%] h-full flex flex-col justify-center items-start text-white pl-8 md:pl-12 lg:pl-16 select-none">
                  <div className="text-left bg-black/20 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl max-w-[240px]">
                    <p className="text-white/70 text-xs md:text-sm tracking-wide font-medium">Study Mode</p>
                    <p className="text-white font-bold text-sm md:text-base mb-3">Full-Time</p>
                    <p className="text-white/70 text-xs md:text-sm tracking-wide font-medium">Duration</p>
                    <p className="text-white font-bold text-sm md:text-base">4 Years (8 Semesters)</p>
                  </div>
                </div>
              )}

              <div className="relative z-10 w-[60%] h-full flex flex-col justify-center px-8 md:px-12">
                <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">
                  {spec.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mt-3 mb-4 leading-relaxed text-justify">
                  {spec.description}
                </p>
                <ul className="space-y-1">
                  {spec.points.map((point, i) => (
                    <li key={i} className="text-white text-xs md:text-base">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Mode Info Panel for AI (Even Index) */}
              {isEven && (
                <div className="relative z-10 w-[40%] h-full flex flex-col justify-center items-end text-white pr-8 md:pr-12 lg:pr-16 select-none">
                  <div className="text-left md:text-right bg-black/20 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl max-w-[240px]">
                    <p className="text-white/70 text-xs md:text-sm tracking-wide font-medium">Study Mode</p>
                    <p className="text-white font-bold text-sm md:text-base mb-3">Full-Time</p>
                    <p className="text-white/70 text-xs md:text-sm tracking-wide font-medium">Duration</p>
                    <p className="text-white font-bold text-sm md:text-base">4 Years (8 Semesters)</p>
                  </div>
                </div>
              )}

              {/* Desktop Apply Button overlapping bottom border */}
              <button
                onClick={handleApplyClick}
                className={`absolute bottom-0 ${isEven ? "right-12" : "left-12"
                  } transform translate-y-1/2 bg-linear-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] hover:scale-105 active:scale-95 transition-all duration-300 text-white font-bold text-xs md:text-sm tracking-wider px-6 py-2.5 rounded-lg shadow-[0_4px_15px_rgba(194,22,59,0.35)] flex items-center gap-2 z-20`}
              >
                APPLY NOW
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Course Card */}
            <div
              className="block md:hidden w-full rounded-tl-4xl rounded-br-4xl relative shadow-md pb-8 overflow-hidden bg-[#071A8C]"
            >
              {/* Inner container to handle background image and gradient clipping */}
              <div className="absolute inset-0 rounded-tl-4xl rounded-br-4xl overflow-hidden z-0 pointer-events-none">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-top"
                  style={{ backgroundImage: `url(${spec.bgImage})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#071A8C]/90 via-[#071A8C]/70 to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <h2 className="text-white text-lg font-bold leading-tight mb-2">
                  {spec.title}
                </h2>
                <p className="text-white/85 text-xs mb-4 leading-relaxed text-justify">
                  {spec.description}
                </p>
                <ul className="space-y-1 mb-5">
                  {spec.points.map((point, i) => (
                    <li key={i} className="text-white text-xs">
                      • {point}
                    </li>
                  ))}
                </ul>

                {/* Additional Study Info on Mobile */}
                <div className="flex justify-between border-t border-white/20 pt-4 mb-4 text-white">
                  <div>
                    <p className="text-white/60 text-[10px] uppercase font-medium">Study Mode</p>
                    <p className="text-white font-bold text-xs">Full-Time</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase font-medium">Duration</p>
                    <p className="text-white font-bold text-xs">4 Years (8 Sem)</p>
                  </div>
                </div>
              </div>

              {/* Mobile Apply Button overlapping bottom border */}
              <button
                onClick={handleApplyClick}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-linear-to-r from-[#C2163B] to-[#7B0D2B] hover:from-[#d61e47] hover:to-[#911235] active:scale-95 transition-all duration-300 text-white font-bold text-xs tracking-wider px-6 py-2 rounded-lg shadow-[0_4px_15px_rgba(194,22,59,0.35)] flex items-center gap-1.5 z-20 whitespace-nowrap"
              >
                APPLY NOW
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProgramOverview;

