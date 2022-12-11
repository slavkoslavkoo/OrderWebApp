import React from 'react';

import styles from './TopPanel.module.scss';
import logo from '../Images/sake-studio-textless-white.svg';

const TopPanel = () => {
  return (
    <div className={styles.panel}>
      <img className={styles.logo} src={logo} alt='Simple Studio Logo' />
      <h2 className={styles.text}>Simple Dev Orders</h2>
    </div>
  );
};

export default TopPanel;
