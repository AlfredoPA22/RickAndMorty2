import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId]=useState('');
   const handleChange=(e)=>{
      let val=e.target.value
      setId(val)
   }
   return (
      <div className={style.container}>
         <input onChange={handleChange} value={id} type='search'/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
