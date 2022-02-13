import React from 'react';

import '../../scss/page_claim/claim.scss';
import '../../scss/page_claim/claim_mobile.scss';
import '../../scss/page_claim/claim_tablet.scss';

import HeaderContainer from '../../components/header/HeaderContainer';
import ClaimBody from './component/ClaimBody';
import UrlRecursive from 'src/components/UrlRecursive';

export default function ClaimPage(props) {
  const {url_api} = props;

  return (
    <UrlRecursive data={props}>
      <div className="claim">
        <div className="header">
          <HeaderContainer url_api={url_api} />
        </div>
        <ClaimBody url_api={url_api} />
      </div>
    </UrlRecursive>
  );
}
