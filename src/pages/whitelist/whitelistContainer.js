import React from 'react';

import '../../scss/page_whitelist/whitelist_d.scss';
import '../../scss/page_whitelist/whitelist_tablet.scss';
import '../../scss/page_whitelist/whitelist_mobile.scss';

import HeaderContainer from '../../components/header/HeaderContainer';
import FooterContainer from '../../components/footer/FooterContainer';
import WhiteListBody from './components/WhiteListBody';

import UrlRecursive from '../../components/UrlRecursive';
export default function whitelistContainer(props) {
  const { urlApi } = props;

  return (
    <UrlRecursive data={props}>
      <div className="white-list">
        <div className="header">
          <HeaderContainer urlApi={urlApi} />
        </div>
        <WhiteListBody />
      </div>
      <div className="playelu-footer">
        <FooterContainer urlApi={urlApi} />
      </div>
    </UrlRecursive>
  );
}
