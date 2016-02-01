import Ember from 'ember';

export default Ember.Controller.extend({
  selectedMean: undefined,
  isEditing: false,

  isNotEditing: Ember.computed.not('isEditing'),

  actions: {
    selectMean(mean) {
      "use strict";
      this.set('selectedMean', mean);
      this.set('isEditing', false);
    },

    newPaymentMean() {
      "use strict";
      this.set('selectedMean', this.store.createRecord('PaymentMean'));
      this.set('isEditing', true);
    },

    save() {
      "use strict";
      //TODO proper error handling
      this.get('selectedMean').save();
      this.set('isEditing', false);

    },

    edit() {
      "use strict";
      this.set('isEditing', true);
    },

    cancel() {
      "use strict";
      this.get('selectedMean').rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});
