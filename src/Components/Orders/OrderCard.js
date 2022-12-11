import React from 'react';

import styles from './OrderCard.module.scss';

const OrderCard = ({ order }) => {
  return (
    <li className={styles.card}>
      <p className={styles.date}>{order.date}</p>

      <div className={styles.title}>
        <h3 className={styles.email}>
          <span>From</span> {order.email}
        </h3>
        <p className={styles.item}>
          <span>Orders</span>
          {order.orderedItem}
        </p>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{order.description}</p>
      </div>
      <div className={styles.btns}>
        <button className={styles.complete}>Complete</button>
        <button className={styles.delete}>Delete</button>
      </div>
    </li>
  );
};

export default OrderCard;
