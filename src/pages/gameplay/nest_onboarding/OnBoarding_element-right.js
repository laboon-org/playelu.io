import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import urlConstant from '../../../urlConstant'

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
                <img className='onBoarding__element-img' src={urlConstant.imageGamePlay.popup_nest.battle} alt='' />
            </div>
        </div>
    )
}
