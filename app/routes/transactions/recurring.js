import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    return this.store.findAll('RecurringTransaction');
  },

  afterModel() {
    "use strict";
    this.set('metaData', this.modelFor('transactions'));
  },

  setupController(controller, model) {
    "use strict";
    controller.set('model', model);
    controller.set('metaData', this.get('metaData'));
  }
});
