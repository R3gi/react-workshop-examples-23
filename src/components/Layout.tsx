import { NavLink, Outlet } from 'react-router-dom';

type LinkActive = { isActive: boolean };

const isActiveLink = ({ isActive }: LinkActive) => `link ${isActive ? 'active' : ''}`;

export const Layout = () => (
  <>
    <nav className="nav">
      <NavLink className={isActiveLink} to="/">
        Components
      </NavLink>
      <NavLink className={isActiveLink} to="/to-optimize">
        To Optimize App
      </NavLink>
      <NavLink className={isActiveLink} to="/optimized">
        Optimized App
      </NavLink>
      <NavLink className={isActiveLink} to="/results">
        Results
      </NavLink>
    </nav>
    <hr />
    <div className="container">
      <Outlet />
    </div>
  </>
);
