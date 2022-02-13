import React from 'react';

import '../../scss/page_whitelist/whitelist_d.scss';
import '../../scss/page_whitelist/whitelist_tablet.scss';
import '../../scss/page_whitelist/whitelist_mobile.scss';

import HeaderContainer from '../../components/header/HeaderContainer';
import FooterContainer from '../../components/footer/FooterContainer';
import WhiteListBody from './components/WhiteListBody';

import UrlRecursive from '../../components/UrlRecursive';
export default function whitelistContainer(props) {
  const {url_api} = props;

  return (
    <UrlRecursive data={props}>
      <div className="white-list">
        <div className="header">
          <HeaderContainer url_api={url_api} />
        </div>
        <WhiteListBody />
      </div>
      <div className="playelu-footer">
        <FooterContainer url_api={url_api} />
      </div>
    </UrlRecursive>
  );
}
