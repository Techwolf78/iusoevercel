import IUlogo from "../assets/IULogo.png";
import HeroBg from "../assets/HeroImg.png";

import Icon1 from "../assets/icon5.png";
import Icon2 from "../assets/icon6.png";
import Icon3 from "../assets/icon7.png";
import Icon4 from "../assets/icon8.png";

const stats = [
  { icon: Icon1, title: "20+", subtitle: "Years of Engineering Legacy" },
  { icon: Icon2, title: "350+", subtitle: "Top Recruiters" },
  { icon: Icon3, title: "100%", subtitle: "Guaranteed Placement Opportunities" },
  { icon: Icon4, title: "27 LPA", subtitle: "Highest CTC" },
];

const HERO_CONTENT = {
  limitedSeats: "LIMITED SEATS",
  heading: [
    "India's First Domain Specific",
    "Industry Led Programme"
  ],
  description: " Get directly mentored by Industry Experts  ",
  subText: (
    <>
      Enrol for <span className="font-bold text-[#E3003A]">B.Tech in CSE</span> under <span className="font-bold text-[#E3003A]">School of Engineering (SOE)</span> to be a part of the Exclusive Coder's Club
    </>
  ),
  admissionTag: "Admission open for 2026-2027",
  buttons: {
    apply: "APPLY NOW",
    brochure: "Download brochure",
  }
};

const Hero = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-auto">
          {/* Navbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#000B2E]">
            <img src={IUlogo} alt="IU Logo" className="h-13 object-contain" />
            <div className="border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white text-[10px] font-semibold tracking-wide">
              {HERO_CONTENT.limitedSeats}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col justify-center items-center text-center px-5 py-8">
            {/* Heading */}
            <h1 className="text-white font-bold leading-tight text-[18px] sm:text-2xl">
              {HERO_CONTENT.heading.map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mt-4">
              {HERO_CONTENT.description}
            </p>

            {/* Subtext */}
            <p className="text-white/60 text-xs leading-relaxed mt-2">
              {HERO_CONTENT.subText}
            </p>

            {/* Admission tag */}
            <div className="mt-4 inline-flex items-center self-center bg-[#C00433] text-white px-4 py-1.5 rounded-lg shadow-lg font-semibold text-xs">
              {HERO_CONTENT.admissionTag}
            </div>

            {/* NPF Form Container for Mobile */}
            <div className="mt-5 w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
              <div id="npf-mobile-form" className="w-full">
                <h3 className="text-white text-xs font-bold mb-3 text-center">Admission Enquiry 2026-27</h3>
                <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full h-9 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                  />
                  <select
                    className="w-full h-9 bg-[#000B2E]/90 border border-white/10 focus:border-white/30 focus:bg-[#000B2E]/10 transition-all rounded-lg px-3 text-white/70 text-xs outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="btech-ai-ds">B.Tech (AI & Data Science)</option>
                    <option value="btech-cyber-cloud">B.Tech (Cyber Security & Cloud Technology)</option>
                  </select>
                  <button className="w-full bg-[#E3003A] hover:bg-[#c00032] py-2 rounded-lg text-white font-bold text-[11px] tracking-wider active:scale-[0.98] transition-all">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Stats for Mobile (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2 mt-4 w-full max-w-sm">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 object-contain flex-shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <h3 className="text-[#FF0700] text-xs font-extrabold leading-none whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[8px] leading-tight mt-0.5 max-w-[100px]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full min-h-screen relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navbar */}
          <div className="w-full flex items-center justify-between px-5 md:px-10 py-4 md:py-5 bg-[#000B2E]">
            <img
              src={IUlogo}
              alt="IU Logo"
              className="h-18 md:h-22 object-contain"
            />
            <div className="border border-white/20 bg-white/10 px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold">
              {HERO_CONTENT.limitedSeats}
            </div>
          </div>

          {/* Hero Body */}
          <div className="flex-1 flex items-center px-5 md:px-16 py-8 md:py-12">
            <div className="w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16">

              {/* Left Column: Text & Stats */}
              <div className="w-full md:w-[58%] flex flex-col items-center md:items-start text-center md:text-left">
                {/* Heading */}
                <h1 className="text-white font-bold leading-tight text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {HERO_CONTENT.heading.map((line, index) => (
                    <span key={index} className="block md:whitespace-nowrap">{line}</span>
                  ))}
                </h1>

                {/* Description */}
                <p className="text-white/90 text-sm sm:text-base md:text-xl mt-4 leading-relaxed">
                  {HERO_CONTENT.description}
                </p>

                {/* Subtext */}
                <p className="text-white/70 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
                  {HERO_CONTENT.subText}
                </p>

                {/* Admission Tag */}
                <p className="mt-6 text-sm sm:text-base md:text-lg bg-[#C00433] text-white px-4 py-1.5 rounded-xl inline-block font-semibold w-fit">
                  {HERO_CONTENT.admissionTag}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-8 border-t border-white/10 pt-6 w-full">
                  {stats.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-9 h-9 lg:w-11 lg:h-11 object-contain flex-shrink-0"
                      />
                      <div className="flex flex-col text-left">
                        <h3 className="text-[#FF0700] text-sm md:text-base lg:text-lg xl:text-xl font-extrabold leading-none whitespace-nowrap">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-[9px] lg:text-xs leading-snug mt-1 max-w-[110px] lg:max-w-[140px]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: NPF Form Container */}
              <div className="w-full md:w-[42%] flex justify-center md:justify-end">
                <div className="w-full max-w-md bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex flex-col">
                  <h3 className="text-white text-lg font-bold mb-4 text-center">
                    Admission Enquiry 2026-27
                  </h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      className="w-full h-10 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg px-3 text-white text-xs outline-none placeholder:text-white/40"
                    />
                    <select
                      className="w-full h-10 bg-[#000B2E]/90 border border-white/10 focus:border-white/30 focus:bg-[#000B2E]/10 transition-all rounded-lg px-3 text-white/70 text-xs outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Course</option>
                      <option value="btech-ai-ds">B.Tech (AI & Data Science)</option>
                      <option value="btech-cyber-cloud">B.Tech (Cyber Security & Cloud Technology)</option>
                    </select>
                    <button className="w-full bg-[#E3003A] hover:bg-[#c00032] py-2.5 rounded-lg text-white font-bold text-sm tracking-wider shadow-lg active:scale-[0.98] transition-all">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
