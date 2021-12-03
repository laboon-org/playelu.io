import React from 'react'
import '../../scss/gameplay/skyBottom.scss'
import urlConstant from '../../urlConstant'


window.addEventListener('scroll', entrance)

function entrance() {
    var leftEntrance = document.querySelectorAll('.leftEntrance')
    var rightEntrance = document.querySelectorAll('.rightEntrance')
    for (var i = 0; i < leftEntrance.length; i++) {
        var windowHeght = window.innerHeight;
        var leftEntranceTop = leftEntrance[i].getBoundingClientRect().top;
        if (leftEntranceTop < windowHeght) {
            leftEntrance[i].classList.add('active')
            rightEntrance[i].classList.add('active')
        }
        else {
            leftEntrance[i].classList.remove('active')
            rightEntrance[i].classList.remove('active')
        }
    }
}
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
                <div className='sailboat-left leftEntrance'>
                    <img src={urlConstant.imageGamePlay.skyBottom.sailboatLeft} alt="sailboat-left" />
                </div>
                <div className='sailboat-right rightEntrance'>
                    <img src={urlConstant.imageGamePlay.skyBottom.sailboatRight} alt="sailboat-right" />
                </div>
            </div>

        </div>
    )
}
