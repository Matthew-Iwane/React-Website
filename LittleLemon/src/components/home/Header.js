import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HeaderImg from "../../assets/images/food1.avif"

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header-left">
          <h1 id="header">Welcome to the Little Lemon Website</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span>
            <Link to="/reservation">Reserve a Table</Link>
          </span>
        </div>
        <div className="header-right">
          <img src={HeaderImg} alt="BigCo Inc. logo" />
        </div>
      </div>
    </>
  );
};
