import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    "use strict";
    return this.store.find('PaymentMean', params.id);
  },

  renderTemplate() {
    "use strict";
    this.render('payment-means.new');
  },

  actions: {
    goToAccounts() {
      "use strict";
      this.transitionTo('payment-means.show', this.get('currentModel'));
    },

    goToModel() {
      "use strict";
      this.transitionTo('payment-means.show', this.get('currentModel'));
    }
  }
});
