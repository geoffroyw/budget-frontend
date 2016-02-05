import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newAccount() {
      "use strict";
      this.set('selectedAccount', this.store.createRecord('BankAccount'));
      this.set('isEditing', true);
    }
  }
});
