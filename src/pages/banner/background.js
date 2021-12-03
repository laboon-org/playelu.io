import React from 'react'
import urlConstant from '../../urlConstant'



export default function Background() {
    return (<div className='background-cloud'>
        <div className='cloud x1'>
            <img src={urlConstant.image.homeBackground.cloud_3} alt="" />
        </div>
        <div className='cloud x2'>
            <img src={urlConstant.image.homeBackground.cloud_1} alt="" />
        </div>
        <div className='cloud x3'>
            <img src={urlConstant.image.homeBackground.cloud_2} alt="" />
        </div>
        <div className='cloud x4'>
            <img src={urlConstant.image.homeBackground.cloud_4} alt="" />
        </div>
        <div className='cloud x5'>
            <img src={urlConstant.image.homeBackground.cloud_6} alt="" />
        </div>
        <div className='cloud x6'>
            <img src={urlConstant.image.homeBackground.cloud_5} alt="" />
        </div>
    </div>
    )
}
