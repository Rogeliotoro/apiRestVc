const express = require('express');
const mongoose = require('./config/mongoDb.js');
const morgan = require('morgan')
const app = express ();


const port = 7000;
//process.env.PORT||

//middlewares
app.use(morgan('dev'));

//routes prueba.
app.get('/',(req,res) =>{
    res.send('hola de nuevo')
});

//arranque del servidor.
app.listen(port, () => console.log('servidor activo en el puerto ' ,port));