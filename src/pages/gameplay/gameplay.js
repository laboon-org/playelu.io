import React from 'react'
import SkyCenter from './skyCenter'
import '../../scss/gameplay/gameplay.scss'
import '../../scss/reponsiveness/gameplay/responsiveGameplay.scss'
import urlConstant from '../../urlConstant'
import Beach from './Beach'
import SkyBottom from './skyBottom'

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
                    <div className='sky-top'>
                        <div className='gameplay-selection'>
                            <div className='col drop'>
                                <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.drop} alt="" />
                            </div>
                            <div className='col nest'>
                                <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.nest} alt="" />
                            </div>
                            <div className='col-6 rune'>
                                <img className="gameplay__rune-img" src={urlConstant.imageGamePlay.rune} alt="" />
                                <img className="gameplay__boonmoon-img" src={urlConstant.imageGamePlay.boonMoon} alt="" />
                            </div>
                            <div className='col scout'>
                                <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.scout} alt="" />
                            </div>
                            <div className='col metaVerse'>
                                <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.metaVerse} alt="" />
                            </div>
                        </div>

                        <div className='gameplay-logo'>
                            <img className="gameplay__logo-img" src={urlConstant.image.eluLogo} alt="" />
                        </div>

                        {/* <div className='gameplay-cloud'>
                        <img className="gameplay-cloud1-img" src={urlConstant.imageGamePlay.cloud1} alt="" />
                        <img className="gameplay-cloud2-img" src={urlConstant.imageGamePlay.cloud2} alt="" />
                    </div> */}
                    </div>
                    <SkyCenter />
                    <SkyBottom />
                </div>
                <Beach />
            </div>
        </div>
    )
}
