import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    "use strict";
    return this.store.find('PaymentMean', params.id);
  }
});
