const express = require ('express');
const router = express.Router();
const {getMovies, postMovies, getMoviesId, getMoviesGe} = require('./controllers.js');

router.get("/movies", getMovies);
router.post("/movies", postMovies);
router.get('/movies/:id', getMoviesId);
router.get('/movies', getMoviesGe);

module.exports = router

