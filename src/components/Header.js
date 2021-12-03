import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import urlConstant from '../urlConstant';
import '../scss/reponsiveness/home/home_Ipad.scss'
import '../scss/reponsiveness/home/home_mobile.scss'
// import '../scss/reponsiveness/home/responsive.scss'


export default function Header() {
    const [showComingSoon, setShowComingSoon] = useState(false);
    const handleCloseComingSoon = () => setShowComingSoon(false);
    const handleShowComingSoon = () => setShowComingSoon(true);
    const onPressMenu = () => {
        handleShowComingSoon()
    }
    return (
        <div className='header'>
            <Modal
                size="lg"
                dialogClassName="modal-comingsoon"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={showComingSoon} onHide={handleCloseComingSoon}>
                <div className='close-modal' onClick={() => handleCloseComingSoon()}>
                    <img src={urlConstant.image.modal.closeModal} alt="" />
                </div>
                <img src={urlConstant.image.modal.modalCommingSoon} alt="" />
            </Modal>
            <ul className='menu'>
                <li className='playelu__menu-element'>
                    <a href="https://bit.ly/3HUYOYZ" target='_blank'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ animation: 'shine 2.5s infinite linear' }}>Roadmap</h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <a href='https://bit.ly/3HIpdcy' target='_blank'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ animation: 'shine 1.5s infinite linear' }}>Tokenomic</h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <a href='#'>
                        <h4></h4>
                    </a>
                </li>
                <li className='playelu__menu-element'>
                    <Link to='/gameplay'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ color: '#fabb1a', animation: 'shine 1s infinite linear' }}>gameplay</h4>
                    </Link>
                </li>
                <li className='playelu__menu-element' onClick={onPressMenu}>
                    <img src={urlConstant.image.playeluHeader2} alt="" />
                    <h4 style={{ animation: 'shine 2s infinite linear' }}>Litepaper</h4>
                </li>
            </ul>

        </div>

    )
}
