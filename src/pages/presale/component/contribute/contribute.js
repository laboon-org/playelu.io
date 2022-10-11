import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';

import wallet from "../../../../stores/walletStorage";
import ModalFail from '../modal/ModalFail';
import ModalSucceed from '../modal/ModalSucceed';
import messageStorage from "../../../../stores/messageStorage";

const getStatePage = () => {
  const CONFIG = messageStorage.getInstance().getMessage('config');
  const data = CONFIG['Page Setting'].data;
  const index = data.findIndex((v, i, obj) => {
    if (v['Page Name'] == 'presale') {
      return true;
    }
  });

  const pageSetting = data[index];

  return pageSetting.Toggle === 'TRUE';
};

const findBoonValue = () => {
  const CONFIG = messageStorage.getInstance().getMessage('config');
  if (CONFIG['Round Setting'] != null) {
    const data = CONFIG['Round Setting'].data;
    let boonValue = 0;
    const index = data.findIndex((v, i, obj) => {
      if (
        moment(v.Start).subtract(1, 'days').isBefore(moment()) &&
        moment(v.End).add(1, 'days').isAfter(moment())
      ) {
        return true;
      }
    });

    if (index != -1) {
      boonValue = data[index]['Sell Price'];
    }
    return parseFloat(boonValue);
  }
  return 0;
};

const findAvaxValue = () => {
  const CONFIG = messageStorage.getInstance().getMessage('config');

  if (CONFIG.Common != null) {
    const dataCommon = CONFIG.Common.data;
    let avaxValue = 0;
    const index = dataCommon.findIndex((v, i, obj) => {
      if (v.Key == 'avax_value') {
        return true;
      }
    });

    if (index != -1) {
      avaxValue = dataCommon[index].Value;
    }
    return parseFloat(avaxValue);
  }
  return 0;
};

