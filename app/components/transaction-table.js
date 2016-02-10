import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    newTransaction() {
      "use strict";
      this.sendAction('newTransaction');
    },
    createNewCategory(category_name) {
      "use strict";
      console.log('foo');
      this.sendAction('createNewCategory', category_name);
    }
  }
});
