import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import LoadingSpinner from './Components/Interface/LoadingSpinner';

import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} fallbackElement={<LoadingSpinner />} />);
