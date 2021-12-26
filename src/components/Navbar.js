import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <FaHotel />
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
        <Link to="/connect">
          <button className="login_btn">Connect</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
