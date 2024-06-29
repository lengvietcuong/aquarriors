"use client";

import { Button } from "@/components/ui/button";
import { IoMdHeart as Heart } from "react-icons/io";
import useDonationFormStore from "@/stores/donationFormStore";

function DonateButton() {
  const [setIsDonationFormOpen] = useDonationFormStore((state) => [
    state.setIsDonationFormOpen,
  ]);

  return (
    <Button
      size="lg"
      className="flex max-w-96 px-8 py-6 text-lg md:px-12 md:py-8 md:text-xl lg:px-16 lg:py-9 lg:text-2xl"
      onClick={() => setIsDonationFormOpen(true)}
    >
      <Heart className="mr-2 size-5 md:mr-3 md:size-7 lg:mr-4 lg:size-8" />
      Quyên góp
    </Button>
  );
}

export default DonateButton;
