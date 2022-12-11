import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import ErrorComponent from '../Components/Errors/ErrorComponent';
import Orders from '../Pages/Orders';
import Questions from '../Pages/Questions';

import OrdersLoader from '../utils/orders-loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/orders',
        element: <Orders />,
        loader: OrdersLoader,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
    ],
  },
]);

export default router;
