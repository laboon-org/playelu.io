import React, { useState } from 'react'
import _ from "lodash";
import PlayeluLink from './playeluLink';
import Modal from 'react-bootstrap/Modal';
import Header from "../../components/Header";
import UrlRescusive from '../../UrlRescusive';


export default function Content(props) {
    const { urlApi } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = React.useState("");
    const [error, setError] = useState(null);
    const URI = "https://api.playelu.io/subemail";
    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const onPress = React.useCallback((e) => {

        fetch(URI, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        }).then(
            response => console.log(response)
        ).catch(err => console.log(err))
        if (!validateEmail(email)) {
            setError('Please enter your email address in format: yourname@example.com');
        } else {
            handleShow()
            setError('');
        }
    }, [email]);
    const handleSubmit = e => {
        e.preventDefault();
        onPress()
    }
    return (
        <UrlRescusive data={props.urlApi}>
            <Modal
                size="lg"
                dialogClassName="modal-thankyou"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>

                <div className='close-modal' onClick={() => handleClose()}>
                    <img src={_.isEmpty(urlApi) ? '' : urlApi.image.modal.closeModal} alt="" />
                </div>
                <div className='modal-container'>
                    <img src={_.isEmpty(urlApi) ? '' : urlApi.image.eluLogo} alt="" />
                    <h1>thank you!</h1>
                    <p className='name-email'>{email}</p>
                </div>

            </Modal>
            <div className='playelu-frame'>
                <div className="playelu-all">
                    <div className="playelu-top">
                        <Header />
                        <div className="playelu-img">
                            <img src={_.isEmpty(urlApi) ? '' : urlApi.image.eluLogo1} alt="" />
                        </div>
                        <div className="playelu-tittle">
                            <h1>#1 Free-to-Earn NFT Game</h1>
                        </div>
                        <form className="playelu-btn" onSubmit={handleSubmit}>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="playelu-input "
                                type=""
                                placeholder='Email'
                                value={email}
                                pattern='[a-z]{1,50}'
                                maxLength={40}
                                required=""
                                placeholder="Your Email here"
                            >

                            </input>
                            <i className="iconEmail fas fa-envelope"></i>
                            <button
                                type="submit"
                                className=" subcribe__playelu-btn"
                                onClick={onPress}
                            >
                                Subscribe
                            </button>
                        </form>
                        {error && <div className='error-email'>{error}</div>}
                    </div>
                    <div className="playelu-bottom mt-auto d-flex justify-content-center">
                        <PlayeluLink></PlayeluLink>
                        <div className='policy'>
                            <a className='privacy-policy' href={_.isEmpty(urlApi) ? '' : urlApi.docs.privacyPolicy}>
                                Privacy Policy
                            </a>
                            <a href='#'>&nbsp;|&nbsp;</a>
                            <a href={_.isEmpty(urlApi) ? '' : urlApi.docs.conditions}>
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </UrlRescusive>
    )
}
