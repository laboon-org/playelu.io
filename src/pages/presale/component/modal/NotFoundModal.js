import React from 'react';

import '../../../../scss/page_presale/notfound_modal.scss';

import {isMobile} from 'react-device-detect';
import message from '../../../../util/messageStorage';

const defineConstant = {
  metamask: {
    name: 'MetaMask',
    icon: 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp',
    link_download: isMobile ?
            'https://play.google.com/store/apps/details?id=io.metamask&hl=en&gl=US' :
            'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',
  },
  coin98: {
    name: 'Coin98',
    icon: 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png',
    link_download: isMobile ?
            'https://play.google.com/store/apps/details?id=coin98.crypto.finance.media&hl=en&gl=US' :
            'https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg?hl=en',
  },
};

export default function NotfoundModal(props) {
  const name = defineConstant[message.getInstance().getMessage('NotFoundModal')].name;
  const icon = defineConstant[message.getInstance().getMessage('NotFoundModal')].icon;
  const link = defineConstant[message.getInstance().getMessage('NotFoundModal')].link_download;

  return (
    <div className='notfound'>
      <img
        className='notfound__img'
        src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/notfound-icon.webp'
        alt=''
      />
      <div className='notfound__text'>
        <span className='notfound__title'>{name} not found </span>
        <span className='notfound__sub'>You need to set up {name} wallet to continue</span>
      </div>
      <div className='notfound__btn'>
        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/button/button_modal.webp' alt='' />
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
