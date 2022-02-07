import React from "react";

import detectEthereumProvider from "@metamask/detect-provider";
import wallet from "../../../util/wallet";
import messageStorage from "../../../util/messageStorage";

export default function LoginProcess(props) {
  const {
    showWhiteList, //* Show white list
    showModalNotFound,
  } = props;

  //* Function
  const connectWalletWeb3 = async () => {
    const provider = await detectEthereumProvider();

    // console.log(provider);

    if (provider) {
      //* Listener
      provider.on("accountsChanged", (accounts) => {
        window.location.reload();
      });
      provider.on("chainChanged", (chainId) => {
        window.location.reload();
      });

      //* set Provider
      //* getAccount
      const account = await provider.request({ method: "eth_requestAccounts" });
      wallet.getInstance().setAddress(account[0]);
      wallet.getInstance().setWallet("metamask");

      return {
        isValid: true,
      };
    } else {
      return {
        isValid: false,
        message: "TEST",
      };
    }
  };

  const connectWallet = async (wallet_name) => {
    switch (wallet_name) {
      case "metamask": {
        if (window.ethereum && window.ethereum.isMetaMask) {
          const result = await connectWalletWeb3();
          if (result.isValid) {
            showWhiteList();
            //* Go to white list
          } else {
            //* Input message
            //* No metamask
            // [Todo : Sáng]: Hoàn thiện phần set message cho 2 connector còn lại
            messageStorage
              .getInstance()
              .setMessage("NotFoundModal", "metamask");
            showModalNotFound();
          }
        } else {
          messageStorage.getInstance().setMessage("NotFoundModal", "metamask");
          showModalNotFound();
        }
        break;
      }
      case "coin98": {
        if (window.coin98 && window.ethereum && window.ethereum?.isCoin98) {
          const result = await connectWalletWeb3();
          if (result.isValid) {
            showWhiteList();
            //* Go to white list
          } else {
            //* Input message
            //* No Coin 98
            messageStorage.getInstance().setMessage("NotFoundModal", "coin98");
            showModalNotFound();
          }
        } else {
          messageStorage.getInstance().setMessage("NotFoundModal", "coin98");
          showModalNotFound();
        }

        break;
      }
      default: {
        break;
      }
    }
  };

  //* Component
  const Login = (props) => {
    const { icon, title } = props;
    return (
      <div className="login-frame">
        <img className="login-icon" src={icon} alt="" />
        <span className="white-list__login login-title">{title}</span>
      </div>
    );
  };

  const Web3Connector = (props) => {
    const { wallet_name, icon, title } = props;
    return (
      <div
        className="login"
        onClick={async () => {
          await connectWallet(wallet_name);
        }}
      >
        <Login icon={icon} title={title} />
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">WALLET SELECTION</span>
      <Web3Connector
        wallet_name="metamask"
        icon="https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp"
        title="Login with MetaMask"
      />
      <Web3Connector
        wallet_name="coin98"
        icon="https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png"
        title="Login with Coin98"
      />
    </div>
  );
}
