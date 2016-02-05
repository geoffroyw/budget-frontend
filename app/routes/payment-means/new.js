import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    return this.store.createRecord('PaymentMean');
  },

  actions: {
    goToAccounts() {
      "use strict";
      this.transitionTo('payment-means');
    }
  }
});
