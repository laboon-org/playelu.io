import React from 'react'
import urlConstant from '../../urlConstant'
import '../../css/beach.scss'

export default function Beach() {
    return (
        <div className='beach'>
            <div className='ocean'>
                <img className="ocean-img" src={urlConstant.imageGamePlay.backgroundOcean} alt="" />
                <img className="boulder-img" src={urlConstant.imageGamePlay.boulder} alt="" />
                <div className='oceanIsland'>
                    <div className='oceanIsland-element'>
                        <img className="oceanIsland-img" src={urlConstant.imageGamePlay.oceanIsland} alt="" />
                        <img className="tree-img" src={urlConstant.imageGamePlay.tree} alt="" />
                        <img className="oceanIsland-grass" src={urlConstant.imageGamePlay.oceanIslandGrass} alt="" />
                    </div>
                </div>
            </div>
            <div className='land'>
                <img className="land-img" src={urlConstant.imageGamePlay.backgroundLand} alt="" />
                <img className='bone-img' src={urlConstant.imageGamePlay.bone} alt='' />
                <div className='core'>
                    <div className='gate'>

                    </div>
                </div>
            </div>
        </div>
    )
}
