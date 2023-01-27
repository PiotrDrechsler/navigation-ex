import { Outlet } from 'react-router-dom';

import Nav from './Nav';

function WebAppTemplate() {
  return (
    <>
      <header>
        <h3>Logo</h3>
        <Nav />
      </header>
      <main>
        {/* RENDER MAIN CONTENT */}
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>Footer</p>
      </footer>
    </>
  );
}

export default WebAppTemplate;
