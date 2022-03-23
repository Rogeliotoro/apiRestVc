//end point de login de usuario, lo cual debe hacer una petecion post y rellenar los datos de nombre, email, pais, para que puedas tener permiso
const login = (req, res)=> {
    const {nombre, email , pais}= req.body
    if(nombre && email && pais){
        res.json('tienes permiso')
    }else{
    }
    res.send('no tienes permiso')
}
module.exports = login; 
