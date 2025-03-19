import { DownloadSection } from "./DownloadSection";
import HeroSection from "./HeroSection";
import MarketOpportunity from "./MarketSection";
import Presentation from "./Presentation";
import PresentationTwo from "./PresentationTwo";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Presentation />
      <MarketOpportunity />
      <PresentationTwo />
      <DownloadSection/>
    </>
  );
}
