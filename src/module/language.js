class language {
  defaultLanguage = 'EN';
  chooseLanguage = '';
  static instance = new language();
  static getIn() {
    return this.instance;
  }
  setLang(lang) {
    switch (lang) {
      case 'EN': {
        this.chooseLanguage = lang;
        break;
      }
      default: {
        break;
      }
    }
  }
  getLang() {
    return this.chooseLanguage === '' ? this.defaultLanguage : this.chooseLanguage;
  }
}
export default language;
