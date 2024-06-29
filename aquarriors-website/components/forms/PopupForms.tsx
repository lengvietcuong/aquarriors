"use client";

import DonationForm from "./DonationForm";
import VolunteerForm from "./VolunteerForm";
import useDonationFormStore from "@/stores/donationFormStore";
import useVolunteerFormStore from "@/stores/volunteerFormStore";

function PopupForms() {
  const [isDonationFormOpen] = useDonationFormStore((state) => [
    state.isDonationFormOpen,
  ]);
  const [isVolunteerFormOpen] = useVolunteerFormStore((state) => [
    state.isVolunteerFormOpen,
  ]);

  return (
    <>
      <div
        className={`${isDonationFormOpen || isVolunteerFormOpen ? "opacity-85" : "opacity-0"} pointer-events-none fixed inset-0 z-10 bg-black transition-opacity`}
      />
      {isDonationFormOpen && <DonationForm />}
      {isVolunteerFormOpen && <VolunteerForm />}
    </>
  );
}

export default PopupForms;
