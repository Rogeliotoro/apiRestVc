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

 module.exports = {getMovies,postMovies}