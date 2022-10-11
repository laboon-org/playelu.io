import React, { useEffect, useState } from "react";
import {
  Spinner,
  Alert,
  Container,
} from "react-bootstrap";
import {
  useMoralis,
  useMoralisWeb3ApiCall,
  useMoralisWeb3Api,
  useMoralisQuery,
  useMoralisCloudFunction
} from "react-moralis";

// Constants
import { chain, chainId } from "../../../constant/chainNetworkConst";

// Stores
import walletStorage from "../../../stores/walletStorage";
// import messageStorage from "../../../stores/messageStorage";

const iconMetaMask = "https://media.graphassets.com/d8yVK0RpTcWjoCEL9ocu";

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
        <img className="login-icon" src={icon} alt="Login Icon" />
        <span className="white-list__login login-title">{title}</span>
      </div>
    </div>
  );
};

export default function WalletSelection(props) {
  const [logged, setLogged] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [openModel, setOpenModel] = useState(false);

  const {
    isAuthenticated,
    user,
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

  const Web3Api = useMoralisWeb3Api();

  //------ Moralis Web3 API methods for Native, ERC20 & NFT  ---------
  const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(
    Web3Api.account.getNativeBalance,
    {
      chain: chain,
    }
  );

  // const {
  //   fetch: tokenFetch,
  //   data: tokenData,
  //   error: tokenError,
  //   isLoading: tokenIsLoading,
  // } = useMoralisWeb3ApiCall(Web3Api.account.getTokenBalances, {
  //   chain: chain,
  // });

  // useEffect(() => {
  //   //call API every 5 seconds
  //   const interval = setInterval(() => {
  //     if (currentUser) {
  //       setCurrentUser(currentUser);
  //       fetch();
  //       // tokenFetch();
  //     }
  //   }, 5000);
  //   //clear the interval
  //   // console.log(currentUser, "USER");
  //   return () => clearInterval(interval);
  // }, [currentUser]);

  const _isAvalancheNetwork = (chain) => {
    if (chain !== chainId) {
      setOpenModel(true);
    } else {
      setOpenModel(false);
    }
  };

  //if chain is changed let the user know
  Moralis.onChainChanged(async function (chain) {
    console.log("chain changed", chain);
    _isAvalancheNetwork(chain);
  });

  useEffect(() => {
    if (!Moralis.isWeb3Enabled) {
      Moralis.enableWeb3();
    }
    if (isAuthenticated) {
      setLogged(true);
    }
    setCurrentUser(user);
    _isAvalancheNetwork(chain);
  }, []);

  const _connectWalletMetaMask = () => {
    if (Moralis.isWeb3Enabled && !logged) {
      let user = Moralis.User.current();
      if (!user) {
        Moralis.authenticate()
          .then(function (user) {
            setLogged(true);
            setCurrentUser(user);
            walletStorage.getInstance().account = user.get("ethAddress");
            console.log(user.get("ethAddress"));
            showWhiteList();
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
      {openModel && (
        <Alert variant="error" className="network-warning">
          Please switch to Avalanche Network
        </Alert>
      )}
      {!logged && <Container>{_renderConnectButtons()}</Container>}
      {logged && (
        <div>
          {/* <h6 className="body-right__title">
            {currentUser && (
              <div>
                <span>Welcome {currentUser.get("username")}</span>
                <br />
                <span>{currentUser.get("ethAddress")} </span>
                <br />
              </div>
            )}
          </h6> */}
          <button onClick={() => _logout()}>Logout</button>
        </div>
      )}
      {isAuthenticating && <Spinner animation="border" variant="warning" />}
      {isLoggingOut && <Spinner animation="border" variant="warning" />}
      {hasAuthError && <Alert variant="warning">{authError}</Alert>}
    </div>
  );
}
