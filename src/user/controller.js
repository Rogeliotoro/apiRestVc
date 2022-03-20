const userSchema = require ('./model.js');

// obtener usuarios
const getUsers = (req, res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };

 //crear usuario
const postUsers = (req, res)=>{
   const user = userSchema(req.body);
   user
   .save()
   .then((data)=> res.json(data))
   .catch((error)=> res.json({mesanje:error}));
};

 //actualizar usuarios
 const putUsers = (req, res)=>{
    const{id}= req.params;
    const{nombre, email, pais }= req.body
    userSchema
    .updateOne({_id:id},{$set:{nombre, email, pais}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };
 
 //borrar usuarios
 const deleteUser =(req, res)=>{
    const{id}= req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };

module.exports = {getUsers , postUsers, putUsers, deleteUser}
