import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/navbar";
import "./mobileNavbar.css";
import "../Navbar/navbar.css";
import { NavLinks } from "../NavLinks/navLinks";
import logo from "../Images/fuckYou.jpg";

export const MobileNavbar = () => {
  const [click, setClick] = useState(false);

  const Close = (
    <button className="mobileNavbarMenu" onClick={() => setClick(!click)}>
      Close
    </button>
  );

  const Menu = (
    <button className="mobileNavbarMenu" onClick={() => setClick(!click)}>
      Menu
    </button>
  );

  return (
    <div className="mobileNavbar">
      {/* <img className="mobileNavbarLogo">Logo</img> */}
      <img src={logo} alt="logoImg" className="mobileNavbarLogo" />

      {/* {click ? Close : Menu} */}
      {/* {click && <NavLinks />} */}
    </div>
  );
};
