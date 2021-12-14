import React from 'react'
import urlConstant from '../../urlConstant'

export default function OnBoardingTip(props) {
    const { classNames, tip } = props
    return (
        <div className={(classNames && classNames.parent) ? classNames.parent : 'onBoarding__element-tip'}>
            <img src={urlConstant.imageGamePlay.popupDrop[`tip${tip}`]} alt='' />
            <div className='tip-title'>
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}
