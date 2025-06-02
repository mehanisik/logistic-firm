"use client";
import Preloader from "@/components/ui/preloader";
import { useState } from "react";

const Deneme = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? <Preloader onComplete={handleComplete} /> : <div>Hello</div>}
    </div>
  );
};

export default Deneme;
