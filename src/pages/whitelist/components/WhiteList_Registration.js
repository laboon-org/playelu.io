import React, {useState} from 'react';

import { calValueDeposit, findAvaxValue, findBoonValue } from './../../../utilities/calcUtil';

import { getRefCode } from './../../../stores/localStorage';

// import {
//   getStatePage,
//   getConfigRoundData,
// } from "./../../../utilities/configUtil";
import EluInput from 'src/components/field/EluInput';

import axios from 'axios';

import ModalSucceedWhiteList from './modal/ModalSucceed_whiteList';

import wallet from '../../../stores/wallet';

const iconMetaMask = "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp";
const iconBoon = "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp";
const iconAvax = "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/avax1-icon.webp";

export default function WhiteList_Registration() {
  // const [amount, setAmount] = useState(''.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
  const [amount, setAmount] = useState('');
  const [deposit, setDeposit] = useState('');
  const [modalSucceedShow, setModalSucceedShow] = useState(false);
  // const [modalCommingShow, setModalCommingShow] = useState(!getStatePage());

  const [messageState, setMessageState] = useState(
    'Thanks you! for register the Whitelist.',
  );

  //* Function callback
  const setValueDeposit = (amount) => {
    setDeposit(calValueDeposit(amount));
  };

  const register = async () => {
    if (!window.confirm('Are you sure about your choice?')) {
      return;
    }

    const checkWallet = await axios
      .post('https://laboon.as.r.appspot.com/check_wallet_wl', {
        wallet_address: wallet.getInstance().account,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });

    // console.log(checkWallet);
    if (checkWallet.status === 200) {
      setMessageState('ALREADY_SIGNED');
      setModalSucceedShow(true);
      return;
    }

    const boonValue = parseInt(amount.split('.').join(''));

    let id = getRefCode();
    if (id === null || id === undefined) {
      id = -1;
    }

    try {
      const URL = 'https://laboon.as.r.appspot.com/whitelist';
      const callRegister = await axios
        .post(URL, {
          address_wallet: wallet.getInstance().account,
          boon_amount: boonValue,
          [id === -1 ? null : 'ref_code']: id,
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });

      if (callRegister.status === 200) {
        setMessageState('SUCCEED');
        setModalSucceedShow(true);
      } else {
        //* Never error
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {!modalSucceedShow ? (
        <>
          <div className="white-list__title">
            <span>White List: Registration</span>
            <div className="white-list__subtitle">
              <span>Round:</span>
              <span className="white-list__strategy">
                {" "}
                {/* {getConfigRoundData()["Round Name"]} ({findBoonValue()}$) */}
              </span>
            </div>
          </div>

          <div className="contribute">
            <span className="contribute--shadow"></span>
            <div className="contribute-frame">
              <EluInput
                label={"Wallet Address: "}
                symbol={"Metamask"}
                value={wallet.getInstance().account}
                placeholder={"0x..."}
                icon={iconMetaMask}
                alt={"Icon Metamask"}
              />
              {/* Amount */}
              <div className="contribute-sec">
                <div className="contribute-title">
                  <p>Contribution Amount</p>
                  <span className="boon-quantity">$BOON</span>
                </div>
                <div className="input">
                  <input
                    className="input-text boon-quantity__input"
                    type="text"
                    name="name"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => {
                      // if (e.target.value === "") {
                      //   setAmount("");
                      //   setDeposit("");
                      // }
                      // const reg = new RegExp("^[0-9]+$");
                      // if (reg.test(e.target.value.split(".").join(""))) {
                      //   const amount = e.target.value
                      //     .split(".")
                      //     .join("")
                      //     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                      //   setAmount(amount);
                      //   setValueDeposit(amount);
                      // }
                    }}
                  />
                  <img className="input-img" src={iconBoon} alt="Boon Icon" />
                </div>
              </div>
              {/* Avax */}
              <div className="contribute-sec">
                <div className="contribute-title">
                  <p>Preparing Amount</p>
                  <span className="avax-quantity">AVAX</span>
                </div>
                <div className="input">
                  <input
                    value={deposit}
                    className="input-text"
                    style={{
                      color: "#B6B6B6",
                    }}
                    name="name"
                    placeholder="0.00"
                    readOnly={true}
                  />
                  <img className="input-img" src={iconAvax} alt="Avax Icon" />
                </div>
              </div>
              <div className="contribute-footer">
                <div
                  className="contribute-btn"
                  // onClick={async () => await onPressContribute()}
                  onClick={async () => {
                    await register();
                  }}
                >
                  <span>Register</span>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          {window.localStorage.getItem("id") === undefined ||
          window.localStorage.getItem("id") === null ? (
            <></>
          ) : (
            <span className="white-list__code">
              *Code: {window.localStorage.getItem("id")}
            </span>
          )}
        </>
      ) : (
        <ModalSucceedWhiteList type={messageState} />
      )}
    </>
  );
}
