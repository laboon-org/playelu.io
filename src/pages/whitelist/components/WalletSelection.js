import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useMoralis } from "react-moralis";

// import wallet from "../../../stores/wallet";
// import messageStorage from "../../../stores/messageStorage";

const iconMetaMask = "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp";

// enum AuthenticationState {
//   UNDEFINED = "undefined",
//   UNAUTHENTICATED = "unauthenticated",
//   AUTHENTICATED = "authenticated",
//   AUTHENTICATING = "authenticating",
//   LOGGING_OUT = "logging_out",
//   ERROR = "error",
// }

function ConnectButton(props) {
  const { wallet_name, icon, title, onClick } = props;

  return (
    <div className="login" onClick={onClick}>
      <div className="login-frame">
        <img className="login-icon" src={icon} alt="" />
        <span className="white-list__login login-title">{title}</span>
      </div>
    </div>
  );
};

export default function WalletSelection(props) {
  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const {
    isAuthenticated,
    user,
    logout,
    chainId,
    Moralis,
    isAuthenticating,
    isLoggingOut,
    hasAuthError,
    authError,
  } = useMoralis();

  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  useEffect(() => {
    if (!Moralis.isWeb3Enabled) {
      Moralis.enableWeb3();
    }
    if (isAuthenticated) {
      setLogged(true);
    }
    setCurrentUser(user);
  }, []);

  const _connectWalletMetaMask = () => {
    if (Moralis.isWeb3Enabled && !logged) {
      let user = Moralis.User.current();
      if (!user) {
        Moralis.authenticate()
          .then(function (user) {
            setLogged(true);
            setCurrentUser(user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const _logout = () => {
    if (Moralis.isWeb3Enabled && logged) {
      Moralis.User.logOut().then(function () {
        setLogged(false);
        console.log("the user is logged out");
      });
    }
  };

  const _renderConnectButtons = (props) => {
    return (
      <div>
        <ConnectButton
          wallet_name="metamask"
          icon={iconMetaMask}
          title="Login with MetaMask"
          onClick={() => _connectWalletMetaMask()}
        />
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">Wallet Selection</span>
      {!logged && <div>{_renderConnectButtons()}</div>}
      {logged && (
        <div>
          <h6 className="body-right__title">
            {currentUser && (
              <div>
                <span>Welcome {currentUser.get("username")}</span>
                <br />
                <span>{currentUser.get("ethAddress")} </span>
                <br />
                {/* <span>{chainId && { chainId }}</span> */}
                <br />
              </div>
            )}
          </h6>
          <button onClick={() => _logout()}>Logout</button>
        </div>
      )}
      {isAuthenticating && <Spinner animation="border" variant="warning" />}
      {isLoggingOut && <Spinner animation="border" variant="warning" />}
      {hasAuthError && <Alert variant="warning">{authError}</Alert>}
    </div>
  );
}
