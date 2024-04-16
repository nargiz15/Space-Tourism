import { NavLink } from "react-router-dom"
import styles from "./../styles/crew.module.css"
import { BsCircle } from "react-icons/bs";
const CrewNav = () => {
    const crewNavLink=({isActive})=>{
       return {
        color: isActive ? "red" : "normal",
        
       }
    }

  return (
    <nav className={styles.CrewsNav}> 
     <NavLink style={crewNavLink} to="/crew/commander"> <BsCircle /></NavLink>
    <NavLink style={crewNavLink}  to="/crew/missionSpecialist"> <BsCircle /></NavLink>
    <NavLink  style={crewNavLink} to="/crew/pilot"> <BsCircle /> </NavLink>
    <NavLink style={crewNavLink} to="/crew/flightEngineer"> <BsCircle /></NavLink>
  </nav>
    
  )
}

export default CrewNav