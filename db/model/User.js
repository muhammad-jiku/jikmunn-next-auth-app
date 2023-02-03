// external import
const { default: mongoose } = require('mongoose');
// internal import
const userSchema = require('../schema/userSchema');

const User = mongoose.models.People || new mongoose.model('People', userSchema);

// exporting module
module.exports = User;
