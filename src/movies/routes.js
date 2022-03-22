const express = require ('express');
const router = express.Router();
const {postMovies, getMoviesId, getMovieEs} = require('./controllers.js');

router.post("/movies", postMovies);
router.get('/movies/:id', getMoviesId);
router.get('/movies', getMovieEs)

module.exports = router

