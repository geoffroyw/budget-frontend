import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    return this.store.createRecord('BankAccount');
  },

  actions: {
    goToAccounts() {
      "use strict";
      this.transitionTo('accounts');
    },

    goToModel() {
      "use strict";
      this.transitionTo('accounts.show', this.get('currentModel'));
    }
  }
});
