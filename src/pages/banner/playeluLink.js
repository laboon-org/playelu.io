import React from 'react'
import urlConstant from '../../urlConstant'



function PlayeluLink() {
    const elementLinks = [
        {
            id: 1,
            img: urlConstant.image.social.twitter,
            href: 'https://twitter.com/eluverse'
        },
        {
            id: 2,
            img: urlConstant.image.social.graphic,
            href: 'https://discord.io/EluVerse'
        },
        {
            id: 3,
            img: urlConstant.image.social.insta,
            href: 'https://www.instagram.com/eluverse/ '
        },
        {
            id: 4,
            img: urlConstant.image.social.facebook,
            href: 'https://www.facebook.com/EluVerse/'
        },
        {
            id: 5,
            img: urlConstant.image.social.tele,
            href: 'https://t.me/eluverse'
        },
        {
            id: 6,
            img: urlConstant.image.social.opensea,
            href: 'https://opensea.io/eluverse'
        },
        {
            id: 7,
            img: urlConstant.image.social.medium,
            href: 'https://medium.com/@eluverse'
        }
    ]
    return (
        <div className='playelu__link  '>
            {
                elementLinks.map(elementLink => (
                    <div key={elementLink.id} className='playelu__link-ele'>
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
