const express = require ('express');
const router = express.Router();
const {postMovies, getMoviesId, getMovieEs} = require('./controllers.js');

router.post("/movies", postMovies);
router.get('/movies/:id', getMoviesId);
router.get('/movies', getMovieEs)//filtrar peliculas, por genero titulo y año

module.exports = router

