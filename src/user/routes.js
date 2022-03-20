const express = require ('express');
const getUserone = require('./controller.js');
const router = express.Router();
const getUsers = require('./controller.js');
const postUsers = require('./controller.js');
const getUserone = require ('./controller.js')

router.post("/users", postUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUserone);

module.exports = router