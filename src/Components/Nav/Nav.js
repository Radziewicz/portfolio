import React from "react";
import "./Nav.css";

export const Nav = () => (
  <div className="wrapper">
    <header>
        <a href="" id="top" className="logo">`TR`</a>
        <nav className="">
          <ul>
            <li><a href="#about" className="link">O mnie</a></li>
            <li><a href="#work" className="link">Projekty</a></li>
            <li><a href="#contact" className="link">Kontakt</a></li>
          </ul>
        </nav>
    </header>
  </div>
);
export default Nav;
