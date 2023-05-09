import styled from "styled-components";
import background from "../../Imgs/bg-2.png";

export const MainBox = styled.section`
  height: 115vh;
  background-image: url(${background});
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  section:nth-child(1) {
    text-align: center;
    width: 100%;
  }
`;

export const Projects = styled.section`
  width: 79%;
  height: 80vh;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  img:nth-child(3) {
    width: 100%;
  }

  ::before {
    content: "";
    background: #000000b9;
    opacity: 0.8;
    position: absolute;
    left: 3.7rem;
    width: 88.8%;
    height: 0;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }

  :hover::before {
    height: 70vh;
  }

  :hover img:nth-child(1) {
    opacity: 1;
  }
  
  :hover img:nth-child(2) {
    opacity: 1;ff
  }
`;

export const ProjObj = styled.section`
  a:nth-child(1) {
    img {
      position: absolute;
      top: 40%;
      left: 20%;
      opacity: 0;
      transition: 0.5s ease-in-out;
      width: 3%;
      z-index: 2;
    }
  }

  a:nth-child(2) {
    img {
      position: absolute;
      top: 40%;
      left: 25%;
      opacity: 0;
      transition: 0.5s ease-in-out;
      width: 3%;
      z-index: 2;
    }
  }
`;

export const Techs = styled.section`
  margin-top: 4rem;

  h3 {
    font-size: 1.4rem;
  }
`;

export const TechsImgs = styled.section`
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;

    div {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        background-color: rgba(150, 150, 150, 0.200);
        box-shadow: 3px 3px 5px #38013F;
        animation: flipInY 1.5s;
        border-radius: 100%;
    }
`

// export const Overlay = styled.div`
//     position: relative;
//     opacity: 0;
//     transition: .6s;

//     :hover {
//         opacity: 1;
//         background-color: rgba(0, 0, 0, 0.800);
//         transform: scale(1.2);
        
// `