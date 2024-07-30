import React from "react";

import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import img from "../Images/fuckYou.jpg";

export const NavLinks = () => {
  return (
    <div>
      <div className="NavigationBar">
        <Link to="/">
          <img src={img} alt="logo Img" className="navBarImg" />
        </Link>
        <div className="navContents">
          <Link to="/" className="navContent">
            Home
          </Link>
          <Link to="/about" className="navContent">
            About
          </Link>
          <Link to="/support" className="navContent">
            Support
          </Link>
          <Link to="/careers" className="navContent">
            Careers
          </Link>
          <Link to="/login" className="navContent">
            Resources
          </Link>
          <Link to="/login" className="navContent">
            Services
          </Link>
          <Link to="/login" className="navContent">
            LogIn
          </Link>
        </div>
        <button className="contactUs">Contact Us</button>
      </div>
    </div>
  );
};
