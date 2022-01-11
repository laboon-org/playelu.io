import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <a
                className='link-home'
                href='https://playelu.io/'
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className='home-icon'
                    src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon-home.webp'
                    alt=''
                />
            </a>
            <div className='title'>
                <div className='title-header'>
                    <div className='title-header-1'>
                        <span className='header-text'>Welcome to </span>
                        <span className='seed'>pre-sale</span>
                    </div>
                    <div className='title-header-2'>
                        <span className='header-text'>round - </span>
                        <span className='boon-text'>
                            <a
                                href='https://playelu.io/gameplay'
                                target="_blank"
                                rel="noreferrer"
                            >
                                $boon
                            </a>
                        </span>
                        <span className='header-text'>token</span>
                    </div>
                </div>
            </div>
            <div className='gameplay-btn'>
                <span>Gameplay</span>
            </div>
        </div>
    )
}
