const express = require('express');
const morgan = require('morgan');
const conexion = require('./config/mongoDb.js');
const app = express ();

conexion (); 


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