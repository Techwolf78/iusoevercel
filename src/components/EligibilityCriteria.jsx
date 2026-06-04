

const APPLY_CONTENT = {
  eligibilityHeading: "Eligibility Criteria – B.Tech in AI & Data Science",
  criteria: [
    {
      text: "Passed 10+2 (HSC) with Physics, Chemistry & Mathematics (PCM) or Physics, Chemistry & Biology (PCB)",
    },
    {
      text: "Minimum 45% aggregate in qualifying examination (40% for reserved categories)",
    },
    {
      text: "Valid score in MHT-CET / JEE Main / SAT / IUCET",
    },
  ],
};

function EligibilityCriteria() {
  return (
    <section className="w-full bg-linear-to-b md:bg-linear-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-4 md:py-6 px-6 md:px-12 overflow-hidden flex flex-col items-center">
      {/* Eligibility Section */}
      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          {APPLY_CONTENT.eligibilityHeading}
        </h2>

        {/* Grid matching WhyChooseEngineering simplified cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 max-w-5xl mx-auto w-full">
          {APPLY_CONTENT.criteria.map((criterion, idx) => {
            return (
              <div
                key={idx}
                className="min-h-[120px] border border-[#1D5DFF]/30 bg-white/5 rounded-2xl
                           p-6 flex flex-col items-center justify-center
                           transition-all duration-300 hover:border-[#1E62EC] hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(30,98,236,0.15)]"
              >
                <p className="text-white text-center text-xs sm:text-sm font-semibold leading-relaxed">
                  {criterion.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EligibilityCriteria;
