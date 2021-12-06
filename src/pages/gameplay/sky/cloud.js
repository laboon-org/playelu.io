import React from 'react'
import urlConstant from '../../../urlConstant'
import '../../../scss/gameplay/skyScss/cloud.scss'

export default function Cloud() {
    return (
        <div className='gameplay-cloud'>
            <img className="gameplay-cloud1-img" src={urlConstant.imageGamePlay.cloud1} alt="" />
            <img className="gameplay-cloud2-img" src={urlConstant.imageGamePlay.cloud2} alt="" />
        </div>
    )
}
