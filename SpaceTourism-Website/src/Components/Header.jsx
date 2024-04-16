import styles from './../styles/header.module.css'
import { Link, NavLink } from 'react-router-dom'
import circle from "./../assets/images/Group 2.svg"


const Header = () => {

   const navlinkStyle=({isActive})=>{
       return {
        fontWeight: isActive ? "bold" : "normal"
       }
   }
  return (
    <>
      
      <header className={styles.header}>
        <div className={styles.leftSide}>
            <Link to="/">
            <img src={circle} alt="icon"  className={styles.circleIcon}/>
            </Link>
          
          <div className={styles.line}> <hr /></div>
        </div>

        <nav className={styles.navbar}>
        <NavLink style={navlinkStyle} to="/"> <span>00</span>  HOME</NavLink>
        <NavLink   style={navlinkStyle} to="/destination">  <span>01</span> DESTINATION</NavLink>
        <NavLink  style={navlinkStyle} to="/crew"> <span>02</span> CREW</NavLink>
        {/* <NavLink   style={navlinkStyle}to="/technology"> <span>03</span>  TECHNOLOGY</NavLink> */}
        
        </nav>
      </header>
   
      
    </>
  )
}

export default Header