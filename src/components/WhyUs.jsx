
import {
  FaBookOpen,
  FaLightbulb,
  FaMicroscope,
  FaRocket,
  FaUsers,
  FaCogs,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const benefits = [
  {
    title: "Industry-Aligned Curriculum with Emerging Technologies",
    icon: FaBookOpen,
  },
  {
    title: "Experiential Learning & Project-Based Education",
    icon: FaLaptopCode,
  },
  {
    title: "AI, Data Science & Cyber Security Focused Learning Tracks",
    icon: FaCogs,
  },
  {
    title: "Innovation & Startup Ecosystem Support",
    icon: FaRocket,
  },
  {
    title: "Strong Industry Connect & Placement Support",
    icon: FaUsers,
  },
  {
    title: "Research-Driven Learning Environment",
    icon: FaMicroscope,
  },
  {
    title: "Modern Computing Infrastructure & Smart Labs",
    icon: FaLightbulb,
  },
  {
    title: "Holistic Development with Leadership & Communication Skills",
    icon: FaGraduationCap,
  },
];

const WhyUs = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="w-full">
        <h2 className="text-3xl md:text-5xl font-serif text-[#000B24] mb-12 text-center ">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#011E5A] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center min-h-[160px] transition-transform hover:scale-105"
            >
              <benefit.icon className="text-white text-3xl mb-4" />
              <p className="text-white font-medium text-sm md:text-base leading-snug">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
