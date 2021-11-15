import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import '../css/modalNavbar.scss'

export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <div className='navbar-btn' onClick={() => setShow(true)}>
                <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/navbarBtn.png' alt="" />
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='header__modal-navbar'>
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/eluLogo.png' alt="" />
                    <div className='close__modal-navbar' onClick={() => handleClose()}>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/closeModal.png' alt="" />
                    </div>
                </div>
                <div className='body__modal-navbar'>
                    <div className='modal-element'>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/modalNavbarEle.png' alt="" />
                        <h2>ROADMAP</h2>
                    </div>
                    <div className='modal-element'>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/modalNavbarEle.png' alt="" />
                        <h2>TOKENOMIC</h2>
                    </div>
                    <div className='modal-element'>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/modalNavbarEle.png' alt="" />
                        <h2>LITEPAPER</h2>
                    </div>
                    <div className='modal-element'>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/modalNavbarEle.png' alt="" />
                        <h2>GAMEPLAY</h2>
                    </div>
                </div>
            </Modal>
        </div >
    );
}
