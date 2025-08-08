import Image from "next/image";
import React from "react";

const LogoLoader: React.FC = () => {
  return (
    <div className="flex aspect-square items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"></div>
        <div className="animate-pulse">
          <Image
            src="/spensa-ai-logo.svg"
            alt="spensa-ai"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;
