import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import style from "./Detail.module.css"

const Detail=()=>{
    let {id}=useParams();
    const [character,setCharacter]=useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     if(character.name){
        return(
            <div className={style.Detail}>
                <div className={style.left}>
                    <h2>Caracteristicas</h2>
                    <h3>Nombre: {character.name}</h3>
                    <h3>Estado: {character.status}</h3>
                    <h3>Especie: {character.species}</h3>
                    <h3>Genero: {character.gender}</h3>
                    <h3>Origen: {character.origin.name}</h3>
                </div>
                <div className={style.right}>
                    <img src={character.image} alt="" width="300px" />
                </div>
            </div>
        )
     }else{
        return (
            <div  className={style.Detail}>Cargando....</div>
        )
     }
    
}
export default Detail;