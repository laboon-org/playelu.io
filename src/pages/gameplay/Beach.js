import React from 'react'
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
    return (
        <div className='beach' id='nest'>
            <div className='ocean'>
                <img className="ocean-img" src={urlConstant.imageGamePlay.backgroundOcean} alt="" />
                <div className='boulder'>
                    <div className='boulder-element opacity'>
                        <div className='house'>
                            <img className="pinwheel" src={urlConstant.imageGamePlay.pinwheel} alt="" />
                            <img className="house-img" src={urlConstant.imageGamePlay.house} alt="" />
                        </div>
                        <img className="boulder-img" src={urlConstant.imageGamePlay.boulder} alt="" />
                    </div>
                </div>
                <div className='oceanIsland'>
                    <div className='oceanIsland-element opacity'>
                        <img className="oceanIsland-img" src={urlConstant.imageGamePlay.oceanIsland} alt="" />
                        <div className='tree'>
                            <img className="tree-img" src={urlConstant.imageGamePlay.tree} alt="" />
                            <div className='tree-accessory'>
                                <img className="oceanIsland-grass" src={urlConstant.imageGamePlay.oceanIslandGrass} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='land'>
                <img className="land-img" src={urlConstant.imageGamePlay.backgroundLand} alt="" />
                <div className='bone rightEntrance'>
                    <img className='bone-img' src={urlConstant.imageGamePlay.bone} alt='' />
                </div>
                <img className='fruitBasket-img' src={urlConstant.imageGamePlay.fuitBasket} alt='' />
                <div className='core'>
                    <div className='gate opacity'>
                        <img className='circle-img' src={urlConstant.imageGamePlay.circle} alt='' />
                        <img className='effigy-img' src={urlConstant.imageGamePlay.effigy} alt='' />
                        <img className='lightColumn-img' src={urlConstant.imageGamePlay.lightColumn} alt='' />
                        <div className='eluNestBtn'>
                            <img className='eluNestBtn-img' src={urlConstant.imageGamePlay.eluNestBtn} alt='' />
                        </div>
                    </div>
                </div>
                <div className='character opacity'>
                    <div className='character-elu'>
                        <img className='character-eluLight' src={urlConstant.imageGamePlay.eluLight} alt='' />
                    </div>
                    <div className='character-elu'>
                        <img className='eluNestBtn-eluFire' src={urlConstant.imageGamePlay.eluFire} alt='' />
                    </div>
                    <div className='character-elu'>
                        <img className='eluNestBtn-eluWater' src={urlConstant.imageGamePlay.eluWater} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
