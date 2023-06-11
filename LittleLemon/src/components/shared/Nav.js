import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./shared.css";

export const Nav = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/reservation">Reservation</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
