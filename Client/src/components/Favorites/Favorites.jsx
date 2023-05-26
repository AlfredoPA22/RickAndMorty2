import { connect,useDispatch } from "react-redux";
import React from "react";
import { orderCards, filterCards } from "../../redux/actions";
import Card from "../Card/Card";
const Favorites=(props)=>{
    const [aux,setAux]=React.useState(false);

    const dispatch=useDispatch();
    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
        {
         props.allCharacters?.map((data)=>{
            return (
                  <Card
                  key={data.id} 
                  id={data.id}
                  name={data.name}
                  status={data.status}
                  species={data.species}
                  gender={data.gender}
                  origin={data.origin.name}
                  image={data.image}
                  />
                )
            })
        }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        allCharacters:state.allCharacters
    }
}

export default connect(mapStateToProps,null)(Favorites);