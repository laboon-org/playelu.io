import React from 'react'
import OnboardingComingsoon from '../../../components/onBoarding/onboarding_comingsoon'
import OnBoardingElementRight from './OnBoarding_element-right'
import OnBoardingElementLeft from './onBoarding__element-left'

export default function NestOnBoarding(props) {
    const { closeNest } = props
    return (
        <div className='nest-frame'>
            <div className='nest_onBoarding-title'>
                <h4>nest - gameplay</h4>
            </div>
            <div className='onBoarding-frame nest__onBoarding-frame'>
                <div className='onBoarding'>
                    <OnBoardingElementLeft />
                    <OnBoardingElementRight />
                </div>
                <OnboardingComingsoon title='racing' classNames={{
                    parent: 'onBoarding__versus-content border'
                }} />
                <div className='onBoarding-btn_close nest-btn_close ' onClick={() => {
                    closeNest()
                }}>
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-btn.png' alt='' />
                </div>
            </div>
        </div>
    )
}
