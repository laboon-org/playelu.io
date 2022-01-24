import React from 'react';
import OnboardingComingsoon from '../../../components/onBoarding/onboarding_comingsoon';
import UrlRescusive from '../../../UrlRescusive';
import OnBoardingElementRight from './OnBoarding_element-right';
import OnBoardingElementLeft from './onBoarding__element-left';
import _ from 'lodash';

export default function NestOnBoarding(props) {
  const {closeNest, urlApi} = props;
  return (
    <UrlRescusive data={props}>
      <div className='nest-frame'>
        <div className='nest_onBoarding-title'>
          <h4>GAME 2: NEST FEATURES</h4>
        </div>
        <div className='onBoarding-frame nest__onBoarding-frame'>
          <div className='onBoarding'>
            <OnBoardingElementLeft />
            <OnBoardingElementRight />
          </div>
          <OnboardingComingsoon title='racing' classNames={{
            parent: 'onBoarding__versus-content',
          }} />
          {/* <div className='onBoarding-btn_close nest-btn_close ' onClick={() => {
                        closeNest()
                    }}>
                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.nestOnboardingClose} alt='' />
                    </div> */}
        </div>
      </div>
    </UrlRescusive>
  );
}
