const express = require ('express');
const router = express.Router();
const {getMovies, postMovies} = require('./controllers.js');

router.get("/movies", getMovies);
router.post("/movies", postMovies);

module.exports = router

