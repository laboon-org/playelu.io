import React from 'react';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/cloud.scss';

import IMG_CLOUD1 from '../../../assets/images/gameplay_page/cloud1.png';
import IMG_CLOUD2 from '../../../assets/images/gameplay_page/cloud2.png';

export default function Cloud(props) {
  const {url_api} = props;
  return (
    <div className='gameplay-cloud'>
      <img className="gameplay-cloud1-img" src={_.isEmpty(url_api) ? '' : IMG_CLOUD1 } alt="" />
      <img className="gameplay-cloud2-img" src={_.isEmpty(url_api) ? '' : IMG_CLOUD2 } alt="" />
    </div>
  );
}
// url_api.imageGamePlay.cloud1
// url_api.imageGamePlay.cloud2
