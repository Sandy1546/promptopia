import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import Users from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // console.log("Session---",session);
      // store the user id from MongoDB to session
      const sessionUser = await Users.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      // console.log("Profile---",profile);

      try {
        await connectToDB();

        //check if user already exists
        const userExists = await Users.findOne({
          email: profile.email,
        });

        //if not, create a new user
        if (!userExists) {
          await Users.create({
            email: profile.email,
            userName: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true; //on successful sign In
      } catch (error) {
        console.log(error);
        return false; //on unsucessfull signIn
      }
    },
  },
});

export { handler as GET, handler as POST };
