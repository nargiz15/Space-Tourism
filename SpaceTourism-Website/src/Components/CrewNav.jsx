import { NavLink } from "react-router-dom";
import styles from "./../styles/crew.module.css";
import { BsCircle } from "react-icons/bs";

const CrewNav = () => {
  return (
    <nav className={styles.CrewsNav}>
      <NavLink to="/crew/commander">
        {({ isActive }) => (
          <BsCircle style={{ fill: isActive ? "gray" : "white" }} />
        )}
      </NavLink>
      <NavLink to="/crew/missionSpecialist">
        {({ isActive }) => (
          <BsCircle style={{ fill: isActive ? "gray" : "white" }} />
        )}
      </NavLink>
      <NavLink to="/crew/pilot">
        {({ isActive }) => (
          <BsCircle style={{ fill: isActive ? "gray" : "white" }} />
        )}
      </NavLink>
      <NavLink to="/crew/flightEngineer">
        {({ isActive }) => (
          <BsCircle style={{ fill: isActive ? "gray" : "white" }} />
        )}
      </NavLink>
    </nav>
  );
};

export default CrewNav;
