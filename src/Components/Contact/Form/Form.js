import React from "react";
import "./Form.css";
import Button from "../../Common/Button/Button";


export const Form = () => (
  <form name="contact" method="POST" action="https://formspree.io/radziewicz.js@gmail.com">
    <input name="name" type="text" placeholder="Imię" className="area1 border"></input>
    <input name="_replyto" type="text" placeholder="E-mail" className="area2 border"></input>
    <textarea name="message" placeholder="Twoja wiadomość" rows="5" className="border"></textarea>
    <div className="btn">
        <button type="submit" className="button">Wyślij wiadomość</button>
    </div>
  </form>
);

export default Form;
