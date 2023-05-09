import React from "react";
import { HeaderBox, BlurBox, Name, Btn } from "./Header_Style";
import cv from "../../../src/CV.pdf";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderBox>
      <BlurBox>
        <nav>
          <ul>
            <Link to="/sobreMim">
              <li>.sobreMim( )</li>
            </Link>
            <Link to="/projetos">
              <li>.projetos( )</li>
            </Link>
            <Link to="/contato">
              <li>.contato( )</li>
            </Link>
          </ul>
        </nav>
        <Name>
          <h1>Isabela de Melo Silva</h1>
          <p>Front-end Developer</p>
        </Name>
        <Btn>
          <a href={cv} download="Isabela de Melo Silva CV dev web">
            <button>DOWNLOAD CV</button>
          </a>
        </Btn>
      </BlurBox>
    </HeaderBox>
  );
}
