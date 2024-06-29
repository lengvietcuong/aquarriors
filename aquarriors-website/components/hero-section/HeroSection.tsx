import GoalCounter from "./GoalCounter";
import ProgressBar from "./ProgessBar";

function HeroSection() {
  return (
    <section className="px-section">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/aquatic-background.svg')] bg-cover bg-center bg-no-repeat opacity-20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/0 before:from-25% before:to-background"></div>
      <h1 className="mt-16 mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        HCMC's farewell to water pollution
      </h1>
      <GoalCounter />
      <p className="md:mt-3 mt-2 mb-4 text-muted-foreground text-center md:text-xl lg:text-2xl">
        Kilograms of trash to be removed
      </p>
      <div className="mx-auto lg:max-w-sm md:max-w-96 max-w-60">
        <ProgressBar />
        <p className="mt-1 text-muted-foreground">42% done</p>
      </div>
    </section>
  );
}

export default HeroSection;