//* init function
const calValueDeposit = (amount) => {
  const avaxValueUSD = findAvaxValue();
  const boonValueUSD = findBoonValue();
  const calAvaxAmount = (boonAmount) => {
    const USD = boonAmount * boonValueUSD;
    return USD / avaxValueUSD;
  };

  const boonAmount = parseInt(amount.split('.').join(''));
  const avaxAmount = Math.round(calAvaxAmount(boonAmount) * 1000) / 1000 + '';
  return avaxAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
export default function Contribute(props) {
  const {showLoading, data} = props;

  //* State
  const [amount, setAmount] = useState(
      (data['BOON (Amount)'] + '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
  );
  const [deposit, setDeposit] = useState(
    data['BOON (Amount)'] != null ?
      calValueDeposit(data['BOON (Amount)'] + '') :
      '',
  );
  const [infoState, setInfoState] = useState(false);
  const [infoValue, setInfoValue] = useState('');
  const [modalCommingShow, setModalCommingShow] = useState(!getStatePage());
  //* Show form contribute or message
  const [contribute, setContribute] = useState(true);
  const [stateTransaction, setStateTransaction] = useState(false);

  const setValueDeposit = (amount) => {
    setDeposit(calValueDeposit(amount));
  };

  const doTransactionInBC = async () => {
    try {
      // const Web3 = new web3(web3.givenProvider);
      // const boonToken = new web3.eth.Contract(contractAbi.ABI, contractAbi.contractAddress);
      // const senderAddress = wallet.getInstance().account;
      // const receiverAddress = '';//* get after

      // // test call
      // boonToken.methods.transfer(receiverAddress, avaxAmount)
      //     .send({ from: senderAddress }, function (err, res) {
      //         if (err) {
      //           console.log("An error occured", err);
      //           throw new Error(err);
      //         }
      //         //* if succeed
      //       console.log("Hash of the transaction: " + res);
      //     })

      return {
        isVaild: true,
      };
    } catch (err) {
      return {
        isVaild: false,
        message: err.message,
      };
    }
  };

  const failureMessage = (messageCode, message = '') => {
    switch (messageCode) {
      case 'SMALL_AMOUNT': {
        setInfoValue('Your $Boon amount is smaller than the original in WL');
        setContribute(false);
        setStateTransaction(false);
        break;
      }
      case 'NO_ADDRESS': {
        setInfoValue('Your Wallet Address isn\'t in WL');
        setContribute(false);
        setStateTransaction(false);
        break;
      }
      case 'HAD_PAID': {
        setInfoValue('You can only buy once time!');
        setContribute(false);
        setStateTransaction(false);
        break;
      }
      case 'ERROR_BC': {
        setInfoValue(message);
        setContribute(false);
        setStateTransaction(false);
        break;
      }
      default: {
        setInfoValue('Unable to identify error');
        setContribute(false);
        setStateTransaction(false);
        break;
      }
    }
  };

  const onPressContribute = async () => {
    //* Check Wallet Condition
    try {
      showLoading(true);
      const SHEET_NAME = '2.Strategy';
      const PAYMENT_METHOD = 'AVAX';
      const transaction_status = false;
      const URL = 'https://laboon.as.r.appspot.com/confirm_transaction';
      const boonValue = parseInt(amount.split('.').join(''));
      const transactionValidation = await axios
          .post(URL, {
            sheet_name: SHEET_NAME,
            address_wallet: wallet.getInstance().account,
            boon_amount: boonValue,
            payment_method: PAYMENT_METHOD,
            purchase_price: boonValue * findBoonValue(),
            transaction_status: transaction_status,
          })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            showLoading(false);
            throw err;
          });

      if (transactionValidation.status != 200) {
        //* Failure
        const messageCode = transactionValidation.message;
        failureMessage(messageCode);
        showLoading(false);
      } else {
        //* Succeed
        //* Transaction in BC
        const transaction = await doTransactionInBC();
        if (transaction.isVaild) {
          //* Succeed
          //* Confirm in google sheet
          const transactionConfirm = await axios
              .post(URL, {
                sheet_name: SHEET_NAME,
                address_wallet: wallet.getInstance().account,
                boon_amount: boonValue,
                payment_method: PAYMENT_METHOD,
                purchase_price: boonValue * findBoonValue(),
                transaction_status: true,
              })
              .then((res) => {
                return res.data;
              })
              .catch((err) => {
                showLoading(false);
                throw err;
              });

          if (transactionConfirm.status != 200) {
            const messageCode = transactionConfirm.message;
            //* Must be complete in here to confirm in google sheets
            failureMessage(messageCode);
          }
        } else {
          failureMessage('ERROR_BC', transaction.message);
        }

        //* Change state
        setContribute(false);
        setStateTransaction(true);
        showLoading(false);
      }

      // setInfoState(true)
    } catch (err) {
      console.log(err);
    }
  };
  const TransactionResult = (result) => {
    if (result) {
      return (
        <ModalSucceed
          amount={amount}
          deposit={deposit}
          forwardBack={() => {
            setContribute(true);
          }}
        />
      );
    } else {
      return (
        <ModalFail
          message={infoValue}
          forwardBack={() => {
            setContribute(true);
          }}
        />
      );
    }
  };

  return (
    <div className="contribute">
      <span className="contribute--shadow"></span>
      {contribute ? (
        <div className="contribute-frame">
          <div>
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
                  placeholder=""
                  value={wallet.getInstance().account}
                  readOnly={true}
                />
                <img
                  className="input-img"
                  src="https://media.graphassets.com/d8yVK0RpTcWjoCEL9ocu"
                  alt="Metamask icon"
                />
              </div>
            </div>
            {/* Amount */}
            <div className="contribute-sec">
              <div className="contribute-title">
                <p>Amount:</p>
                <span className="boon-quantity">$BOON</span>
              </div>
              <div className="input">
                <input
                  className="input-text"
                  type="text"
                  name="name"
                  placeholder=""
                  value={amount}
                  onChange={(e) => {
                    if (e.target.value == '') {
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
                    } // else {}
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
                <p>Deposit Estimation:</p>
                <span className="avax-quantity">AVAX</span>
              </div>
              <div className="input">
                <input
                  className="input-text"
                  type="text"
                  name="name"
                  placeholder=""
                  readOnly={true}
                  value={deposit}
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
                // onClick={async () => await onPressContribute()}
                onClick={async () => {
                  await onPressContribute();
                }}
              >
                <span>CONTRIBUTE</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        TransactionResult(stateTransaction)
      )}
    </div>
  );
}
