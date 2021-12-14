import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'

export default function OnBoardingElementLeft() {
    return (
        <div className='onBoarding__element'>
            <OnBoardingTip title='battle' tip={2} />
            <div className='onBoarding__element-content content-left'>
                <img className='onBoarding__element-img no-border' src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-element.png' alt='' />
            </div>
        </div>
    )
}
