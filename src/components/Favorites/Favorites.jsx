import { connect } from "react-redux";
import Card from "../Card/Card";
const Favorites=(props)=>{
    console.log(props)
    return (
        <div>
        {
         props.myFavorites.map((data)=>{
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
                  onClose={data.onClose}
                  />
                )
            })
        }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);