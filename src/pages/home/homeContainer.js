import React from 'react';

import Assets from '../../constant/assets';

import '../../scss/page_home/home.scss';
import '../../scss/page_home/home_tablet.scss';
import '../../scss/page_home/home_mobile.scss';

import HeaderContainer from '../../components/header/HeaderContainer';
import FooterContainer from '../../components/footer/FooterContainer';
import FloatingDiscord from '../../components/footer/FloatingDiscord';

import UrlRecursive from '../../components/UrlRecursive';
import Background from './backgrounds/background';
import HomeContent from './HomeContent';

export default function HomeContainer(props) {
  const { url_api } = props;

  return (
    <UrlRecursive data={props}>
      <div className="playelu-body">
        <div className="header">
          <HeaderContainer url_api={url_api} sourceUrl={Assets.sound.sound1} />
        </div>
        <div className="playelu">
          <Background />
          <HomeContent url_api={url_api} />
        </div>
      </div>
      <div className="playelu-footer">
        <FooterContainer url_api={url_api} />
        <FloatingDiscord url_api={url_api} />
      </div>
    </UrlRecursive>
  );
}
