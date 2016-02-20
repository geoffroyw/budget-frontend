import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    "use strict";
    return Ember.RSVP.hash({
      transactions: this.store.findAll('Transaction'),
      paymentMeans: this.store.findAll('PaymentMean'),
      bankAccounts: this.store.findAll('BankAccount'),
      categories: this.store.findAll('Category')
    });
  }
});
