import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['model.isIncome:text-success', 'model.isExpense:text-danger', 'model.is_confirmed:info'],
  isEditing: false,
  model: undefined,
  categories: undefined,
  selectedCategoriesName: [],

  allCategoriesName: Ember.computed('categories', function () {
    "use strict";
    return this.get('categories').map(function (e) {
      return {name: e.get('name')};
    });
  }),

  setEditingForNewModel: Ember.observer('model.id', function () {
    "use strict";
    if (this.get('model.id') === null) {
      this.set('isEditing', true);
    }
  }).on('init'),

  actions: {
    edit() {
      "use strict";
      let categoriesName = this.get('model.categories').map(function (category) {
        return {name: category.get('name')};
      });
      this.set('selectedCategoriesName', categoriesName);

      this.set('isEditing', true);
    },

    cancelEdit() {
      "use strict";
      this.set('isEditing', false);
      this.get('model').rollbackAttributes();
    },

    save() {
      "use strict";
      let _this = this;

      let amount = this.get('model').get('amount');
      if (parseFloat(amount) < 0) {
        this.get('model').set('type', 'EXPENSE');
        this.get('model').set('amount', -1 * amount);
      }

      this.get('model.categories').clear();

      let selectedCategories = [];
      
      const flashMessages = Ember.get(this, 'flashMessages');

      this.get('selectedCategoriesName').forEach(function (selected_category) {

        let obj = _this.get('categories').filterBy('name', selected_category.name);
        _this.get('categories').forEach(function (cat) {
          if (cat.get('name') === selected_category.name) {
            obj = cat;
          }
        });
        selectedCategories.pushObject(obj);
      });

      selectedCategories.forEach(function (category) {
        _this.get('model.categories').pushObject(category);
      });


      this.get('model').save().then(function () {
        _this.set('isEditing', false);
        flashMessages.success('Transaction successfully saved!');
      }).catch(() => {
        flashMessages.danger('Error while saving transaction, please try again.');
      });

    },

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

    }


  }


});
