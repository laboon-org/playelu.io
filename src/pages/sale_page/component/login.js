import React from 'react'

export default function Login(props) {

    const { icon, title, onPressShow, renderConnecter } = props

    return (
        <button
            className='login'
            onClick={async () => await onPressShow()}
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
            {renderConnecter == null ? <></> : renderConnecter}
        </button >
    )
}
