import { createAuthClient } from "better-auth/client";
import { betterAuth } from "better-auth";

// Create the client instance
export const { signIn, signOut, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000", // Update this to your actual base URL
  fetchOptions: {
    cache: "no-store",
  },
});