import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WHY_CHOOSE_CONTENT = {
  title: "Why Choose the School of Engineering at Indira University?",
  features: [
    {
      title: "Learn Directly from Industry Experts of Each Domain",
    },
    {
      title: "Experiential Learning & Project-Based Education",
    },
    {
      title: "Industry-Aligned Curriculum with Emerging Technologies",
    },
    {
      title: "Innovation & Startup Ecosystem Support",
    },
    {
      title: "Strong Industry Connect & Placement Support",
    },
    {
      title: "Modern Computing Infrastructure & Smart Labs",
    },
    {
      title: "Earn professional certifications in every semester",
    },
    {
      title: "Opportunity to learn and grow at the heart of Pune city",
    },
    {
      title: "Holistic Development with Events, Student Clubs and Co-curricular activities",
    },
  ],
};

function WhyChooseEngineering() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading animates in
      gsap.fromTo(
        ".why-choose-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards animate with a stagger
      gsap.fromTo(
        ".why-choose-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-choose-card-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-linear-to-b from-[#01051F] via-[#14002E] to-[#8B0035] py-12 px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="why-choose-title text-white text-xl font-bold leading-tight">
            {WHY_CHOOSE_CONTENT.title}
          </h2>
        </div>

        {/* Cards — 2 columns on mobile */}
        <div className="why-choose-card-grid grid grid-cols-2 gap-3">
          {WHY_CHOOSE_CONTENT.features.map((feature, index) => {
            const isLast = index === WHY_CHOOSE_CONTENT.features.length - 1;
            return (
              <div
                key={index}
                className={`why-choose-card border border-[#1D5DFF]/30 bg-white/5 rounded-2xl p-3 flex flex-col items-center justify-center text-center h-[110px] ${isLast ? "col-span-2" : ""
                  }`}
              >
                <h3 className="text-white text-[11px] font-bold leading-snug">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-linear-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-4 md:py-8  px-6 md:px-12 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="why-choose-title text-white text-2xl md:text-4xl font-bold leading-tight">
            {WHY_CHOOSE_CONTENT.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="why-choose-card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {WHY_CHOOSE_CONTENT.features.map((feature, index) => {
            return (
              <div
                key={index}
                className="why-choose-card min-h-[100px] border border-[#1D5DFF]/30 bg-white/5 rounded-2xl
                           p-6 flex flex-col items-center justify-center
                           transition-all duration-300 hover:border-[#1E62EC] hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(30,98,236,0.15)]"
              >
                <h3 className="text-white text-base font-bold leading-snug text-center">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default WhyChooseEngineering;
