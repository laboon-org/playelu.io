import React from 'react'
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import _ from "lodash";
import UrlRescusive from '../../../UrlRescusive';


export default function OnBoardingElementLeft(props) {
    const { urlApi } = props
    return (
        <UrlRescusive data={props}>
            <div className='onBoarding__element'>
                <OnBoardingTip title='battle' tip={1} />
                <div className='onBoarding__element-content'>
                    <img className='onBoarding__element-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.battle} alt='' />
                </div>
            </div>
        </UrlRescusive>
    )
}
