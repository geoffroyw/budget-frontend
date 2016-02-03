import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  amount_cents: DS.attr('number', {defaultValue: 0}),
  currency: DS.attr('string'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  created_at: DS.attr('date', {readOnly: true}),
  updated_at: DS.attr('date', {readOnly: true}),
  type: DS.attr('string', {defaultValue: 'INCOME'}),
  payment_mean: DS.belongsTo('payment-mean'),
  bank_account: DS.belongsTo('bank-account'),
  is_confirmed: DS.attr('boolean', {defaultValue: false}),
  categories: DS.hasMany('Category'),


  isIncome: Ember.computed.equal('type', 'INCOME'),
  isExpense: Ember.computed.equal('type', 'EXPENSE'),

  amount: Ember.computed('amount_cents', {
    get() {
      return `${parseFloat(this.get('amount_cents')) / 100}`;
    },
    set(key, value) {
      let amount_cents = parseFloat(value * 100);
      this.set('amount_cents', amount_cents);
      return value;
    }
  })

});
