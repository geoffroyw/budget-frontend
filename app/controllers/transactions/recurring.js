import Ember from 'ember';

export default Ember.Controller.extend({
  showForm: false,

  actions: {
    openFormModal() {
      "use strict";
      let selectedTransaction = this.store.createRecord('RecurringTransaction');
      this.set('selectedTransaction', selectedTransaction);
      this.set('showForm', true);

    },


    createNewCategory(name) {
      "use strict";
      this.get('store').createRecord('Category', {name: name}).save();
      this.set('metaData.categories', this.store.findAll('Category'));
    },

    removeModal() {
      "use strict";
      this.set('showForm', false);
    },

    editTransaction(recurring_transaction) {
      "use strict";
      console.log("foo");
      this.set('selectedTransaction', recurring_transaction);
      this.set('showForm', true);
    }
  }
});
