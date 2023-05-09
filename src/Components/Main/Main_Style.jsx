import styled from "styled-components";
import background from "../../Imgs/bg-body.png";
import "animate.css";

export const MainBox = styled.section`
  height: 100vh;
  background-image: url(${background});
  color: white;

  h2 {
    text-align: center;
    padding-top: 1rem;
  }
`;

export const Container = styled.section`
  display: flex;
  height: 87vh;
`;

export const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  animation: flipInY 1.5s;
  img {
    width: 68%;
  }
`;

export const Text = styled.div`
  width: 50%;
  height: 40vh;
  background-image: linear-gradient(to right, #5c01475b, #0d001c60);
  border-radius: 1rem;

  p {
    padding: 0.8rem;
  }
`;

// .testando {
//     content: '';
//     position: absolute;
//     height: 10px;
//     width: 100%;
//     top: 12rem;
//     background:white;
// }

// .testando::before {
// content: "";
// background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
// opacity: 0.85;
// position: absolute;
// width: 100%;
// height: 0;
// transition: 0.4s ease-in-out;
// }

// .testando:hover::before {
// height: 100%;
// }
