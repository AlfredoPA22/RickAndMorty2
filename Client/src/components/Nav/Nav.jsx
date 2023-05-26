import style from "./nav.module.css"
import { NavLink } from "react-router-dom"

const Nav = ({logout})=>{
    return(
        <div className={style.nav}>
            <button><NavLink to='/home' className={style.navlink}>Home</NavLink></button>
            <button><NavLink to='/characters' className={style.navlink}>Characters</NavLink></button>
            <button><NavLink to='/favorites' className={style.navlink}>Favorites</NavLink></button>
            <button><NavLink to='/about' className={style.navlink}>About</NavLink></button>
            <button onClick={logout}>Cerrar Sesion</button>
        </div>
    )
}
export default Nav