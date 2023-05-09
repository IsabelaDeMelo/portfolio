import styled from "styled-components";
import background from "../../Imgs/bg-body.png";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: white;
  }
`;

export const Cont = styled.section`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
  }
`;

export const Ilust = styled.section`
  width: 40%;

  img {
    width: 100%;
  }
`;
