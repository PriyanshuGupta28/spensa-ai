import { createAuthClient } from "better-auth/react";
import { BASE_URL } from "@/utilities/contants";

export const authClient = createAuthClient({
  baseURL: BASE_URL,
});

export const { signIn, signUp, useSession, signOut } = createAuthClient();
