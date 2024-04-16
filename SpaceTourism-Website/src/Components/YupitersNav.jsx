
import { NavLink } from "react-router-dom"
import styles from "./../styles/yupitersNav.module.css"
const YupitersNav = () => {
  return (
    <>
    
    <nav className={styles.YupitersNav}> 
    <NavLink  to="/destination/moon">MOON</NavLink>
    
    <NavLink to="/destination/mars">MARS</NavLink>
    <NavLink to="/destination/europa">EUROPA</NavLink>
    <NavLink to="/destination/titan">TITAN</NavLink>
    </nav>
    
   
    
    
   
    </>
  )
}

export default YupitersNav