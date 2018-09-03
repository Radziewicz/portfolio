import React from "react";
import "./ToTop.css";
import arrow from "./arrow.png";


export const ToTop = () => (
  <a href="#top" className="scroll"> <img src={arrow} /></a>
);

export default ToTop;
