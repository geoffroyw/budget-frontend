import Ember from 'ember';

export default Ember.Controller.extend({
  sortingKey: ['date'],
  sortedTransactions: Ember.computed.sort('model.transactions', 'sortingKey'),

  actions: {
    sort(key) {
      "use strict";
      this.set('sortingKey', [key]);
    }
  }
});
