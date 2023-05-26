import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./actions-type";

const initialState={
    myFavorites:[],
    allCharacters:[]
};

const reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case ADD_FAV:
        return{
            myFavorites:[...state.allCharacters,actions.payload],
            allCharacters:[...state.allCharacters,actions.payload]
        }
        case REMOVE_FAV:
        return{
            myFavorites:actions.payload,
            allCharacters:actions.payload
        }
        case FILTER:
        let characters=[];
        if(actions.payload==='All'){
            characters=state.myFavorites;
        }else{
            characters=state.myFavorites.filter((character)=>character.gender===actions.payload);
        }
        return{
            ...state,
            allCharacters:characters
        }
        case ORDER:
        let characters2=state.allCharacters;
        let charactersOrdenados=[];
        if(actions.payload==='A'){
            charactersOrdenados=characters2.sort((a,b)=>a.id - b.id)
        }
        if(actions.payload==='D'){
            charactersOrdenados=characters2.sort((a,b)=>b.id - a.id)
        }
        return{
            ...state,
            allCharacters:charactersOrdenados
        }
        default: return{...state}
    }
}
export default reducer;



