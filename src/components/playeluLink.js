import React, { Component } from 'react'
import facebook from '../img/iconFacebook.png'
import insta from '../img/iconInsta.png'
import opensea from '../img/iconOpensea.png'
import tele from '../img/iconTele.png'
import twitter from '../img/iconTwitter.png'
import graphic from '../img/graphic.png'


function PlayeluLink() {
    const elementLinks = [
        {
            id: 1,
            img: facebook
        },
        {
            id: 2,
            img: insta
        },
        {
            id: 3,
            img: opensea
        },
        {
            id: 4,
            img: tele
        },
        {
            id: 5,
            img: graphic
        },
        {
            id: 6,
            img: twitter
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
