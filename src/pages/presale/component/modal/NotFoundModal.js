import React from 'react';

import '../../../../scss/page_presale/notfound_modal.scss';

import {isMobile} from 'react-device-detect';
import messageStorage from "../../../../stores/messageStorage";

const defineConstant = {
  metamask: {
    name: 'MetaMask',
    icon: 'https://media.graphassets.com/d8yVK0RpTcWjoCEL9ocu',
    link_download: isMobile ?
            'https://play.google.com/store/apps/details?id=io.metamask&hl=en&gl=US' :
            'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',
  },
  coin98: {
    name: 'Coin98',
    icon: 'https://media.graphassets.com/BoCtDBgSf2gQ6oI2wqkk',
    link_download: isMobile ?
            'https://play.google.com/store/apps/details?id=coin98.crypto.finance.media&hl=en&gl=US' :
            'https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg?hl=en',
  },
};

export default function NotfoundModal(props) {
  const name =
    defineConstant[messageStorage.getInstance().getMessage("NotFoundModal")]
      .name;
  const icon =
    defineConstant[messageStorage.getInstance().getMessage("NotFoundModal")]
      .icon;
  const link =
    defineConstant[messageStorage.getInstance().getMessage("NotFoundModal")]
      .link_download;

  return (
    <div className='notfound'>
      <img
        className='notfound__img'
        src='https://media.graphassets.com/OIVCW1AsQdhjxQPSmQ66'
        alt=''
      />
      <div className='notfound__text'>
        <span className='notfound__title'>{name} not found </span>
        <span className='notfound__sub'>You need to set up {name} wallet to continue</span>
      </div>
      <div className='notfound__btn'>
        <img src='https://media.graphassets.com/EODCyP6PQzi4nYSRU69E' alt='Not found' />
        <div
          className='notfound__btn--content'
          onClick={() => {
            window.open(link, '_blank').focus();
          }}
        >
          <img
            className='notfound__btn-icon'
            src={icon}
            alt='Not Found Icon'
          />
          <p className='notfound__btn-title'>Download {name}</p>
        </div>
      </div>
    </div>
  );
}
