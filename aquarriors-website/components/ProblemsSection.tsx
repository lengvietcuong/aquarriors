import Image from "next/image";
import poisonousWater from "@/public/poisonous-water.jpg";
import helplessFish from "@/public/helpless-fish.jpg";
import cryingRiver from "@/public/crying-river.jpg";

function ProblemsSection() {
  return (
    <section className="p-section">
      <h2 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        Reality is <span className="text-destructive">depressing</span>
      </h2>
      <div className="mt-10 md:mt-12 lg:mt-16 flex flex-col items-center lg:flex-row gap-8">
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Lives <span className="text-destructive">at risk</span>
          </h3>
          <Image
            className="rounded-lg"
            src={poisonousWater}
            alt="Poisonous water"
          />
          <p className="text-muted-foreground text-xs mt-2">
            AI-generated image by{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Harmful chemicals and bacteria can creep into the water we drink,
            cook with, and use for hygiene, causing serious illnesses (including
            cancer).
          </p>
        </div>
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Fish <span className="text-destructive">dying</span>
          </h3>
          <Image
            className="rounded-lg"
            src={helplessFish}
            alt="Helpless fish"
          />
          <p className="text-muted-foreground text-xs mt-2">
            AI-generated image by{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Chemicals, plastics, and heavy metals poison aquatic life, leading
            to contaminated seafood, genetic mutations, and even mass
            extinctions.
          </p>
        </div>
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Beauty <span className="text-destructive">fading</span>
          </h3>
          <Image
            className="rounded-lg"
            src={poisonousWater}
            alt="Poisonous water"
          />
          <p className="text-muted-foreground text-xs mt-2">
            AI-generated image by{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Beautiful rivers and lakes have turned into eyesores. Awful-smelling
            and trash-covered water bodies have become a common sight for many.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
