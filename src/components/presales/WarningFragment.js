import React from 'react';

import '../../pages/presale/component/modal/_modal.scss';
import '../../pages/presale/component/modal/_responsive.scss';

export default function WarningFragment(props) {
  const {changeStateWarning} = props;
  return (
    <div className="warning">
      <div className="warning__frame">
        <img
          src="https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/panel/warning-icon.png"
          alt=""
        />
        <div className="warning__text">
          <span>
            The transaction does not support BSC (Binance Smart Chain)
            network currently
          </span>
        </div>
        <div
          className="warning__btn"
          onClick={() => changeStateWarning(false)}
        >
          <span>OK</span>
        </div>
      </div>
    </div>
  );
}
