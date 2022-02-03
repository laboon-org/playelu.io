import React from 'react';

import '../scss/common/loading.scss';
import Assets from '../constant/assets';

export default function Loading() {
  return (
    <div id="loading">
      <div className="loading-outer">
        <div className="loading-inner">
          <div className="loading-inner1"></div>
        </div>
      </div>
      <div className="loading-logo">
        <img src={Assets.logo.logo1} className="loading-img" alt="logoElu" />
      </div>
    </div>
  );
}
