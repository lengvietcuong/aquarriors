import PopupForms from "@/components/vi/forms/PopupForms";
import HeroSection from "@/components/vi/hero-section/HeroSection";
import ProblemsSection from "@/components/vi/ProblemsSection";
import StatisticsSection from "@/components/vi/StatisticsSection";
import WhyContributeSection from "@/components/vi/WhyContributeSection";
import DonateSection from "@/components/vi/donate-section/DonateSection";
import VolunteerSection from "@/components/vi/volunteer-section/VolunteerSection";
import SponsorsSection from "@/components/vi/SponsorsSection";
import ShareSection from "@/components/vi/ShareSection";
import GameSection from "@/components/vi/game-section/GameSection";
import Header from "@/components/vi/header/Header";
import Footer from "@/components/vi/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16">
        <PopupForms />
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
      <Footer />
    </>
  );
}
