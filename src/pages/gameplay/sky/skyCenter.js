import React, { useCallback, useState } from 'react'
import urlConstant from '../../../urlConstant'
import Drop_onboarding from '../drop_onboarding';

window.addEventListener('scroll', zoom)
function zoom() {
    var zoom = document.querySelectorAll('.zoom')
    for (var i = 0; i < zoom.length; i++) {
        var windowHeght = window.innerHeight;
        var scaleTop = zoom[i].getBoundingClientRect().top;
        var scalepoin = 50;
        if (scaleTop < windowHeght - scalepoin) {
            zoom[i].classList.add('active')
        }
    }
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
    const onPressHideEluDrop = useCallback(() => {
        setDropShow(false);
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
                <video
                    className={`isLand-img ${finalClass}`}
                    autoPlay loop preload='metadata'
                    poster=''
                >
                    <source src={value.url2} type="video/mp4" />
                </video>
            </div>
        )
    })
    return (
        <div>
            <a href='#onboarding_drop-center'>
                <div className='sky-center' id='drop'>
                    <div className='island zoom'>
                        {islands}
                    </div>
                </div>
                <div style={{ marginTop: 20, width: '100vw' }}>
                    {
                        !dropShow ? <div className="elu-btn drop-btn zoom" onClick={() => {
                            onPressShowEluDrop();
                        }}>

                            <h2 id='drop_text'>DROP</h2>

                            <div className='btn-shadow'><p>GAME FEATURES</p></div>
                        </div> :
                            <Drop_onboarding onPressHideEluDrop={onPressHideEluDrop} />
                    }
                </div>
            </a>
        </div>
    )
}
