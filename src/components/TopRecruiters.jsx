import React from "react";

const TopRecruiters = () => {
  // Building logo arrays based on the folder structure confirmed
  const marketingLogos = Array.from({ length: 12 }, (_, i) => `/src/assets/Logo/BBA – Marketing/logo/${i + 1}.jpg`);
  const financeLogos = Array.from({ length: 10 }, (_, i) => `/src/assets/Logo/BBA – Finance/logo/${i + 1}.jpg`);
  const ibLogos = Array.from({ length: 10 }, (_, i) => `/src/assets/Logo/BBA International Business/logo/${i + 1}.jpg`);
  const hrLogos = Array.from({ length: 10 }, (_, i) => `/src/assets/Logo/BBA HR/logo/${i + 1}.jpg`);
  const logisticsLogos = Array.from({ length: 10 }, (_, i) => `/src/assets/Logo/BBA Logistics & Supply Chain Management/logo/${i + 1}.jpg`);

  // Organising into 3 rows for the marquee
  const row1 = [...marketingLogos, ...financeLogos];
  const row2 = [...ibLogos, ...hrLogos];
  const row3 = [...logisticsLogos, ...marketingLogos.slice(0, 8)];

  return (
    <section className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] py-20 px-6 overflow-hidden">
      <div className="w-full text-center mb-16 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Top Recruiters
        </h2>
        <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed opacity-90">
          Join a legacy where industry giants meet tomorrow’s talent, proving that an Indira University's BBA secures your future at the top companies. 
        </p>
      </div>

      <div className="space-y-10">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-6 items-center py-4">
            {row1.concat(row1).map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-3 w-[180px] h-[75px] md:w-[220px] md:h-[95px] shadow-lg">
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
          <div className="animate-marquee-reverse flex whitespace-nowrap gap-6 items-center py-4">
            {row2.concat(row2).map((logo, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-3 w-[180px] h-[75px] md:w-[220px] md:h-[95px] shadow-lg">
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
          <div className="animate-marquee flex whitespace-nowrap gap-6 items-center py-4">
            {row3.concat(row3).map((logo, index) => (
              <div key={`row3-${index}`} className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-3 w-[180px] h-[75px] md:w-[220px] md:h-[95px] shadow-lg">
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
