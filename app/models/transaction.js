import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  amount_cents: DS.attr('number', {defaultValue: 0}),
  currency: DS.attr('string'),
  settlement_amount_cents: DS.attr('number', {defaultValue: 0}),
  settlement_currency: DS.attr('string'),
  settlement_amount_indicative: DS.attr('boolean', {readOnly: true}),
  date: DS.attr('date'),
  description: DS.attr('string'),
  payment_mean: DS.belongsTo('payment-mean'),
  bank_account: DS.belongsTo('bank-account'),
  is_confirmed: DS.attr('boolean', {defaultValue: false}),
  categories: DS.hasMany('Category'),


  isIncome: Ember.computed.gte('amount_cents', 0),
  isExpense: Ember.computed.not('isIncome'),

  isCrossCurrency: Ember.computed('currency', 'payment_mean.currency', function () {
    "use strict";
    return this.get('currency') !== this.get('payment_mean.currency');
  }),

  isConfirmed: Ember.computed.alias('is_confirmed'),

  settlementAmountIndicative: Ember.computed.alias('settlement_amount_indicative'),

  amount: Ember.computed('amount_cents', {
    get() {
      return `${parseFloat(this.get('amount_cents')) / 100}`;
    },
    set(key, value) {
      let amount_cents = parseFloat(value * 100);
      this.set('amount_cents', amount_cents);
      return value;
    }
  }),

  settlementAmount: Ember.computed('settlement_amount_cents', {
    get() {
      return `${parseFloat(this.get('settlement_amount_cents')) / 100}`;
    },
    set(key, value) {
      let amount_cents = parseFloat(value * 100);
      this.set('settlement_amount_cents', amount_cents);
      return value;
    }
  }),

  settlementAmountCents: Ember.computed.alias('settlement_amount_cents'),
  settlementCurrency: Ember.computed.alias('settlement_currency')

});
