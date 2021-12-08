import React, { useState } from "react";
import Navbar from "./navbar";



import urlConstant from "../../urlConstant";
import '../../scss/reponsiveness/home/home_Ipad.scss'
import '../../scss/reponsiveness/home/home_mobile.scss'
import Background from "./backgrounds/background";
import MouseParticles from 'react-mouse-particles'
import Content from "./playelu_content";
// import CloudBottom from "./backgrounDecor/BackgroundBottom";

const controlSound = () => {
  const soundOn = document.querySelector(".sound-on");
  const soundOff = document.querySelector(".sound-off");
  soundOn.addEventListener("click", () => {
    soundOff.classList.add("active");
    soundOn.classList.remove("active");
  });
  soundOff.addEventListener("click", () => {
    soundOff.classList.remove("active");
    soundOn.classList.add("active");
  });
};

export default function PlayeluBaner() {
  return (
    <div className='playelu-body'>
      <div className="discord">
        <img className="discord-img" src={urlConstant.image.discord} alt="" />
        <img className="mobile__discord-img" src={urlConstant.image.mobileDiscord} alt="" />
      </div>
      <div className="playelu">
        <Background />
        <div className='navbar'>
          <div className="sound" onClick={controlSound}>
            <img className="sound-on active" src={urlConstant.image.soundOn} alt="" />
            <img className="sound-off" src={urlConstant.image.soundOff} alt="" />
          </div>
          <Navbar />
        </div>
        <Content />
      </div>
      <MouseParticles g={1} num="20" color={["#feca1a", "#fbed52", "#bae4eb"]} cull="col,image-wrapper" />
    </div>
  );
}
