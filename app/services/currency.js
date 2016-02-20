import Ember from 'ember';

export default Ember.Service.extend({
  currencies: null,

  init() {
    "use strict";
    this._super(...arguments);
    this.set('currencies', [
      "EUR",
      "USD",
      "JPY",
      "BGN",
      "CZK",
      "DKK",
      "GBP",
      "HUF",
      "PLN",
      "RON",
      "SEK",
      "CHF",
      "NOK",
      "HRK",
      "RUB",
      "TRY",
      "AUD",
      "BRL",
      "CAD",
      "CNY",
      "HKD",
      "IDR",
      "ILS",
      "INR",
      "KRW",
      "MXN",
      "MYR",
      "NZD",
      "PHP",
      "SGD",
      "THB",
      "ZAR"
    ]);
  },

  getCurrencies() {
    "use strict";
    return this.get('currencies');
  }

});
