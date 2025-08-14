"use client";
import React from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import { ISession } from "@/types/user-account";
import { SessionCard } from "@/components/dashboard/profile/session-card";
import { Edit3, Mail, Shield, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfilePage = () => {
  const { data } = authClient.useSession();
  const { data: sessionsData, isPending } = useQuery({
    queryKey: ["logged-in-devices"],
    queryFn: async () => {
      const response = await axios.get("/api/logged-in-devices");
      return response.data.sessions;
    },
  });

  if (isPending) return <div>Loading...</div>;

  // Fixed sorting to properly prioritize current session regardless of position
  const sortedSessions = [...sessionsData].sort((a, b) => {
    const aIsCurrent = a._id === data?.session?.id; // This determines which session is current
    const bIsCurrent = b._id === data?.session?.id;

    // Current session should always be first
    if (aIsCurrent && !bIsCurrent) return -1;
    if (!aIsCurrent && bIsCurrent) return 1;

    // Sort remaining sessions by most recent activity (updatedAt)
    return new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime();
  });

  return (
    <div>
      <div className="flex w-full h-48 justify-center  items-center relative">
        <video
          src="/bg.webm"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />

        <Avatar className="h-24 w-24 border-4 mt-48 border-background ">
          <AvatarImage
            src={
              data?.user?.image ||
              "https://avatars.githubusercontent.com/u/112753528?s=400&u=d0689cd5aedd602ffd81cc323b3c41e44313963b&v=4"
            }
            alt={data?.user?.name || "User"}
          />
          <AvatarFallback>
            {data?.user?.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-center mt-20 px-4">
        <Card className="w-full  shadow-lg border-0 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              {/* User Name */}
              <div className="flex items-center space-x-2 text-center">
                <User className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  {data?.user?.name || "User"}
                </h2>
              </div>

              {/* User Email */}
              <div className="flex items-center space-x-2 text-center">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p
                  className="text-sm text-muted-foreground"
                  title={data?.user?.email}
                >
                  {data?.user?.email}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-border/50 my-4"></div>

              {/* Enhanced change password button with icons and improved styling */}
              <Button
                variant="outline"
                className="w-full bg-background/50 hover:bg-accent/80 border-border/50 transition-all duration-200 hover:shadow-md"
              >
                <Shield className="h-4 w-4 mr-2" />
                Change Password
                <Edit3 className="h-4 w-4 ml-auto" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {isPending ? (
        <div className="">Loading...</div>
      ) : (
        <>
          <div className="flex flex-col mt-20 gap-2">
            <div className="flex flex-col ">
              <h1 className="text-3xl font-bold">Active Sessions</h1>
              <p className="text-muted-foreground mt-2">
                Manage your logged-in devices and sessions
              </p>
            </div>
            <div className="flex gap-2 mt-2 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {sortedSessions?.length > 0 ? (
                  sortedSessions?.map((session: ISession) => (
                    <SessionCard
                      key={session._id}
                      session={session}
                      isCurrentSession={session._id === data?.session?.id}
                    />
                  ))
                ) : (
                  <p className="text-center text-muted-foreground">
                    No other active sessions.
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
