// internal imports
import User from '@/db/model/User';
import databaseConnect from '@/db/util/connectDB';
import initMiddleware from '@/lib/initMiddleware';

// external imports
import bcrypt from 'bcryptjs';
import Cors from 'cors';

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
  })
);

export default async function handler(req, res) {
  // if (req.method !== 'POST')
  //   return res.status(500).json({ message: 'Something went wrong' });

  await cors(req, res);

  try {
    databaseConnect();

    const { username, email, password } = await req.body;

    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser)
      return res.status(422).json({
        message: 'User Already Exists...!',
        data: checkExistingUser,
      });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('saved user ', savedUser);

    res.status(200).json({
      message: 'User added successfully!!',
      data: savedUser,
    });
  } catch (err) {
    // console.log(err)
    res.status(500).json({ message: 'Something went wrong' });
  }
}
