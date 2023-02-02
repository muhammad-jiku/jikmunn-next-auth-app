import User from '@/db/model/User';
import databaseConnect from '@/db/util/connectDB';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        databaseConnect();
        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Invalid Email or Password!');
        }
        console.log(user);
        const isPasswordMatched = await bcrypt.compare(
          password,
          user?.password
        );

        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
