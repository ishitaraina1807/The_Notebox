import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-[#28231D] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="gradient-text text-3xl font-bold">NOTEBOX</Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'} items-center gap-4`}>
          <ul className="lg:flex items-center gap-4 justify-center text-md">
            <NavItem className="text-[#EDB7ED]" to="/" label="Home" currentPath={location.pathname} onClick={closeMobileMenu} />
            <NavItem className="text-[#82A0D8]" to="/about" label="About" currentPath={location.pathname} onClick={closeMobileMenu} />
          </ul>
          <div className="flex items-center">
            {token ? (
              <>
                <button onClick={logout} className="lg:px-4 px-2 py-1 lg:py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="lg:px-4 px-2 py-1 lg:font-bold lg:py-2 rounded-l-xl text-white bg-[#82A0D8] hover:bg-black transition" onClick={closeMobileMenu}>Login</Link>
                <Link to="/signup" className="lg:px-4 px-2 py-1 lg:font-bold lg:py-2 text-gray-800 rounded-r-xl bg-[#8DDFCB] hover:bg-white transition" onClick={closeMobileMenu}>SignUp</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, currentPath, onClick }) => (
  <li>
    <Link to={to} className={`text-white ${currentPath === to ? 'font-extrabold' : ''}`} onClick={onClick}>
      {label}
    </Link>
  </li>
);

export default NavBar;
