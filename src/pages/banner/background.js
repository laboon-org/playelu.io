import React from 'react'
import urlConstant from '../../urlConstant'



export default function Background() {
    return (<div className='background-cloud'>
        <div className='cloud x1'>
            <img src={urlConstant.image.cloud3} alt="" />
            <img className='cloud2' src={urlConstant.image.cloud1} alt="" />
        </div>
        <div className='cloud x2'>
            <img src={urlConstant.image.cloud1} alt="" />
        </div>
        <div className='cloud x3'>
            <img src={urlConstant.image.cloud2} alt="" />
            <img className='cloud2' src={urlConstant.image.cloud1} alt="" />
        </div>
        <div className='cloud x4'>
            <img src={urlConstant.image.cloud2} alt="" />
        </div>
        <div className='cloud x5'>
            <img src={urlConstant.image.cloud3} alt="" />
        </div>
        <div className='cloud x6'>
            <img src={urlConstant.image.cloud1} alt="" />
        </div>
    </div>
    )
}
