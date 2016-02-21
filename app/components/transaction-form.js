import Ember from 'ember';

export default Ember.Component.extend({
  selectedCategoriesName: [],
  currencyService: Ember.inject.service('currency'),

  setSelectedCategories: Ember.observer('model.categories', function () {
    "use strict";
    let selectedCategories = this.get('model.categories').map(function (category) {
      return {name: category.get('name')};
    });

    this.set('selectedCategoriesName', selectedCategories);
  }).on('init'),


  title: Ember.computed('model.id', function () {
    "use strict";
    if (this.get('model.id') === null) {
      return 'Add a new transaction';
    } else {
      return 'Edit a transaction';
    }
  }),

  allCategoriesName: Ember.computed('categories', function () {
    "use strict";
    if (this.get('categories') === undefined) {
      return;
    }
    return this.get('categories').map(function (e) {
      return {name: e.get('name')};
    });
  }),

  actions: {
    newCategory(category_name) {
      "use strict";
      this.sendAction('createNewCategory', category_name);

      this.get('selectedCategoriesName').addObject({name: category_name});

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

      let selectedCategories = [];

      const flashMessages = Ember.get(this, 'flashMessages');

      this.get('selectedCategoriesName').forEach(function (selected_category) {
        let category_models_for_selected_name = _this.get('categories').filterBy('name', selected_category.name);
        selectedCategories.pushObject(category_models_for_selected_name[0]);
      });

      this.get('model.categories').clear();

      selectedCategories.forEach(function (category) {
        _this.get('model.categories').pushObject(category);
      });


      this.get('model').save().then(function () {
        _this.set('isEditing', false);
        flashMessages.success('Transaction successfully saved!');
      }).catch(() => {
        flashMessages.danger('Error while saving transaction, please try again.');
      });

    }
  }
});
