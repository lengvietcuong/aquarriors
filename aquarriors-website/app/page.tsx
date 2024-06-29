import HeroSection from "@/components/hero-section/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import StatisticsSection from "@/components/StatisticsSection";
import WhyContributeSection from "@/components/WhyContributeSection";
import DonateSection from "@/components/donate-section/DonateSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <StatisticsSection />
      <WhyContributeSection />
      <DonateSection />
    </main>
  );
}
