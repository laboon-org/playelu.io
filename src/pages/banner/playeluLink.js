import React from 'react'
import urlConstant from '../../urlConstant'



function PlayeluLink() {
    const elementLinks = [
        {
            id: 1,
            img: urlConstant.image.twitter,
            href: 'https://twitter.com/eluverse'

        },
        {
            id: 2,
            img: urlConstant.image.graphic,
            href: 'https://discord.io/EluVerse'
        },
        {
            id: 3,
            img: urlConstant.image.insta,
            href: 'https://www.instagram.com/eluverse/    - instagram'
        },
        {
            id: 4,
            img: urlConstant.image.facebook,
            href: '#'
        },
        {
            id: 5,
            img: urlConstant.image.tele,
            href: 'https://t.me/eluverse     - telegram'
        },
        {
            id: 6,
            img: urlConstant.image.opensea,
            href: '#'
        },
    ]
    return (
        <div className='playelu__link  '>
            {
                elementLinks.map(elementLink => (
                    <div key={elementLink.id} className='playelu__link-ele col'>
                        <a href={elementLink.href}>
                            <img src={elementLink.img} alt="" />
                        </a>
                    </div>
                )
                )
            }
        </div>
    )
}
export default PlayeluLink;
