import React from 'react';
import _ from 'lodash';

import '../../scss/page_home/home_desktop.scss';
import '../../scss/page_home/home_tablet.scss';
import '../../scss/page_home/home_mobile.scss';

import UrlRescusive from '../../UrlRescusive';
import Background from './backgrounds/background';
import Content from './playelu_content';
import Cursor from '../../components/cursor';
import LaunchHeader from '../../components/LaunchHeader';
import Sound from '../../components/sound';

import Header from '../../components/Header';
import NavbarMobile from '../../components/NavbarMobile';

export default function homeContainer(props) {
  const {urlApi, setting} = props;

  return (
    <UrlRescusive data={props}>
      <div className="playelu-body">
        <div className="header">
          <Header />
          <NavbarMobile />
        </div>
        <Cursor />
        <Sound />
        <LaunchHeader />
        <div className="playelu">
          <Background />
          <Content />
        </div>
        <div className="discord">
          <a href="https://discord.io/EluVerse">
            <img
              className="discord-img"
              src={_.isEmpty(urlApi) ? "" : urlApi.image.discord}
              alt=""
            />
            <img
              className="mobile__discord-img"
              src={_.isEmpty(urlApi) ? "" : urlApi.image.mobileDiscord}
              alt=""
            />
          </a>
        </div>
      </div>
    </UrlRescusive>
  );
}
