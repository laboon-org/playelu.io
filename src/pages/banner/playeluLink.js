import React from 'react'
import urlConstant from '../../urlConstant'



function PlayeluLink() {
    const elementLinks = [
        {
            id: 1,
            img: urlConstant.image.twitter

        },
        {
            id: 2,
            img: urlConstant.image.graphic

        },
        {
            id: 3,
            img: urlConstant.image.insta

        },
        {
            id: 4,
            img: urlConstant.image.facebook

        },
        {
            id: 5,
            img: urlConstant.image.tele
        },
        {
            id: 6,
            img: urlConstant.image.opensea
        },
    ]
    return (
        <div className='playelu__link  '>
            {
                elementLinks.map(elementLink => (
                    <div key={elementLink.id} className='playelu__link-ele col'>
                        <a href="">
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
