"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

function GoalCounter() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <h2 className={`font-extrabold ${isLoading ? "" : "text-transparent bg-clip-text bg-gradient-to-b from-primary to-foreground"} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center`}>
      {isLoading ? (
        <span className="animation-pulse text-muted">Loading...</span>
      ) : (
        <CountUp end={10_000_000} duration={1.5} />
      )}
    </h2>
  );
}

export default GoalCounter;
