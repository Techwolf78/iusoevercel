import { useEffect, useRef, useState } from "react";
import img1 from "../assets/16.avif";
import img2 from "../assets/17.avif";
import img3 from "../assets/18.avif";
import img4 from "../assets/19.avif";
import img5 from "../assets/20.avif";
import img6 from "../assets/21.avif";
import img7 from "../assets/22.avif";

const students = [
  {
    name: "Mr. Shwetank Upadhyay",
    company: "CTC 27 LPA",
    feedback: "Indira's rigorous curriculum and guidance helped me achieve this milestone.",
    image: img2,
  },
  {
    name: "Mr. Vishwajeet Ranaware",
    company: "CTC 21 LPA",
    feedback: "The practical exposure and expert faculty mentoring were instrumental.",
    image: img1,
  },
  {
    name: "Mr. Amitsingh Tanwar",
    company: "CTC 21 LPA",
    feedback: "Extremely grateful for the continuous support and placement training.",
    image: img3,
  },
  {
    name: "Ms. Poornima Theurkar",
    company: "CTC 21 LPA",
    feedback: "The learning-by-doing approach here prepared me for the best opportunities.",
    image: img5,
  },
  {
    name: "Mr. Kushal Swamy",
    company: "CTC 21 LPA",
    feedback: "A perfect platform for engineering students to hone their professional skills.",
    image: img4,
  },
  {
    name: "Mr. Siddhant Kadam",
    company: "CTC 27 LPA",
    feedback: "Comprehensive training and mock interviews made the placement process seamless.",
    image: img7,
  },
  {
    name: "Ms. Komal Verma",
    company: "CTC 26 LPA",
    feedback: "Indira's industry connections paved the way for great career opportunities.",
    image: img6,
  },
];

const TopPlacements = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 1;

    const animate = () => {
      if (!isHovered) {
        positionRef.current -= speed;

        if (Math.abs(positionRef.current) >= slider.scrollWidth / 2) {
          positionRef.current = 0;
        }

        slider.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <div className="px-4 md:px-16 py-8 bg-[#F6FBFF] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_3.7fr] gap-10 items-center">
        {/* LEFT CONTENT (SMALLER) */}
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <div className="text-black">Indira University’s Top Placed Students</div>
            <div className="h-4"></div>
          </h2>

          <p className="text-black/90 text-lg md:text-xl mt-4">
            From our campus to the world’s leading companies, our students secure top placements with strong industry exposure.
          </p>
        </div>

        {/* RIGHT SLIDER (BIGGER) */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={sliderRef} className="flex w-max">
            {[...students, ...students].map((student, i) => (
              <div
                key={i}
                className="mx-3 shrink-0 w-[55vw] sm:w-[40vw] md:w-[26vw] lg:w-[16vw]"
              >
                <div className="group overflow-hidden">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-white">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />


                  </div>

                  {/* NAME + COMPANY */}
                  <div className="pt-3 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-black">
                      {student.name}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-white bg-[#011E5A] py-1">
                      {student.company || "Placement Achieved"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlacements;
