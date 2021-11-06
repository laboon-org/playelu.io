import React from "react";
import playeluImg from "../img/eluLogo.png";
import discord from "../img/eluDiscord.png";
import PlayeluLink from "./playeluLink";
import soundOn from "../img/sound.png";
import soundOff from "../img/soundOff.png";
import smallDiscord from "../img/smallDiscord.png";
import backgroundBottom from "../img/backgroundBottom.png";
import axios from "axios";
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
//
window.addEventListener("click", (event) => {
  controlSound();
});

export default function PlayeluBaner() {
  const [email, setEmail] = React.useState("");
  const URI ="https://script.google.com/macros/s/AKfycbzzpbtc6C2W3ju_gS5GFd34KB_LqnhXVCC67A7tR3-Q5NQAcbkMWWj2XEQyQdHJt5I/exec";
  const onPress = React.useCallback(() => {
    axios
      .get(URI, {
        data: {
          email,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  return (
    <div className="playelu">
      <div className="background-bottom">
        <img className="background__bottom-img" src={backgroundBottom} alt="" />
      </div>
      <div className="sound">
        <img className="sound-on active" src={soundOn} alt="" />
        <img className="sound-off" src={soundOff} alt="" />
      </div>
      <div className="discord">
        <img className="discord" src={discord} alt="" />
      </div>
      <div className="mobile-discord">
        <img className="small-discord" src={smallDiscord} alt="" />
      </div>
      <div className="playelu-all d-flex flex-column h-100 justify-content-center">
        <div className="playelu-top">
          <div className="playelu-img">
            <img src={playeluImg} alt="" />
          </div>
          <div className="playelu-tittle">
            <h1>Play-to-Earn NFT Game</h1>
          </div>
          <div className="playelu-btn">
            <input
                onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="playelu-input "
              type="text"
              placeholder="Your Email here"
            ></input>
            <i className="iconEmail fas fa-envelope"></i>
            <button
              type="submit"
              className=" subcribe__playelu-btn"
              onClick={onPress}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="playelu-bottom mt-auto mb-5 d-flex justify-content-center">
          <PlayeluLink></PlayeluLink>
        </div>
      </div>
    </div>
  );
}
