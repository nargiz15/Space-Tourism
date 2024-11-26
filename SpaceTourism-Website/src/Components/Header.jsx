import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import circle from './../assets/images/Group 2.svg';
import styles from './../styles/header.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from 'react-icons/io5';

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

      {/* Mobile menu button */}
      <button className={styles.mobileMenuButton} onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>

      {/* Mobile sidebar menu */}
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
        {/* Close button (X) */}
        <button className={styles.closeMenuButton} onClick={closeMenu}>
          <IoClose size={30} /> {/* X icon */}
        </button>

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
