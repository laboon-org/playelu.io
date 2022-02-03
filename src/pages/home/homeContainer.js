import React from 'react';
import _ from 'lodash';

import '../../scss/page_home/home_desktop.scss';
import '../../scss/page_home/home_tablet.scss';
import '../../scss/page_home/home_mobile.scss';

import UrlRecursive from '../../components/UrlRecursive';
import Background from './backgrounds/background';
import Content from './playelu_content';
import HeaderContainer from '../../components/header/HeaderContainer';
import FooterContainer from '../../components/footer/FooterContainer';

export default function homeContainer(props) {
  const {urlApi, setting} = props;
  const sourceUrlSound1 = 'https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg1.mp3';
  return (
    <UrlRecursive data={props}>
      <div className="playelu-body">
        <div className="header">
          <HeaderContainer urlApi={urlApi} sourceUrl={sourceUrlSound1} />
        </div>
        <div className="playelu">
          <Background />
          <Content />
        </div>
      </div>
      <div className="playelu-footer">
        <FooterContainer />
      </div>
    </UrlRecursive>
  );
}
