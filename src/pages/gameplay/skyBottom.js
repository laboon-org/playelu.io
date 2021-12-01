import React from 'react'
import '../../scss/gameplay/skyBottom.scss'
import boat from './boatImg/boat.gif'


window.addEventListener('scroll', leftEntrance)

function leftEntrance() {
    var leftEntrance = document.querySelectorAll('.leftEntrance')
    var rightEntrance = document.querySelectorAll('.rightEntrance')
    for (var i = 0; i < leftEntrance.length; i++) {
        var windowHeght = window.innerHeight;
        var leftEntranceLeft = leftEntrance[i].getBoundingClientRect().top;
        var leftEntrancepoin = 300;
        if (leftEntranceLeft < windowHeght + leftEntrancepoin) {
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
                <img src={boat} alt="" />
            </div>
            <div className='boat__animation1'>
                <img src={boat} alt="" />
            </div>

            <div className='sailboat'>
                <div className='sailboat-left leftEntrance'>
                    <img src="https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/sailboatLeft.webp" alt="" />
                </div>
                <div className='sailboat-right rightEntrance'>
                    <img src="https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/sailboatRight.webp" alt="" />
                </div>
            </div>

        </div>
    )
}
