"use client";

import Link from "next/link";
import { useState } from "react";
import useHeroSectionAnimationStore from "@/stores/heroSectionAnimationStore";
import UnitedKingdom from "@/components/icons/UnitedKingdom";
import Vietnam from "@/components/icons/Vietnam";

interface LanguageTogglerProps {
  className?: string;
}

function LanguageToggler({ className }: LanguageTogglerProps) {
  const setPlayHeroSectionAnimation = useHeroSectionAnimationStore(
    (state) => state.setPlayHeroSectionAnimation,
  );
  const [language, setLanguage] = useState("Tiếng Việt");

  return (
    <div
      className={`flex w-28 flex-row items-center gap-2 lg:flex-row-reverse ${className}`}
    >
      <Link href="/">
        <button
          className={`rounded-full border-2 border-border transition-colors hover:border-primary`}
          onClick={() => {
            setLanguage(language === "English" ? "Tiếng Việt" : "English");
            setPlayHeroSectionAnimation(false);
          }}
        >
          {language === "English" ? (
            <>
              <UnitedKingdom className="size-7" />
            </>
          ) : (
            <Vietnam className="size-7" />
          )}
        </button>
      </Link>
      <span className={`text-sm text-muted-foreground`}>{language}</span>
    </div>
  );
}

export default LanguageToggler;
