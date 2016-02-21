import Ember from 'ember';

export default Ember.Controller.extend({
  transactions: Ember.computed.alias('model.transactions'),
  accounts: Ember.computed.alias('model.bankAccounts'),
  paymentMeans: Ember.computed.alias('model.paymentMeans'),
  categories: Ember.computed.alias('model.categories'),


  from: undefined,
  to: new Date()


});
