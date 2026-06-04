import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LazyImage } from "./LazyLoad";

import overviewImg from "../assets/IU.avif";

const ABOUT_CONTENT = {
  title: "About the School of Engineering – Indira University",
  paragraphs: [
    "With 31+ years of Indira University's legacy and two decades of engineering excellence, the School of Engineering (SOE) is designed to cultivate technically adept, ethically grounded, and industry-ready engineers. Our flagship B.Tech in Computer Science & Engineering bridges strong engineering fundamentals with the rapidly evolving demands of today's technology-driven world.",
  ],
};

function AboutUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left side text animation
      gsap.fromTo(
        ".about-text",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Right side image wrapper animation
      gsap.fromTo(
        ".about-image-wrapper",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Image parallax scrolling
      gsap.to(".about-img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-12 md:py-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="about-text w-full md:w-[45%] space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold text-[#000B24] leading-tight">
            {ABOUT_CONTENT.title}
          </h2>

          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
            {ABOUT_CONTENT.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Image Container with Overlay */}
        <div className="about-image-wrapper w-full md:w-[55%] relative flex items-center justify-center">
          {/* Main Image */}
          <div className="w-full h-[280px] md:h-[380px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-lg border border-slate-100">
            <LazyImage
              src={overviewImg}
              alt="School of Engineering Overview"
              className="about-img w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
