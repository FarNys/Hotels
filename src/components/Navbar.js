import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <AiFillAliwangwang />
        </Link>
      </div>
      <div className="navbar_center">
        <div className="navbar_center_title">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar_center_title">
          <Link to="/rooms">Rooms</Link>
        </div>
        <div className="navbar_center_title">
          <Link to="/luxory">Luxory</Link>
        </div>
      </div>
      <div className="navbar_right">
        <button className="login_btn">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
