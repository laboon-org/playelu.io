import React from 'react'

import star5 from '../img/star5.png'
import star4 from '../img/star4.png'
import comet from '../img/comet.png'
import starDeviated from '../img/starDeviated.png'



const getRandomNumberMinMax = (min, max) => {
    return parseInt(Math.random() * 100 * min) % max + min
}

const stars = [
    {
        id: 1,
        img: star4
    },
    {
        id: 2,
        img: comet
    },
    {
        id: 3,
        img: star5
    },
    {
        id: 4,
        img: starDeviated
    },
    {
        id: 5,
        img: star4
    },
    {
        id: 6,
        img: comet
    },
    {
        id: 7,
        img: star5
    },
    {
        id: 8,
        img: star4
    },
    {
        id: 9,
        img: star5
    },
    {
        id: 10,
        img: star5
    },
    {
        id: 11,
        img: starDeviated
    },
    {
        id: 12,
        img: star4
    },
    {
        id: 13,
        img: star5
    },
    {
        id: 14,
        img: star5
    },
    {
        id: 15,
        img: star5
    },
    {
        id: 16,
        img: starDeviated
    },
    {
        id: 17,
        img: star5
    },
    {
        id: 18,
        img: comet
    },
    {
        id: 19,
        img: star5
    }
]

export default function BackgroundStar() {
    return (
        <div style={{ position: 'relative' }}>
            {
                stars.map((star, key) => {
                    const starStyles = {
                        position: 'absolute',
                        marginTop: getRandomNumberMinMax(window.innerHeight * 1 / 100, window.innerHeight * 60 / 100),
                        marginLeft: parseInt(window.innerWidth * (5 / 100) * (key + 1)) - window.innerWidth * 5 / 100,
                        width: key === 3 ? window.innerWidth * 8 / 100 : getRandomNumberMinMax(window.innerWidth * 2 / 100, window.innerWidth * 8 / 100),
                        zIndex: getRandomNumberMinMax(0, 6),
                        opacity: Math.random(0.95, 1)
                    };

                    return (
                        <img src={star.img} style={starStyles} alt="" />
                    )
                }
                )
            }
        </div>
    )
}
