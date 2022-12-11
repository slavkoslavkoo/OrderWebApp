import React from 'react';
import styles from './Orders.module.scss';
import { useLoaderData } from 'react-router-dom';
import OrderCard from '../Components/Orders/OrderCard';

const Orders = () => {
  const orders = useLoaderData();
  return (
    <ul className={styles.orders}>
      {orders.map((order, key) => {
        return <OrderCard key={key} order={order} />;
      })}
    </ul>
  );
};

export default Orders;
