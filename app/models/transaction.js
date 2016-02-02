import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  amount_cents: DS.attr('number'),
  currency: DS.attr('string'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  created_at: DS.attr('date', {readOnly: true}),
  updated_at: DS.attr('date', {readOnly: true}),
  type: DS.attr('string', {defaultValue: 'INCOME'}),
  payment_mean: DS.belongsTo('payment-mean'),
  bank_account: DS.belongsTo('bank-account'),
  isEditing: DS.attr('boolean', {defaultValue: false, transient: true}),
  amount: DS.attr('number', {transient: true}),


  isIncome: Ember.computed.equal('type', 'INCOME'),
  isExpense: Ember.computed.equal('type', 'EXPENSE'),

  amountChanged: Ember.observer('amount', function () {
    "use strict";
    this.set('amount_cents', parseFloat(this.get('amount')) * 100);
  })

});
