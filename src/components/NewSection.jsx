
import event1 from "../assets/Events/event3.avif";
import event2 from "../assets/Events/BParak.avif";
import event3 from "../assets/Events/IWA2.avif";
import event4 from "../assets/Events/event4.avif";
import event5 from "../assets/Events/event5.avif";

const NewSection = () => {
  const events = [
    { id: 1, name: "event1", image: event1 },
    { id: 2, name: "BParak", image: event2 },
    { id: 3, name: "IWA2", image: event3 },
    { id: 4, name: "event4", image: event4 },
    { id: 5, name: "event5", image: event5 },
  ];

  return (
    <section className="w-full bg-transparent pt-12 pb-2 md:pt-16 md:pb-4 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Paragraph above Horizontal Line */}
        <div className="border-b-2 border-white/10 pb-8 mb-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Campus Highlights</h2>
          <p className="text-sm md:text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Indira's engineering campus offers smart classrooms, innovation and entrepreneurship centre for student startups, AC hostels with Wi-Fi, sports complex, and a 24/7 medical centre. Our dedicated placement cell and modern auditorium make you industry-ready.
          </p>
        </div>

        {/* Main Content: Flex column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Side: Text content */}
          <div className="w-full md:w-[40%] space-y-6 order-1 md:order-1">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Events &amp; Annual Celebrations
            </h3>
            <p className="text-sm md:text-lg text-slate-200 leading-relaxed text-justify">
              Experience TechFest with coding competitions, robotics battles, and AI hackathons. Attend industry conclaves with corporate leaders, placement drives with 350+ top recruiters, and hands-on workshops in AI, cloud computing, and DevOps. Enjoy cultural festivals, fresher's induction, farewell parties, and sports tournaments. Alumni success stories prove the impact.
            </p>
          </div>

          {/* Right Side: Photo grid */}
          <div className="w-full md:w-[60%] order-2 md:order-2">
            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {events.map((ev, i) => (
                <div
                  key={ev.id}
                  className={`overflow-hidden rounded-xl shadow ${i === 4 ? "col-span-2" : ""
                    }`}
                >
                  <img
                    src={ev.image}
                    alt={ev.name}
                    className={`w-full h-40 object-cover ${ev.id === 5 ? "object-top" : ""}`}
                  />
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
                <img src={events[0].image} alt={events[0].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[1].image} alt={events[1].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[2].image} alt={events[2].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[3].image} alt={events[3].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[4].image} alt={events[4].name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;