// external import
const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide your username'],
      trim: true,
      minLength: [3, 'Username must be at least 3 letters'],
      maxLength: [100, 'Username is too long'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: [true, 'This user is already in!'],
    },
    password: {
      type: String,
      minLength: [6, 'Password must be at least 3 letters'],
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
