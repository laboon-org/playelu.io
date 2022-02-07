import React from 'react';

import './component/claimScss/Claim.scss';

// Temp Path
import '../../scss/page_presale/presale.scss';
import '../../scss/page_presale/presale_tablet.scss';
import '../../scss/page_presale/presale_mobile.scss';

import Header from '../presale/component/Header';
import ClaimBody from './component/ClaimBody';

export default function ClaimPage() {
  return (
    <div className="white-list">
      <Header />
      <ClaimBody />
    </div>
  );
}
