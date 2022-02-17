import React from 'react';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/cloud.scss';

export default function Cloud(props) {
  const { url_api } = props;
  return (
    <div className='gameplay-cloud'>
      <img className="gameplay-cloud1-img" src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.cloud1} alt="" />
      <img className="gameplay-cloud2-img" src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.cloud2} alt="" />
    </div>
  );
}
