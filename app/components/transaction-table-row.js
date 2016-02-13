import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isNewTransaction:hidden', 'model.isIncome:text-success', 'model.isExpense:text-danger', 'model.is_confirmed:info'],
  model: undefined,

  isNewTransaction: Ember.computed.equal('model.id', null),

  saveTransactionOnConfirmation: Ember.observer('model.is_confirmed', function () {
    "use strict";
    this.get('model').save();
  }),

  actions: {
    edit() {
      "use strict";
      this.sendAction('editTransaction', this.get('model'));
    }
  }


});
