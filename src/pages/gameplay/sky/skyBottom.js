import React from 'react';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/skyBottom.scss';

export default function SkyBottom(props) {
  const { urlApi } = props;
  return (
    <div className='skyBottom'>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boatImg} className='boat__animation2'>
        <source src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boatImg} className='boat__animation1'>
        <source src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <div className='sailboat'>
        <div className='sailboat-left'>
          <img src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.sailboatLeft} alt="sailboat-left" />
        </div>
        <div className='sailboat-right'>
          <img src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyBottom.sailboatRight} alt="sailboat-right" />
        </div>
      </div>
    </div>
  );
}
