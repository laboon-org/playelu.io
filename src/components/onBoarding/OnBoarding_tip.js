import React from 'react'
import _ from "lodash";



export default function OnBoardingTip(props) {
    const { classNames, tip, urlApi } = props
    return (
        <div className='onBoarding-tip'>
            <div className={(classNames && classNames.parent) ? classNames.parent : 'onBoarding__element-tip'}>
                <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop[`tip${tip}`]} alt='' />
                <div className='tip-title'>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    )
}
