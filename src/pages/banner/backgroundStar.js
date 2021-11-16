import React from 'react'
import urlConstant from '../../urlConstant'



const getRandomNumberMinMax = (min, max) => {
    return parseInt(Math.random() * 100 * min) % max + min
}
const stars = [
    {
        id: 1,
        img:urlConstant.image.star4
    },
    {
        id: 2,
        img: urlConstant.image.startDeviated
    },
    {
        id: 3,
        img: urlConstant.image.star5
    },
    {
        id: 4,
        img: urlConstant.image.startDeviated
    },
    {
        id: 5,
        img:urlConstant.image.star4
    },
    {
        id: 6,
        img:urlConstant.image.star4
    },
    {
        id: 7,
        img: urlConstant.image.star5
    },
    {
        id: 8,
        img:urlConstant.image.star4
    },
    {
        id: 9,
        img: urlConstant.image.star5
    },
    {
        id: 10,
        img: urlConstant.image.star5
    },
    {
        id: 11,
        img: urlConstant.image.startDeviated
    },
    {
        id: 12,
        img:urlConstant.image.star4
    },
    {
        id: 13,
        img: urlConstant.image.star5
    },
    {
        id: 14,
        img: urlConstant.image.star5
    },
    {
        id: 15,
        img: urlConstant.image.star5
    },
    {
        id: 16,
        img: urlConstant.image.startDeviated
    },
    {
        id: 17,
        img: urlConstant.image.star5
    },
    {
        id: 18,
        img: urlConstant.image.star5
    },
    {
        id: 19,
        img: urlConstant.image.star5
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
                        width: key === 3 ? window.innerWidth * 7 / 100 : getRandomNumberMinMax(window.innerWidth * 2 / 100, window.innerWidth * 6 / 100),
                        zIndex: 0,
                        opacity: Math.random(0.95, 1)
                    };
                    return (
                        <img className='background-star' src={star.img} style={starStyles} alt="" />
                    )
                }
                )
            }
        </div>
    )
}
