import DonateButton from "@/components/vi/big-buttons/DonateButton";
import { SparklesCore } from "@/components/ui/sparkles";

function CTA() {
  return (
    <div className="relative mb-16 py-20 lg:py-24">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 -z-10"
        particleColor="#FFFFFF"
      />
      <div className="absolute top-1/2 -z-20 h-full w-full -translate-y-1/2 bg-gradient-to-r from-secondary to-transparent" />
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16 lg:gap-32">
        <h3 className="text-center text-2xl font-light md:text-3xl lg:text-4xl">
          Bạn đã sẵn sàng
          <br />
          <span className="bg-gradient-to-br from-primary/50 to-primary bg-clip-text font-bold text-transparent dark:from-secondary-foreground dark:to-primary">
            tạo nên sự khác biệt?
          </span>
        </h3>
        <DonateButton />
      </div>
    </div>
  );
}

export default CTA;
