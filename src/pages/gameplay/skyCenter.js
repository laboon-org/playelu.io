import React, { useRef, useEffect } from 'react'
import './css/skyCenter.scss'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture, useDrag } from '@use-gesture/react'
import {
    useWindowSize,
} from '@react-hook/window-size'
const img_urls = [
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/islandWater.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp',
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp'
    },
    {
        url: 'https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/island.webp'
    }
]
const calcPer = (val, per) => {
    return val * per / 100;
}
const calcYInElip = (a, b, x) => {
    const b_2 = Math.pow(b, 2);
    const right = (Math.pow(x - a, 2) * b_2) / Math.pow(a, 2);
    return {
        positive: Math.sqrt(b_2 - right) + b / 2,
        negative: -Math.sqrt(b_2 - right)
    }

}
export default function SkyCenter() {
    const [widthW, heightW] = useWindowSize()

    const [{ x, y, checkState, prevMx, scale, width, height }, set] =
        useSpring(() => ({ x: calcPer(widthW, 35), y: calcPer(heightW, 10), checkState: 'down', prevMx: 0, scale: 1, width: '20vw', height: '20vw' }))
    const a = calcPer(widthW, 35)
    const b = calcPer(heightW, 10)
    const focus = 100
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        let calcNearPercent=0.5
       
        console.log("NEAR", calcNearPercent)
        if (Math.abs(prevMx.get() - mx) <= 100)
            return
        if (!down) {
            set({ preMx: mx })
            return
        }

        let ep = 0;
        if (prevMx.get() > mx) {
            ep = -focus
        }
        if (prevMx.get() < mx) {
            ep = focus
        }
        let xnew = x.get() + ep//+a

        let getCheckState = checkState.get()
        let ynew;


        if (xnew <= 0 || xnew >= a * 2) {
            if (getCheckState == 'up')
                getCheckState = 'down'
            else
                getCheckState = 'up'
        }
        if (xnew >= a * 2) {
            xnew = a * 2 - 1
        }
        if (xnew <= 0)
            xnew = 0
        const calc = calcYInElip(a, b, xnew)
        if (getCheckState == 'down')
            ynew = calc.positive
        else
            ynew = calc.negative
        if (getCheckState != checkState.get()) {
            if (xnew <= 0) {
                xnew = 10
            }
            if (xnew >= a * 2) {
                xnew = a * 2 - 10
            }
        }
        if(checkState.get() === 'down'){
            calcNearPercent=1
        }
        if(xnew>a+100 || xnew<a-100 )
            calcNearPercent=0.5
        
        // if (checkState.get() != getCheckState) {
        //     if (getCheckState == 'down')
        //         ynew = calc.negative
        //     else
        //         ynew = calc.positive
        // }
        //console.log("X,Y", xnew, ynew, getCheckState)
        console.log( calcNearPercent*20)
        set({ x: xnew, y: ynew, checkState: getCheckState, preMx: mx, scale: calcNearPercent,width: calcNearPercent*20+'vw',height:calcNearPercent*20+'vw' })
    })
    const renderIsland = img_urls.map((obj, key) => {
        console.log(obj)
        return (<div
            key={key}
            style={{
                background: `url("${obj.url}") no-repeat center / contain`,
                height: "200px",
                width: "200px",
                position: 'absolute'
            }}

        ></div>)
    })
    return (
        <div className='sky-center'>
            <div className='sky-center__islands'>
                <div style={{
                    width: calcPer(widthW, 80),
                    height: calcPer(heightW, 20),
                    border: "1px solid",
                    borderRadius: "50%",
                }}>
                    <animated.div  {...bind()}
                        style={{
                            background: `url("${img_urls[0].url}") no-repeat center / contain`,
                            width,
                            height,
                            x,
                            y,
                            touchAction: 'none',
                            position: 'absolute'
                        }} />
                </div>
                {/* {renderIsland} */}
            </div>
        </div>
    )
}
