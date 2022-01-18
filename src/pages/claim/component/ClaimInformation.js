import React from 'react'

export default function ClaimInformation(props) {
    const {
        heading,
        placeholder
    } = props
    return (
        <div className='claim-information'>
            <span className='claim-information__heading'>
                {heading}
            </span>
            <div className='claim-information__input'>
                <input type='text' placeholder={placeholder} />
            </div>
        </div>

    )
}
