"use client";

import { Button } from "@/components/ui/button";
import { IoMdHeart as Heart } from "react-icons/io";
import { FaFistRaised as Fist } from "react-icons/fa";
import useDonationFormStore from "@/stores/donationFormStore";
import useVolunteerFormStore from "@/stores/volunteerFormStore";

function CTAButtons() {
  const [setIsDonationFormOpen] = useDonationFormStore((state) => [
    state.setIsDonationFormOpen,
  ]);
  const [setIsVolunteerFormOpen] = useVolunteerFormStore((state) => [
    state.setIsVolunteerFormOpen,
  ]);

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Button size="lg" onClick={() => setIsDonationFormOpen(true)}>
        <Heart className="mr-2 size-4" />
        Donate
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => setIsVolunteerFormOpen(true)}
        className="text-primary hover:text-primary"
      >
        <Fist className="mr-2 size-4" />
        Volunteer
      </Button>
    </div>
  );
}

export default CTAButtons;
