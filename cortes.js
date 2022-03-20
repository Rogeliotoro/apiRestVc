//crear usuario
const postUsers = (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mesanje:error}));
 };