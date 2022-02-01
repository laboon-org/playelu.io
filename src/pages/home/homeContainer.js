import React from 'react';
import _ from 'lodash';

import '../../scss/page_home/home_desktop.scss';
import '../../scss/page_home/home_tablet.scss';
import '../../scss/page_home/home_mobile.scss';

import UrlRescusive from '../../UrlRescusive';
import Background from './backgrounds/background';
import Content from './playelu_content';

import HeaderContainer from '../../components/header/HeaderContainer';

export default function homeContainer(props) {
  const {urlApi, setting} = props;

  return (
    <UrlRescusive data={props}>
      <div className="playelu-body">
        <div className="header">
          <HeaderContainer urlApi={urlApi} />
        </div>
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
