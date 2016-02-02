import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isIncome:text-success', 'isExpense:text-danger'],

  isExpense: Ember.computed.not('model.isIncome'),
  isIncome: Ember.computed.not('model.isExpense'),

  actions: {
    edit(model) {
      "use strict";
      model.set('isEditing', true);
    },

    cancelEdit(model) {
      "use strict";
      model.set('isEditing', false);
      model.rollbackAttributes();
    },

    save(model) {
      "use strict";
      let amount = model.get('amount');
      if (parseFloat(amount) < 0) {
        model.set('type', 'EXPENSE');
        model.set('amount', -1 * amount);
      }
      model.save().then(function () {
        model.set('isEditing', false);
      }); //TODO proper exception handling
    }
  }


});
