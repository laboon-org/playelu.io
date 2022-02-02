import React from 'react';
import _ from 'lodash';

import UrlRescusive from '../../../UrlRescusive';
import OnBoardingTip from './OnBoarding_tip';

export default function OnboardingComingsoon(props) {
  const {classNames, urlApi} = props;

  return (
    <UrlRescusive data={props}>
      <div className='onBoarding'>
        <div className='onBoarding__versus'>
          <OnBoardingTip
            classNames={{
              parent: 'onBoarding__versus-tip',
            }}
            title={props.title}
            tip={1}
          />
          <div className={(classNames && classNames.parent) ? classNames.parent : 'onBoarding__versus-content'}>
            <h2 className='onBoarding__versus-text'>Coming Soon</h2>
            <div className='image-comingsoon'>
              <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.coomingsoon} alt='' />
            </div>
          </div>
        </div>
      </div>
    </UrlRescusive>
  );
}
