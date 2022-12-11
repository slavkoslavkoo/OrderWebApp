import React from 'react';

import styles from './OrderCard.module.scss';
import { FiMail, FiCpu } from 'react-icons/fi';

const OrderCard = ({ order }) => {
  return (
    <li className={styles.card}>
      <p className={styles.date}>{order.date}</p>

      <div className={styles.title}>
        <a href={`mailto:${order.email}`} className={styles.email}>
          <FiMail />
          {order.email}
        </a>
        <p className={styles.item}>
          <FiCpu />
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
