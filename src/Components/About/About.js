import React from "react";
import "./About.css";
import Header from "../Common/Header/Header";
import Box from "../Common/Box/Box";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import Slide from 'react-reveal/Slide';
import ScrollableAnchor from 'react-scrollable-anchor'



export const About = () => (
  <ScrollableAnchor id={'about'}>
    <section className="wrapper">
      <Header header="O mnie" />
      <Slide bottom cascade><div className="about_description">
        <p className="text">Jestem samoukiem, jednak kierunek nauki nadaje mi doświadczony programista. Swoją edukację w kierunku programowania zaczałem od kursów ze stron internetowych a obecnie robię swoje pierwsze komercyjne zlecenia.</p>
        <p className="text">Od samego początku postawiłem na jakość. Dobre praktyki oraz dobór odpowiednich metod to dla mnie priorytet. Szczególną uwagę przykładam do czytelności kodu a także do lekkości strony. Pojęcie "pixel perfect" nie jest mi obojętne.</p>
        <p className="text">Obecnie najbardziej skoncentrowany jestem na nauce języka java script. Uczę się go rownolegle z react i gatsby. Dzień zaczynam od wizyty na www.csswinner.com a wolnych czasie ćwiczę kalistenikę lub gram w World of Warcraft.</p>
      </div></Slide>
      <div className="about_box box_block">
      <Slide bottom ><Box
          title="HTML"
          content="Potrafię zbudowac poprawny układ strony internetowej wykorzystując dobre praktyki."
          img={icon1}
        /></Slide>
        <Slide bottom ><Box
          title="CSS"
          content="Jestem w stanie ostylować stronę z wykorzystaniem flexboxa lub css grida. Wykorzystuję preprocesor Sass."
          img={icon2}
        /></Slide>
        <Slide bottom ><Box
          title="Java Script"
          content="Język, któremu poswiecam najwięcej czasu. Staram się pisać w EcmaScript2015 i ES6+."
          img={icon3}
        /></Slide>
        <Slide bottom ><Box
          title="React"
          content="Framwework JS w którym chce się specjalizować. Ucze się go równolegle z Java Script."
          img={icon4}
        /></Slide>
      </div>
    </section>
  </ScrollableAnchor>
);
export default About;
