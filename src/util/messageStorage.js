class message {
  static instance = new message();
  messages = {};
  static getInstance() {
    return this.instance;
  }
  setMessage(name, message) {
    this.messages[name] = message;
  }
  getMessage(name) {
    if (name in this.messages) {
      return this.messages[name];
    } else {
      return '';
    }
  }
}
export default message;
