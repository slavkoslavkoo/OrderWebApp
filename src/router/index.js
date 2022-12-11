import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import ErrorComponent from '../Components/Errors/ErrorComponent';
import Orders from '../Pages/Orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/orders'} />,
    errorElement: <ErrorComponent />,
  },
  {
    path: '/orders',
    element: <App />,
    children: [
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
]);

export default router;
