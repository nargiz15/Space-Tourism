import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import circle from './../assets/images/Group 2.svg';
import styles from './../styles/header.module.css';
import Menu from "./../assets/images/menuNav.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <Link to="/">
          <img src={circle} alt="icon" className={styles.circleIcon} />
        </Link>
        <div className={styles.line}>
          <hr />
        </div>
      </div>

     
      <button className={styles.mobileMenuButton} onClick={toggleMenu}>
        <img src={Menu} alt="" />
      </button>

    
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
        <NavLink style={navlinkStyle} to="/" onClick={closeMenu}>
          <span>00</span> HOME
        </NavLink>
        <NavLink style={navlinkStyle} to="/destination" onClick={closeMenu}>
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink style={navlinkStyle} to="/crew" onClick={closeMenu}>
          <span>02</span> CREW
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
