import React from "react";
import "./Work.css";
import Header from "../Common/Header/Header";
import Button from "../Common/Button/Button";
import mockup1 from "./img/fruitleadR.png";
import mockup2 from "./img/portfolioR.png";
import mockup3 from "./img/fruitleadF.png";
import mockup4 from "./img/portfolioF.png";
import Slide from 'react-reveal/Slide';
import ScrollableAnchor from 'react-scrollable-anchor'

export const Work = () => (
  <ScrollableAnchor id={'work'}>
    <section className="work">
      <div className="wrapper">
        <Header header="Projekty" />
        <div className="wrapper_work">
          <Slide bottom><div className="content">
            <picture className="mockup">
              <source srcset={mockup1} media="(min-width: 1000px)" />
              <img src={mockup3} />
            </picture>
            <div className="project_des">
              <p>Do zbudowania mojego pierwszego komercyjnego zlecenia użyłem <span>flexbox</span>'a. Klasy nazywałem według metodologii <span>BEM</span> natomiast przy stylowaniu wykorzystałem preprocesor <span>SASS</span>. Aby "ożywić" stronę zastosowałem skrypty <span>jquery</span>.</p>
              <div className="gap">
                <Button link="https://github.com/Radziewicz/Fruitlead" text="Code"/>
                <Button link="http://fruitlead.eu/" text="Live"/>
              </div>
            </div>
          </div></Slide>
          <Slide bottom><div className="content">
            <picture className="mockup right">
              <source srcset={mockup2} media="(min-width: 1000px)" />
              <img src={mockup4} />
            </picture>
            <div className="project_des">
              <p>Swoje portfolio oparłem o bibliotekę <span>ReactJS</span>. Do tworzenia strony użyłem <span>CSS Grid</span>. Pisząc kod od razu wykorzystywałem standard java script <span>ES6</span>.</p>
                <div className="gap">
                  <Button link="https://github.com/Radziewicz/portfolio" text="Code"/>
                  <Button link="http://tomasz-radziewicz.pl/" text="Live"/>
                </div>
            </div>
          </div></Slide>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
);
export default Work;
