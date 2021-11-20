import React, { useRef, useEffect } from 'react'
import './css/skyCenter.scss'
import { useSprings, useSpring, animated, to } from '@react-spring/web'
import { useGesture, useDrag } from '@use-gesture/react'
import {
    useWindowSize,
} from '@react-hook/window-size'
const img_urls = [
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/water_island.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/fountain.webp',
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/islandBlank1.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/islanBlank3.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/islandBlank2.webp'
    }
]
const calcZIndex = (deg) => {
    let zIndex;
    if (deg >= 0 && deg <= 60) {
        if (deg >= 30)
            zIndex = 2
        else
            zIndex = 1
        return zIndex
    }

    if (deg <= 120) {
        if (deg >= 90)
            zIndex = 3
        else
            zIndex = 2
        return zIndex
    }

    if (deg <= 180) {
        if (deg >= 150)
            zIndex = 4
        else
            zIndex = 3
        return zIndex
    }

    if(deg<=240){
        if(deg>=210)
            zIndex =3
        else
        zIndex = 4
        return zIndex
    }
}
export default function SkyCenter() {
    const [widthW, heightW] = useWindowSize()
    const [islands, set] = useSprings(img_urls.length, (key) => ({
        transformOfCircle: `rotateX(75deg) rotateZ(${key * 60}deg)`,
        transformOfIsland: `rotateX(270deg) rotateY(${key * 60}deg)`,
        rotateZOfCircle: key * 60,
        rotateYOfIsland: key * 60,
        zIndex: 1
    }))

    const bind = useGesture({
        onDrag: (state) => {
            let focus = -30
            // console.log(state.direction)
            // console.log(state.xy)
            if (state.direction[0] == -1) {
                focus = 30
            }

            set.start((key) => {
                let rotateZAfter = islands[key].rotateZOfCircle.get() + focus
                let rotateYAfter = islands[key].rotateYOfIsland.get() + focus
                // rotateZAfter = rotateZAfter > 0 ? rotateZAfter : 360 + rotateZAfter
                // rotateYAfter=rotateYAfter > 0 ? rotateYAfter : 360 + rotateYAfter
                return {
                    transformOfCircle: 'rotateX(75deg) rotateZ(' + rotateZAfter + 'deg)',
                    transformOfIsland: 'rotateX(270deg) rotateY(' + rotateYAfter + 'deg)',
                    rotateZOfCircle: rotateZAfter,
                    rotateYOfIsland: rotateYAfter,
                    zIndex: (Math.abs(rotateZAfter) % 360 >= 90) && (Math.abs(rotateZAfter) % 360 <= 270) ? 2 : 1
                }
            })
        }
    })


    const renderIsland = islands.map(({ transformOfCircle, transformOfIsland, zIndex }, key) => {
        return (
            <animated.div className='sky-center__islands' style={{
                transform: transformOfCircle,
                zIndex
            }}>
                <animated.div
                    key={key}
                    className='island'
                    style={{
                        transform: transformOfIsland,
                        background: `url("${img_urls[key].url}") no-repeat center / contain`,
                        height: "40vh",
                        width: "40vh",
                    }}></animated.div>
            </animated.div>)
    })
    return (

        <animated.div className='sky-center' {...bind()}>
            {renderIsland}
        </animated.div>

    )
}
