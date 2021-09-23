import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/Home" className="nav-seper">
            <i class="fas fa-burn"></i>
            SEPER
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-iten">
              <NavLink
                to="/Search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Search
              </NavLink>
            </li>
            <li className="nav-iten">
              <NavLink
                to="/Submit"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Submit
              </NavLink>
            </li>
            <li className="nav-iten">
              <NavLink
                to="/ModeratorQueue"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Moderator Queue
              </NavLink>
            </li>
            <li className="nav-iten">
              <NavLink
                to="/AnalystQueue"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Analyst Queue
              </NavLink>
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
