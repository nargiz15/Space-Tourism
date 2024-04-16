
import { NavLink } from "react-router-dom"
import styles from "./../styles/yupitersNav.module.css"
const YupitersNav = () => {
     
  const YupiterNav =( {isActive})=>{
    return {
      textDecoration: isActive ? "underLine" : "normal" 
    }
  }

  return (
    <>
    
    <nav className={styles.YupitersNav}> 
    <NavLink style={YupiterNav}  to="/destination/moon">MOON</NavLink>
    
    <NavLink style={YupiterNav}  to="/destination/mars">MARS</NavLink>
    <NavLink style={YupiterNav}  to="/destination/europa">EUROPA</NavLink>
    <NavLink style={YupiterNav}  to="/destination/titan">TITAN</NavLink>
    </nav>
    
   
    
    
   
    </>
  )
}

export default YupitersNav