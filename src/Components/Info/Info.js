import React from "react";
import "./Info.css";
import Infobox from "./Infobox/Infobox";

  export const Info = () => (
    <div className="dusky">
      <div className="infoboxes wrapper">
        <Infobox title="Jeżeli szukasz" content="Frontend Developera" />
        <Infobox title="Zadzwoń lub napisz" content="już teraz." />
        <Infobox title="Zadzwoń do mnie" content="732 187 206" />
        <Infobox title="Napisz do mnie" content="radziewicz.js@gmail.com" />
      </div>
    </div>
  );

export default Info;
