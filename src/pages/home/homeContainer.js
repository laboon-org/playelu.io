import React from 'react';
import _ from 'lodash';

import '../../scss/page_home/home.scss';
import '../../scss/page_home/home_tablet.scss';
import '../../scss/page_home/home_mobile.scss';

import Assets from "./../../constant/assets";

import HeaderContainer from "../../components/header/HeaderContainer";
import FooterContainer from "../../components/footer/FooterContainer";
import FloatingDiscord from "../../components/footer/FloatingDiscord";

import UrlRecursive from '../../components/UrlRecursive';
import Background from './backgrounds/background';
import Content from './playelu_content';

export default function homeContainer(props) {
  const {urlApi} = props;

  return (
    <UrlRecursive data={props}>
      <div className="playelu-body">
        <div className="header">
          <HeaderContainer urlApi={urlApi} sourceUrl={Assets.sound.sound1} />
        </div>
        <div className="playelu">
          <Background />
          <Content />
        </div>
      </div>
      <div className="playelu-footer">
        <FooterContainer />
        <FloatingDiscord urlApi={urlApi} />
      </div>
    </UrlRecursive>
  );
}
