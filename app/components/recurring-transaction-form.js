import Ember from 'ember';

export default Ember.Component.extend({
  currencyService: Ember.inject.service('currency'),

  frequencies: ['Daily', 'Weekly', 'Monthly', 'Yearly'],

  title: Ember.computed('model.id', function () {
    "use strict";
    if (this.get('model.id') === null) {
      return 'Add a new recurring transaction';
    } else {
      return 'Edit a recurring transaction';
    }
  }),

  actions: {
    newCategory(name) {
      "use strict";
      this.sendAction('createNewCategory', name);

      let category_models_for_selected_name = this.get('categories').filterBy('name', name);

      this.set('model.category', category_models_for_selected_name[0]);

    },

    removeModal() {
      "use strict";
      this.get('model').rollbackAttributes();
      this.sendAction('removeModal');
    },


    save() {
      "use strict";
      let _this = this;

      const flashMessages = Ember.get(this, 'flashMessages');

      this.get('model').save().then(function () {
        _this.set('isEditing', false);
        flashMessages.success('Recurring Transaction successfully saved and scheduled!');
      }).catch(() => {
        flashMessages.danger('Error while saving recurring transaction, please try again.');
      });

    }
  }
});
