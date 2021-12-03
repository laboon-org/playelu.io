import React from 'react'
import urlConstant from '../../urlConstant'

const getRandomNumberMinMax = (min, max) => {
    return parseInt(Math.random() * 100 * min) % max + min
}
const comets = [
    {
        id: 1,
        img: urlConstant.image.homeBackground.star5
    },
    {
        id: 2,
        img: urlConstant.image.homeBackground.star5
    },
    {
        id: 3,
        img: urlConstant.image.homeBackground.star5
    },
    {
        id: 4,
        img: urlConstant.image.homeBackground.star4
    },
    {
        id: 5,
        img: urlConstant.image.homeBackground.star5
    },
    {
        id: 6,
        img: urlConstant.image.homeBackground.star5
    }
]
export default function BackgroundComet() {
    return (
        <div style={{ position: 'relative' }}>
            {
                comets.map((comet, index) => {
                    const cometStyles = {
                        position: 'absolute',
                        top: -10,
                        marginLeft: parseInt(window.innerWidth * (15 / 100) * (index + 1)) - window.innerWidth * 5 / 100,
                        width: getRandomNumberMinMax(window.innerWidth * 1 / 100, window.innerWidth * 2 / 100),
                        zIndex: getRandomNumberMinMax(0, 6),
                        opacity: Math.random(0.95, 1)
                    };

                    return (
                        <img key={comet.id} className='background-comet' src={comet.img} style={cometStyles} alt="" />
                    )
                }
                )
            }
        </div>
    )
}
