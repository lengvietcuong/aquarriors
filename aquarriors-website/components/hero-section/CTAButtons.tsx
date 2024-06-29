import { Button } from "../ui/button";
import { IoMdHeart as Heart } from "react-icons/io";
import { FaFistRaised as Fist } from "react-icons/fa";

function CTAButtons() {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Button size="lg">
        <Heart className="mr-2 size-4" />
        Donate
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="text-primary hover:text-primary"
      >
        <Fist className="mr-2 size-4" />
        Volunteer
      </Button>
    </div>
  );
}

export default CTAButtons;
