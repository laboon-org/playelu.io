import React from 'react'
import urlConstant from '../urlConstant'
import '../scss/component/launch_header.scss'

export default function LaunchHeader() {
    return (
        <div className='launch-header'>
            <div className='launch-header__content'>
                <img className='launch-header__content-coin' src={urlConstant.imageGamePlay.skyTop.coinBoon} alt='' />
                <a className='market' href=''>
                    <span>sdfggfsdgsdfgdgrefgrefgre</span>
                </a>
            </div>
        </div>
    )
}
