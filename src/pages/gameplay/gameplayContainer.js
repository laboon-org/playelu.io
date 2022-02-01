import React from 'react';
import _ from 'lodash';

import '../../scss/page_gameplay/gameplay.scss';
import '../../scss/page_gameplay/gameplay_ipad.scss';
import '../../scss/page_gameplay/gameplay_mobile.scss';

import SkyCenter from './sky/skyCenter';
import Beach from './Beach';
import SkyBottom from './sky/skyBottom';
import SkyTop from './sky/skyTop';
import Cloud from './sky/cloud';
import Cursor from '../../components/cursor';
import LaunchHeader from '../../components/LaunchHeader';
import UrlRescusive from '../../UrlRescusive';

import Header from '../../components/Header';
import NavbarMobile from '../../components/NavbarMobile';

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
  return (
    <UrlRescusive data={props}>
      <div className="gameplay-body">
        <div className="header">
          <Header />
          <NavbarMobile />
        </div>
        <Cursor />
        <audio className="audio_gameplay" autoPlay loop preload="metadata">
          <source
            src="https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg2.mp3"
            type="audio/mpeg"
          />
        </audio>
        <LaunchHeader />
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
