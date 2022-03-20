const express = require ('express');
const router = express.Router();
const {getMovies, postMovies, getMoviesId} = require('./controllers.js');

router.get("/movies", getMovies);
router.post("/movies", postMovies);
router.get('/movies/:id', getMoviesId);

module.exports = router

