import React from "react";
import "./Hero.css";
import Nav from "../Nav/Nav";
import Button from "../Common/Button/Button";
import Flip from 'react-reveal/Flip';
import './cv.pdf';

export const Hero = () => (
    <div className="bg">
      <div className="wrapper">
        <Nav />
        <div className="hero_ele">
          <Flip left cascade>
            <p className="prof">WELCOME. I AM</p>
            <h1 className="name">Tomek Radziewicz</h1>
            <p className="prof">Junior frontend developer.</p>
          </Flip>
          <div className="content_download">
              <a href="./cv.pdf" className="button" download >Download CV</a>
          </div>
        </div>
      </div>
    </div>
);
export default Hero;
