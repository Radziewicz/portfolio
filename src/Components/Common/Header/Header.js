import React from "react";
import "./Header.css";
import Flip from 'react-reveal/Flip';

export const Header = ({ header }) => (
  <div className="wrapper-header">
    <div className="section_header">
      <h2 className="title">{header}</h2>
    </div>
  </div>
);

export default Header;
