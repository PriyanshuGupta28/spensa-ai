"use client";

import {
  BarChart3,
  BellRing,
  BrainCircuit,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export function HeroBentoGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 md:px-20 my-10">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={
          <ListChecks className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Automatically Categorized Spending"
        description="AI groups your expenses under relevant categories like groceries, travel, subscriptions — saving time and making analysis easy."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={
          <BarChart3 className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Visual Spending Trends"
        description="Get clear charts and breakdowns of your spending across days, weeks, or months — helping you spot waste and optimize habits."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={
          <BrainCircuit className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Uncover Unnecessary Expenses"
        description="Let our AI analyze your spending and highlight recurring or wasteful purchases — your financial assistant on autopilot."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<BellRing className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Set Budget Limits & Get Alerts"
        description="Define your monthly budget and get instant notifications when you exceed limits or get close — no surprises."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={
          <ShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Bank-Level Security"
        description="Your data is encrypted and secure. Only you can access your spending insights."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li
      className={`min-h-[14rem] list-none ${area} shadow-md rounded-3xl dark:shadow-none`}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
            {title === "Uncover Unnecessary Expenses" && (
              <div className="absolute top-0 w-full hidden dark:lg:flex items-center justify-center">
                <DotLottieReact
                  autoplay
                  loop
                  src="/ai-chip-dark.lottie"
                  width={200}
                  height={200}
                />
                <div className="absolute text-md font-bold text-white drop-shadow-lg">
                  Ai
                </div>
              </div>
            )}
            {title === "Uncover Unnecessary Expenses" && (
              <div className="absolute top-0 w-full hidden xl:flex dark:hidden items-center justify-center">
                <DotLottieReact
                  autoplay
                  loop
                  src="/ai-chip.lottie"
                  width={200}
                  height={200}
                />
                <div className="absolute text-md font-bold text-black drop-shadow-lg">
                  Ai
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
