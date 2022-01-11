import React from 'react'
import Login from './login'

export default function NotfoundModal(props) {
    const { title } = props
    return (
        <div className='notfound'>
            <img
                className='notfound-img'
                src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/notfound-icon.webp'
                alt=''
            />
            <div className='notfound-text'>
                <span className='notfound-title'>MetaMask not found</span>
                <span className='notfound-sub'>You need to set up MetaMask wallet to continue</span>
            </div>
            <Login title={title} />
        </div>
    )
}
