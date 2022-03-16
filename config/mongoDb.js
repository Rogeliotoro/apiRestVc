const mongoose = require('mongoose');
const connection = async () => {
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("DB conectada a tope");
    } 
    catch (error) {
    console.log(error);
     }
    };
connection (); 

module.exports = mongoose;
