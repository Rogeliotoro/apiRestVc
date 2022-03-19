const express = require('express');
const router = express.Router();
const getUser = require('./controller.js').default


router.get("/", getUser);