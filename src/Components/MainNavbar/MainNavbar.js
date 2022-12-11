import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNavbar.module.scss';

const MainNavbar = () => {
  return (
    <div className={styles.navbar}>
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
