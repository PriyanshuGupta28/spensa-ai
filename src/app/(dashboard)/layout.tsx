import React from "react";
import { AppSidebar } from "@/components/dashboard/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { generateSEO } from "@/config/seo/seo.utils";
import { Metadata } from "next";
import DashNavbar from "@/components/dashboard/dash-navbar";

export const metadata: Metadata = generateSEO({
  title: "Dashboard",
  path: "/dashboard",
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashNavbar />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-14 group-has-data-[collapsible=icon]/sidebar-wrapper:pt-12">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
