import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';


export default function Menu() {
    const [showComingSoon, setShowComingSoon] = useState(false);
    const handleCloseComingSoon = () => setShowComingSoon(false);
    const handleShowComingSoon = () => setShowComingSoon(true);
    const onPressMenu = () => {
        handleShowComingSoon()
      }
    return (
        <div className='playelu-menu'>
            <Modal
                size="lg"
                dialogClassName="modal-comingsoon"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={showComingSoon} onHide={handleCloseComingSoon}>
                <div className='close-modal' onClick={() => handleCloseComingSoon()}>
                <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/closeModal.png' alt="" />
                </div>
                <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/modal.png' alt="" />

            </Modal>

            <div className='menu'>
                <div className='playelu__menu-element'>
                <a href="">
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/playeluHeader2.png' alt="" />
                    <h4>ROADMAP</h4>
                </a>
                </div>

                <div className='playelu__menu-element' onClick={onPressMenu}>
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/playeluHeader2.png' alt="" />
                    <h4>TOKENOMIC</h4>
                </div>

                <div className='playelu__menu-element' onClick={onPressMenu}>
                </div>

                <div className='playelu__menu-element' onClick={onPressMenu}>
                <a href="">
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/playeluHeader2.png' alt="" />
                    <h4 style={{ color: '#fabb1a' }}>GAMEPLAY</h4>
                </a>
                </div>

                <div className='playelu__menu-element' onClick={onPressMenu}>
                    <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/playeluHeader2.png' alt="" />
                    <h4>LITEPAPER</h4>
                </div>
            </div>
        </div>
        
    )
}
