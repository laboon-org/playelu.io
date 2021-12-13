import React from 'react'
import Onboarding_comingsoon from '../../../components/onboarding_comingsoon'
import OnBoarding_elementRight from './OnBoarding_element-right'
import OnBoarding_elementLeft from './onBoarding__element-left'

export default function Nest_onBoarding(props) {
    const { closeNest } = props
    return (
        < div className={"nest_onBoarding"}>
            <div className='nest-frame'>
                <div className='nest_onBoarding-title'>
                    <h4>nest - gameplay</h4>
                </div>
                <div className='onBoarding-frame nest__onBoarding-frame'>
                    <div className='onBoarding'>
                        <OnBoarding_elementLeft />
                        <OnBoarding_elementRight />
                    </div>
                    <Onboarding_comingsoon title='racing' />
                    <div className='onBoarding-btn_close nest-btn_close ' onClick={() => {
                        closeNest()
                    }}>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/nest_onboarding-btn.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
