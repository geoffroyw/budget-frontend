import Ember from 'ember';

/* global accounting */

export function formatAmount(params/*, hash*/) {

  let amount_cent = params[0];

  let currency = params[1] === undefined ? "EUR" : params[1];

  let decimal_amount = amount_cent / 100;

  return accounting.formatMoney(decimal_amount, {"symbol": currency, format: "%v %s"});

}

export default Ember.Helper.helper(formatAmount);
