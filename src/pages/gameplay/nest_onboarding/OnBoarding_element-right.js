import React, { useCallback } from 'react'
import { useState } from 'react';
import OnBoardingTip from '../../../components/onBoarding/OnBoarding_tip'
import urlConstant from '../../../urlConstant'

export default function OnBoardingElementRight() {
    // const [showImg, setShowImg] = useState(false);
    // const onPressShowImg = useCallback(() => {
    //     setShowImg(true);
    // })
    // const onPressHideImg = useCallback(() => {
    //     setShowImg(false);
    // })
    return (
        <div className='onBoarding__element'>
            <OnBoardingTip
                classNames={{
                    parent: 'onBoarding__element-tip tip-right'
                }}
                title={'farming'}
                tip={1}
            />
            {/* {
                !showImg ? <div className='onBoarding__element-content content-right' onClick={() => {
                    onPressShowImg();
                }}>
                    <img className='onBoarding__element-img border' src={urlConstant.imageGamePlay.popupNest.battle} alt='' />
                </div> :
                    <div className='scale-img'>
                        <img className='border' src={urlConstant.imageGamePlay.popupNest.battle} alt='' />
                        <img className='close-scale' src={urlConstant.image.modal.closeModal} alt='' onClick={onPressHideImg} />
                    </div>
            } */}
            <div className='onBoarding__element-content content-right'>
                <img className='onBoarding__element-img border' src={urlConstant.imageGamePlay.popupNest.battle} alt='' />
            </div>
        </div>
    )
}
