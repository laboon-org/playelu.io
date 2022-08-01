import React from 'react';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/skyBottom.scss';

import IMG_SAILBOAT from '../../../assets/images/gameplay_page/sailboat.png';
import IMG_SAILBOAT_LEFT from '../../../assets/images/gameplay_page/sailboat_left.png';
import IMG_SAILBOAT_RIGHT from '../../../assets/images/gameplay_page/sailboat_right.png';

export default function SkyBottom(props) {
  const {url_api} = props;
  return (
    <div className='skyBottom'>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(url_api) ? '' : IMG_SAILBOAT } className='boat__animation2'>
        <source src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(url_api) ? '' : IMG_SAILBOAT } className='boat__animation1'>
        <source src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <div className='sailboat'>
        <div className='sailboat-left'>
          <img src={_.isEmpty(url_api) ? '' : IMG_SAILBOAT_LEFT} alt="sailboat-left" />
        </div>
        <div className='sailboat-right'>
          <img src={_.isEmpty(url_api) ? '' : IMG_SAILBOAT_RIGHT} alt="sailboat-right" />
        </div>
      </div>
    </div>
  );
}

// url_api.imageGamePlay.skyBottom.boatImg
// url_api.imageGamePlay.skyBottom.boatImg
// url_api.imageGamePlay.skyBottom.sailboatLeft
// url_api.imageGamePlay.skyBottom.sailboatRight
