"use client";

import { Button } from "../ui/button";
import { SparklesCore } from "@/components//ui/sparkles";
import { IoMdHeart as Heart } from "react-icons/io";

function CTA() {
  return (
    <div className="relative py-20 md:py-24 mb-16">
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
          Are you ready to
          <br />
          <span className="bg-gradient-to-br from-primary/50 to-primary bg-clip-text font-bold text-transparent dark:from-secondary-foreground dark:to-primary">
            make a difference?
          </span>
        </h3>
        <Button
          size="lg"
          className="flex max-w-96 px-8 py-6 text-lg md:px-12 md:py-8 md:text-xl lg:px-16 lg:py-9 lg:text-2xl"
        >
          <Heart className="mr-2 size-5 md:mr-3 md:size-7 lg:mr-4 lg:size-8" />
          Donate now
        </Button>
      </div>
    </div>
  );
}

export default CTA;
