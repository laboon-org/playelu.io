import React, { useCallback, useState } from 'react'
import urlConstant from '../../../urlConstant'

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

const listIslandUrl = [
    {
        url1: urlConstant.imageGamePlay.skyCenter.islandBlank1,
        url2: urlConstant.imageGamePlay.skyCenter.fire_island
    },
    {
        url1: urlConstant.imageGamePlay.skyCenter.islandBlank2,
        url2: urlConstant.imageGamePlay.skyCenter.fountain
    },
    {
        url1: urlConstant.imageGamePlay.skyCenter.islandBlank3,
        url2: urlConstant.imageGamePlay.skyCenter.islandWater
    }
]
export default function SkyCenter() {

    const [dropShow, setDropShow] = useState(false);
    const onPressShowEluDrop = useCallback(() => {
        setDropShow(true);
    })

    const islands = listIslandUrl.map((value, key) => {
        let isFinalItem = listIslandUrl.length - 1 == key;
        let finalClass = isFinalItem ? 'mr-bottom' : '';
        return (
            <div className={`island${key + 1}`} key={key}>
                <img
                    className="isLand-img"
                    src={value.url1}
                    alt="" />
                <img
                    className={`isLand-img ${finalClass}`}
                    src={value.url2}
                    alt="" />
            </div>
        )
    })
    return (
        <div>
            <div className='sky-center' id='drop'>
                <div className='island zoom'>
                    {islands}
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                {
                    !dropShow ? <div className="eluDrop-btn zoom" onClick={() => {
                        onPressShowEluDrop();
                    }}>
                        <h2>DROP</h2>
                        <p>GAME FEATURES</p>
                        <div className='btn-shadow'></div>

                    </div> :
                        <OnBoarding />
                }
            </div>
        </div>
    )
}
