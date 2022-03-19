const express = require('express');
const { json } = require('express/lib/response');
const morgan = require('morgan');
const conexion = require('./config/mongoDb.js');
const useRoutes = require('./src/user/routes.js')

require ('dotenv').config();

const app = express ();

//conexion DB
conexion (); 

//routes prueba
app.get('/',(req, res)=>{
    res.send("prueba");
});

const port = process.env.PORT || 7000;

//middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use('/api',useRoutes);

//arranque del servidor.
app.listen(port, () => console.log('servidor activo en el puerto ' ,port));