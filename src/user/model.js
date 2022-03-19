const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("usuarios", Schema);

module.exports = User;
