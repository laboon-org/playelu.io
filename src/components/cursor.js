import React, { useState } from 'react'
import MouseParticles from 'react-mouse-particles'


export default function Cursor() {
    const [showCursor, setShowCursor] = useState(false)
    setTimeout(() => {
        setShowCursor(true);
    }, 500);
    return (<div>{
        showCursor ? <MouseParticles g={1} color={["#feca1a", "#fbed52", "#bae4eb"]} cull="col,image-wrapper" /> : ''
    }
    </div>
    )
}
