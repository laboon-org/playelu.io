import React, {useState} from 'react';

import { calValueDeposit, findAvaxValue, findBoonValue } from './../../../utilities/calcUtil';
import { getRefCode } from './../../../stores/localStorage';

// import {
//   getStatePage,
//   getConfigRoundData,
// } from "./../../../utilities/configUtil";

import EluInput from 'src/components/field/EluInput';

import restApi from "../../../api/rest/RestApi.js";

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

  const walletAccount = wallet.getInstance().account === null ? "0x..." : wallet.getInstance().account;

  //* Function callback
  const setValueDeposit = (amount) => {
    setDeposit(calValueDeposit(amount));
  };

  const _loadDataCheckWhiteList = async () => {

    const checkWallet = await restApi
      .post("/check_wallet_wl", {
        wallet_address: wallet.getInstance().account,
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
        address_wallet: wallet.getInstance().account,
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
              <EluInput
                label={"Wallet Address: "}
                symbol={"Metamask"}
                value={walletAccount}
                placeholder={"0x..."}
                icon={iconMetaMask}
                alt={"Icon Metamask"}
                onChange={(e) => setValueDeposit(e.target.value)}
              />
              <EluInput
                label={"Contribution Amount: "}
                symbol={"$BOON"}
                value={amount}
                placeholder={"0.00"}
                icon={iconBoon}
                alt={"Icon Avax"}
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
                symbolStyle={"boon-quantity"}
              />
              <EluInput
                label={"Preparing Amount: "}
                symbol={"AVAX"}
                value={walletAccount}
                placeholder={"0.00"}
                icon={iconAvax}
                alt={"Icon Avax"}
                onChange={(e) => setValueDeposit(e.target.value)}
                inputStyle={{
                  color: "#B6B6B6",
                }}
                symbolStyle={"avax-quantity"}
              />
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
