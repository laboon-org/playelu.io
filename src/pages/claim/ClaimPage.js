import React from 'react';

import '../../scss/page_claim/claim.scss';
import '../../scss/page_claim/claim_mobile.scss';
import '../../scss/page_claim/claim_tablet.scss';

import HeaderContainer from '../../components/header/HeaderContainer';
import ClaimBody from './component/ClaimBody';
import UrlRecursive from 'src/components/UrlRecursive';

export default function ClaimPage(props) {
  const { urlApi } = props;

  return (
    <UrlRecursive data={props}>
      <div className="claim">
        <div className="header">
          <HeaderContainer urlApi={urlApi} />
        </div>
        <ClaimBody urlApi={urlApi} />
      </div>
    </UrlRecursive>
  );
}
