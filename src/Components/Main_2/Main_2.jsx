import React, { useState } from "react";
import Line from "../Line/Line";
import { MainBox, Projects, Techs, TechsImgs, ProjObj } from "./Main_2_Style";
import pepsi from "../../Imgs/pepsi.png";
import starWars from "../../Imgs/star-wars.png";
import html from "../../Imgs/html50.png";
import css from "../../Imgs/css50.png";
import react from "../../Imgs/react50.png";
import github from "../../Imgs/github50.png";
import eye from "../../Imgs/eye50.png";
import Aside from "../Aside/aside";
import Carousel from "react-elastic-carousel";

export default function Main_2() {
  const [projects] = useState([
    {
      img: pepsi,
      alt: "Pepsi landing page",
      icon1: github,
      icon2: eye,
      link: "https://github.com/IsabelaDeMelo/pepsi-project",
    },
    { img: starWars, alt: "Star Wars landing page", icon1: github, icon2: eye },
  ]);

  // const [link, setLink] = useState([
  // "https://github.com/IsabelaDeMelo/pepsi-project"
  // ]);

  const breakPoints = [];

  return (
    <MainBox>
      <section>
        <Aside />
        <h2>.projetos( )</h2>
        <Line />
      </section>
      <Projects className="projects">
        <Carousel breakPoints={breakPoints}>
          {projects.map((item) => (
            <ProjObj>
              <a href={item.link} target="_blank">
                <img src={item.icon1} />
              </a>
              <a href={item.href2}>
                <img src={item.icon2} />
              </a>
              <img src={item.img} alt={item.alt} />
            </ProjObj>
          ))}
        </Carousel>
      </Projects>
      <Techs>
        <h3>Principais tecnologias</h3>
        <TechsImgs>
          <div>
            <img src={html} alt="HTML icon" />
          </div>
          <div>
            <img src={css} alt="CSS icon" />
          </div>
          <div>
            <img src={react} alt="ReactJs icon" />
          </div>
        </TechsImgs>
      </Techs>
    </MainBox>
  );
}
