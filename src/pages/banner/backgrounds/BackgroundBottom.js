import React from 'react'
import '../backgrounDecor/clouds.scss'

export default function CloudBottom() {
    let clouds = []
    for (let i = 0; i < 50; i++) {
        clouds.push((<div key={i}></div>))
    }
    return (
        <div className="background-bottom">
            <div className="background-bottom-position">
                <div className='background-bottom-cloud__1'>
                    <div className="background-bottom-cloud">
                        {clouds}
                    </div>
                    <div className="background-bottom-cloud_background"></div>
                </div>
                <div className='background-bottom-cloud__2'>
                    <div className="background-bottom-cloud">
                        {clouds}
                    </div>
                    <div className="background-bottom-cloud_background"></div>
                </div>
                <div className='background-bottom-cloud__3'>
                    <div className="background-bottom-cloud">
                        {clouds}
                    </div>
                    <div className="background-bottom-cloud_background"></div>
                </div>
            </div>
            {/* <img className="background__bottom-img" src={urlConstant.image.backgroundBottom} alt="" /> */}
        </div>
    )
}
