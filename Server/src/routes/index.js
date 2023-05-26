const getCharById =require('../controllers/getCharById');
const {postFav,deleteFav} =require('../controllers/handleFavorites');
const login =require('../controllers/login')
const express=require("express")
const router=express.Router();

//trae el personaje de la api de rick and morty por id
//verifica el id pasado por params
router.get('/character/:id',async (req,res)=>{
    try {
        const {id}=req.params
        await getCharById(id,req,res);
    } catch (error) {
        return res.status(500).send(error)
    }
});
//verifica el usuario y contraseña pasados por query y retorna un objeto con la propiedad access 
router.get('/login',(req,res)=>{
    login(req,res)
});
//pushea el personaje pasado por body a la base de datos (arreglo de objetos)
router.post('/fav',(req,res)=>{
    postFav(req,res)
});
//elimina el personaje de la base de datos (arreglo de objetos) con el id pasado por params;
router.delete('/fav/:id',(req,res)=>{
    deleteFav(req,res)
});

module.exports=router;
