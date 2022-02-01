import React from 'react';
import _ from 'lodash';

import '../../scss/common/contract_address.scss';

export default function ContractAddress(props) {
  const {urlApi} = props;

  return (
    <div className="contract-address">
      <div className="contract-address__content">
        <img
          className="contract-address__content-coin"
          src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.coinBoon}
          alt=""
        />
        <a className="market" href="">
          <span>Smart Contract Address: Coming Soon</span>
        </a>
        <img
          className="contract-address__content-coin"
          src={_.isEmpty(urlApi) ? '' : urlApi.sale.avaxIcon}
          alt=""
        />
      </div>
    </div>
  );
}
