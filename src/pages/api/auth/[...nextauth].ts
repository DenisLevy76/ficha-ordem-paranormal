import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prismaClient } from "../../../services/prismaClient";

export default NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session;
    },
  },
  adapter: PrismaAdapter(prismaClient),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.SECRET,
});
