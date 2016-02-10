import Ember from 'ember';

export default Ember.Component.extend({
  account: undefined,

  actions: {
    save() {
      "use strict";
      const flashMessages = Ember.get(this, 'flashMessages');

      let _this = this;

      let account = this.get('account');
      account.save().then(() => {
        flashMessages.success('Successfully saved!');
        _this.sendAction('onSaveSuccess');
      }).catch(() => {
        flashMessages.danger('Error while saving the account. Please try again');
      });
    },

    edit() {
      "use strict";
    },

    cancel() {
      "use strict";
      this.get('account').rollbackAttributes();
      this.sendAction('cancelAction');
    }
  }
});
