const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  titulo: String,
  año: Number,
  genero: String,
});
const Movies = mongoose.model("Movies", Schema);

module.exports = Movies;
