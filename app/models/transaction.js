import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  amount_cents: DS.attr('number'),
  currency: DS.attr('string'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  created_at: DS.attr('date', {readOnly: true}),
  updated_at: DS.attr('date', {readOnly: true}),
  type: DS.attr('string'),
  payment_mean: DS.belongsTo('payment-mean'),


  is_income: Ember.computed.equal('type', 'INCOME'),
  is_expense: Ember.computed.equal('type', 'EXPENSE')

});
