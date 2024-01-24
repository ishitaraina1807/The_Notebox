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
    <nav className="bg-[#28231D] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="gradient-text text-3xl font-bold">NOTEBOX - Your notes in the cloud</Link>
        <div className="flex items-center space-x-4">
          <ul className="flex items-center text-lg space-x-4">
            <NavItem className="text-[#EDB7ED]" to="/" label="Home" currentPath={location.pathname} />
            <NavItem className="text-[#82A0D8]" to="/about" label="About" currentPath={location.pathname} />
          </ul>
          <div className="flex items-center justify-center">
            {token ? (
              <>
                <button onClick={logout} className="px-4 py-2 rounded-lg text-white m-0 bg-red-500 hover:bg-red-600 transition">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 font-bold py-2 rounded-l-xl text-white m-0 bg-[#82A0D8] hover:bg-black transition">Login</Link>
                <Link to="/signup" className="px-4 font-bold py-2 text-gray-800 rounded-r-xl bg-[#8DDFCB] hover:bg-white transition">SignUp</Link>
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
