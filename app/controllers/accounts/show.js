import Ember from 'ember';

export default Ember.Controller.extend({

  title: Ember.computed('model.name', 'model.currency', function () {
    "use strict";
    return this.get('model.name') + ' (Account in ' + this.get('model.currency') + ')';
  }),

  actions: {


    edit() {
      "use strict";
      this.transitionToRoute('accounts.edit', this.get('model'));
    }
  }
});
