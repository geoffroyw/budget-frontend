import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    newTransaction() {
      "use strict";
      this.sendAction('newTransaction');
    },
    createNewCategory(category_name) {
      "use strict";
      this.sendAction('createNewCategory', category_name);
    },

    editTransaction(transaction) {
      "use strict";
      this.sendAction('editTransaction', transaction);
    },

    duplicateTransaction(transaction) {
      "use strict";
      this.sendAction('duplicateTransaction', transaction);
    }
  }
});
