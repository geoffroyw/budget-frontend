import Ember from 'ember';

export default Ember.Controller.extend({
  newTransaction: undefined,

  transactionSorting: ['date'],

  sortedContent: Ember.computed.sort('model.transactions', 'transactionSorting'),

  actions: {
    newTransaction() {
      "use strict";
      this.set('newTransaction', this.store.createRecord('transaction', {date: new Date()}));
    },

    createNewCategory(name) {
      "use strict";
      this.get('store').createRecord('Category', {name: name}).save();
      this.set('model.categories', this.store.findAll('Category'));
    }
  }
});
