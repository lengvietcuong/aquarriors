import PopupForms from "@/components/en/forms/PopupForms";
import HeroSection from "@/components/en/hero-section/HeroSection";
import ProblemsSection from "@/components/en/ProblemsSection";
import StatisticsSection from "@/components/en/StatisticsSection";
import WhyContributeSection from "@/components/en/WhyContributeSection";
import DonateSection from "@/components/en/donate-section/DonateSection";
import VolunteerSection from "@/components/en/volunteer-section/VolunteerSection";
import SponsorsSection from "@/components/en/SponsorsSection";
import ShareSection from "@/components/en/ShareSection";
import GameSection from "@/components/en/game-section/GameSection";
import FAQSection from "@/components/en/FAQSection";
import Header from "@/components/en/header/Header";
import Footer from "@/components/en/Footer";

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
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
