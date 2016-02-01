import Ember from 'ember';

export default Ember.Controller.extend({
  selectedAccount: undefined,
  isEditing: false,

  isNotEditing: Ember.computed.not('isEditing'),

  actions: {
    selectAccount(account) {
      "use strict";
      this.set('selectedAccount', account);
      this.set('isEditing', false);
    },

    newAccount() {
      "use strict";
      this.set('selectedAccount', this.store.createRecord('BankAccount'));
      this.set('isEditing', true);
    },

    save() {
      "use strict";
      //TODO proper error handling
      this.get('selectedAccount').save();
      this.set('isEditing', false);

    },

    edit() {
      "use strict";
      this.set('isEditing', true);
    },

    cancel() {
      "use strict";
      this.get('selectedAccount').rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});
