"use client";

import { Button } from "@/components/ui/button";
import { FaFistRaised as Fist } from "react-icons/fa";
import useVolunteerFormStore from "@/stores/volunteerFormStore";

function VolunteerButton() {
  const [setIsVolunteerFormOpen] = useVolunteerFormStore((state) => [
    state.setIsVolunteerFormOpen,
  ]);

  return (
    <Button
      size="lg"
      className="flex w-full px-8 py-6 text-lg lg:px-12 lg:py-8 lg:text-xl"
      onClick={() => setIsVolunteerFormOpen(true)}
    >
      <Fist className="mr-2 size-5 lg:mr-3 lg:size-7" />
      Register now
    </Button>
  );
}

export default VolunteerButton;
