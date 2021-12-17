import React from 'react'
import '../../../scss/gameplay/skyScss/skyBottom.scss'
import urlConstant from '../../../urlConstant'

export default function SkyBottom() {
    return (
        <div className='skyBottom'>
            <video
                autoPlay loop preload='metadata'
                poster='' className='boat__animation2'>
                <source src={urlConstant.imageGamePlay.skyBottom.boat} type="video/mp4" />
            </video>
            <video
                autoPlay loop preload='metadata'
                poster='' className='boat__animation1'>
                <source src={urlConstant.imageGamePlay.skyBottom.boat} type="video/mp4" />
            </video>
            {/* <div className='boat__animation1'>
                <img src={urlConstant.imageGamePlay.skyBottom.boat} alt="" />
            </div> */}
            <div className='sailboat'>
                <div className='sailboat-left'>
                    <img src={urlConstant.imageGamePlay.skyBottom.sailboatLeft} alt="sailboat-left" />
                </div>
                <div className='sailboat-right'>
                    <img src={urlConstant.imageGamePlay.skyBottom.sailboatRight} alt="sailboat-right" />
                </div>
            </div>

        </div>
    )
}
