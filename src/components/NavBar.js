import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const token = localStorage.getItem('token');

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mx-5">NOTEBOX</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex mx-5">
          {token ? (
            // Render logout button or user profile link if logged in
            <>
               <Link to="/login" onClick={Logout} className="btn btn-light mx-2">Logout</Link>
              {/* Add a link to the user profile or other authenticated pages */}
            </>
          ) : (
            // Render login and signup buttons if not logged in
            <>
              <Link to="/login" className="btn btn-light mx-2">Login</Link>
              <Link to="/signup" className="btn btn-light mx-2">SignUp</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
