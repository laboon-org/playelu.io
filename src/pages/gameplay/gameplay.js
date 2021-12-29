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
import LaunchHeader from '../../components/launch_header'
import UrlRescusive from '../../UrlRescusive'

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
    const { urlApi } = props
    return (
        <UrlRescusive data={props.urlApi}>
            <div className='gameplay-body'>
                <audio className="audio_gameplay" autoPlay loop preload='metadata' >
                    <source src="https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg2.mp3" type="audio/mpeg" />
                </audio>
                <Cursor />
                {/* <LaunchHeader /> */}
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
