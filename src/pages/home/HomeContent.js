import React, {useState} from 'react';
import _ from 'lodash';

import Modal from 'react-bootstrap/Modal';
import UrlRescusive from '../../components/UrlRecursive';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const URI = 'https://api.playelu.io/subemail';
function HomeContent(props) {
  const {url_api} = props;

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onPress = React.useCallback(
      (e) => {
        fetch(URI, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email}),
        })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
        if (!validateEmail(email)) {
          setError(
              'Please enter your email address in format: yourname@example.com',
          );
        } else {
          handleShow();
          setError('');
        }
      },
      [email],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onPress();
  };

  return (
    <UrlRescusive data={props}>
      <Modal
        size="lg"
        dialogClassName="modal-thankyou"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <div className="close-modal" onClick={() => handleClose()}>
          <img
            src={_.isEmpty(url_api) ? '' : url_api.image.modal.closeModal}
            alt=""
          />
        </div>
        <div className="modal-container">
          <img src={_.isEmpty(url_api) ? '' : url_api.image.eluLogo} alt="Elu logo" />
          <h1>thank you!</h1>
          <p className="name-email">{email}</p>
        </div>
      </Modal>
      <div className="playelu-frame">
        <div className="playelu-all">
          <div className="playelu-top">
            <div className="playelu-img">
              <img
                src={_.isEmpty(url_api) ? '' : url_api.image.eluLogo1}
                alt=""
              />
            </div>
            <div className="playelu-tittle">
              <h1>#1 Free to Earn NFT Game</h1>
              <span className="playelu-tittle__sub">
                1st Multiple Inter-Connected Games (MIG)
              </span>
            </div>
            <form className="playelu-btn" onSubmit={handleSubmit}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="playelu-input"
                type=""
                value={email}
                pattern="[a-z]{1,50}"
                maxLength={40}
                required=""
                placeholder="Your Email here"
              ></input>
              <img
                className="iconEmail"
                src={_.isEmpty(url_api) ? '#' : url_api.image.iconEmail}
                alt=""
              />
              <button
                type="submit"
                className="subcribe__playelu-btn"
                onClick={onPress}
              >
                <div className="subcribe__playelu-btn--frame">
                  <img
                    className=" subcribe__playelu-btn--background"
                    src={_.isEmpty(url_api) ? '#' : url_api.image.subsBtn}
                    alt=""
                  />
                  <span className="subcribe__playelu-btn--text">Subscribe</span>
                </div>
              </button>
            </form>
            {error && <div className="error-email">{error}</div>}
          </div>
        </div>
      </div>
    </UrlRescusive>
  );
}

export default HomeContent;
