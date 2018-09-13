import React from "react";
import "./Info.css";
import Infobox from "./Infobox/Infobox";
import Slide from 'react-reveal/Slide';

  export const Info = () => (
    <div className="dusky">
      <div className="infoboxes wrapper">
        <Slide bottom >
          <Infobox title="Are you looking for" content="Frontend Developer?" />
          <Infobox title="Call or email me" content="right now." />
          <Infobox title="Call me" content="732 187 206" />
          <Infobox title="Email me" content="radziewicz.js@gmail.com" />
        </Slide>
      </div>
    </div>
  );

export default Info;
