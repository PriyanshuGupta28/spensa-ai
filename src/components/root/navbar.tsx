"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="fixed top-8 w-full flex justify-center items-center px-5 md:px-10 lg:px-20 z-10">
      <div className="container h-16 w-full border rounded-2xl flex justify-between items-center px-5 md:px-8 lg:px-10 bg-background/80 backdrop-blur">
        <Link href={"/"}>
          <div className="h-10 w-10 bg-amber-400 rounded-full cursor-pointer"></div>
        </Link>
        <div className="flex gap-6 justify-center items-center">
          <div className="hidden md:flex gap-4">
            {links?.map((item, idx) => (
              <Link
                href={item.href}
                key={idx + item.href}
                className="w-full px-2.5 py-1.5 rounded-md hover:bg-secondary transition-all 0.3s ease-in-out font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link href={"/login"}>
              <Button size={"sm"} className="cursor-pointer">
                Login
              </Button>
            </Link>
            <Button
              className="flex md:hidden"
              variant={"outline"}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-bold text-2xl border-b py-5">
              Spensa Ai
            </SheetTitle>
          </SheetHeader>
          <SheetDescription className="px-5 flex flex-col gap-4">
            {links?.map((item, idx) => (
              <SheetClose key={idx + item.href} asChild>
                <Link href={item.href} className="text-xl">
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </SheetDescription>
          <SheetFooter className="flex flex-col gap-3">
            <Link href={"/login"}>
              <Button size={"sm"} className="cursor-pointer w-full">
                Login
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button
                size={"sm"}
                variant={"outline"}
                className="cursor-pointer w-full"
              >
                Register
              </Button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
