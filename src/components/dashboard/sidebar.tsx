"use client";

import * as React from "react";
import { Bot, LayoutDashboard } from "lucide-react";
import { NavMain } from "@/components/dashboard/nav-main";
import { NavUser } from "@/components/dashboard/nav-user";
import { SidebarHeaderNav } from "@/components/dashboard/sidebar-header-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Transactions",
          url: "/dashboard/transactions",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Budgets",
          url: "/dashboard/budgets",
        },
      ],
    },
    {
      title: "Espensa AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "AI Insights",
          url: "/dashboard/ai-insights",
        },
        {
          title: "Ai History",
          url: "/dashboard/ai-history",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeaderNav />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
