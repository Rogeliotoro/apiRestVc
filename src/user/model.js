const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  pais: {
    type:String,
    required:true
  },
  contraseña:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model('User', userSchema)
