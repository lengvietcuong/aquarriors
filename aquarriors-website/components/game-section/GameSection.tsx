import Image from "next/image";
import gameBanner from "@/public/game-banner.jpg";
import StoreButtons from "./StoreButtons";

function GameSection() {
  return (
    <section id="game" className="p-section">
      <h2 className="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl lg:hidden lg:text-5xl">
        Play our game
      </h2>
      <div className="flex flex-col justify-center gap-2 lg:gap-16 lg:flex-row-reverse lg:justify-end">
        <div className="flex-1">
          <Image
            src={gameBanner}
            className="rounded-lg"
            alt="Fishing and life"
          />
        </div>
        <div className="flex-1">
          <h2 className="hidden font-bold mb-8 lg:block text-right text-5xl">
            Play our game
          </h2>
          <p className="mt-4 md:mt-6 text-lg text-muted-foreground lg:text-right md:text-xl lg:text-2xl">
            Have fun removing trash and saving fish virtually while also making
            a real-world impact. 100% of the revenue is used to fund actual
            cleanups.
          </p>

          <div className="mt-6 flex justify-center gap-2 lg:mt-12 lg:justify-end md:gap-4">
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameSection;
