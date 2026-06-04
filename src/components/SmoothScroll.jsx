import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    // Synchronize ScrollTrigger with Lenis updates
    lenis.on("scroll", ScrollTrigger.update);

    // Feed Lenis frame rate loop into GSAP ticker
    const updateGsap = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGsap);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return children;
}

