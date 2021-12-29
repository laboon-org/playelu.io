import React from "react";
import _ from "lodash";
import Navbar from "./navbar";
import UrlRescusive from "../../UrlRescusive";
import '../../scss/reponsiveness/home/home_Ipad.scss'
import '../../scss/reponsiveness/home/home_mobile.scss'
import Background from "./backgrounds/background";
import Content from "./playelu_content";
import Cursor from "../../components/cursor";
import LaunchHeader from "../../components/launch_header";
import Sound from "../../components/sound";

export default function PlayeluBaner(props) {
  const { urlApi } = props
  return (
    <UrlRescusive data={props.urlApi}>
      <div className='playelu-body'>
        <Cursor />
        <div className="discord">
          <a href="https://discord.io/EluVerse">
            <img className="discord-img" src={_.isEmpty(urlApi) ? '' : urlApi.image.discord} alt="" />
            <img className="mobile__discord-img" src={_.isEmpty(urlApi) ? '' : urlApi.image.mobileDiscord} alt="" />
          </a>
        </div>
        {/* ********Launch Header************ */}
        {/* <LaunchHeader /> */}
        <div className="playelu">
          <Background />
          <div className='navbar'>
            <Sound />
            <Navbar />
          </div>
          <Content />
        </div>
      </div>
    </UrlRescusive>
  );
}
