import HeroSection from "@/components/hero-section/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import StatisticsSection from "@/components/StatisticsSection";
import WhyContributeSection from "@/components/WhyContributeSection";
import DonateSection from "@/components/donate-section/DonateSection";
import VolunteerSection from "@/components/volunteer-section/VolunteerSection";
import SponsorsSection from "@/components/SponsorsSection";
import ShareSection from "@/components/ShareSection";
import GameSection from "@/components/game-section/GameSection";

export default function Home() {
  return (
    <main className="pb-16">
      <HeroSection />
      <ProblemsSection />
      <StatisticsSection />
      <WhyContributeSection />
      <DonateSection />
      <VolunteerSection />
      <SponsorsSection />
      <ShareSection />
      <GameSection />
    </main>
  );
}
