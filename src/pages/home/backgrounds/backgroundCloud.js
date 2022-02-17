import React from 'react';
import _ from 'lodash';

export default function BackgroundCloud(props) {
  const { url_api } = props;
  return (
    <div className='background-cloud'>
      <div className='cloud x1'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud3} alt="" />
      </div>
      <div className='cloud x2'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud1} alt="" />
      </div>
      <div className='cloud x3'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud2} alt="" />
      </div>
      <div className='cloud x4'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud4} alt="" />
      </div>
      <div className='cloud x5'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud6} alt="" />
      </div>
      <div className='cloud x6'>
        <img src={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.cloud5} alt="" />
      </div>
    </div>
  );
}
