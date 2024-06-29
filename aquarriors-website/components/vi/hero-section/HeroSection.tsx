import GoalCounter from "./GoalCounter";
import ProgressBar from "./ProgessBar";
import CTAButtons from "./CTAButtons";
import BeforeAfter from "./BeforeAfter";

function HeroSection() {
  return (
    <section className="px-section pb-10 md:pb-12 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/aquatic-background.svg')] bg-cover bg-center bg-no-repeat opacity-20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/0 before:from-25% before:to-background"></div>
      <h1 className="mt-10 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Chấm dứt ô nhiễm nữa ở TP.HCM.
      </h1>
      <GoalCounter />
      <p className="mt-2 mb-4 text-muted-foreground text-center md:text-xl lg:text-2xl">
        Kilogram rác sẽ được dọn
      </p>
      <div className="mx-auto lg:max-w-sm md:max-w-96 max-w-60">
        <ProgressBar />
        <p className="mt-1 text-muted-foreground">42% đã hoàn thành</p>
      </div>
      <h2 className="mt-16 text-center text-xl md:text-2xl lg:text-3xl">
        Tạo nên sự thay đổi tích cực cho cộng đồng
      </h2>
      <CTAButtons />
      <BeforeAfter />
    </section>
  );
}

export default HeroSection;
