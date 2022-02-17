import React from 'react';
import _ from 'lodash';

import '../../scss/common/header/contract_address.scss';

export default function ContractAddress(props) {
  const { url_api } = props;

  return (
    <div className="contract-address">
      <div className="contract-address__content">
        <img
          className="contract-address__content-coin"
          src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.coinBoon}
          alt=""
        />
        <a className="market" href="/#">
          <span>Contract Address: Coming Soon !!!</span>
        </a>
        <img
          className="contract-address__content-coin"
          src={_.isEmpty(url_api) ? '' : url_api.sale.avaxIcon}
          alt=""
        />
      </div>
    </div>
  );
}
