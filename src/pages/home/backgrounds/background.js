import React from 'react';
import _ from 'lodash';

import BackgroundComet from './bacgroundComet';
import Stars from './Stars';
import BackgroundStar from './backgroundStar';
import BackgroundCloud from './backgroundCloud';
import UrlRescusive from '../../../components/UrlRecursive';

export default function Background(props) {
  const {url_api} = props;
  return (
    <UrlRescusive data={props}>
      <div className='playelu-background'>
        <BackgroundCloud />
        <BackgroundComet />
        <BackgroundStar />
        {/* FIXME: Memory Leak of React Hook */}
        {/* <div className='shooting-star'>
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
        </div> */}
        {/* <CloudBottom /> */}
      </div>
    </UrlRescusive>
  );
}
