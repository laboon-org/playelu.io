import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import urlConstant from '../../urlConstant';

import '../../scss/home/modalNavbar.scss'


export default function Navbar(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const handleCloseComingSoon = () => setShowComingSoon(false);
    const handleShowComingSoon = () => setShowComingSoon(true);
    const onPressMenu = () => {
        handleShowComingSoon()
    }
    return (
        <div >
            <div className='navbar-btn' onClick={() => setShow(true)}>
                <img src={urlConstant.image.navbarBtn} alt="" />
            </div>
            <Modal
                size="lg"
                dialogClassName="modal-comingsoon"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={showComingSoon} onHide={handleCloseComingSoon}>
                <div className='close-modal' onClick={() => handleCloseComingSoon()}>
                    <img src={urlConstant.image.modal.closeModal} alt="" />
                </div>
                <div className='modal-container'>
                    <img src={urlConstant.image.eluLogo} alt="" />
                    <h1>coming soon !</h1>
                </div>
                {/* <img src={urlConstant.image.modal.modalCommingSoon} alt="" /> */}
            </Modal>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='header__modal-navbar'>
                    <img src={urlConstant.image.logo_mobile} alt="" />
                    <div className='close__modal-navbar' onClick={() => handleClose()}>
                        <img src={urlConstant.image.modal.closeModal} alt="" />
                    </div>
                </div>
                <div className='body__modal-navbar'>
                    <div className='modal-element'>
                        <a href="https://bit.ly/3qWnt9s" target='_blank'>
                            <img src={urlConstant.image.modal.modalNavbarEle} alt="" />
                            <h2>ROADMAP</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <a href='https://bit.ly/3FDBLjz' target='_blank'>
                            <img src={urlConstant.image.modal.modalNavbarEle} alt="" />
                            <h2>TOKENOMIC</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <Link to='/gameplay'>
                            <img src={urlConstant.image.modal.modalNavbarEle} alt="" />
                            <h2 style={{ color: '#fabb1a' }}>GAMEPLAY</h2>
                        </Link>
                    </div>
                    <div className='modal-element' onClick={onPressMenu}>
                        <img src={urlConstant.image.modal.modalNavbarEle} alt="" />
                        <h2>LITEPAPER</h2>
                    </div>
                </div>
            </Modal>
        </div >
    );
}
