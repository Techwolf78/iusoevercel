import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const APPLY_CONTENT = {
  mainHeading: "How to Apply for B.Tech at Indira University, Pune",
  steps: [
    "Fill the online application form",
    "Upload qualifying examination marksheets and entrance exam scores",
    "Pay the application fee online",
    "Participate in counselling (if applicable)",
    "Confirm your admission after seat allocation"
  ],
  eligibilityHeading: "Eligibility Criteria – B.Tech in AI & Data Science",
  criteria: [
    "Passed 10+2 (HSC) with Physics, Chemistry & Mathematics (PCM) or Physics, Chemistry & Biology (PCB)",
    "Minimum 45% aggregate in qualifying examination (40% for reserved categories)",
    "Valid score in MHT-CET / JEE Main / SAT / IUCET"
  ]
};

const STEP_TITLES = [
  "Online Application",
  "Document Upload",
  "Fee Payment",
  "Counselling Process",
  "Admission Confirmation"
];

const STEP_ICONS = [
  // 1. Laptop/Form
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>,
  // 2. Upload
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
  </svg>,
  // 3. Card/Payment
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
  </svg>,
  // 4. Chat/Discussion
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>,
  // 5. Success/Checkmark
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
];

function ApplyProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading reveals
      gsap.fromTo(
        ".apply-heading",
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

      // Desktop Progress Line
      gsap.to(".timeline-progress-line", {
        width: "calc(100% - 64px)",
        ease: "none",
        scrollTrigger: {
          trigger: ".apply-timeline-container",
          start: "top 70%",
          end: "bottom 60%",
          scrub: true
        }
      });

      // Desktop Steps scaling/highlighting
      const steps = gsap.utils.toArray(".timeline-step");
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { scale: 0.8, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "bottom 55%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Mobile Progress Line
      gsap.to(".timeline-progress-line-mobile", {
        height: "calc(100% - 48px)",
        ease: "none",
        scrollTrigger: {
          trigger: ".apply-timeline-container-mobile",
          start: "top 75%",
          end: "bottom 65%",
          scrub: true
        }
      });

      // Mobile Steps scaling
      const mobileSteps = gsap.utils.toArray(".timeline-step-mobile");
      mobileSteps.forEach((step) => {
        gsap.fromTo(
          step,
          { scale: 0.8, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
      {/* Main Heading */}
      <div className="apply-heading flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000B2E] text-center tracking-tight">
          B.Tech Admission <span className="text-[#A80B2C]">Open For 2026-2027</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2 mb-12 text-center font-medium">
          {APPLY_CONTENT.mainHeading}
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT (Vertical timeline)
      ═══════════════════════════════════════════ */}
      <div className="relative md:hidden flex flex-col items-stretch w-full max-w-md mx-auto space-y-8 pl-2 apply-timeline-container-mobile">
        {/* Vertical timeline line */}
        <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gray-200"></div>
        {/* Active vertical colored line */}
        <div className="absolute left-[30px] top-6 w-[2px] bg-linear-to-b from-[#A80B2C] to-[#0A1633] timeline-progress-line-mobile" style={{ height: '0%' }}></div>

        {APPLY_CONTENT.steps.map((stepText, idx) => {
          const isEven = idx % 2 === 0;
          const bgColor = isEven ? "bg-[#A80B2C]" : "bg-[#0A1633]";
          return (
            <div key={idx} className="timeline-step-mobile relative flex items-start gap-4">
              {/* Circular Badge with Halo */}
              <div className={`relative z-10 w-11 h-11 rounded-full ${bgColor} border-2 border-white ring-4 ring-gray-100 flex items-center justify-center shrink-0 shadow-md`}>
                <div className="transform scale-75">
                  {STEP_ICONS[idx]}
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col pt-1">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                  Step {idx + 1}:
                </span>
                <h4 className="text-[#000B2E] text-sm font-extrabold leading-tight">
                  {STEP_TITLES[idx]}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {stepText}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT (Horizontal timeline)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex relative w-full max-w-6xl mx-auto items-start justify-between apply-timeline-container">
        {/* Connecting Horizontal Line */}
        <div className="absolute left-8 right-8 top-8 h-[2px] bg-gray-200 z-0"></div>
        {/* Active colored line drawing */}
        <div className="absolute left-8 top-8 h-[2px] bg-linear-to-r from-[#A80B2C] to-[#0A1633] z-0 timeline-progress-line" style={{ width: '0%' }}></div>

        {APPLY_CONTENT.steps.map((stepText, idx) => {
          const isEven = idx % 2 === 0;
          const bgColor = isEven ? "bg-[#A80B2C]" : "bg-[#0A1633]";
          return (
            <div key={idx} className="timeline-step relative z-10 flex flex-col items-center text-center w-[180px] lg:w-[210px] px-2">
              {/* Circular Badge with Halo */}
              <div className={`w-16 h-16 rounded-full ${bgColor} border-4 border-white ring-8 ring-white shadow-xl flex items-center justify-center shrink-0 mb-4 transition-all duration-300 hover:scale-110`}>
                {STEP_ICONS[idx]}
              </div>

              {/* Step Label */}
              <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Step {idx + 1}:
              </span>
              
              {/* Step Title */}
              <h4 className="text-[#000B2E] text-sm lg:text-base font-bold mt-1 leading-snug">
                {STEP_TITLES[idx]}
              </h4>
              
              {/* Description */}
              <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[170px]">
                {stepText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ApplyProcess;
