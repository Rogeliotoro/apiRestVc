const express = require ('express');
const auth = require('../../config/config.js');
const router = express.Router();
const {getUsers, postUsers, deleteUser, putUsers} = require('./controller.js');


router.get("/users", getUsers);
router.post("/users", postUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", putUsers);

module.exports = router