import React from "react";
import { DynamicBreadcrumb } from "@/components/dashboard/dynamic-breadcrumb";
import { AppSidebar } from "@/components/dashboard/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

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
          <header className="fixed top-0 right-0 left-0 z-40 flex h-14 shrink-0 justify-between items-center gap-2 border bg-background transition-[width,height] ease-linear md:left-64 md:w-[calc(100%-16rem)] group-has-data-[collapsible=icon]/sidebar-wrapper:md:left-12 group-has-data-[collapsible=icon]/sidebar-wrapper:md:w-[calc(100%-2rem)]">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <DynamicBreadcrumb />
            </div>
            <div>
              <ThemeToggleButton
                className=" cursor-pointer mr-5"
                start="top-right"
              />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-14 group-has-data-[collapsible=icon]/sidebar-wrapper:pt-12">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
