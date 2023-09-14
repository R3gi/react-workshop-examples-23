import { NavLink, Outlet } from 'react-router-dom';

type LinkActive = { isActive: boolean };

const isActiveLink = ({ isActive }: LinkActive) => `link ${isActive ? 'active' : ''}`;

export const Layout = () => (
  <>
    <nav>
      <NavLink className={isActiveLink} to="/">
        Components
      </NavLink>
    </nav>
    <hr />
    <div className="container">
      <Outlet />
    </div>
  </>
);
