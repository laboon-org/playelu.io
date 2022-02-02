import React from 'react';
import _ from 'lodash';

import OnBoardingTip from '../components/OnBoarding_tip';
import UrlRescusive from '../../../UrlRescusive';

export default function OnBoardingElementRight(props) {
  const {urlApi} = props;
  return (
    <UrlRescusive data={props}>
      <div className="onBoarding__element">
        <OnBoardingTip
          classNames={{
            parent: 'onBoarding__element-tip',
          }}
          title={'farming'}
          tip={1}
        />
        <div className="onBoarding__element-content">
          <img
            className="onBoarding__element-img e-img-right"
            src={
              _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.farming1
            }
            alt=""
          />
        </div>
      </div>
    </UrlRescusive>
  );
}
