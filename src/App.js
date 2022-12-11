import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import './Generic.scss';

import MainNavbar from './Components/MainNavbar/MainNavbar';
import TopPanel from './Components/MainNavbar/TopPanel';

function App() {
  return (
    <Fragment>
      <TopPanel />
      <main className='container'>
        <Outlet />
      </main>
      <MainNavbar />
    </Fragment>
  );
}

export default App;
