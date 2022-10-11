import React, {useState} from 'react';

// Utils
import { calValueDeposit, findAvaxValue, findBoonValue } from './../../../utilities/calcUtil';
// import {
//   getStatePage,
//   getConfigRoundData,
// } from "./../../../utilities/configUtil";

// Components
import EluInput from 'src/components/field/EluInput';
import ModalSucceedWhiteList from "./modal/ModalSucceed_whiteList";

// Api
import restApi from "../../../api/rest/RestApi.js";

// Stores
import { getRefCode } from './../../../stores/localStorage';
import walletStorage from "../../../stores/walletStorage";

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

  const walletAccount = walletStorage.getInstance().account === null ? "0x..." : walletStorage.getInstance().account;

  //* Function callback
  const setValueDeposit = (amount) => {
    setDeposit(calValueDeposit(amount));
  };

  const _loadDataCheckWhiteList = async () => {

    const checkWallet = await restApi
      .post("/check_wallet_wl", {
        wallet_address: walletAccount,
      })
      .then((response) => response.data);

    if (checkWallet.status === 200) {
      setMessageState("ALREADY_SIGNED");
      setModalSucceedShow(true);
      return;
    }
  }

  const _loadDataWhiteList = async () => {
    const boonValue = parseInt(amount.split(".").join(""));

    let id = getRefCode();
    if (id === null || id === undefined) {
      id = -1;
    }

    const callRegister = await restApi
      .post("/whitelist", {
        address_wallet: walletAccount,
        boon_amount: boonValue,
        [id === -1 ? null : "ref_code"]: id,
      })
      .then((response) => response.data);

    if (callRegister.status === 200) {
      setMessageState("SUCCEED");
      setModalSucceedShow(true);
    }
  }

  const register = async () => {
    if (!window.confirm('Are you sure about your choice?')) {
      return;
    }

    _loadDataCheckWhiteList();
    _loadDataWhiteList();
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
              {/* Wallet */}
              <div className="contribute-sec">
                <div className="contribute-title">
                  <p>Wallet Address:</p>
                  <span className="wallet-name">MetaMask</span>
                </div>
                <div className="input">
                  <input
                    className="input-text"
                    type="text"
                    name="name"
                    value={wallet.getInstance().account}
                    placeholder=""
                  />
                  <img
                    className="input-img"
                    src="https://media.graphassets.com/d8yVK0RpTcWjoCEL9ocu"
                    alt="Metamask Icon"
                  />
                </div>
              </div>
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
                      if (e.target.value === '') {
                        setAmount('');
                        setDeposit('');
                      }
                      const reg = new RegExp('^[0-9]+$');
                      if (reg.test(e.target.value.split('.').join(''))) {
                        const amount = e.target.value
                            .split('.')
                            .join('')
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                        setAmount(amount);
                        setValueDeposit(amount);
                      }
                    }}
                  />
                  <img
                    className="input-img"
                    src="https://media.graphassets.com/sO8XkAWbQcOJ3kAFkG6B"
                    alt="Boon Icon"
                  />
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
                      color: '#B6B6B6',
                    }}
                    name="name"
                    placeholder="0.00"
                    readOnly={true}
                  />
                  <img
                    className="input-img"
                    src="https://media.graphassets.com/pqTA20kQ6C7d3vIUGNbX"
                    alt="Avax Icon"
                  />
                </div>
              </div>
              <div className="contribute-footer">
                <div
                  className="contribute-btn"
                  onClick={async () => {
                    await register();
                  }}
                >
                  <span>Register</span>
                </div>
              </div>
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
