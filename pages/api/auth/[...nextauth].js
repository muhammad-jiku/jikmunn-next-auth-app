import User from '@/db/model/User';
import databaseConnect from '@/db/util/connectDB';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      name: 'Sign In',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { type: 'text' },
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        databaseConnect();
        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Invalid Email or Password!');
        }
        console.log('hola user ', user);
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  // secret: 'a9a3e148b137d59fbfb7a127c307606f962da6e1bc9c2df97680c76c3fd60850',
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
