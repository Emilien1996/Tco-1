import { Link } from "react-router-dom";

import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
