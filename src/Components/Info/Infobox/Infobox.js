import React from "react";
import "./Infobox.css";

export const Infobox = ({ title, content }) => (
  <div className="infobox">
    <p className="info_title">{title}</p>
    <h4 className="info_description">{content}</h4>
  </div>
);
export default Infobox;
