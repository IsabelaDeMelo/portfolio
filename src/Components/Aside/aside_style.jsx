import styled from "styled-components";

export const Aside = styled.aside`
  width: 5vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.295);
  box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.495);
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  animation: slideInLeft 1s;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

a {
    display: flex;
    flex-direction: column;
    align-items: center;
}

  img {
    width: 60%;
}
`;
