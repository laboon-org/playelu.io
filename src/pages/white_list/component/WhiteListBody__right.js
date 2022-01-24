import React, { useState, useLayoutEffect } from 'react'
import moment from 'moment'

import LoginProcess from './LoginProcess'
import messageStorage from '../../../module/messageStorage'
import WhiteListComingSoon from './modal/WhiteList_comingSoon'



const WhiteListRegistration = React.lazy(() => import('./WhiteList_Registration'))
export default function WhiteListBody__right(props) {
    const { showModalNotFound } = props
    const [whiteListShow, setWhiteListShow] = useState(false)
    const [commingSoonTime, setCommingSoon] = useState('')
    const showWhiteList = () => {
        setWhiteListShow(true)
    }

    const checkCountdown = () => {
        const CONFIG = messageStorage.getInstance().getMessage('config')
        let countdown = false
        let countdownTime = ''
        if (CONFIG['Round Setting'] != null) {
            const data = CONFIG['Round Setting'].data

            const index = data.findIndex((v, i, obj) => {
                if (moment(v.Start).add(1, 'days').isAfter(moment())) {
                    return true
                }
            })

            if (index != -1) {
                countdown = true
                countdownTime = moment(data[index].Start).format('DD-MM-YYYY [00:00]')
            }
        }
        console.log(countdown, countdownTime)

        if (countdown) {
            return countdownTime
        } else {
            return ''
        }
    }

    useLayoutEffect(() => {
        setCommingSoon(checkCountdown())
    }, [])

    console.log('STATE:', commingSoonTime)
    return (
        <div className='white-list__body--right'>
            {
                true
                    ? (!whiteListShow ?
                        (<LoginProcess
                            showWhiteList={showWhiteList}
                            showModalNotFound={showModalNotFound}
                        />) :
                        (<WhiteListRegistration />))
                    : (<><WhiteListComingSoon dateProp={commingSoonTime} /></>)
            }
        </div>
    )
}
