import React from 'react';
import _ from 'lodash';

import '../scss/common/launch_header.scss';

export default function LaunchHeader(props) {
  const {urlApi} = props;

  return (
    <div className='launch-header'>
      <div className='launch-header__content'>
        <img className='launch-header__content-coin' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.coinBoon} alt='' />
        <a className='market' href=''>
          <span>Smart Contract Address: Coming Soon</span>
        </a>
        <img className='launch-header__content-coin' src={_.isEmpty(urlApi) ? '' : urlApi.sale.avaxIcon} alt='' />
      </div>
    </div>
  );
}
