import React from 'react'
import urlConstant from '../../../urlConstant'

export default function BackgroundCloud() {
    return (
        <div className='background-cloud'>
            <div className='cloud x1'>
                <img src={urlConstant.image.homeBackground.cloud3} alt="" />
            </div>
            <div className='cloud x2'>
                <img src={urlConstant.image.homeBackground.cloud1} alt="" />
            </div>
            <div className='cloud x3'>
                <img src={urlConstant.image.homeBackground.cloud2} alt="" />
            </div>
            <div className='cloud x4'>
                <img src={urlConstant.image.homeBackground.cloud4} alt="" />
            </div>
            <div className='cloud x5'>
                <img src={urlConstant.image.homeBackground.cloud6} alt="" />
            </div>
            <div className='cloud x6'>
                <img src={urlConstant.image.homeBackground.cloud5} alt="" />
            </div>
        </div>
    )
}
