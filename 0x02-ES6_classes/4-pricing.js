// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(valamount) {
    this._amount = valamount;
  }

  get amount() {
    return this._amount;
  }

  set currency(valcurrency) {
    this._currency = valcurrency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
