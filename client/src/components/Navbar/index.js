import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return(
    <nav>
      <div className="nav-wrapper deep-purple lighten-3">
        <a className="brand-logo left" href="/">Boogle</a>

        <ul id="nav-mobile">
          <li>
            <Link to="/search" className={window.location.pathname === "/search" ? "active" : ""}>
              Search
            </Link>
          </li>

          <li>
            <Link to="/saved" className={window.location.pathname === "/saved" ? "active" : ""}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;