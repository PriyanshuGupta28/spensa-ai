import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "@/db/mongoDb";
import { nextCookies } from "better-auth/next-js";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/utilities/contants";

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [nextCookies()],
});
