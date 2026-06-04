
import NewSection from "./NewSection";
import CampusHighlightsSection from "./CampusHighlightsSection";
import StudentClubsSection from "./StudentClubsSection";

/**
 * CampusHighlights
 *
 * Renders the campus highlight sections in a clean, responsive vertical column
 * to guarantee that all headings, text, and image grids render properly on any screen height.
 */
export default function CampusHighlights() {
  return (
    <div className="w-full flex flex-col bg-linear-to-b from-[#8B0035] via-[#14002E] to-[#8B0035]">
      <NewSection />
      <CampusHighlightsSection />
      <StudentClubsSection />
    </div>
  );
}