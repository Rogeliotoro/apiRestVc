const express = require('express');
const router = express.Router();
const userSchema = require ('./model.js');

//crear usuario
router.post('/users',(req, res)=>{
   const user = userSchema(req.body);
   user
   .save()
   .then((data)=> res.json(data))
   .catch((error)=> res.json({mesanje:error}));
});

// obtener usuarios
router.get('/users',(req, res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 });

 //obtener un solo usuario.
 router.get('/users/:id',(req, res)=>{
    const{id}= req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 });

 //actualizar usuarios
 router.put('/users/:id',(req, res)=>{
    const{id}= req.params;
    const{nombre, email, pais }= req.body
    userSchema
    .updateOne({_id:id},{$set:{nombre, email, pais}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 });
 
 //borrar usuarios
 router.delete('/users/:id',(req, res)=>{
    const{id}= req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 });

module.exports = router;