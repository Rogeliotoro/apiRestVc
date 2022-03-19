const mongoose = require('mongoose');

const conexion = async () => {
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017/peliculas");
    console.log("DB conectada a tope");
    } 
    catch (error) {
    console.log(error);
     }
    };

module.exports = conexion; 
