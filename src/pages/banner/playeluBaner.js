import React, { useState } from "react";
import Navbar from "./navbar";
import PlayeluLink from "./playeluLink";
import BackgroundCloud from "./background";
import BackgroundStar from "./backgroundStar";
import Modal from 'react-bootstrap/Modal';
import BackgroundComet from "./bacgroundComet";
import Stars from "./backgrounDecor/Stars";
import Header from "../../components/Header";
import urlConstant from "../../urlConstant";
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

const BackgroundComet1 = <BackgroundComet />
const BackgroundStar1 = <BackgroundStar />
const BackgroundCloud1 = <BackgroundCloud />
export default function PlayeluBaner() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = React.useState("");
  const URI = "https://api.playelu.io/subemail";



  const onPress = React.useCallback(() => {
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
    handleShow()
  }, [email]);


  return (<div className='playelu-body'>
    <div className="discord">
      <img className="discord-img" src={urlConstant.image.discord} alt="" />
      <img className="mobile__discord-img" src={urlConstant.image.mobileDiscord} alt="" />
    </div>
    <div className="playelu">
      <div className='playelu-background'>
        {BackgroundCloud1}
        {BackgroundComet1}
        {BackgroundStar1}
        <div className='shooting-star'>
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
          <Stars imgUrl={urlConstant.image.star5} />
        </div>
        {/* <CloudBottom /> */}
      </div>
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
          <img src={urlConstant.image.closeModal} alt="" />
        </div>
        <img src={urlConstant.image.modal} alt="" />
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
            <div className="playelu-btn">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="playelu-input "
                type="email"
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
            </div>
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
