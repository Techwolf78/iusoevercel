

// Dynamically import all logos directly from the src/assets/Logo folder (excluding logo 44)
const logoModules = import.meta.glob("../assets/Logo/*.avif", { eager: true });
const logos = Object.entries(logoModules)
  .filter(([path]) => !path.endsWith("/44.avif"))
  .map(([, mod]) => mod.default);

const RECRUITERS_CONTENT = {
  title: "INDIRA'S TOP RECRUITERS",
  description: "Trusted by 350+ Leading Recruiters of India"
};

const TopRecruiters = () => {
  // Split the loaded logos into 3 rows for the desktop marquee
  const itemsPerRow = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, itemsPerRow);
  const row2 = logos.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = logos.slice(itemsPerRow * 2);

  // Helper to repeat the logo array to fill the screen width and enable seamless loop
  const repeatToFill = (arr) => {
    if (!arr || arr.length === 0) return [];
    return Array(6).fill(arr).flat();
  };

  return (
    <section className="w-full bg-linear-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-4 md:py-8 px-4 overflow-hidden">
      <div className="w-full text-center mb-8 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
          {RECRUITERS_CONTENT.title}
        </h2>
        <p className="text-gray-200 text-md md:text-2xl font-medium leading-relaxed opacity-90">
          {RECRUITERS_CONTENT.description}
        </p>
      </div>

      {/* MOBILE GRID VIEW */}
      <div className="block md:hidden">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
          {logos.map((logo, index) => (
            <div
              key={`grid-${index}`}
              className="bg-white rounded-lg flex items-center justify-center p-2 h-[55px] shadow-md"
            >
              <img
                src={logo}
                alt="Recruiter Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP MARQUEE VIEW */}
      <div className="hidden md:block space-y-2">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-4 items-center py-2">
            {repeatToFill(row1).map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse flex whitespace-nowrap gap-4 items-center py-2">
            {repeatToFill(row2).map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-4 items-center py-2">
            {repeatToFill(row3).map((logo, index) => (
              <div
                key={`row3-${index}`}
                className="shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
