import React from "react";
import { Aside } from "./aside_style"
import home from "../../Imgs/home.png"
import profile from "../../Imgs/profile.png"
import projects from "../../Imgs/project.png"
import contacts from "../../Imgs/at.png"

export default function Aside_() {
  return (
    <Aside>
      <div>
        <a href="">
          <img src={home} alt="" />
        </a>
        <a href="">
          <img src={profile} alt="" />
        </a>
        <a href="">
          <img src={projects} alt="" />
        </a>
        <a href="">
          <img src={contacts} alt="" />
        </a>
      </div>
    </Aside>
  );
}
