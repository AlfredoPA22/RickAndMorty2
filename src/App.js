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
   const EMAIL='alfredo@gmail.com';
   const PASSWORD='alfredo1';
   const location=useLocation();
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
     const newcharacters=characters.filter(character=>character.id!==parseInt(id))
     removeFav(id);
     setCharacters(newcharacters);
     
   }
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('Datos Incorrectos')
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
