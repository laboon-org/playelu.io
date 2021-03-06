const wallet_support = {
  metamask: true,
  coin98: true,
  walletConnect: false,
  coinbase: false,
};
class wallet {
  static instance = new wallet();

  provider = null;
  account = null;
  wallet_name = '';

  static getInstance() {
    return this.instance;
  }
  setWallet(wallet_name) {
    if (wallet_name in wallet_support) {
      this.wallet_name = wallet_name;
    }
  }
  setAddress(address) {
    this.account = address;
  }
}

export default wallet;
