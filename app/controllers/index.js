import Ember from 'ember';

export default Ember.Controller.extend({
  newTransaction: undefined,


  actions: {
    newTransaction() {
      "use strict";
      this.set('newTransaction', this.store.createRecord('transaction', {isEditing: true, date: new Date()}));
    }
  }
});
