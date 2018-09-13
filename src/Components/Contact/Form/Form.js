import React from "react";
import "./Form.css";
import Button from "../../Common/Button/Button";


export const Form = () => (
  <form name="contact" method="POST" action="https://formspree.io/radziewicz.js@gmail.com">
    <input name="name" type="text" placeholder="Name" className="area1 border"></input>
    <input name="_replyto" type="text" placeholder="E-mail" className="area2 border"></input>
    <textarea name="message" placeholder="Your message" rows="5" className="border"></textarea>
    <div className="btn">
        <button type="submit" className="button">send a message</button>
    </div>
  </form>
);

export default Form;
