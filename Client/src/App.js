import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/FormLogin/Form';
import Home from './components/Home/Home'
import axios from 'axios';
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import { connect } from 'react-redux';
import {removeFav} from "./redux/actions"
import Swal from 'sweetalert2'

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App({removeFav}) {
   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false);
   const navigate = useNavigate();
   const location=useLocation();
   async function onSearch(id) {
      try {
         const {data}=await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if(!data.id) throw new Error("error")
         setCharacters((oldChars) => [...oldChars, data]);
         
      } catch (error) {
         return Swal.fire({
            title: 'warning!',
            text: "¡No hay personajes con este ID!",
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
      }
   }
   function onClose(id){
     const newcharacters=characters.filter(character=>character.id != +id)
     removeFav(id);
     setCharacters(newcharacters);
     
   }
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
         const {access} = data;
         setAccess(access);
         access ?navigate('/home'):Swal.fire({
            title: 'Usuario Incorrecto!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
      } catch (error) {
         console.log(error);
      }
      
     
   }
   function logout(){
      setAccess(false);
      navigate('/')
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
         <div className='App'>
            {
               location.pathname !=='/'? <Nav logout={logout}/> :null
            }
            <Routes>
               <Route path='/' element={<Form login={login}/>}/>
               <Route path='/characters' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/home' element={<Home/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
            </Routes>
         </div>
   );
}
const mapDispatchToProps=(dispatch)=>{
   return {
      removeFav:(id)=>dispatch(removeFav(id))
   }
}


export default connect(null,mapDispatchToProps)(App);
