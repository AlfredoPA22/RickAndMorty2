import { ADD_FAV,REMOVE_FAV } from "./actions-type";

const initialState={
    myFavorites:[]
};

const reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case ADD_FAV:
        return{
            myFavorites:[...state.myFavorites,actions.payload]
        }
        case REMOVE_FAV:
        let newarray=state.myFavorites.filter((favorite)=>favorite.id!==parseInt(actions.payload));
        return{
            myFavorites:newarray
        }
        default: return{...state}
    }
}
export default reducer;

