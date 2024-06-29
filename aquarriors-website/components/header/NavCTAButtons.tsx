"use client";

import { Button } from "@/components/ui/button";

function NavCTAButtons() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-fit">
      <Button>
        Donate
      </Button>
      <Button
        variant="outline"
        className="text-primary hover:text-primary"
      >
        Volunteer
      </Button>
    </div>
  );
}

export default NavCTAButtons;
