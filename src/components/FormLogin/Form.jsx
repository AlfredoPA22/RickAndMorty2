import { useState } from "react";
import style from "./Form.module.css"
import validation from './validation'
import { BiCheck,BiX } from 'react-icons/bi';



const Form=({login})=>{
const [userData,setUserData]=useState({
        email:'',
        password:''
    });
const [errors,setErrors]=useState({});

const handleChange=(event)=>{
    setUserData({
        ...userData,
        [event.target.name]:event.target.value
    })
    setErrors(validation({
        ...userData,
        [event.target.name]:event.target.value
    }))
}
const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData);
}

    return(
        <form className={style.login} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className={style.email}>
                <label>Email: </label>
                <input name="email" onChange={handleChange} type="text" value={userData.email}/>
                <span>{errors.hasOwnProperty('email')?<p>{errors.email}</p>:<BiCheck/>}</span>
            </div>
            <div className={style.password}>
                <label>Password: </label>
                <input name="password" onChange={handleChange} type="password" value={userData.password} />
                <span>{errors.hasOwnProperty('password')?<p>{errors.password}</p>:<BiCheck/>}</span>
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    )
}

export default Form;