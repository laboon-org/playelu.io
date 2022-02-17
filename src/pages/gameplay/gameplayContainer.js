import React from 'react';

import '../../scss/page_gameplay/gameplay.scss';
import '../../scss/page_gameplay/gameplay_tablet.scss';
import '../../scss/page_gameplay/gameplay_mobile.scss';

import Assets from './../../constant/assets';

import HeaderContainer from '../../components/header/HeaderContainer';
import FooterContainer from '../../components/footer/FooterContainer';
import FloatingDiscord from '../../components/footer/FloatingDiscord';

import SkyCenter from './sky/skyCenter';
import SectionNest from './components/SectionNest';
import SkyBottom from './sky/skyBottom';
import SkyTop from './sky/skyTop';
import Cloud from './sky/cloud';

import UrlRecursive from '../../components/UrlRecursive';

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
  const { urlApi } = props;

  return (
    <UrlRecursive data={props}>
      <div className="gameplay-body">
        <div className="header">
          <HeaderContainer urlApi={urlApi} sourceUrl={Assets.sound.sound2} />
        </div>
        <div className="sky">
          <SkyTop />
          <SkyCenter />
          <Cloud />
          <SkyBottom />
        </div>
        <SectionNest />
      </div>
      <div className="playelu-footer">
        <FooterContainer />
        <FloatingDiscord urlApi={urlApi} />
      </div>
    </UrlRecursive>
  );
}
