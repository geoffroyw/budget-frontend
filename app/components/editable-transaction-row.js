import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['model.isIncome:text-success', 'model.isExpense:text-danger', 'model.is_confirmed:info'],
  isEditing: false,
  model: undefined,
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
      let amount = _this.get('model').get('amount');
      if (parseFloat(amount) < 0) {
        _this.get('model').set('type', 'EXPENSE');
        _this.get('model').set('amount', -1 * amount);
      }

      _this.get('model.categories').clear();

      let selectedCategories = [];

      _this.get('selectedCategoriesName').forEach(function (selected_category) {
        console.log(selected_category.name);

        let obj = _this.get('categories').filterBy('name', selected_category.name);
        _this.get('categories').forEach(function(cat) {
          if(cat.get('name') === selected_category.name) {
            obj = cat;
          }
        });
        selectedCategories.pushObject(obj);
      });

      selectedCategories.forEach(function (category) {
        _this.get('model.categories').pushObject(category);
      });

      _this.get('model').save().then(function () {
        _this.set('isEditing', false);
      }); //TODO proper exception handling
    },

    newCategory(category_name) {
      "use strict";
      this.sendAction('createNewCategory', category_name);

      this.get('selectedCategoriesName').addObject({name: category_name});

    }


  }


});
