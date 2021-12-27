import React from 'react'
import urlConstant from '../../urlConstant'
import OnBoardingTip from './OnBoarding_tip'


export default function OnboardingComingsoon(props) {
    const { classNames } = props

    return (
        <div className='onBoarding'>
            <div className='onBoarding__versus'>
                <OnBoardingTip
                    classNames={{
                        parent: 'onBoarding__versus-tip'
                    }}
                    title={props.title}
                    tip={2}
                />
                <div className={(classNames && classNames.parent) ? classNames.parent : 'onBoarding__versus-content'}>
                    <h2 className='onBoarding__versus-text'>coming soon</h2>
                    <div className='image-comingsoon'>
                        <img src={urlConstant.imageGamePlay.popupDrop.coomingsoon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
