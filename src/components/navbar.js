import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import NavbarBtn from '../img/navbarBtn.png'
import closeModal from '../img/closeModal.png'
import '../css/modalNavbar.css'
import playeluImg from "../img/eluLogo.png";
import modalEle from '../img/modalNavbarEle.png'




export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <div className='navbar-btn' onClick={() => setShow(true)}>
                <img src={NavbarBtn} alt="" />
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='header__modal-navbar'>
                    <img src={playeluImg} alt="" />
                    <div className='close__modal-navbar' onClick={() => handleClose()}>
                        <img src={closeModal} alt="" />
                    </div>
                </div>
                <div className='body__modal-navbar'>
                    <div className='modal-element'>
                        <img src={modalEle} alt="" />
                        <h2>ROADMAP</h2>
                    </div>
                    <div className='modal-element'>
                        <img src={modalEle} alt="" />
                        <h2>TOKENOMIC</h2>
                    </div>
                    <div className='modal-element'>
                        <img src={modalEle} alt="" />
                        <h2>LITEPAPER</h2>
                    </div>
                    <div className='modal-element'>
                        <img src={modalEle} alt="" />
                        <h2>GAMEPLAY</h2>
                    </div>
                </div>

            </Modal>

        </div >
    );
}
