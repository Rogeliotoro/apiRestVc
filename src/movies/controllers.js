const userSchema = require ('./models.js');


 const postMovies = (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };

 const getMoviesId = (req , res) => {
     const {id} = req.params;
     userSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error)=> res.json({mesanje: error}));
 };

 const getMovieEs = async (req,res) => {
    try{
        const queryMovieEs = {};
        if(req.query.titulo) queryMovieEs.titulo = req.query.titulo
        if(req.query.año) queryMovieEs.año = req.query.año
        if(req.query.genero) queryMovieEs.genero = req.query.genero
        res.json(await userSchema.find(queryMovieEs))
        }
    catch(error){
        res.json(error)
    }
}
 module.exports = {postMovies, getMoviesId, getMovieEs }