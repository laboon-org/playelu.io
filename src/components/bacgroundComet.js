import React from 'react'
import comet from '../img/star5.png'



const getRandomNumberMinMax = (min, max) => {
    return parseInt(Math.random() * 100 * min) % max + min
}

const comets = [
    {
        id: 1,
        img: comet
    },
    {
        id: 2,
        img: comet
    },
    {
        id: 3,
        img: comet
    },
    {
        id: 4,
        img: comet
    },
    {
        id: 5,
        img: comet
    },
    {
        id: 6,
        img: comet
    }
]

export default function BackgroundComet() {
    return (
        <div style={{ position: 'relative' }}>
            {
                comets.map((comet, key) => {
                    const cometStyles = {
                        position: 'absolute',
                        top: -10,
                        marginLeft: parseInt(window.innerWidth * (15 / 100) * (key + 1)) - window.innerWidth * 5 / 100,
                        width: getRandomNumberMinMax(window.innerWidth * 1 / 100, window.innerWidth * 2 / 100),
                        zIndex: getRandomNumberMinMax(0, 6),
                        opacity: Math.random(0.95, 1)
                    };

                    return (
                        <img className='background-comet' src={comet.img} style={cometStyles} alt="" />
                    )
                }
                )
            }
        </div>
    )
}
