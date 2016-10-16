import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  currency: DS.attr('string'),
  transactions: DS.hasMany('transactions'),


  transactionAmounts: Ember.computed.mapBy('transactions', 'amount_cents').readOnly(),
  balance: Ember.computed.sum('transactionAmounts').readOnly(),

  isBalanceNegative: Ember.computed.lt('balance', 0).readOnly(),

  transactionDates: Ember.computed.mapBy('transactions', 'date').readOnly(),

  latestTransactionDate: Ember.computed.max('transactionDates').readOnly(),

  sortedTransactions: Ember.computed.sort('transactions', 'transactionSorting'),
  transactionSorting: ['date:desc', 'id:desc'],

  latestTransaction: Ember.computed('sortedTransactions', function () {
    "use strict";
    let sortedTransactions = this.get('sortedTransactions');
    return sortedTransactions === undefined || sortedTransactions.size === 0 ? undefined : sortedTransactions[0];
  }),

  lastTransactions: Ember.computed('sortedTransactions', function() {
    "use strict";
    let lastTransactions = Ember.A();
    let numberOfTransactions = 10;
    let sortedTransactions = this.get('sortedTransactions');

    if(sortedTransactions === undefined) {
      return undefined;
    }

    if(sortedTransactions.length < numberOfTransactions) {
      return sortedTransactions;
    }

    for(let i = 0; i<numberOfTransactions; i++) {
      lastTransactions.pushObject(sortedTransactions[i]);
    }
    return lastTransactions;

  }),


})
;
