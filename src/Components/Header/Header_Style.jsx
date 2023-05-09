import styled from "styled-components";
import background from "../../Imgs/bg-blur.png"; 
import 'animate.css';

export const HeaderBox = styled.section`
    height: 100vh;
    background-image: url(${background});
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BlurBox = styled.section`
    width: 60vw;
    height: 65vh;
    background-color: rgba(0, 0, 0, 0.550);
    border-radius: 2em;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.267);
    color: white;
    animation: fadeIn 2s;
    
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 7rem;
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
        color: white;
    }

    li {
        transition: .3s;
    }

    li:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const Link = styled.div`
text-decoration: none;
`

export const Name = styled.div`
    margin-top: 6rem;
    margin-left: 8rem;
    h1 {
        font-size: 2.6rem;
        font-weight: 500;
    }
    p {
        font-size: 1.7rem;
        font-weight: 200;
    }
`

export const Btn = styled.div`
    margin-left: 38%;
    margin-top: 2.3rem;
    button {
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: .2rem;
        background-color: transparent;
        color: white;
        width: 16vw;
        height: 7vh;
        border-radius: .6rem;
        border: none;
        box-shadow: 3px 3px 5px #38013F;
        transition: .3s;
    }
    button:hover {
        color: black;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.700);
    }
    a {
        text-decoration: none;
    }
`