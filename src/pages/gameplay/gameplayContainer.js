import React from 'react';
import _ from 'lodash';

import '../../scss/common/font.scss';

import '../../scss/page_gameplay/gameplay_desktop.scss';
import '../../scss/page_gameplay/gameplay_tablet.scss';
import '../../scss/page_gameplay/gameplay_mobile.scss';

import HeaderContainer from '../../components/header/HeaderContainer';

import SkyCenter from './sky/skyCenter';
import Beach from './GameNestFeatures';
import SkyBottom from './sky/skyBottom';
import SkyTop from './sky/skyTop';
import Cloud from './sky/cloud';

import UrlRescusive from '../../UrlRescusive';

window.addEventListener('scroll', reveal);
function reveal() {
  const reveal = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveal.length; i++) {
    const windowHeght = window.innerHeight;
    const revealTop = reveal[i].getBoundingClientRect().top;
    if (revealTop < windowHeght) {
      reveal[i].classList.add('active');
    } else {
      reveal[i].classList.remove('active');
    }
  }
}

export default function gameplayContainer(props) {
  const {urlApi, setting} = props;
  const sourceUrlSound2= 'https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg2.mp3';

  return (
    <UrlRescusive data={props}>
      <div className="gameplay-body">
        <div className="header">
          <HeaderContainer urlApi={urlApi} sourceUrl={sourceUrlSound2} />
        </div>
        <div className="sky">
          <SkyTop />
          <SkyCenter />
          <Cloud />
          <SkyBottom />
        </div>
        <Beach />
      </div>
    </UrlRescusive>
  );
}
