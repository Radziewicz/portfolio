import React from "react";
import "./Box.css";

export const Box = ({title, content, img}) => (
    <div className="box_block_border">
      <img src={img} alt="" />
      <h4 className="title">{title}</h4>
      <p className="description">{content}</p>
    </div>
);
export default Box;
