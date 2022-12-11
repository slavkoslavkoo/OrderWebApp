import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNavbar.module.scss';
import logo from '../Images/sake-studio-textless-white.svg';

const MainNavbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt='Simple Studio Logo' />
      <nav className={styles.navlinks}>
        <NavLink
          to={'/orders'}
          className={({ isActive }) => (isActive ? styles.active : '')}>
          Orders
        </NavLink>
        <NavLink
          to={'/questions'}
          className={({ isActive }) => (isActive ? styles.active : '')}>
          Questions
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavbar;
