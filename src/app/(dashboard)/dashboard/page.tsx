"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  console.log(session);

  if (!session?.user && !isPending) {
    return redirect("/login");
  }

  return <div>{JSON.stringify(session, null, 2)}</div>;
};

export default DashboardPage;
