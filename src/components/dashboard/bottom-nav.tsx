"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  BanknoteArrowUp,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const BottomNav = () => {
  const pathname = usePathname();

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
  return (
    <nav className="fixed bottom-2 left-0 right-0 z-50 h-16 md:hidden w-[95%] border bg-background text-center text-base rounded-2xl mx-auto flex justify-center items-center">
      {navLinks.map((link) => (
        <motion.div
          initial={{ opacity: 0, top: "200px" }}
          animate={{ opacity: 1, top: "0px" }}
          transition={{ duration: 0.2 }}
          key={link.href + link.title}
          className={cn(
            "flex items-center justify-center w-full h-full flex-col"
          )}
        >
          <Link
            href={link.href}
            className={cn(
              "flex items-center justify-center w-full h-full flex-col"
            )}
          >
            {link.icon && (
              <link.icon
                className={cn(
                  pathname === link.href ? "" : "text-muted-foreground"
                )}
              />
            )}
            <span
              className={cn(
                "text-xs",
                pathname === link.href ? "font-bold" : "text-muted-foreground"
              )}
            >
              {link.title}
            </span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default BottomNav;
