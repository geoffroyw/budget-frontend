import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  currency: DS.attr('string'),
  transactions: DS.hasMany('transactions'),


  transactionAmounts: Ember.computed.mapBy('transactions', 'amount_cents'),
  balance: Ember.computed.sum('transactionAmounts'),

  isBalanceNegative: Ember.computed.lt('balance', 0)

})
;
