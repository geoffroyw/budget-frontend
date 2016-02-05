import Ember from 'ember';

export default Ember.Component.extend({
  account: undefined,
  isEditing: false,

  isNotEditing: Ember.computed.not('isEditing'),

  actions: {
    save() {
      "use strict";
      //TODO proper error handling
      this.get('account').save();
      this.set('isEditing', false);

    },

    edit() {
      "use strict";
      this.set('isEditing', true);
    },

    cancel() {
      "use strict";
      this.get('account').rollbackAttributes();
      this.set('isEditing', false);
      this.sendAction('cancelAction');
    }
  }
});
