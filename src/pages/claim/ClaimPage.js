import React from 'react';
<<<<<<< HEAD
import '../../scss/page_claim/claim.scss'
import '../../scss/common/header/top_menu.scss';
import '../../scss/page_claim/claim_mobile.scss'
import '../../scss/page_claim/claim_tablet.scss'
// import '../../scss/sale_page/style.scss';
// import '../../scss/reponsiveness/sale_page/ipad.scss';
// import '../../scss/reponsiveness/sale_page/mobile.scss';

import Header from '../../components/header/HeaderContainer';
=======

import './component/claimScss/Claim.scss';

// Temp Path
import '../../scss/page_presale/presale.scss';
import '../../scss/page_presale/presale_tablet.scss';
import '../../scss/page_presale/presale_mobile.scss';

import Header from '../presale/component/Header';
>>>>>>> 66a46026f1f7d18deb57a2837c09e1bbeca53249
import ClaimBody from './component/ClaimBody';
import UrlRecursive from 'src/components/UrlRecursive';

export default function ClaimPage(props) {
  const { urlApi } = props;
  return (
    <UrlRecursive data={props}>
      <div className="claim">
        <Header urlApi={urlApi} />
        <ClaimBody urlApi={urlApi} />
      </div>
    </UrlRecursive>

  );
}
