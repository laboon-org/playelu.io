import React from 'react'
import urlConstant from '../urlConstant'

export default function Onboarding_comingsoon(props) {

    return (
        <div className='onBoarding'>
            <div className='onBoarding__versus'>
                <div className='onBoarding__versus-tip'>
                    <img src={urlConstant.imageGamePlay.popupDrop.tip2} alt='' />
                    <div className='tip-title'>
                        <h4>{props.title}</h4>
                    </div>
                </div>
                <div className='onBoarding__versus-content'>
                    <h2 className='onBoarding__versus-text'>coming soon</h2>
                    <div className='image-comingsoon'>
                        <img src={urlConstant.imageGamePlay.popupDrop.coomingsoon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
