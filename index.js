const express = require('express');
const morgan = require('morgan');
const conexion = require('./config/mongoDb.js');
const app = express ();
const mongoose = require ('mongoose')
require ('dotenv').config();

conexion (); 
const port = process.env.PORT || 7000;

//middlewares
app.use(morgan('dev'));

//routes prueba
app.get('/',(req,res) =>{
    res.send('hola de nuevo')
});

//arranque del servidor.
app.listen(port, () => console.log('servidor activo en el puerto ' ,port));