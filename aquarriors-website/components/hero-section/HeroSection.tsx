function HeroSection() {
  return (
    <section className="px-section">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/aquatic-background.svg')] bg-cover bg-center bg-no-repeat opacity-20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/0 before:from-25% before:to-background"></div>
      <h1 className="mt-16 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        HCMC's farewell to water pollution
      </h1>
    </section>
  );
}

export default HeroSection;
