import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  amount_cents: DS.attr('number', {defaultValue: 0}),
  currency: DS.attr('string'),
  description: DS.attr('string'),
  recurring_type: DS.attr('string'),
  payment_mean: DS.belongsTo('payment-mean'),
  bank_account: DS.belongsTo('bank-account'),
  is_active: DS.attr('boolean', {defaultValue: true}),
  last_run_on: DS.attr('date'),
  category: DS.belongsTo('Category'),

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

  isActive: Ember.computed.alias('is_active')

});
