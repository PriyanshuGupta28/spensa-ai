"use client";

import LogoLoader from "@/components/loaders/loader";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LogoLoader />
      </div>
    ); // You can use a skeleton or spinner here
  }

  return <>{children}</>;
};
