import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    return Ember.RSVP.hash({
      transactions: this.store.findAll('Transaction'),
      paymentMeans: this.store.findAll('PaymentMean'),
      bankAccounts: this.store.findAll('BankAccount')
    });
  }
});
