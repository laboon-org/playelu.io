import React from 'react'
import SkyCenter from './sky/skyCenter'
import '../../scss/gameplay/gameplay.scss'
import '../../scss/reponsiveness/gameplay/responsiveGameplay.scss'
import Beach from './Beach'
import SkyBottom from './sky/skyBottom'
import SkyTop from './sky/skyTop'

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

export default function Gameplay() {
    return (
        <div>
            <div className='gameplay-body'>
                <div className='sky'>
                    {/* <div className='box'> */}
                    <SkyTop />
                    <SkyCenter />
                    {/* </div> */}
                    <SkyBottom />
                </div>
                <Beach />
            </div>
        </div>
    )
}
