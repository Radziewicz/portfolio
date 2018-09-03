import React from "react";
import "./Form.css";
import Button from "../../Common/Button/Button";


export const Form = () => (
  <form>
    <input placeholder="Imię" className="area1 border"></input>
    <input placeholder="E-mail" className="area2 border"></input>
    <textarea placeholder="Wiadomość..." rows="5" className="border"></textarea>
    <div className="btn">
      <Button link="#" text="Wyślij wiadomość"/>
    </div>
  </form>
);

export default Form;
