import React from 'react'
import _ from "lodash";
import SkyCenter from './sky/skyCenter'
import '../../scss/gameplay/gameplay.scss'
import '../../scss/reponsiveness/gameplay/gameplay_ipad.scss'
import '../../scss/reponsiveness/gameplay/gameplay_mobile.scss'
import '../../scss/reponsiveness/gameplay/responsiveGameplay.scss'
import Beach from './Beach'
import SkyBottom from './sky/skyBottom'
import SkyTop from './sky/skyTop'
import Cloud from './sky/cloud'
import Cursor from '../../components/cursor'
import LaunchHeader from '../../components/LaunchHeader'
import UrlRescusive from '../../UrlRescusive'
import Header from '../../components/Header';

window.addEventListener('scroll', reveal)
function reveal() {
    var reveal = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveal.length; i++) {
        var windowHeght = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        if (revealTop < windowHeght) {
            reveal[i].classList.add('active')
        } else {
            reveal[i].classList.remove('active')
        }
    }
}

export default function Gameplay(props) {
    const { urlApi, setting } = props
    return (
        <UrlRescusive data={props}>
            <div className="header">
                <a className='home-icon__link' href='https://playelu.io'>
                    <img
                        className='home-icon__img'
                        src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/button/Home-icon.webp'
                        alt=''
                    />
                </a>
                <Header />
            </div>
            <div className='gameplay-body'>
                <audio className="audio_gameplay" autoPlay loop preload='metadata' >
                    <source src="https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg2.mp3" type="audio/mpeg" />
                </audio>
                <Cursor />
                {/* ********Launch Header************ */}
                {
                    setting.page_home_section_top_contract_address_enabled === true ? <LaunchHeader /> : ''
                }
                <div className='sky'>
                    {/* <div className='box'> */}
                    <SkyTop />
                    <SkyCenter />
                    <Cloud />
                    {/* </div> */}
                    <SkyBottom />
                </div>
                <Beach />
            </div>
        </UrlRescusive>
    )
}
