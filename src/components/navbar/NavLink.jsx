import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ path, active, label, icon }) => {
  return (
    <Link to={path}>
      <li className={`nav__link ${active ? "active__link" : ""} `}>
        {icon}
        {label}
      </li>
    </Link>
  );
};

export default NavLink;
