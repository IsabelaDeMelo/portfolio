import React from "react";
import { Container, Ilust, Cont } from "./contato_style";
import linkedin from "../../Imgs/linkedin100.png";
import email from "../../Imgs/email100.png";
import illustration from "../../Imgs/illustration.png";
import Aside from "../Aside/aside";

export default function contato() {
  return (
    <div>
      <Aside />
      <Container>
        <Cont>
          <div>
            <a
              href="https://www.linkedin.com/in/isabela-de-melo-491299245/"
              target="_blank">
              <img src={linkedin} alt="" />
              <h2>Linkedin</h2>
            </a>
          </div>
          <div>
            <a href="isabelansoc@gmail.com" target="_blank">
              <img src={email} alt="" />
              <h2>E-mail</h2>
            </a>
          </div>
        </Cont>
        <Ilust>
          <img src={illustration} alt="" />
        </Ilust>
      </Container>
    </div>
  );
}
