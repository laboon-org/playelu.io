const wallet_support = {
  metamask: true,
  coinbase: true,
  walletConnect: true,
};
class wallet {
  static instance = new wallet();

  provider = null;
  wallet_name = '';
  account = null;

  static getInstance() {
    return this.instance;
  }
  setWallet(wallet_name) {
    if (wallet_name in wallet_support) {
      this.wallet_name = wallet_name;
    }
  }
  setAddress(address) {
    this.account=address;
  }
}

export default wallet;
