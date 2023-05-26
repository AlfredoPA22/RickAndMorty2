let myFavorites=[];

const postFav=(req,res)=>{
    const body=req.body;
    myFavorites.push(body);
    return res.status(200).json(body);
}
const deleteFav =(req,res)=>{
    const {id}=req.params;
    const newFav=myFavorites.filter((elem)=>elem.id != +id)
    myFavorites=newFav
    return res.json(myFavorites);
}

module.exports={
    postFav,
    deleteFav
}