import React from 'react'
import urlConstant from '../../urlConstant'

export default function SkyCenter() {
    return (
        <div className='sky-center'>
            <img className="eluDrop-btn" src={urlConstant.imageGamePlay.eluDropBtn} alt="" />

            <div className='island1'>
                <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank1} alt="" />
                <img className="isLand-img" src={urlConstant.imageGamePlay.islandFire} alt="" />
            </div>
            <div className='island2'>
                <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank2} alt="" />
                <img className="isLand-img" src={urlConstant.imageGamePlay.fountain} alt="" />

            </div>
            <div className='island3'>
                <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank3} alt="" />
                <img className="isLand-img" src={urlConstant.imageGamePlay.islandWater} alt="" />

            </div>
        </div>
    )
}
