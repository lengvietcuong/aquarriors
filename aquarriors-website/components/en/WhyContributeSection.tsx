import { FaHeartCirclePlus as HealthIcon } from "react-icons/fa6";
import { GiTropicalFish as FishIcon } from "react-icons/gi";
import { RiFlowerFill as FlowerIcon } from "react-icons/ri";

function WhyContributeSection() {
  return (
    <section className="mt-8 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-0 -z-10 h-1/3 w-[200%] lg:h-full lg:w-[100%] bg-[radial-gradient(farthest-side,rgba(56,189,248,0.5),rgba(59,130,246,0.15),rgba(0,0,0,0))] block"></div>
      <div className="p-section">
        <h2 className="mt-8 font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          But you can help <span className="text-primary">save your city</span>
        </h2>
        <p className="mt-2 text-center text-lg text-muted-foreground md:mt-4 md:text-xl lg:text-2xl">
          Join us in depolluting Ho Chi Minh City&apos;s rivers and lakes and
          you can:
        </p>
        <div className="flex flex-col justify-center lg:flex-row gap-8 mt-10 md:mt-12 lg:mt-16">
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <HealthIcon className="size-12 fill-primary md:size-16" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Improve public health
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Clean water is crucial for preventing diseases and maintaining
              overall health
            </p>
          </div>
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <FishIcon className="size-12 fill-primary md:size-16" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Protect aquatic life
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Safeguarding aquatic ecosystems is essential for biodiversity and
              our food supply.
            </p>
          </div>
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <FlowerIcon className="size-12 fill-primary md:size-16" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Preserve beauty
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Cleaning up water bodies revives their natural charm for everyone
              to enjoy, including future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyContributeSection;
