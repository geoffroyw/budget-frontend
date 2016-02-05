import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    newTransaction() {
      "use strict";
      this.sendAction('newTransaction');
    }
  }
});
