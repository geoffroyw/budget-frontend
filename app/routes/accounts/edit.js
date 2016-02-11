import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    "use strict";
    return this.store.find('BankAccount', params.id);
  },

  renderTemplate() {
    "use strict";
    this.render('accounts.new');
  },

  actions: {
    goToAccounts() {
      "use strict";
      this.transitionTo('accounts.show', this.get('currentModel'));
    },

    goToModel() {
      "use strict";
      this.transitionTo('accounts.show', this.get('currentModel'));
    }
  }
});
