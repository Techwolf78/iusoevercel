import React from "react";
import {
  FaRegClock,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

/* ---------------- DATA ---------------- */

const POINTERS_DATA = [
  {
    id: 1,
    title: "Duration",
    value: (
      <>
        BBA - 3 yrs <br /> Hons. - 4 yrs
      </>
    ),
    icon: FaRegClock,
  },
  {
    id: 3,
    title: "Highest CTC",
    value: "9 LPA",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "300+",
    value: "Top Recruiters",
    icon: FaUserTie,
  },
  {
    id: 5,
    title: "100%",
    value: "Placement Assistance",
    icon: FaCheckCircle,
  },
];

/* ---------------- COMPONENT ---------------- */

function CourseDetails() {
  return (
    <div className="w-full px-6 py-8 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {POINTERS_DATA.map(({ id, title, value, icon: Icon }) => (
          <div
            key={id}
            className="w-full bg-[#F6FBFF] p-6 shadow-md flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]"
          >
            <Icon size={34} className="text-[#790D20]" />

            <h2 className="text-xl md:text-2xl font-semibold mt-3 text-center">
              {title}
            </h2>

            <p className="text-lg md:text-xl text-center mt-2">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;