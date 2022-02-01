import React from 'react';

import '../../scss/page_presale/style.scss';
import '../../scss/page_presale/ipad.scss';
import '../../scss/page_presale/mobile.scss';
import '../../scss/page_whitelist/whiteList.scss';

import Header from '../presale/component/Header';
import Logo from '../presale/component/logo';
import WhiteListBody from './component/WhiteListBody';

export default function whitelistContainer() {
  return (
    <div className="white-list">
      <Header />
      <WhiteListBody />
    </div>
  );
}
