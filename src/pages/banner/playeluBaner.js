import React, { useState } from "react";
import Navbar from "./navbar";
import urlConstant from "../../urlConstant";
import '../../scss/reponsiveness/home/home_Ipad.scss'
import '../../scss/reponsiveness/home/home_mobile.scss'
import Background from "./backgrounds/background";
import Content from "./playelu_content";
import Cursor from "../../components/cursor";
import LaunchHeader from "../../components/launch_header";

export default function PlayeluBaner() {
  const [isPlay, setPlay] = useState(true);
  const handlePausePlayClick = () => {
    if (isPlay) {
      setPlay(false)
    } else {
      setPlay(true)
    }
    // setPlay(!isPlay);
  };

  return (
    <div className='playelu-body'>
      <Cursor />
      <div className="discord">
        <a href="https://discord.io/EluVerse">
          <img className="discord-img" src={urlConstant.image.discord} alt="" />
          <img className="mobile__discord-img" src={urlConstant.image.mobileDiscord} alt="" />
        </a>
      </div>
      {/* ********Launch Header************ */}
      {/* <LaunchHeader /> */}
      <div className="playelu">
        <Background />
        <div className='navbar'>
          <div className="sound" onClick={handlePausePlayClick}>
            {isPlay ? <div>
              <audio className="audio" autoPlay loop preload='metadata' >
                <source src="https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg1.mp3" type="audio/mpeg" />
              </audio>
              <img className="sound-on active" src={urlConstant.image.soundOn} alt="" /></div>
              : <img className="sound-off" src={urlConstant.image.soundOff} alt="" />
            }
          </div>
          <Navbar />
        </div>
        <Content />
      </div>
    </div>
  );
}
