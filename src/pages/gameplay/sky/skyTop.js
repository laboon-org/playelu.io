import urlConstant from '../../../urlConstant'
import '../../../scss/gameplay/skyScss/skyTop.scss'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function SkyTop() {
    const [showPopup, setShowPopup] = useState(false);
    const handleClosePopup = () => setShowPopup(false);
    const handleShowPopup = () => setShowPopup(true);
    const onPressPopup = () => {
        handleShowPopup()
    }
    return (
        <div className='sky-top'>
            <Modal
                size="lg"
                dialogClassName="modal-comingsoon"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={showPopup} onHide={handleClosePopup}>
                <div className='popup-frame'>
                    <div className='close-popup' onClick={() => handleClosePopup()}>
                        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/popup-comingsoon/close_popup.png' alt='' />
                    </div>
                    <div className='popup-title'>
                        <div className='popup-title__box'>
                            <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/popup-comingsoon/frame_comingsoon.webp' alt='' />
                            <div className='popup-title__text'>
                                <h1>coming up soon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className='gameplay-selection'>
                <div className='col drop'>
                    <a href='#drop'>
                        <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.drop} alt="" />
                    </a>
                </div>
                <div className='col nest'>
                    <a href='#nest'>
                        <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.nest} alt="" />
                    </a>
                </div>
                <div className='col-6 rune'>
                    <img className="gameplay__rune-img" src={urlConstant.imageGamePlay.skyTop.rune} alt="" />
                    <img className="gameplay__boonmoon-img" src={urlConstant.imageGamePlay.skyTop.boonMoon} alt="" />
                </div>
                <div className='col scout' onClick={onPressPopup}>
                    <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.scout} alt="" />
                </div>
                <div className='col metaVerse' onClick={onPressPopup}>
                    <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.metaVerse} alt="" />
                </div>
            </div>
            <div className='gameplay-logo'>
                <img className="gameplay__logo-img" src={urlConstant.image.eluLogo} alt="" />
            </div>
        </div>
    )
}
