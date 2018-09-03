import React from "react";
import "./Button.css";

export const Button = ({link, text}) => (
  <a href={link} className="button">{text}</a>
);

export default Button;
