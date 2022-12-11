import React from 'react';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerbox}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
