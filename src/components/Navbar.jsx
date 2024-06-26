import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/skypalette-logo.png" className="nav--icon" alt="Logo" />
      
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link> {/* Added Home link */}
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
                  <Link to="/contact" className="nav-link">CONTACT</Link> {/* Added Contact link */}
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




