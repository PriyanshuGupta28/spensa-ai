import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db/mongoDb";
import { auth } from "@/lib/auth";

export const GET = async (request: NextRequest) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db
    .collection("user")
    .findOne({ _id: new ObjectId(session.user.id) });
  console.log(user);

  return NextResponse.json({ user });
};
