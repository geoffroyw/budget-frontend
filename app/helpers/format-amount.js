import Ember from 'ember';

export function formatAmount(params/*, hash*/) {

  let amount_cent = "" + params[0];

  if (amount_cent !== undefined) {
    if (amount_cent.length > 2) {
      amount_cent = amount_cent.substring(0, amount_cent.length - 2) + "." + amount_cent.substring(amount_cent.length - 2);
    }


    if (amount_cent.length === 2) {
      amount_cent = "0." + amount_cent;
    }

    if (amount_cent.length === 1) {
      amount_cent = "0.0" + amount_cent;
    }
  }

  return amount_cent;
}

export default Ember.Helper.helper(formatAmount);
