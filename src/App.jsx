import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/AboutUs";
// import WhyUs from "./components/WhyUs";
import WhyChooseEngineering from "./components/WhyChooseEngineering";
import ApplyProcess from "./components/ApplyProcess";
import EligibilityCriteria from "./components/EligibilityCriteria";
import TopRecruiters from "./components/TopRecruiters";
import CampusHighlights from "./components/CampusHighlights";
import FAQ from "./components/FAQ";
import ProgramOverview from "./components/ProgramOverview";
import RecruitersStats from "./components/RecruitersStats";
import OurCourse from "./components/OurCourse";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (currentPath === "/thank-you" || currentPath === "/thank-you/") {
    return <ThankYou />;
  }

  return (
    <>
      <Hero />
      <CourseDetails />
      <TopRecruiters />
      <RecruitersStats />
      <AboutUs />
      <ProgramOverview />
      <WhyChooseEngineering />
      <OurCourse />
      <CampusHighlights />
      <ApplyProcess />
      <EligibilityCriteria />
      <FAQ />
      {/* <WhyUs /> */}
      <Footer />
    </>
  );
}

export default App;
