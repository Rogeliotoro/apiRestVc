const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  titulo: {
    type:String,
    required:true
  },
  año: {
    type:Number,
    required:true
  },
  genero: {
    type:String,
    required:true
  },
  
});

module.exports = mongoose.model('Movie', userSchema)
