const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const conexion = require('./config/mongoDb.js');
const routerUser = require('./src/user/routes.js');
const routerMovies = require ('./src/movies/routes.js');

//variable de entorno
require ('dotenv').config();

//conexion DB
conexion ();

const app = express ();

//routes prueba
app.get('/',(req, res)=>{
    res.send("prueba");
});

//puerto
const port = process.env.PORT || 3000;

//middlewares
app.use(morgan('dev'));
app.use(express.json())

//rutas de user y movies
app.use('/api', routerUser);
app.use('/api', routerMovies);

//arranque del servidor.
app.listen(port, () => console.log('servidor activo en el puerto ' ,port));