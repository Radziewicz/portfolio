import React from "react";
import "./Nav.css";

export const Nav = () => (
  <div className="wrapper">
    <header>
        <a href="" id="top" className="logo">`TR`</a>
        <nav className="">
          <ul>
            <li><a href="#about" className="link">About</a></li>
            <li><a href="#work" className="link">Work</a></li>
            <li><a href="#contact" className="link">Contact</a></li>
          </ul>
        </nav>
    </header>
  </div>
);
export default Nav;
