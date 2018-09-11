import React from "react";
import "./Footer.css";

import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import Flip from 'react-reveal/Flip';


export const Footer = () => (
  <div className="footer">
    <Flip left cascade><div className="icons">
      <a href="#"><img src={linkedin} alt="linkedin icon" /></a>
      <a href="https://github.com/Radziewicz"><img src={github} alt="github icon" /></a>
    </div></Flip>
    <div className="copyright">
      <p>Copyright &copy; Tipton 2018. All righrs reserved</p>
    </div>
  </div>
);
export default Footer;
