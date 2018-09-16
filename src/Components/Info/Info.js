import React from "react";
import "./Info.css";
import Infobox from "./Infobox/Infobox";
import Slide from 'react-reveal/Slide';

  export const Info = () => (
    <div className="dusky">
      <div className="infoboxes wrapper">
        <Slide bottom >
          <Infobox title="Jeżeli szukasz" content="Frontend Developera?" />
          <Infobox title="Zadzwoń lub napisz" content="już teraz!" />
          <Infobox title="Zadzwoń" content="732 187 206" />
          <Infobox title="Napisz" content="radziewicz.js@gmail.com" />
        </Slide>
      </div>
    </div>
  );

export default Info;
