// The link component is used to navigate the different routes on the site.
// The NavLink component is used to add style to the active routes.

import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <h1>My React App</h1>
          <ul className={styles.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <NavLink
                to="/tutorials"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Tutorials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
