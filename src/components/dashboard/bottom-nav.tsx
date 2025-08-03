"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  BanknoteArrowUp,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Income Tracker",
    href: "/dashboard/income-tracker",
    icon: BanknoteArrowUp,
  },
  {
    title: "Notification",
    href: "/dashboard/notification",
    icon: Bell,
  },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 left-0 right-0 z-50 md:hidden w-[95%] h-16 bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 rounded-2xl mx-auto flex items-center justify-around overflow-hidden">
      <AnimatePresence>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative w-full h-full flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-xs w-full h-full transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <motion.div
                  animate={isActive ? { scale: 1.2 } : { scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative"
                >
                  {link.icon && (
                    <link.icon strokeWidth={isActive ? 2.5 : 1.8} />
                  )}
                </motion.div>
                <span>{link.title}</span>
              </motion.div>
            </Link>
          );
        })}
      </AnimatePresence>

      {/* Sliding underline */}
      <motion.div
        layoutId="active-tab-underline"
        className="absolute bottom-1 w-5 h-1 bg-foreground rounded-full"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          left: `${navLinks.findIndex((l) => l.href === pathname) * 25 + 9.5}%`,
        }}
      />
      <motion.div
        layoutId="active-tab-circle"
        className="absolute -bottom-0 w-6 h-full bg-foreground blur-2xl rounded-full z-0"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          left: `${navLinks.findIndex((l) => l.href === pathname) * 25 + 9.5}%`,
        }}
      />
    </nav>
  );
};

export default BottomNav;
