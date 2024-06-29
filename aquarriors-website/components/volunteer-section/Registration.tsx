import { FaCalendarAlt as CaldendarIcon } from "react-icons/fa";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { FaClock as ClockIcon } from "react-icons/fa";
import { IoMdCheckmark as CheckMarkIcon } from "react-icons/io";
import { FaFistRaised as Fist } from "react-icons/fa";
import { Button } from "../ui/button";

function Registration() {
  return (
    <div className="justify-center flex-col-reverse lg:flex-row mt-16 flex gap-10 lg:gap-24 items-center">
      <div className="max-w-screen-sm">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Join our next adventure
        </h3>
        <p className="text-muted-foreground mt-4 lg:mt-6">
          Whether you&apos;re a seasoned environmentalist or new to
          volunteering, everyone is welcome. We&apos;ll provide guidance and
          support so you can contribute safely and effectively. Come make new
          friends and create a lasting impact together!
        </p>
        <div className="mt-8 gap-12 lg:mt-12 flex-col md:flex-row flex">
          <div className="flex-1 space-y-6">
            <div className="flex gap-3 items-center">
              <CaldendarIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">17th November 2024</p>
            </div>
            <div className="flex gap-3 items-center">
              <LocationIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">Black Water Canal</p>
            </div>
            <div className="flex gap-3 items-center">
              <ClockIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">8:00AM - 12:30AM</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">No experience required</p>
            </div>
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">All equipment provided</p>
            </div>
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">
                Receive a cerfificate & small gifts
              </p>
            </div>
          </div>
        </div>
        <Button
          size="lg"
          className="mt-10 lg:mt-16 flex w-full px-8 py-6 text-lg lg:px-12 lg:py-8 lg:text-xl"
        >
          <Fist className="mr-2 size-5 lg:mr-3 lg:size-7" />
          Register now
        </Button>
      </div>
      <iframe
        src="https://www.youtube.com/embed/OaxKVKtfeVI?rel=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-[9/16] w-full max-w-80 rounded-lg"
      ></iframe>
    </div>
  );
}

export default Registration;
