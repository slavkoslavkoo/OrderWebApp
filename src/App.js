import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import './Generic.scss';

import MainNavbar from './Components/MainNavbar/MainNavbar';

function App() {
  return (
    <Fragment>
      <MainNavbar />
      <Outlet />
    </Fragment>
  );
}

export default App;
