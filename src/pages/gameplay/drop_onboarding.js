import React from 'react'
import urlConstant from '../../urlConstant'
import '../../scss/gameplay/drop_onboarding.scss'
import '../../scss/reponsiveness/gameplay/gameplay_ipad.scss'
import '../../scss/reponsiveness/gameplay/gameplay_mobile.scss'

export default function Drop_onboarding() {
    return (
        <div className={"sky-center_onBoarding"} >
            <div className='onBoarding__title'>
                <div className='onBoarding__title-content'>
                    <img src={urlConstant.imageGamePlay.popupDrop.boardTitle} alt='' />
                    <div className='onBoarding__title-text'>
                        <h3>gameplay</h3>
                    </div>
                </div>
            </div>
            <div className='onBoarding-frame'>
                <div className='onBoarding'>
                    <div className='onBoarding__element'>
                        <div className='onBoarding__element-tip'>
                            <img src={urlConstant.imageGamePlay.popupDrop.tip2} alt='' />
                            <h4 className='tip-title'>competing</h4>
                        </div>
                        <div className='onBoarding__element-content content-left'>
                            <img className='onBoarding__element-img' src={urlConstant.imageGamePlay.popupDrop.competing} alt='' />
                            <div className='board-type competing'>
                                <div className='board-type-element active'>

                                    <div className='square'></div>
                                    <span>box</span>

                                </div>
                                <div className='board-type-element'>

                                    <div className='circle'></div>
                                    <span>hex</span>

                                </div>
                                <div className='board-type-element'>
                                    <div className='triangle'></div>
                                    <span>tria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='onBoarding__element'>
                        <div className='onBoarding__element-tip tip-right'>
                            <img src={urlConstant.imageGamePlay.popupDrop.tip1} alt='' />
                            <h4 className='tip-title'>HUnting</h4>
                        </div>
                        <div className='onBoarding__element-content content-right'>
                            <img className='onBoarding__element-img' src={urlConstant.imageGamePlay.popupDrop.Hunt_Hex_Board} alt='' />
                            <div className='board-type hunting'>
                                <div className='board-type-element'>
                                    <div className='square'></div>
                                    <span>box</span>
                                </div>
                                <div className='board-type-element active'>
                                    <div className='circle'></div>
                                    <span>hex</span>
                                </div>
                                <div className='board-type-element'>
                                    <div className='triangle'></div>
                                    <span>tria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='onBoarding'>
                    <div className='onBoarding__element'>
                        <div className='onBoarding__element-tip'>
                            <img src={urlConstant.imageGamePlay.popupDrop.tip2} alt='' />
                            <h4 className='tip-title'>adventure</h4>
                        </div>
                        <div className='onBoarding__element-content content-left'>
                            <img className='onBoarding__element-img' src={urlConstant.imageGamePlay.popupDrop.adventure} alt='' />
                        </div>
                    </div>
                    <div className='onBoarding__element-button'>
                        <img src={urlConstant.imageGamePlay.popupDrop.arrowNext} alt='' />
                    </div>
                    <div className='onBoarding__element'>
                        <div className='onBoarding__element-content content-right content-final'>
                            <img className='onBoarding__element-img' src={urlConstant.imageGamePlay.popupDrop.adventure1} alt='' />
                        </div>
                    </div>
                </div>
                <div className='onBoarding'>
                    <div className='onBoarding__versus'>
                        <div className='onBoarding__versus-tip'>
                            <img src={urlConstant.imageGamePlay.popupDrop.tip2} alt='' />
                            <h4 className='tip-title'>versus</h4>
                        </div>
                        <div className='onBoarding__versus-content'>
                            <h2 className='onBoarding__versus-text'>coming soon</h2>
                            <div className='image-comingsoon'>
                                <img src={urlConstant.imageGamePlay.popupDrop.coomingsoon} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='onBoarding__btn-close'>
                <img src={urlConstant.imageGamePlay.popupDrop.arrowUp} alt='' />
            </div>
        </div>)
}
