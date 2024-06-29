import Image from "next/image";
import volunteers from "@/public/volunteers.jpg";

function Introduction() {
  return (
    <div className="items-center lg:items-start md:mt-8 mt-6 lg:mt-16 flex-col lg:flex-row flex justify-center gap-8 md:gap-10 lg:gap-16">
      <div className="max-w-screen-sm">
        <Image
          src={volunteers}
          alt="Volunteers"
          className="rounded-lg"
        />
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Group of volunteers (Source:{" "}
          <a
            href="https://saigonxanh.org/#/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Sài Gòn Xanh
          </a>
          )
        </p>
      </div>
      <div className="max-w-screen-sm lg:max-w-lg">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Fight alongside 1000+ superheroes
        </h3>
        <p className="text-muted-foreground mt-4 lg:mt-6">
          Join a passionate community dedicated to transforming our local
          waterways. Together, we can end water pollution once and for all.
        </p>
        <div className="mt-8 lg:mt-16 flex">
          <div className="flex-1">
            <p className="font-bold font-heading text-xl md:text-2xl text-primary lg:text-3xl">50+ spots</p>
            <p className="text-muted-foreground">cleaned</p>
          </div>
          <div className="flex-1">
            <p className="font-bold font-heading text-xl md:text-2xl text-primary lg:text-3xl">25,000+ kg</p>
            <p className="text-muted-foreground">of trash removed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
