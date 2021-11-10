import React from 'react'
import cloud1 from '../img/cloud1.png'
import cloud2 from '../img/cloud2.png'
import cloud3 from '../img/cloud3.png'
import cloud4 from '../img/cloud4.png'


const getRandomNumberMinMax = (min, max) => {
    // const limitMax = (Math.random() * 100) % max + Math.random();
    // let ranNumber = 0
    // while (ranNumber < min || ranNumber > limitMax) {
    //     ranNumber = (Math.random() * 100) % max + min
    // }
    return parseInt(Math.random() * 100 * min) % max + min
}
const clouds = [
    {
        id: 1,
        img: cloud1
    },
    {
        id: 2,
        img: cloud2
    },
    {
        id: 3,
        img: cloud3
    },
    {
        id: 4,
        img: cloud4
    }
]
export default function Background() {

    return (<div style={{ position: 'relative' }}>
        {
            clouds.map((cloud, key) => {
                const starStyles = {
                    position: 'absolute',
                    marginTop: getRandomNumberMinMax(window.innerHeight * 1 / 100, window.innerHeight * 20 / 100),
                    marginLeft: parseInt(window.innerWidth * (20 / 100) * (key + 1)) - window.innerWidth * 5 / 100,
                    width: window.innerWidth * 30 / 100,
                    zIndex: getRandomNumberMinMax(0, 6)
                    // transform: 'translate(-50%, -50%)'
                };
                return (
                    <img src={cloud.img} style={starStyles} alt="" />
                )
            }
            )
        }

    </div>

    )
}
