import React from "react";
import "./Footer.css";

import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import Flip from 'react-reveal/Flip';


export const Footer = () => (
  <div className="footer">
    <Flip left cascade><div className="icons">
      <a href="https://www.linkedin.com/in/tomasz-radziewicz-1a5a9a16b/"><img src={linkedin} alt="linkedin icon" /></a>
      <a href="https://github.com/Radziewicz"><img src={github} alt="github icon" /></a>
    </div></Flip>
    <div className="copyright">
      <p>© Tomasz Radziewicz 2018</p>
    </div>
  </div>
);
export default Footer;
