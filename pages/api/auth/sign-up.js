import User from '@/db/model/User';
import databaseConnect from '@/db/util/connectDB';
import bcrypt from 'bcryptjs';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './[...nextauth]';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(500).json({ message: 'Something went wrong' });

  try {
    // const session = await getServerSession(req, res, authOptions);
    databaseConnect();

    const { username, email, password } = await req.body;

    const checkExistingUser = await User.findOne({ email });

    if (checkExistingUser)
      return res.status(422).json({ message: 'User Already Exists...!' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // console.log('saved user ', savedUser);

    res.status(200).json({
      message: 'User added successfully!!',
      data: savedUser,
      //    accessToken: token,
    });

    // if (!session) {
    //   res.status(401).json({ message: 'You must be logged in.' });
    // }
  } catch (err) {
    // console.log(err)
    res.status(500).json({ message: 'Something went wrong' });
  }
}
