const express = require ('express');
const login = require('../../autentificacion.js');
const router = express.Router();
const {getUsers, postUsers, deleteUser, putUsers} = require('./controller.js');

router.get("/users",  getUsers);
router.post("/users", postUsers);
router.post("/users/login", login);//end point login usuario
router.delete("/users/:id", deleteUser);
router.put("/users/:id", putUsers);

module.exports = router