import Link from "next/link";
import Droplet from "@/components/icons/Droplet";

function LogoWithText() {
  return (
    <Link href="/">
      <Droplet className="inline-block h-12 w-auto xl:h-16" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center align-middle font-script text-3xl text-primary lg:static lg:ml-2 lg:-translate-x-0 lg:-translate-y-0 xl:ml-4 xl:text-4xl">
        Aquarriors
      </span>
    </Link>
  );
}

export default LogoWithText;
