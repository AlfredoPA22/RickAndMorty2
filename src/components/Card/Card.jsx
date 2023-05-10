import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../../redux/actions";
import { useState,useEffect} from "react";

function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}) {
   const [isFav,setIsFav]=useState(false);
   const  handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={style.card}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={()=>onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} width="250px" alt='' /> 
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(personaje)=>dispatch(addFav(personaje)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
}
const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

