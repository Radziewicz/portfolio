import React from "react";
import "./Form.css";
import Button from "../../Common/Button/Button";


export const Form = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
    <input type="text" placeholder="Name" className="area1 border"></input>
    <input type="text" placeholder="E-mail" className="area2 border"></input>
    <textarea placeholder="Your message" rows="5" className="border"></textarea>
    <div className="btn">
      <Button type="submit" text="Send a message"/>
    </div>
  </form>
);

export default Form;
