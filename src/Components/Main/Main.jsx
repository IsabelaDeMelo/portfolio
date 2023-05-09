import React from "react";
import { MainBox, Container, About, Image, Text } from "./Main_Style";
import Line from "../Line/Line";
import icon from "../../Imgs/icone.png";
import Aside from "../Aside/aside";

export default function Main() {
  return (
    <MainBox>
      <section>
        <h2>.sobreMim( )</h2>
        <Line />
      </section>
      <Container>
        <Aside />
        <About>
          <Image>
            <img src={icon} alt="Ilustração mulher com cabelo vermelho" />
          </Image>
          <Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repudiandae maiores, suscipit non nisi, reprehenderit nemo
              dignissimos id vel esse voluptas vero voluptates hic accusantium
              consectetur provident. Sit, voluptas dolore. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Reprehenderit asperiores
              dolores fuga voluptatibus dicta nisi quos eligendi molestias
              excepturi modi inventore tempora, blanditiis saepe aperiam, quo
              quisquam laboriosam quia harum!
            </p>
          </Text>
        </About>
      </Container>
    </MainBox>
  );
}
