import Ember from 'ember';

export default Ember.Component.extend({
  currencyService: Ember.inject.service('currency'),


  title: Ember.computed('model.id', function () {
    "use strict";
    if (this.get('model.id') === null) {
      return 'Add a new transaction';
    } else {
      return 'Edit a transaction';
    }
  }),

  actions: {
    newCategory(name) {
      "use strict";
      this.sendAction('createNewCategory', name);

      let category_models_for_selected_name = this.get('categories').filterBy('name', name);
      
      this.set('model.category', category_models_for_selected_name[0]);

    },

    removeCategory(selectedCategoryName) {
      "use strict";

      this.set('selectedCategoriesName', this.get('selectedCategoriesName').filter(function (item) {
        return item.name !== selectedCategoryName;
      }));
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
        flashMessages.success('Transaction successfully saved!');
      }).catch(() => {
        flashMessages.danger('Error while saving transaction, please try again.');
      });

    }
  }
});
