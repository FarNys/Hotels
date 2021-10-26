import React from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_sub_container">
        <div className="footer_column">
          <h4>Team</h4>
          <Link to="/">Google</Link>
          <Link to="/">Microsoft</Link>
          <Link to="/">Amazon</Link>
          <Link to="/">Apple</Link>
        </div>
        <div className="footer_column">
          <h4>About</h4>
          <Link to="/">Company</Link>
          <Link to="/">Corporation</Link>
        </div>

        <div className="footer_column">
          <h4>Contact</h4>
          <Link to="/">
            <FaIcon.FaWhatsapp className="whatsapp" />
          </Link>
          <Link to="/">
            <FaIcon.FaYoutube className="youtube" />
          </Link>
          <Link to="/">
            <FaIcon.FaInstagram className="insta" />
          </Link>
          <Link to="/">
            <FaIcon.FaTwitter className="twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
