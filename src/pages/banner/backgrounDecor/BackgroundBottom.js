import React from 'react'
import urlConstant from "../../../urlConstant";
import cloudscss from './clouds.scss'

export default function CloudBottom() {
    let clouds = []
    for (let i = 0; i < 100; i++) {
        clouds.push((<div key={i}></div>))
    }
    return (
        <div className="background-bottom">
            <div className="background-bottom-cloud">
            {clouds}
            </div>
         
            {/* <img className="background__bottom-img" src={urlConstant.image.backgroundBottom} alt="" /> */}
        </div>
    )
}
