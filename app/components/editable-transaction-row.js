import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

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
      model.save().then(function () {
        model.set('isEditing', false);
      }); //TODO proper exception handling
    }
  }


});
