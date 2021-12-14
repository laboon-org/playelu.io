import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'

export default function OnBoardingElementRight() {
    return (
        <div className='onBoarding__element'>
            <OnBoardingTip
                classNames={{
                    parent: 'onBoarding__element-tip tip-right'
                }}
                title={'farming'}
                tip={1}
            />
            <div className='onBoarding__element-content content-right'>
                <img className='onBoarding__element-img no-border' src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-element.png' alt='' />
            </div>
        </div>
    )
}
