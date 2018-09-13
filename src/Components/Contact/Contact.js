import React from "react";
import "./Contact.css";
import Header from "../Common/Header/Header";
import Box from "../Common/Box/Box";
import Form from "./Form/Form";
import icon5 from "./img/call.svg";
import icon6 from "./img/email.svg";
import icon7 from "./img/mailbox.svg";
import Slide from 'react-reveal/Slide';
import ScrollableAnchor from 'react-scrollable-anchor'

export const Contact = () => (

  <ScrollableAnchor id={'contact'}>
    <div className="wrapper">
      <Header header="Contact" />
      <div className="wrapper_contact">
        <div className="contact box_block">
          <Slide bottom>
            <Box
              title="PHONE"
              content="732 187 206"
              img={icon5}
            />
            <Box
              title="EMAIL"
              content="radziewicz.js@gmail.com"
              img={icon6}
            />
            <Box
              title="ADRESS"
              content="Poland, Warsaw"
              img={icon7}
            />
          </Slide>
        </div>
        <Slide bottom><Form /></Slide>
      </div>
    </div>
  </ScrollableAnchor>
);
export default Contact;
