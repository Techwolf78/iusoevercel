
import club3 from "../assets/Events/club2.avif";
import club2 from "../assets/Events/club1.avif";
import club1 from "../assets/Events/club3.avif";
import club5 from "../assets/Events/club4.avif";
import club4 from "../assets/Events/club5.avif";

const StudentClubsSection = () => {
  const clubs = [
    { id: 1, name: "club1", image: club1 },
    { id: 2, name: "club2", image: club2 },
    { id: 3, name: "club3", image: club3 },
    { id: 4, name: "club4", image: club4 },
    { id: 5, name: "club5", image: club5 },
  ];

  return (
    <section className="w-full bg-transparent pt-4 pb-12 md:pt-6 md:pb-16 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Divider Line with Red Gradient */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#8B0035] to-transparent mb-6 opacity-15" />

        {/* Main Content: Flex column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Side: Text content */}
          <div className="w-full md:w-[40%] space-y-6 order-1 md:order-1">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Engineering Student Clubs
            </h3>
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-slate-200 leading-relaxed">
                Opportunities to learn, lead, compete, and grow holistically through our exclusive clubs:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  "Coder's Club",
                  "Quant Club",
                  "Hackathon Club",
                  "Swakiyam Foundation for Incubation and Innovation"
                ].map((club, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm md:text-base">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1E62EC] shadow-[0_0_6px_#1E62EC]" />
                    <span className="font-semibold leading-tight">{club}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Photo grid */}
          <div className="w-full md:w-[60%] order-2 md:order-2">
            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {clubs.map((c, i) => (
                <div
                  key={c.id}
                  className={`overflow-hidden rounded-xl shadow ${i === 4 ? "col-span-2" : ""
                    }`}
                >
                  <img src={c.image} alt={c.name} className="w-full h-40 object-cover" loading="lazy" />
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
                <img src={clubs[1].image} alt={clubs[1].name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[0].image} alt={clubs[0].name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[2].image} alt={clubs[2].name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[3].image} alt={clubs[3].name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[4].image} alt={clubs[4].name} className="w-full h-full object-cover" style={{ objectPosition: "center 18%" }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentClubsSection;