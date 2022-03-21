const express = require ('express');
const router = express.Router();
const {getUsers, postUsers, deleteUser, putUsers} = require('./controller.js');
const auth = require ()

router.get("/users", getUsers);
router.post("/users", postUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", putUsers);

module.exports = router