import React from "react";
import "./Info.css";
import Infobox from "./Infobox/Infobox";

  export const Info = () => (
    <div className="dusky">
      <div className="infoboxes wrapper">
        <Infobox title="Are you looking for" content="Frontend Developer?" />
        <Infobox title="Call or email me" content="right now." />
        <Infobox title="Call me" content="732 187 206" />
        <Infobox title="Email me" content="radziewicz.js@gmail.com" />
      </div>
    </div>
  );

export default Info;
