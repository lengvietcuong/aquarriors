import { create } from "zustand";

type HeroSectionAnimationStore = {
  playHeroSectionAnimation: boolean;
  setPlayHeroSectionAnimation: (playHeroSectionAnimation: boolean) => void;
};

const useHeroSectionAnimationStore = create<HeroSectionAnimationStore>(
  (set) => ({
    playHeroSectionAnimation: true,
    setPlayHeroSectionAnimation: (playHeroSectionAnimation) =>
      set({ playHeroSectionAnimation }),
  }),
);

export default useHeroSectionAnimationStore;
