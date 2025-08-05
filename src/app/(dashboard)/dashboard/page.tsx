"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();

  if (isPending) {
    return <>Loading...</>;
  }

  if (!session?.user && !isPending) {
    return redirect("/login");
  }

  return (
    <div>
      {JSON.stringify(session, null, 2)}

      <Button onClick={() => authClient.signOut()}>Logout</Button>
    </div>
  );
};

export default DashboardPage;
