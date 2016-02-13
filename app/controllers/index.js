import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionForm: false,

  transactionSorting: ['date'],

  sortedContent: Ember.computed.sort('model.transactions', 'transactionSorting'),

  actions: {
    /*newTransaction() {
      "use strict";
      this.set('newTransaction', this.store.createRecord('transaction', {date: new Date()}));
    },*/

    openTransactionFormModal() {
      "use strict";
      let selectedTransaction = this.store.createRecord('transaction', {date: new Date()});
      this.set('selectedTransaction', selectedTransaction);
      this.set('showTransactionForm', true);

    },


    createNewCategory(name) {
      "use strict";
      this.get('store').createRecord('Category', {name: name}).save();
      this.set('model.categories', this.store.findAll('Category'));
    },

    removeModal() {
      "use strict";
      this.set('showTransactionForm', false);
    },

    editTransaction(transaction) {
      "use strict";
      this.set('selectedTransaction', transaction);
      this.set('showTransactionForm', true);
    }
  }
});
