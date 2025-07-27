"use client";

import React from "react";
import { motion } from "motion/react";
const HeroSection: React.FC = () => {
  const svgVariant = {
    initial: {
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
    },
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  };
  return (
    <div className="h-screen w-full flex justify-center items-center container relative mx-auto">
      <h1 className="text-4xl font-bold">Spensa Ai</h1>
    </div>
  );
};

export default HeroSection;
