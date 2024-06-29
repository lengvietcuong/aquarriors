"use client";

import { useState } from "react";
import UnitedKingdom from "@/components/icons/UnitedKingdom";
import Vietnam from "@/components/icons/Vietnam";

interface LanguageTogglerProps {
  className?: string;
}

function LanguageToggler({ className }: LanguageTogglerProps) {
  const [language, setLanguage] = useState("English");

  return (
    <div
      className={`flex w-28 flex-row items-center gap-2 lg:flex-row-reverse ${className}`}
    >
      <button
        className={`rounded-full border-2 border-border transition-colors hover:border-primary`}
        onClick={() => {
          setLanguage(language === "English" ? "Tiếng Việt" : "English");
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
      <span className={`text-sm text-muted-foreground`}>{language}</span>
    </div>
  );
}

export default LanguageToggler;
