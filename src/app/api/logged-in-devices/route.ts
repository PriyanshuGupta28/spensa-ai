import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db/mongoDb";
export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessions = db
    .collection("session")
    .find({ userId: new ObjectId(session.user.id) });

  return NextResponse.json({
    sessions: await sessions.toArray(),
  });
}
