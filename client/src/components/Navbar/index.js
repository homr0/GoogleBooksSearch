import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return(
    <nav>
      <div className="nav-wrapper deep-purple lighten-3">
        <a className="brand-logo left deep-purple-text text-darken-4" href="/">Boogle</a>

        <ul id="nav-mobile">
          <li>
            <Link to="/search" className={"deep-purple-text text-darken-4 "+ (window.location.pathname === "/search" ? "active" : "")}>
              Search
            </Link>
          </li>

          <li>
            <Link to="/saved" className={"deep-purple-text text-darken-4 " + (window.location.pathname === "/saved" ? "active" : "")}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;