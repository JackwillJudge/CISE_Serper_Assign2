import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-seper">
            <i class="fas fa-burn"></i>
            SEPER
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-iten">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Search
              </Link>
            </li>
            <li className="nav-iten">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Submit
              </Link>
            </li>
            <li className="nav-iten">
              <Link
                to="/modqueue"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Moderator Queue
              </Link>
            </li>
            <li className="nav-iten">
              <Link
                to="/analqueue"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Analyst Queue
              </Link>
            </li>
          </ul>
          <button className="nav-button">Login</button>
          <button className="nav-button">Register</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
