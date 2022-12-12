import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import ErrorComponent from '../Components/Errors/ErrorComponent';
import Orders from '../Pages/Orders';
import Questions from '../Pages/Questions';

import ordersLoader from '../utils/orders-loader';
import questionsLoader from '../utils/questions-loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <Orders />,
        loader: ordersLoader,
      },
      {
        path: '/questions',
        element: <Questions />,
        loader: questionsLoader,
      },
    ],
  },
]);

export default router;
