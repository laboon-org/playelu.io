import React, { useState } from 'react'
import urlConstant from '../../urlConstant'
import '../../scss/gameplay/beach.scss'


window.addEventListener('scroll', opacity)
function opacity() {
    var opacity = document.querySelectorAll('.opacity')
    for (var i = 0; i < opacity.length; i++) {
        var windowHeght = window.innerHeight;
        var scaleTop = opacity[i].getBoundingClientRect().top;
        var scalepoin = 300;
        if (scaleTop < windowHeght + scalepoin) {
            opacity[i].classList.add('active')
        }
        else {
            opacity[i].classList.remove('active')
        }
    }
}




export default function Beach() {
    const [nestShow, setNestShow] = useState(false)

    const onPressShowNest = () => {
        setNestShow(true)
    }
    const closeNest = () => {
        setNestShow(false)
    }
    return (
        <div className='beach' id='nest'>
            <div className='ocean'>
                <img className="ocean-img" src={urlConstant.imageGamePlay.ocean.backgroundOcean} alt="" />
                <div className='boulder'>
                    <div className='boulder-element opacity'>
                        <div className='house'>
                            <img className="pinwheel" src={urlConstant.imageGamePlay.ocean.pinwheel} alt="" />
                            <img className="house-img" src={urlConstant.imageGamePlay.ocean.house} alt="" />
                        </div>
                        <img className="boulder-img" src={urlConstant.imageGamePlay.ocean.boulder} alt="" />
                    </div>
                </div>
                <div className='oceanIsland'>
                    <div className='oceanIsland-element opacity'>
                        <img className="oceanIsland-img" src={urlConstant.imageGamePlay.ocean.oceanIsland} alt="" />
                        <div className='tree'>
                            <img className="tree-img" src={urlConstant.imageGamePlay.ocean.tree} alt="" />
                            <div className='tree-accessory'>
                                <img className="oceanIsland-grass" src={urlConstant.imageGamePlay.ocean.oceanIslandGrass} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='land'>
                {nestShow && < div className={"nest_onBoarding"}>
                    <div className='nest-frame'>
                        <div className='onBoarding-btn_close' onClick={() => {
                            closeNest()
                        }}>
                            <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/btn_close.png' alt='' />
                        </div>
                        <div className='onBoarding-title'>
                            <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/boarding-img/title_bg.png' alt='' />
                        </div>
                    </div>
                </div>}
                <img className="land-img" src={urlConstant.imageGamePlay.land.backgroundLand} alt="" />
                <div className='bone rightEntrance'>
                    <img className='bone-img' src={urlConstant.imageGamePlay.land.bone} alt='' />
                </div>
                <img className='fruitBasket-img' src={urlConstant.imageGamePlay.land.fuitBasket} alt='' />
                <div className='core'>
                    <div className='gate opacity'>
                        <img className='circle-img' src={urlConstant.imageGamePlay.land.core.circle} alt='' />
                        <img className='effigy-img' src={urlConstant.imageGamePlay.land.core.effigy} alt='' />
                        <img className='lightColumn-img' src={urlConstant.imageGamePlay.land.core.lightColumn} alt='' />
                        <div className='eluNestBtn' onClick={() => {
                            onPressShowNest()
                        }}>
                            <img className='eluNestBtn-img' src={urlConstant.imageGamePlay.land.core.eluNestBtn} alt='' />
                        </div>
                    </div>
                </div>
                <div className='character opacity'>
                    <div className='character-elu'>
                        <img className='character-eluLight' src={urlConstant.imageGamePlay.land.character.eluLight} alt='' />
                    </div>
                    <div className='character-elu'>
                        <img className='eluNestBtn-eluFire' src={urlConstant.imageGamePlay.land.character.eluFire} alt='' />
                    </div>
                    <div className='character-elu'>
                        <img className='eluNestBtn-eluWater' src={urlConstant.imageGamePlay.land.character.eluWater} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
