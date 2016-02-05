import Ember from 'ember';

export default Ember.Component.extend({
  'payment-mean': undefined,
  isEditing: false,

  isNotEditing: Ember.computed.not('isEditing'),

  actions: {
    save() {
      "use strict";
      //TODO proper error handling
      this.get('payment-mean').save();
      this.set('isEditing', false);

    },

    edit() {
      "use strict";
      this.set('isEditing', true);
    },

    cancel() {
      "use strict";
      this.get('payment-mean').rollbackAttributes();
      this.set('isEditing', false);
      this.sendAction('cancelAction');
    }
  }
});
