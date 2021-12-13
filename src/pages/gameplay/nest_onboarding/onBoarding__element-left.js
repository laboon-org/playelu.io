import React from 'react'
import urlConstant from '../../../urlConstant'

function OnBoarding_elementLeft() {
    return (
        <div className='onBoarding__element'>
            <div className='onBoarding__element-tip'>
                <img src={urlConstant.imageGamePlay.popupDrop.tip2} alt='' />
                <div className='tip-title'>
                    <h4>battle</h4>
                </div>
            </div>
            <div className='onBoarding__element-content content-left'>
                <img className='onBoarding__element-img no-border' src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-element.png' alt='' />
            </div>
        </div>
    )
}

export default OnBoarding_elementLeft
