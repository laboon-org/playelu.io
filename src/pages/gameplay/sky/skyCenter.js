import React, { useCallback, useState } from 'react'
import Drop_onboarding from '../drop_onboarding';
import _ from "lodash";
import UrlRescusive from '../../../UrlRescusive';


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


export default function SkyCenter(props) {
    const { urlApi } = props
    const listIslandUrl = [
        {
            url1: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.islandBlank1,
            url2: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.fireIsland,
            url3: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.fireIslandImg
        },
        {
            url1: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.islandBlank2,
            url2: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.fountain,
            url3: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.fountainImg
        },
        {
            url1: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.islandBlank3,
            url2: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.islandWater,
            url3: _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyCenter.islandWaterImg
        }
    ]
    const [dropShow, setDropShow] = useState(false);
    const onPressShowEluDrop = useCallback(() => {
        setDropShow(true);
    })
    const onPressHideEluDrop = useCallback(() => {
        setDropShow(false);
    })
    const islands = listIslandUrl.map((value, key) => {
        let isFinalItem = listIslandUrl.length - 1 == key;
        let finalClass = isFinalItem ? 'mr-top' : '';
        let mrBottom = isFinalItem ? 'mr-bottom' : '';
        return (
            <div className={`island${key + 1}`} key={key}>
                <img
                    className={`isLand-img ${mrBottom}`}
                    src={value.url1}
                    alt="" />
                <video
                    className={`isLand-img ${finalClass}`}
                    loop autoPlay playsInline preload='metadata'
                    poster={value.url3}
                >
                    <source src={value.url2} type="video/mp4" />
                </video>
            </div>
        )
    })
    return (
        <UrlRescusive data={props.urlApi}>
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
        </UrlRescusive>
    )
}
