"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <Button onClick={() => authClient.signOut()}>Logout</Button>
    </div>
  );
};

export default DashboardPage;
