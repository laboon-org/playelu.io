import React from 'react'
import '../../../scss/gameplay/skyScss/skyBottom.scss'
import urlConstant from '../../../urlConstant'

export default function SkyBottom() {
    return (
        <div className='skyBottom'>
            <div className='boat__animation2'>
                <img src={urlConstant.imageGamePlay.skyBottom.boat} alt="" />
            </div>
            <div className='boat__animation1'>
                <img src={urlConstant.imageGamePlay.skyBottom.boat} alt="" />
            </div>

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
