import { Suspense } from "react";
import { Skeleton } from "../../ui/skeleton";
import Progress from "./Progress";
import Leaderboard from "./Leaderboard";
import { IoIosInformationCircle as InformationIcon } from "react-icons/io";
import Partners from "./Partners";
import CTA from "./CTA";

function DonateSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="p-section">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Donate to fund{" "}
          <span className="text-primary">large-scale cleanups</span>
        </h2>
        <p className="mt-2 text-center text-lg text-muted-foreground md:mt-4 md:text-xl lg:text-2xl">
          Give what you can. The environmental organizations we partner with
          will handle the rest.
        </p>
        <div className="mx-auto mt-4 flex w-fit items-center rounded-lg border p-4">
          <InformationIcon className="mr-2 inline-block size-4 fill-muted-foreground lg:size-6" />
          $1 = 4kg of trash removed
        </div>
        <Partners />
        <div className="mt-16 flex flex-col gap-20 lg:flex-row lg:gap-8">
          <div className="flex-1">
            <h3 className="mb-4 text-center text-xl font-bold md:mb-4 md:text-2xl lg:mb-6 lg:text-3xl">
              Progess
            </h3>
            <Suspense
              fallback={
                <Skeleton className="h-96 w-full rounded-lg"></Skeleton>
              }
            >
              <Progress />
            </Suspense>
          </div>
          <div className="hidden self-stretch border-l lg:block" />
          <div className="flex-1">
            <h3 className="mb-4 text-center text-xl font-bold md:mb-4 md:text-2xl lg:mb-6 lg:text-3xl">
              Leaderboard
            </h3>
            <Suspense
              fallback={
                <Skeleton className="h-96 w-full rounded-lg"></Skeleton>
              }
            >
              <Leaderboard />
            </Suspense>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}

export default DonateSection;
