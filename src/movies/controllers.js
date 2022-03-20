const userSchema = require ('./models.js');

const getMovies = (req, res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };

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

 const getMoviesGe = (req , res) => {
    const {genero} = req.body;
    userSchema
    .findOne(genero)
    .then((data) => res.json(data))
    .catch((error)=> res.json({mesanje: error}));
};


 module.exports = {getMovies,postMovies, getMoviesId, getMoviesGe}