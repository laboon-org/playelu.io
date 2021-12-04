import React, { useState } from "react";
import Navbar from "./navbar";
import PlayeluLink from "./playeluLink";

import Modal from 'react-bootstrap/Modal';

import Header from "../../components/Header";
import urlConstant from "../../urlConstant";
import '../../scss/reponsiveness/home/home_Ipad.scss'
import '../../scss/reponsiveness/home/home_mobile.scss'
import Background from "./backgrounds/background";
// import CloudBottom from "./backgrounDecor/BackgroundBottom";

const controlSound = () => {
  const soundOn = document.querySelector(".sound-on");
  const soundOff = document.querySelector(".sound-off");
  soundOn.addEventListener("click", () => {
    soundOff.classList.add("active");
    soundOn.classList.remove("active");
  });
  soundOff.addEventListener("click", () => {
    soundOff.classList.remove("active");
    soundOn.classList.add("active");
  });
};

export default function PlayeluBaner() {


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
      setError('Wrong email format message');
    } else {
      handleShow()
      setError('');
    }
  }, [email]);
  const handleSubmit = e => {
    e.preventDefault();
    onPress()
  }
  return (<div className='playelu-body'>
    <div className="discord">
      <img className="discord-img" src={urlConstant.image.discord} alt="" />
      <img className="mobile__discord-img" src={urlConstant.image.mobileDiscord} alt="" />
    </div>
    <div className="playelu">
      <Background />
      <div className='navbar'>
        <div className="sound" onClick={controlSound}>
          <img className="sound-on active" src={urlConstant.image.soundOn} alt="" />
          <img className="sound-off" src={urlConstant.image.soundOff} alt="" />
        </div>
        <Navbar />
      </div>
      <Modal
        size="lg"
        dialogClassName="modal-thankyou"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show} onHide={handleClose}>

        <div className='close-modal' onClick={() => handleClose()}>
          <img src={urlConstant.image.modal.closeModal} alt="" />
        </div>
        <img src={urlConstant.image.modal.modal} alt="" />
        <p className='name-email'>{email}</p>
      </Modal>
      <div className='playelu-frame'>
        <div className="playelu-all">
          <div className="playelu-top">
            <Header />
            <div className="playelu-img">
              <img src={urlConstant.image.eluLogo1} alt="" />
            </div>
            <div className="playelu-tittle">
              <h1>Play-to-Earn NFT Game</h1>
            </div>
            <form className="playelu-btn" onSubmit={handleSubmit}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="playelu-input "
                type="email"
                placeholder='Email'
                value={email}
                maxLength='50'
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
              <a className='privacy-policy' href={urlConstant.docs.privacyPolicy}>
                Privacy Policy
              </a>
              <a href='#'>&nbsp;|&nbsp;</a>
              <a href={urlConstant.docs.conditions}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}
