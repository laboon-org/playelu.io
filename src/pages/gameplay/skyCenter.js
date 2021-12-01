import React, { useCallback, useState } from 'react'
import urlConstant from '../../urlConstant'

window.addEventListener('scroll', zoom)
function zoom() {
    var zoom = document.querySelectorAll('.zoom')
    for (var i = 0; i < zoom.length; i++) {
        var windowHeght = window.innerHeight;
        var scaleTop = zoom[i].getBoundingClientRect().top;
        var scalepoin = 50;
        if (scaleTop < windowHeght - scalepoin) {
            zoom[i].classList.add('active')
        } else {
            zoom[i].classList.remove('active')
        }
    }
}

const OnBoarding = () => {
    return (
        <div className={"sky-center_onBoarding"} >

        </div>)
}
export default function SkyCenter() {

    const [dropShow, setDropShow] = useState(false);
    const onPressShowEluDrop = useCallback(() => {
        setDropShow(true);
    })

    return (
        <div>
            <div className='sky-center' id='drop'>
                <div className='island reveal'>
                    <div className='island1'>
                        <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank1} alt="" />
                        <img className="isLand-img" src={urlConstant.imageGamePlay.fire_island} alt="" />
                    </div>
                    <div className='island2'>
                        <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank2} alt="" />
                        <img className="isLand-img" src={urlConstant.imageGamePlay.fountain} alt="" />
                    </div>
                    <div className='island3'>
                        <img className="isLand-img" src={urlConstant.imageGamePlay.islandBlank3} alt="" />
                        <img className="isLand-img mr-bottom" src={urlConstant.imageGamePlay.islandWater} alt="" />
                    </div>
                </div>
            </div>
            <div>
                {
                    !dropShow ? <img className="eluDrop-btn zoom" onClick={() => {
                        onPressShowEluDrop();
                    }} src={urlConstant.imageGamePlay.eluDropBtn} alt="" /> :
                        <OnBoarding />
                }
            </div>
        </div>
    )
}
