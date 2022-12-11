import React from 'react';

import styles from './ErrorComponent.module.scss';

const ErrorComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorbox}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.text}>Page not found</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
