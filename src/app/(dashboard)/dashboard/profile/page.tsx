"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import React from "react";

const ProfilePage = () => {
  const { data } = authClient.useSession();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pb-10">
      {/* Cover Image */}
      <div
        className="relative w-full h-40 sm:h-48 md:h-56 rounded-b-3xl overflow-hidden"
        style={{
          background: `url(${
            data?.user?.image ||
            "https://t4.ftcdn.net/jpg/05/12/76/37/360_F_512763777_W0CTTeb1SHDt8afMfOlV1NAhCsgcjlVi.jpg"
          }) center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Avatar overlaps the cover */}
      <div className="relative -mt-14 sm:-mt-16">
        <Avatar className="h-24 w-24 sm:h-28 sm:w-28 border-4 border-background shadow-xl">
          <AvatarImage
            src={data?.user?.image || ""}
            alt={data?.user?.name || "User"}
          />
          <AvatarFallback>
            {data?.user?.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Profile Info Card */}
      <Card className="mt-6 w-[92%] sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-lg transition hover:scale-[1.005]">
        <CardHeader className="pb-3">
          <CardTitle className="text-center text-xl sm:text-2xl md:text-3xl font-semibold">
            {data?.user?.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-3">
          <p className="text-muted-foreground text-sm sm:text-base break-words text-center">
            {data?.user?.email}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mt-2">
            <Button className="w-full sm:w-auto">Edit Profile</Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
