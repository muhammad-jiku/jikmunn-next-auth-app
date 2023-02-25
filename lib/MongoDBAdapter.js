import User from '@/db/model/User';

const MongoDBAdapter = async () => {
  async function getUser(id) {
    const user = await User.findById(id);
    return user;
  }

  async function getUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async function createUser(profile) {
    const { email, password } = profile;
    const user = new User({ email, password });
    await user.save();
    return user;
  }

  async function updateUser(user) {
    await user.save();
    return user;
  }

  async function getUsersByRole(role) {
    const users = await User.find({ role });
    return users;
  }

  return {
    getUser,
    getUserByEmail,
    createUser,
    updateUser,
    getUsersByRole,
  };
};

export default MongoDBAdapter;
