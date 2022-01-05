import React from 'react'
import '../../scss/gameplay/onboarding.scss'
import '../../scss/reponsiveness/gameplay/gameplay_ipad.scss'
import '../../scss/reponsiveness/gameplay/gameplay_mobile.scss'
import OnboardingComingsoon from '../../components/onBoarding/onboarding_comingsoon'
import OnBoardingTip from '../../components/onBoarding/OnBoarding_tip'
import _ from "lodash";
import UrlRescusive from '../../UrlRescusive'


export default function Drop_onboarding(props) {
    const { onPressHideEluDrop, urlApi } = props
    return (
        <UrlRescusive data={props}>
            <div className="sky-center_onBoarding">
                <div className='onBoarding-frame'>
                    <div className='onBoarding__title'>
                        <div className='onBoarding__title-content'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardTitle} alt='' />
                            <div className='onBoarding__title-text'>
                                <h3>gameplay</h3>
                            </div>
                        </div>
                    </div>
                    <div className='onBoarding'>
                        <div className='onBoarding__element'>
                            <OnBoardingTip title='competing' tip={2} />
                            <div className='onBoarding__element-content content-left'>
                                <img className='onBoarding__element-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.competing} alt='' />
                                <div className='board_type competing'>
                                    <div className='board_type-element active'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType1} alt="" />
                                        <div className='board_type-content'>
                                            <div className='square'></div>
                                            <span>box</span>
                                        </div>
                                    </div>
                                    <div className='board_type-element'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType4} alt="" />
                                        <div className='board_type-content'>
                                            <div className='circle'></div>
                                            <span>hex</span>
                                        </div>
                                    </div>
                                    <div className='board_type-element'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType5} alt="" />
                                        <div className='board_type-content'>
                                            <div className='triangle'></div>
                                            <span>tria</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='onBoarding__element'>
                            <OnBoardingTip
                                classNames={{
                                    parent: 'onBoarding__element-tip tip-right'
                                }}
                                title={'HUnting'}
                                tip={1}
                            />
                            <div className='onBoarding__element-content content-right'>
                                <img className='onBoarding__element-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.HuntHexBoard} alt='' />
                                <div className='board_type hunting'>
                                    <div className='board_type-element'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType3} alt="" />
                                        <div className='board_type-content'>
                                            <div className='square'></div>
                                            <span>box</span>
                                        </div>
                                    </div>
                                    <div className='board_type-element active'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType2} alt="" />
                                        <div className='board_type-content'>
                                            <div className='circle'></div>
                                            <span>hex</span>
                                        </div>
                                    </div>
                                    <div className='board_type-element'>
                                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType5} alt="" />
                                        <div className='board_type-content'>
                                            <div className='triangle'></div>
                                            <span>tria</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='onBoarding'>
                        <div className='onBoarding__element'>
                            <OnBoardingTip title='adventure' tip={2} />
                            <div className='onBoarding__element-content content-left'>
                                <img className='onBoarding__element-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.adventure} alt='' />
                            </div>
                        </div>
                        <div className='onBoarding__element-button'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.arrowNext} alt='' />
                        </div>
                        <div className='onBoarding__element'>
                            <div className='onBoarding__element-content content-right content-final'>
                                <img className='onBoarding__element-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.adventure1} alt='' />
                            </div>
                        </div>
                    </div>
                    <OnboardingComingsoon title='versus' />
                </div>
                <a href='#drop'>
                    <div className='onBoarding__btn-close' onClick={() => {
                        onPressHideEluDrop()
                    }}>
                        <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.arrowUp} alt='' />

                    </div>
                </a>
            </div>
        </UrlRescusive>
    )
}
