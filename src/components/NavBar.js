import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-dark p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">NOTEBOX</Link>
        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <NavItem to="/" label="Home" currentPath={location.pathname} />
            <NavItem to="/about" label="About" currentPath={location.pathname} />
          </ul>
          <div className="flex items-center space-x-2">
            {token ? (
              <>
                <button onClick={logout} className="btn btn-light">Logout</button>
                {/* Add a link to the user profile or other authenticated pages */}
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-light">Login</Link>
                <Link to="/signup" className="btn btn-light">SignUp</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, currentPath }) => (
  <li>
    <Link to={to} className={`text-white ${currentPath === to ? 'underline' : ''}`}>
      {label}
    </Link>
  </li>
);

export default NavBar;
