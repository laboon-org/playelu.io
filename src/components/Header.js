import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import urlConstant from '../urlConstant';
import '../css/responsive.scss'
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
                    <img src={urlConstant.image.closeModal} alt="" />
                </div>
                <img src={urlConstant.image.modalCommingSoon} alt="" />
            </Modal>
            <ul className='menu'>
                <li className='playelu__menu-element' style={{ marginRight: '5px' }}>
                    <a href="https://bit.ly/3nvuPP3">
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4>ROADMAP</h4>
                    </a>
                </li>
                <li className='playelu__menu-element' style={{ marginRight: 'auto' }}>
                    <a href='https://bit.ly/3HIpdcy'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4>TOKENOMIC</h4>
                    </a>
                </li>

                <li className='playelu__menu-element' style={{ marginRight: '5px' }}>
                    <Link to='/gameplay'>
                        <img src={urlConstant.image.playeluHeader2} alt="" />
                        <h4 style={{ color: '#fabb1a' }}>GAMEPLAY</h4>
                    </Link>
                </li>
                <li className='playelu__menu-element' onClick={onPressMenu}>
                    <img src={urlConstant.image.playeluHeader2} alt="" />
                    <h4 >LITEPAPER</h4>
                </li>
            </ul>

        </div>

    )
}
