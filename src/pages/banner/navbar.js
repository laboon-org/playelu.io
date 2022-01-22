import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import _ from "lodash";


import '../../scss/home/modalNavbar.scss'


export default function Navbar(props) {
    const { urlApi } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <div >
            <div className='navbar-btn' onClick={() => setShow(true)}>
                <img src={_.isEmpty(urlApi) ? '' : urlApi.image.navbarBtn} alt="" />
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='header__modal-navbar'>
                    <img src={_.isEmpty(urlApi) ? '' : urlApi.common.homeIcon} alt="" />
                    <div className='close__modal-navbar' onClick={() => handleClose()}>
                        <img src={_.isEmpty(urlApi) ? '' : urlApi.common.closeBtn} alt="" />
                    </div>
                </div>
                <div className='body__modal-navbar'>
                    <div className='modal-element'>
                        <a href={_.isEmpty(urlApi) ? '' : urlApi.docs.roadmap} target='_blank'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.image.modal.modalNavbarEle} alt="" />
                            <h2>ROADMAP</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <a href={_.isEmpty(urlApi) ? '' : urlApi.docs.tokenomic} target='_blank'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.image.modal.modalNavbarEle} alt="" />
                            <h2>TOKENOMIC</h2>
                        </a>
                    </div>
                    <div className='modal-element'>
                        <Link to='/gameplay'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.image.modal.modalNavbarEle} alt="" />
                            <h2 style={{ color: '#fabb1a' }}>GAMEPLAY</h2>
                        </Link>
                    </div>
                    <div className='modal-element'>
                        <a href={_.isEmpty(urlApi) ? '' : urlApi.docs.litepaper} target='_blank'>
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.image.modal.modalNavbarEle} alt="" />
                            <h2>LITEPAPER</h2>
                        </a>
                    </div>
                </div>
            </Modal>
        </div >
    );
}
