"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import React from "react";

const ProfilePage = () => {
  const { data } = authClient.useSession();
  return (
    <div>
      <h1>Profile</h1>
      <div
        className="flex w-full h-32 border-b rounded-2xl"
        style={{
          background: `url(${
            data?.user?.image ||
            "https://t4.ftcdn.net/jpg/05/12/76/37/360_F_512763777_W0CTTeb1SHDt8afMfOlV1NAhCsgcjlVi.jpg"
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Avatar className="h-24 w-24 mt-16 ml-8">
          <AvatarImage
            src={data?.user?.image || ""}
            alt={data?.user?.name || "User"}
          />
          <AvatarFallback>
            {data?.user?.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </div>
      <p>{data?.user?.image}</p>
      <p>{data?.user?.name}</p>
      <p>{data?.user?.email}</p>
    </div>
  );
};

export default ProfilePage;
