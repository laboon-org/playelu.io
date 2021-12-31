import React, { useCallback } from 'react'
import { useState } from 'react';
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import UrlRescusive from '../../../UrlRescusive';
import _ from "lodash";

export default function OnBoardingElementRight(props) {
    const { urlApi } = props
    return (
        <UrlRescusive data={props.urlApi}>
            <div className='onBoarding__element'>
                <OnBoardingTip
                    classNames={{
                        parent: 'onBoarding__element-tip tip-right'
                    }}
                    title={'farming'}
                    tip={1}
                />
                <div className='onBoarding__element-content content-right'>
                    <img className='onBoarding__element-img border' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.farming} alt='' />
                </div>
            </div>
        </UrlRescusive>
    )
}
