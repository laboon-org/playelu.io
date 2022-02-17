import React from 'react';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/skyBottom.scss';

export default function SkyBottom(props) {
  const { url_api } = props;
  return (
    <div className='skyBottom'>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.boatImg} className='boat__animation2'>
        <source src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <video
        autoPlay playsInline loop preload='metadata'
        poster={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.boatImg} className='boat__animation1'>
        <source src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.boat} type="video/mp4" />
      </video>
      <div className='sailboat'>
        <div className='sailboat-left'>
          <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.sailboatLeft} alt="sailboat-left" />
        </div>
        <div className='sailboat-right'>
          <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyBottom.sailboatRight} alt="sailboat-right" />
        </div>
      </div>
    </div>
  );
}
