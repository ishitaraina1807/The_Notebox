import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  let location = useLocation();
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
          <Link to="/login" className="btn btn-light mx-2">Login</Link>
          <Link to="/signup" className="btn btn-light mx-2">SignUp</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
