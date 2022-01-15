import React from 'react'

export default function LoginProcess(props) {
    const { icon, title, showWhiteList } = props

    return (
        <div className='body-right'>
            <span className='body-right__title'>
                WALLET SELECTION
            </span>
            <div className='login'
                onClick={showWhiteList}
            >
                <div className='login-frame'>
                    <img
                        className='login-icon'
                        src={icon}
                        alt=''
                    />
                    <h4 className='login-title'>
                        {title}
                    </h4>
                </div>
            </div >
        </div>
    )
}
