import React from 'react'
import urlConstant from '../../urlConstant'
import '../../css/beach.scss'

export default function Beach() {
    return (
        <div className='beach'>
            <div className='ocean'>
                <img className="ocean-img" src={urlConstant.imageGamePlay.backgroundOcean} alt="" />
                <div className='boulder'>
                    <div className='boulder-element'>
                        <div className='house'>
                            <img className="pinwheel" src={urlConstant.imageGamePlay.pinwheel} alt="" />
                            <img className="house-img" src={urlConstant.imageGamePlay.house} alt="" />
                        </div>
                        <img className="boulder-img" src={urlConstant.imageGamePlay.boulder} alt="" />
                    </div>
                </div>
                <div className='oceanIsland'>
                    <div className='oceanIsland-element'>
                        <img className="oceanIsland-img" src={urlConstant.imageGamePlay.oceanIsland} alt="" />
                        <div className='tree'>
                            <img className="tree-img" src={urlConstant.imageGamePlay.tree} alt="" />
                            <div className='tree-accessory'>
                                <img className="oceanIsland-grass" src={urlConstant.imageGamePlay.oceanIslandGrass} alt="" />
                                <img className="oceanIsland-boon__left" src={urlConstant.imageGamePlay.boon1} alt="" />
                                <img className="oceanIsland-boon__right" src={urlConstant.imageGamePlay.boon2} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='land'>
                <img className="land-img" src={urlConstant.imageGamePlay.backgroundLand} alt="" />
                <div className='bone'>
                    <img className='bone-img' src={urlConstant.imageGamePlay.bone} alt='' />
                </div>
                <img className='fruitBasket-img' src={urlConstant.imageGamePlay.fuitBasket} alt='' />
                <div className='core'>
                    <div className='gate'>
                        <img className='circle-img' src={urlConstant.imageGamePlay.circle} alt='' />
                        <img className='effigy-img' src={urlConstant.imageGamePlay.effigy} alt='' />
                        <img className='lightColumn-img' src={urlConstant.imageGamePlay.lightColumn} alt='' />
                        <div className='eluNestBtn'>
                            <img className='eluNestBtn-img' src={urlConstant.imageGamePlay.eluNestBtn} alt='' />
                        </div>
                    </div>
                </div>
                <div className='character'>
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
