"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(42);
  }, []);

  return <Progress value={percentage}>ProgressBar</Progress>;
}

export default ProgressBar;
