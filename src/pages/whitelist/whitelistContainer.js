import React from 'react';

import '../../scss/page_whitelist/whitelist.scss';
import "../../scss/page_whitelist/whitelist_tablet.scss";
import "../../scss/page_whitelist/whitelist_mobile.scss";

import Header from '../presale/component/Header';
import WhiteListBody from './components/WhiteListBody';

export default function whitelistContainer() {
  return (
    <div className="white-list">
      <Header />
      <WhiteListBody />
    </div>
  );
}
