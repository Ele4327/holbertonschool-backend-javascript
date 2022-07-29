export default class Currency {

  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(valcode) {
    this._code = valcode;
  }

  get name() {
    return this._name;
  }

  set name(valname) {
    this._name = valname;
  }

  displayFullCurrency() {
    return `${this.name}(${this.code})`;
  }
}
