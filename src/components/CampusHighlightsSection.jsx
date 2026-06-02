import React from "react";
import facilities1 from "../assets/Events/facilities1.jpg";
import facilities2 from "../assets/Events/facilities2.jpg";
import facilities3 from "../assets/Events/facilities3.jpg";
import facilities4 from "../assets/Events/facilities4.jpg";
import facilities5 from "../assets/Events/facilities5.jpg";

const CampusHighlightsSection = () => {
  const facilities = [
    { id: 1, name: "facilities1", image: facilities1 },
    { id: 2, name: "facilities2", image: facilities2 },
    { id: 3, name: "facilities3", image: facilities3 },
    { id: 4, name: "facilities4", image: facilities4 },
    { id: 5, name: "facilities5", image: facilities5 },
  ];

  return (
    <section className="w-full bg-transparent py-12 md:py-16 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Divider Line with Red Gradient */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B0035] to-transparent mb-10 opacity-15" />

        {/* Main Content: Flex column on mobile (text then image), Row on desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

          {/* Text Content: order-1 on mobile, order-2 on desktop */}
          <div className="w-full md:w-[40%] space-y-6 order-1 md:order-2">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Campus Facilities &amp; Infrastructure
            </h3>
            <p className="text-sm md:text-lg text-slate-200 leading-relaxed text-justify">
              Smart classrooms, computer labs, library with e-resources,
              Innovation and Entrepreneurship Center for startups, AC hostels
              with Wi-Fi, cafeteria, sports complex, gymnasium, medical center,
              placement cell, and modern auditorium for comprehensive BBA
              education in Pune.
            </p>
          </div>

          {/* Photo Grid: order-2 on mobile, order-1 on desktop */}
          <div className="w-full md:w-[60%] order-2 md:order-1">
            {/* Mobile Grid (2 columns, 5th image takes full width) */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {facilities.map((f, i) => (
                <div
                  key={f.id}
                  className={`overflow-hidden rounded-xl shadow ${i === 4 ? "col-span-2" : ""
                    }`}
                >
                  <img src={f.image} alt={f.name} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div
              className="hidden md:grid w-full gap-2 h-[450px]"
              style={{
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(10, 1fr)",
              }}
            >
              <div style={{ gridColumn: "1 / span 4", gridRow: "1 / span 4" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[0].image} alt={facilities[0].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[1].image} alt={facilities[1].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[2].image} alt={facilities[2].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[3].image} alt={facilities[3].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[4].image} alt={facilities[4].name} className="w-full h-full object-cover animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusHighlightsSection;