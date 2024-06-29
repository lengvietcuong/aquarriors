"use client";

import { Button } from "@/components/ui/button";
import useDonationFormStore from "@/stores/donationFormStore";
import useVolunteerFormStore from "@/stores/volunteerFormStore";

function NavCTAButtons() {
  const [setIsDonationFormOpen] = useDonationFormStore((state) => [
    state.setIsDonationFormOpen,
  ]);
  const [setIsVolunteerFormOpen] = useVolunteerFormStore((state) => [
    state.setIsVolunteerFormOpen,
  ]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-fit">
      <Button onClick={() => setIsDonationFormOpen(true)}>
        Donate
      </Button>
      <Button
        variant="outline"
        onClick={() => setIsVolunteerFormOpen(true)}
        className="text-primary hover:text-primary"
      >
        Volunteer
      </Button>
    </div>
  );
}

export default NavCTAButtons;
