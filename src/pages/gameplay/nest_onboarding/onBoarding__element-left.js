import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import urlConstant from '../../../urlConstant'

export default function OnBoardingElementLeft() {
    return (
        <div className='onBoarding__element'>
            <OnBoardingTip title='battle' tip={2} />
            <div className='onBoarding__element-content content-left'>
                <img className='onBoarding__element-img no-border' src={urlConstant.imageGamePlay.popup_nest.onboarding_element2} alt='' />
            </div>
        </div>
    )
}
