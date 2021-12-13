import React from 'react'
import urlConstant from '../../../urlConstant'

export default function OnBoarding_elementRight() {
    return (
        <div className='onBoarding__element'>
            <div className='onBoarding__element-tip tip-right'>
                <img src={urlConstant.imageGamePlay.popupDrop.tip1} alt='' />
                <div className='tip-title'>
                    <h4>farming</h4>
                </div>
            </div>
            <div className='onBoarding__element-content content-right'>
                <img className='onBoarding__element-img no-border' src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-element.png' alt='' />
            </div>
        </div>
    )
}
