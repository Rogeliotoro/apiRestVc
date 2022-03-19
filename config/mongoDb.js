const mongoose = require('mongoose');

const conexion = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB-atlas👌 conectada a tope");
    } 
    catch (error) {
    console.log(error);
     }
    };

module.exports = conexion; 
