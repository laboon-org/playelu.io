import React from 'react'
import { Link } from 'react-router-dom';
import urlConstant from '../urlConstant';
import '../scss/reponsiveness/home/home_Ipad.scss'
import '../scss/reponsiveness/home/home_mobile.scss'


export default function Header() {
    return (
        <div className='header'>
            <ul className='menu'>
                <li className='playelu__menu-element'>
                    <a href="https://bit.ly/3HUYOYZ" target='_blank'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ animation: 'shine 2.5s infinite linear' }}>Roadmap</h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <a href='https://bit.ly/3HIpdcy' target='_blank'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ animation: 'shine 1.5s infinite linear' }}>Tokenomic</h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <a href='#'>
                        <h4></h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <Link to='/gameplay'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ color: '#fabb1a', animation: 'shine 1s infinite linear' }}>gameplay</h4>
                    </Link>
                </li>
                <li className='playelu__menu-element'>
                    <a href='https://bit.ly/elu-verse-litepaper' target='_blank'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ animation: 'shine 2s infinite linear' }}>Litepaper</h4>
                    </a>
                </li>
            </ul>
        </div>
    )
}
