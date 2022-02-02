import React from 'react';
import _ from 'lodash';

import '../../scss/page_gameplay/onboarding.scss';
import '../../scss/page_gameplay/gameplay_tablet.scss';
import '../../scss/page_gameplay/gameplay_mobile.scss';

import OnboardingComingsoon from './components/onboarding_comingsoon';
import OnBoardingTip from './components/OnBoarding_tip';
import UrlRescusive from '../../UrlRescusive';
import BoardTypeHunting from './components/BoardTypeHunting';
import BoardTypeCompeting from './components/BoardTypeCompeting';

export default function GameDropFeatures(props) {
  const {onPressHideEluDrop, urlApi} = props;

  return (
    <UrlRescusive data={props}>
      <div className="sky-center_onBoarding">
        <img
          className="close-modal__btn"
          src={_.isEmpty(urlApi) ? '' : urlApi.common.closeBtn}
          alt=""
          onClick={onPressHideEluDrop}
        />
        <div className="onBoarding-frame">
          <div className="onBoarding__title">
            <div className="onBoarding__title-content">
              <img
                src={
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.popupDrop.boardTitle
                }
                alt=""
              />
              <div className="onBoarding__title-text">
                <h3>GAME 1: DROP FEATURES</h3>
              </div>
            </div>
          </div>
          <div className="onBoarding-body">
            <div className="onBoarding">
              <div className="onBoarding__element">
                <OnBoardingTip title="Competing" tip={1} />
                <div className="onBoarding__element-content">
                  <img
                    className="onBoarding__element-img e-img-left"
                    src={
                      _.isEmpty(urlApi) ?
                        '' :
                        urlApi.imageGamePlay.popupDrop.competing
                    }
                    alt=""
                  />
                  <BoardTypeCompeting urlApi={urlApi} />
                </div>
              </div>
              <div className="onBoarding__element">
                <OnBoardingTip
                  classNames={{
                    parent: 'onBoarding__element-tip',
                  }}
                  title={'Hunting'}
                  tip={1}
                />
                <div className="onBoarding__element-content">
                  <img
                    className="onBoarding__element-img e-img-right"
                    src={
                      _.isEmpty(urlApi) ?
                        '' :
                        urlApi.imageGamePlay.popupDrop.HuntHexBoard
                    }
                    alt=""
                  />
                  <BoardTypeHunting urlApi={urlApi} />
                </div>
              </div>
            </div>
            <div className="onBoarding">
              <OnBoardingTip title="adventure" tip={1} />
              <div className="onBoarding__element">
                <div className="onBoarding__element-content">
                  <img
                    className="onBoarding__element-img e-img-left"
                    src={
                      _.isEmpty(urlApi) ?
                        '' :
                        urlApi.imageGamePlay.popupDrop.adventure
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="onBoarding__element">
                <div className="onBoarding__element-content">
                  <img
                    className="onBoarding__element-img e-img-right"
                    src={
                      _.isEmpty(urlApi) ?
                        '' :
                        urlApi.imageGamePlay.popupDrop.adventure1
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <OnboardingComingsoon title="versus" />
          </div>
        </div>
      </div>
    </UrlRescusive>
  );
}
