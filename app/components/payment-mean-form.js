import Ember from 'ember';

export default Ember.Component.extend({
  'payment-mean': undefined,
  currencyService: Ember.inject.service('currency'),
  actions: {
    save() {
      "use strict";
      const flashMessages = Ember.get(this, 'flashMessages');

      let paymentMean = this.get('payment-mean');
      let _this = this;

      paymentMean.save().then(() => {
        flashMessages.success('Successfully saved!');
        _this.sendAction('onSaveSuccess');
      }).catch(() => {
        flashMessages.danger('Error while saving the payment mean');
      });

    },

    edit() {
      "use strict";
    },

    cancel() {
      "use strict";
      this.get('payment-mean').rollbackAttributes();
      this.sendAction('cancelAction');
    }
  }
});
