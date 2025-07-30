"use client";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroBentoGrid } from "@/components/lander/home/hero-bento-grid";
const HeroSection: React.FC = () => {
  const reviews = [
    {
      name: "John Doe",
      url: "https://avatars.githubusercontent.com/u/112753528?s=400&u=d0689cd5aedd602ffd81cc323b3c41e44313963b&v=4",
    },
    {
      name: "John Doe",
      url: "https://avatars.githubusercontent.com/u/112754137?v=4",
    },
    {
      name: "John Doe",
      url: "https://images.unsplash.com/photo-1692906374436-67568da1ea58?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Doe",
      url: "https://images.unsplash.com/photo-1706821177425-cecc34309a94?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 space-y-5">
        <h1 className="text-2xl md:text-4xl font-bold text-center leading-relaxed tracking-wider max-w-2xl">
          Track Smart,{" "}
          <span className="relative text-primary dark:text-blue-500">
            Spend
            <svg
              width="287"
              height="25"
              viewBox="0 0 287 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-4 -right-1 w-[78px] md:w-[120px] "
            >
              <motion.path
                d="M1 16C3.65 15.67 11.62 13.68 21.3 9.51501C27.1797 6.98516 35.94 4.68001 42.815 2.17501C44.0166 1.73717 44.98 1.34001 45.82 1.66501C53.8008 4.75283 48.99 22.66 51.15 23.33C56.1482 24.8804 64.6 16.04 71.48 12.675C78.0507 9.46128 82.64 7.34001 90.805 7.49501C96.2494 7.59836 103.64 8.68001 108.315 7.83501C114.281 6.75664 121.62 5.68001 149.395 5.16501C158.394 4.99815 162.98 8.32001 167.81 9.83001C172.079 11.1648 176.32 10.33 190.2 10.83C202.753 11.2822 226.52 11 239.42 10.835C256.998 10.6102 262.98 9.34001 268.645 8.83501C270.98 8.34001 274.97 8.00001 279.965 7.83501C281.99 7.67001 282.98 7.34001 286 5.00001"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "linear",
                }}
              />
            </svg>
          </span>{" "}
          Smarter with Real-Time Expense Insights
        </h1>
        <p className="text-center mx-auto max-w-2xl text-neutral-400 text-lg">
          Manage daily spending, uncover hidden trends, and take charge of your
          financial future — all in one AI-powered hub with Spensa AI
        </p>
        <Link href={"/register"}>
          <div className="flex justify-center items-center relative cursor-pointer">
            <Button className="rounded-full z-10  cursor-pointer hover:bg-primary">
              Create Account For Free
            </Button>
            <div className="absolute w-5 h-4 right-8 rounded-full bg-primary" />
            <Button className="rounded-full z-10 cursor-pointer hover:bg-primary">
              <ExternalLink />
            </Button>
          </div>
        </Link>

        <div className="flex gap-3.5">
          <div className="flex justify-center items-center -space-x-3">
            {reviews?.map((review, index) => (
              <Image
                key={index}
                src={review.url}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-xl border-2 dark:border-neutral-800"
              />
            ))}
          </div>
          <div>
            <Rating
              value={4.8}
              allowDecimal
              interactive={false}
              showValue
              decimalPrecision={1}
            />
            <p className="text-sm text-neutral-400">from 200+ reviews</p>
          </div>
        </div>
        <HeroBentoGrid />
      </div>
    </>
  );
};

export default HeroSection;
