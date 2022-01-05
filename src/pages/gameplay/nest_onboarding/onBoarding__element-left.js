import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import _ from "lodash";
import UrlRescusive from '../../../UrlRescusive';


export default function OnBoardingElementLeft(props) {
    const { urlApi } = props
    return (
        <UrlRescusive data={props}>
            <div className='onBoarding__element'>
                <OnBoardingTip title='battle' tip={2} />
                <div className='onBoarding__element-content content-left'>
                    <img className='onBoarding__element-img border' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.battle} alt='' />
                </div>
            </div>
        </UrlRescusive>
    )
}
