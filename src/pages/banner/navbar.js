import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import urlConstant from '../../urlConstant';

import '../../css/modalNavbar.scss'


export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div >
            <div className='navbar-btn' onClick={() => setShow(true)}>
                <img src={urlConstant.image.navbarBtn} alt="" />
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='header__modal-navbar'>
                    <img src={urlConstant.image.eluLogo} alt="" />
                    <div className='close__modal-navbar' onClick={() => handleClose()}>
                        <img src={urlConstant.image.closeModal} alt="" />
                    </div>
                </div>
                <div className='body__modal-navbar'>
                    <div className='modal-element'>
                        <a href="https://bit.ly/3qWnt9s">
                            <img src={urlConstant.image.modalNavbarEle} alt="" />
                            <h2>ROADMAP</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <a href='https://bit.ly/3FDBLjz'>
                            <img src={urlConstant.image.modalNavbarEle} alt="" />
                            <h2>TOKENOMIC</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <img src={urlConstant.image.modalNavbarEle} alt="" />
                        <h2>LITEPAPER</h2>
                    </div>
                    <div className='modal-element'>
                        <Link to='/gameplay'>
                            <img src={urlConstant.image.modalNavbarEle} alt="" />
                            <h2 style={{ color: '#fabb1a' }}>GAMEPLAY</h2>
                        </Link>
                    </div>
                </div>
            </Modal>
        </div >
    );
}
