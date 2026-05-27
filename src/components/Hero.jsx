import IUlogo from "../assets/IULogo.png";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-l from-[#990000] via-[#011E5A] to-[#051D58]">
      <div className="h-[12vh] w-full flex items-center justify-between px-6 text-white ">
        <div className="flex items-center gap-3">
          <img
            src={IUlogo}
            alt="IU logo"
            className="h-32 w-64 object-contain"
          />
        </div>
      </div>
      <div className="h-[88vh] w-full flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Hero</h1>
      </div>
    </section>
  );
};

export default Hero;
