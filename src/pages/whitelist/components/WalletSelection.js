import React from "react";

// import wallet from "../../../stores/wallet";
// import messageStorage from "../../../stores/messageStorage";

export default function WalletSelection(props) {
  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  const iconMetaMask    = "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp";
  // const iconCoin98   = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png';

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

  const ConnectButton = (props) => {
    const {
      wallet_name,
      icon,
      title,
    } = props;

    return (
      <div
        className="login"
      >
        <Login icon={icon} title={title} />
      </div>
    );
  };

  const renderConnectButtons = (props) => {

    return (
      <div>
        <ConnectButton
          wallet_name="metamask"
          icon={iconMetaMask}
          title="Login with MetaMask"
        />
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">Wallet Selection</span>
      {renderConnectButtons()}
    </div>
  );
}
